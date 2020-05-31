// some stuff with export and normal game state
export default class AMCS extends Plugin {
	constructor() {
		super();
		this.time = 1;
		this.enabled = false;
	}
// some weird stuff
	prestart() {
		this.hook();
	}

	hook() {
		const self = this;

		ig.System.inject({
			setTimeFactor(factor) {
				if (self.originalEnabled) {
					return this.parent(factor);
				} else {
					return this.parent(self.time);
				}
	
			}
		});
		sc.CrossCode.inject({
			init(...args) {
				this.parent(...args);
				self.onGameInit();
			}
		});
	}

	onGameInit() {
		ig.game.addons.levelLoaded.push(this);
		ig.game.addons.preUpdate.push(this);
	}
// thing that affects time stop
	onLevelLoaded() {
		ig.game.playerEntity.coll.time.globalStatic = true;
	}

	onPreUpdate() {
		const memcallPressed = ig.input.pressed('Call');
		const memgonePressed = ig.input.pressed('Vanish');
		const stopPressed = ig.input.pressed('Luna dial');
		const resetPressed = ig.input.pressed('Reset time flow');
	
		if (memcallPressed) {
			this._memcall();
		}
		if (memgonePressed) {
			this._memgone();
		}
		if (stopPressed) {
			this.stopTime();
		}
		if (resetPressed) {
			this.normalTime();
		}
	}
// time stopping commands
	stopTime() {
		this.originalEnabled = false;
		this.time = 0.00001;
		ig.system.setTimeFactor();
	}
	
	normalTime() {
		this.originalEnabled = true;
		ig.system.setTimeFactor(1);
	}
	
// member calling commands
	_memcall() {
		for (const member of ['Glasses', 'Shizuka', 'Shizuka0', 'Emilie', 'Apollo', 'Buggy', 'Hlin', 'Joern', 'Schneider2', 'Schneider', 'Triblader1']) {
			new ig.EVENT_STEP.ADD_PARTY_MEMBER({member}).start();
		}
	}

	_memgone() {
		for (const member of ['Glasses', 'Shizuka', 'Shizuka0', 'Emilie', 'Apollo', 'Buggy', 'Hlin', 'Joern', 'Schneider2', 'Schneider', 'Triblader1']) {
			new ig.EVENT_STEP.REMOVE_PARTY_MEMBER({member}).start();
		}
	}
}
