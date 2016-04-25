# win-uac

Should Enable / Disable UAC on windows.

If you are windows admin guru, feel free to comment.

# Api

## Install

```sh
npm i @mh-cbon/win-uac --save
```

## Usage

```js
var uac = require('@mh-cbon/win-uac');

uac.enable(function (err) {
  err && console.error('Nop it did not work')
})
uac.disable(function (err) {
  err && console.error('Nop it did not work')
})

uac.modify(uac.settings.ALWAYS_NOTIFY, function (err) {
  err && console.error('Nop it did not work')
})
uac.modify(uac.settings.ALWAYS_NOTIFY_WITH_BG, function (err) {
  err && console.error('Nop it did not work')
})
uac.modify(uac.settings.ALWAYS_NOTIFY_WITHOUT_BG, function (err) {
  err && console.error('Nop it did not work')
})
uac.modify(uac.settings.DISABLED, function (err) {
  err && console.error('Nop it did not work')
})
```

# Binary

## Install

```sh
npm i @mh-cbon/win-uac -g
```

## Usage

```sh
$ uac             # defaults to disable
$ uac disable     # disable uac
$ uac enable      # enable uac
$ uac with-bg     # enable uac with background support
$ uac without-bg  # enable uac without background support
Changes applied, please reboot.

$ uac wtf
The changes were not applied properly.
Incorrect argv argument
Use one of enable, disable, with-bg, without-bg

```

# Notes

You still need to run this module within an elevated command line.
See [this](https://github.com/mh-cbon/aghfabsowecwn)

# Notes²

You still need to reboot windows to make changes effective.

# Tests

Tests are not implemented as I was not able to find a relatively simple way to test those behavior changes.

It was manually tested..

# Read more
- http://winaero.com/blog/how-to-tweak-or-disable-uac-in-windows-8-1/
- http://www.ghacks.net/2013/06/20/how-to-configure-windows-uac-prompt-behavior-for-admins-and-users/
- https://technet.microsoft.com/en-us/library/dd835564%28v=ws.10%29.aspx (see Registry key settings)
- http://blog.pythonaro.com/2013/05/fully-disable-user-access-control-uac.html
- https://github.com/zleight1/DisableUAC/blob/master/DisableUAC/Library.cs
- http://stackoverflow.com/questions/682182/disabling-uac-programmatically
- http://www.tipandtrick.net/ways-to-disable-or-turn-off-user-account-access-control-uac-in-windows-vista/
- http://www.howtogeek.com/howto/windows-vista/enable-or-disable-uac-from-the-windows-vista-command-line/
- http://blogs.msmvps.com/bradley/2008/02/08/keep-your-bikini-on/
- https://technet.microsoft.com/en-us/library/ff715520.aspx
- http://bettereducation.com.au/forum/it.aspx?g=posts&t=2481
- http://www.tipandtrick.net/ways-to-disable-or-turn-off-user-account-access-control-uac-in-windows-vista/
- http://winaero.com/blog/registry-tweak-to-disable-action-center-notifications-in-windows-7/
- http://www.eightforums.com/system-security/44425-how-properly-disable-uac-using-registry-win-8-1-a.html
- http://winaero.com/blog/how-to-tweak-or-disable-uac-in-windows-8-1/
