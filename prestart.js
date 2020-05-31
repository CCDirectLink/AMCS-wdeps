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

const TIME_STOP_TIME_FACTOR = 0.00001;
const TIME_STOP_TRANSITION_TIME = 0.5;

sc.AMCSAddon = ig.GameAddon.extend({
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
    ig.slowMotion.add(TIME_STOP_TIME_FACTOR, TIME_STOP_TRANSITION_TIME, 'AMCS');
  },

  normalTime() {
    ig.slowMotion.clearNamed('AMCS', TIME_STOP_TRANSITION_TIME);
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
