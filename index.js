
var Registry = require('winreg');
var async = require('async');

var hklm = new Registry({
  hive: Registry.HKLM,
  key: '\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\System'
})

var settings = {
  ALWAYS_NOTIFY: {
    EnableLUA: '1',
    ConsentPromptBehaviorAdmin: '2',
    ConsentPromptBehaviorUser: '3',
    PromptOnSecureDesktop: '1'
  },
  ALWAYS_NOTIFY_WITH_BG: {
    EnableLUA: '1',
    ConsentPromptBehaviorAdmin: '5',
    ConsentPromptBehaviorUser: '3',
    PromptOnSecureDesktop: '1'
  },
  ALWAYS_NOTIFY_WITHOUT_BG: {
    EnableLUA: '1',
    ConsentPromptBehaviorAdmin: '5',
    ConsentPromptBehaviorUser: '3',
    PromptOnSecureDesktop: '0'
  },
  NEVER_NOTIFY: {
    EnableLUA: '1',
    ConsentPromptBehaviorAdmin: '0',
    ConsentPromptBehaviorUser: '0',
    PromptOnSecureDesktop: '0'
  },
  DISABLED: {
    EnableLUA: '0',
    ConsentPromptBehaviorAdmin: '0',
    ConsentPromptBehaviorUser: '0',
    PromptOnSecureDesktop: '0'
  }
};

var modify = function (opts, then) {
  async.parallel([
    function (next){
      hklm.set("EnableLUA", Registry.REG_DWORD, opts.EnableLUA, next)
    },
    function (next){
      hklm.set("ConsentPromptBehaviorAdmin", Registry.REG_DWORD, opts.ConsentPromptBehaviorAdmin, next)
    },
    function (next){
      hklm.set("ConsentPromptBehaviorUser", Registry.REG_DWORD, opts.ConsentPromptBehaviorUser, next)
    },
    function (next){
      hklm.set("PromptOnSecureDesktop", Registry.REG_DWORD, opts.PromptOnSecureDesktop, next)
    }
  ], then)
}

var enable = function (then) {
  modify(settings.ALWAYS_NOTIFY, then);
}
var disable = function (then) {
  modify(settings.DISABLED, then);
}

module.exports = {
  enable:   enable,
  disable:  disable,
  modify:   modify,
  settings: settings
}
