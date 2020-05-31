sc.OPTIONS_DEFINITION['keys-Call'] = {
  type: 'CONTROLS',
  init: { key1: ig.KEY._6 },
  cat: sc.OPTION_CATEGORY.CONTROLS,
  hasDivider: true,
  header: 'AMCS'
};
sc.OPTIONS_DEFINITION['keys-Vanish'] = {
  type: 'CONTROLS',
  init: { key1: ig.KEY._7 },
  cat: sc.OPTION_CATEGORY.CONTROLS
};
sc.OPTIONS_DEFINITION['keys-Luna dial'] = {
  type: 'CONTROLS',
  init: { key1: ig.KEY._8 },
  cat: sc.OPTION_CATEGORY.CONTROLS
};
sc.OPTIONS_DEFINITION['keys-Reset time flow'] = {
  type: 'CONTROLS',
  init: { key1: ig.KEY._9 },
  cat: sc.OPTION_CATEGORY.CONTROLS
};

sc.AMCSAddon = ig.GameAddon.extend({
  time: 1,
  originalEnabled: false,

  onLevelLoaded() {
    // thing that affects time stop
    ig.game.playerEntity.coll.time.globalStatic = true;
  },

  onPreUpdate() {
    if (ig.input.pressed('Call')) this.memcall();
    if (ig.input.pressed('Vanish')) this.memgone();
    if (ig.input.pressed('Luna dial')) this.stopTime();
    if (ig.input.pressed('Reset time flow')) this.normalTime();
  },


  // time stopping commands
  stopTime() {
    this.originalEnabled = false;
    this.time = 0.00001;
    ig.system.setTimeFactor();
  },

  normalTime() {
    this.originalEnabled = true;
    ig.system.setTimeFactor(1);
  },

  // member calling commands
  memcall() {
    for (const member of ['Glasses', 'Shizuka', 'Shizuka0', 'Emilie', 'Apollo', 'Buggy', 'Hlin', 'Joern', 'Schneider2', 'Schneider', 'Triblader1']) {
      new ig.EVENT_STEP.ADD_PARTY_MEMBER({member}).start();
    }
  },

  memgone() {
    for (const member of ['Glasses', 'Shizuka', 'Shizuka0', 'Emilie', 'Apollo', 'Buggy', 'Hlin', 'Joern', 'Schneider2', 'Schneider', 'Triblader1']) {
      new ig.EVENT_STEP.REMOVE_PARTY_MEMBER({member}).start();
    }
  }
});
ig.addGameAddon(() => (sc.amcsAddon = new sc.AMCSAddon()));

ig.System.inject({
  setTimeFactor(factor) {
    return this.parent(sc.amcsAddon.originalEnabled ? factor : sc.amcsAddon.time);
  }
});
