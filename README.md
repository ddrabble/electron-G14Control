<!-- @format -->

# G14Control Windows Desktop App

Pre-alpha sample styling:

[![](https://img.youtube.com/vi/4RbYqslijug/0.jpg)](http://www.youtube.com/watch?v=4RbYqslijug "Click to play on Youtube.com")

## Prerequisites

The `/electron` directory requires a `.env` file with two entries for the executables under `electron/atrofac-cli/` and `electron/ryzenadj/`. It should be structured as follows:

**There are currently other requirements, but not many people helping, so I'm going to update this list later.**
```
# Remove carrot braces

ATRO_LOC=<C:/path/to/atrofac-cli.exe>
RADJ_LOC=<C:/path/to/ryzenadj.exe>
CONFIG_LOC=<C:/path/to/electron/src/config.json>
SCREEN_REF_LOC=<C:/path/to/ChangeScreenResolution.exe>
RESTART_GPU_LOC=<C:/path/to/RestartGPU.exe>
```

## Dev Startup

> Requires at least node v14.8.0 (or at least that is what I am using during development)

There are two node packages, one in /electron, for the electron app, and one in the root directory, for the ReactJS UI.

In both, run `npm install` from your terminal of choice.

After installing, use two terminal windows, one in the root directory and one in /electron.

- In root terminal: `npm start`
- In /electron terminal: `npm run watch`

This should start a broken webpage, since it requires certain Electron functionality such as `window.IpcRenderer` for communication between the Electron backend and ReactJS frontend. The /electron terminal process will initialize as a functional Electron windowed application.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### What Needs To Be Built...

This is just a starting list. I'm sure there is much more to do.

- ~~Functionality for the electron tray icon similar to the original in G14ControlR3, but initially without G14Control preset plans.~~
- ~~Main window styling and suggestions.~~
- ~~Allow user to choose temperature polling time. \*_In progess_\*
- ~~Improved code commenting.~~
- ~~FanCurve page front end logic -- the ipcRenderer listener functions under /electron are already built.~~
  - ~~Atrofac command building.~~
  - ~~Integrating interactive draggable graph nodes on front end for building fan curve.~~
  - ~~Persistent storage of commonly used fan curves that can be saved / edited / loaded from a configuration file.~~
  - ~~Command validation.~~
- ~~Persistent storage for configuration and runtime events.~~
  - ~~config.json file for configuration loaded into electron process & sent to react renderer process.~~
  - ~~Saving / Editing / Adding configurations during runtime. ~~
  - ~~Give all components the ability to modify redux as necessary.~~
- ~~Ability for users to create new, remove, edit configuration options using the implemented redux store. (Fan curve profiles / atrofac profiles / loop speeds /armory crate plans~~)
- ~~Status page design and relevent data to show.~~
  - ~~Collect data from WMI & Windows PerformanceCounters such as BIOS version, ram, names of hardware vendors, important software versions, etc...~~
- Add settings page for more options such as "exit on window close" vs "run as icon app on window close", etc.
- Header main page ~~custom exit and minimize buttons~~, as well as possible dropdown menu (could use this as a 'settings page')
- Low level hardware monitoring \*_In progress_\*
 - Bug fixing. \*_In progress_\*
  ...

- Eventually add G14Control plans configuration.

## License

[MIT](https://github.com/aredden/electron-G14Control/blob/main/LICENSE)

## Support

If you wish to help me, or you have the beta you can check out the discord that I primarily use to give out the beta / chat about development.

Discord: https://discord.gg/482ST4M6Ag

**I'm currently not actively working, so donations are greatly appreciated!** 

Donate: https://www.paypal.com/pools/c/8uiaar8Sl9

## Major Contributors

https://github.com/thesacredmoocow/g14control-r2 (g14control's previous maintainer)

https://github.com/FlyGoat/RyzenAdj (adjusting tdp)

https://github.com/cronosun/atrofac (fan profiles)
- advanced cli configuration [documentation](https://github.com/cronosun/atrofac/blob/master/ADVANCED.md).

https://github.com/sbski (help with understanding ryzenadj & cpu performance limits control)


## References

https://github.com/zllovesuki/reverse_engineering/blob/master/G14 (hardware control via wmi)
