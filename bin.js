#!/usr/bin/env node

var uac   = require('./index.js')
var argv  = process.argv[2] || 'disable';

if (argv==="enable")          uac.enable(visualConfirm)
else if (argv==="disable")    uac.disable(visualConfirm)
else if (argv==="with-bg")    uac.modify(uac.settings.ALWAYS_NOTIFY_WITH_BG, visualConfirm)
else if (argv==="without-bg") uac.modify(uac.settings.ALWAYS_NOTIFY_WITHOUT_BG, visualConfirm)
else visualConfirm('Incorrect argv argument "' + argv + '"\nUse one of: enable, disable, with-bg, without-bg')

function visualConfirm(err) {
  err && console.error('The changes were not applied properly.\n%s', err), process.exit(1);
  !err && console.error('Changes applied, please reboot.'), process.exit(0);
}
