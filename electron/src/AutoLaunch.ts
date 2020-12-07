/** @format */

import { app } from 'electron';
import getLogger from './Logger';
import Shell from 'node-powershell';
import path from 'path';
import fs from 'fs';

const LOGGER = getLogger('AutoLaunch');

const startupCommand = (enabled: boolean) =>
	enabled
		? `$Action = New-ScheduledTaskAction -Execute ${process.execPath}
	$Trigger = New-ScheduledTaskTrigger -AtLogOn
	$Settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries
	Register-ScheduledTask G14ControlSkipUAC -Action $Action -Trigger $Trigger -Settings $Settings -RunLevel Highest`
		: `Unregister-ScheduledTask -TaskName G14ControlSkipUAC  -Confirm:$false`;

const ps = new Shell({
	noProfile: true,
	executionPolicy: 'bypass',
	inputEncoding: 'utf-8',
	outputEncoding: 'utf-8',
});

const removeOldStartupFile = async () => {
	const userPath = app.getPath('appData');
	let filePath = path.join(
		userPath,
		'Microsoft\\Windows\\Start Menu\\Programs\\Startup\\G14ControlV2.bat'
	);
	fs.unlink(filePath, function (err) {
		if (err) {
			LOGGER.info('Old Startup file not found');
		} else {
			LOGGER.info('Old startup file deleted.');
		}
	});
};

export const setAutoLaunch = async (enabled: boolean) => {
	return new Promise((resolve) => {
		removeOldStartupFile();
		ps.addCommand(startupCommand(enabled));
		ps.invoke()
			.then((response: string) => {
				if (
					(enabled && response.includes('Ready')) ||
					(!enabled && response.length === 0)
				) {
					LOGGER.info('Startup modification completed.');
					resolve(true);
				} else {
					LOGGER.error(`Error creating startup Task : ${response}`);
					resolve(false);
				}
			})
			.catch((error) => {
				LOGGER.error(error);
				resolve(false);
			});
	});
};
