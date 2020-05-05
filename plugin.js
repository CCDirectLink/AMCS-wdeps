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
		
// keybinds 
		const header = 'AMCS';
		ig.lang.labels.sc.gui.options.headers[header] = header;
		this._registerKey('6', 'Call', 'Call', header);
		this._registerKey('7', 'Vanish', 'Vanish');
		this._registerKey('8', 'Luna dial', 'Luna dial');
		this._registerKey('9', 'Reset time flow', 'Reset time flow');
	}
// thing that affects time stop
	onLevelLoaded() {
		ig.game.playerEntity.coll.time.globalStatic = true;
	}

	onPreUpdate() {
		const memcallPressed = this._pressed('Call');
		const memgonePressed = this._pressed('Vanish');
		const stopPressed = this._pressed('Luna dial');
		const resetPressed = this._pressed('Reset time flow');
	
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
	
	/**
	 * 
	 * @param {string} name 
	 */
	_pressed(name) {
		const last = this['last' + name];
		const current = ig.input.state(name);
		this['last' + name] = current;
		return !last && current;
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
// thing that adds buttons in settings
	_registerKey(key, id, name, header) {
		const tab = 5;
		const defaultKey = key.charCodeAt(0);
		let defaultKeys = {key1: defaultKey, key2: undefined};
		this._addEntry('keys-' + id, 'CONTROLS', defaultKeys, tab, undefined, undefined, header);
		ig.input.bind(defaultKey, id); 
	
		ig.lang.labels.sc.gui.options.controls.keys[id] = name;
	}

	/**
	 * Shameless copy of simplify.options.addEntry
	 * @param {string} name 
	 * @param {string} type 
	 * @param {*} init 
	 * @param {number} cat 
	 * @param {*=} data 
	 * @param {boolean=} restart 
	 * @param {string=} header
	 * @returns {any}
	 */
	_addEntry(name, type, init, cat, data, restart, header) {
		const obj = {
			type,
			init,
			cat,
			data,
			restart,

		};
		
		if(header !== undefined) {
			obj.hasDivider = true;
			obj.header = header;
		}
		
		sc.OPTIONS_DEFINITION[name] = obj;
		sc.options.values[name] = init;

		return obj;
	}
}
