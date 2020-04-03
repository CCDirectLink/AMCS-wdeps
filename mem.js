export class Mem {
	constructor() {
		this.memcall = false;
		this.memgone = false;
		this._init();
	}

	_init() {
		ig.input.bind(ig.KEY.Y, 'memcall');
		ig.input.bind(ig.KEY.H, 'memgone');
		simplify.registerUpdate(() => this._update());
	}
	_update() {
		const memcallPressed = this._pressed('memcall');
		const memgonePressed = this._pressed('memgone');
	
		if (memcallPressed) {
			this._memcall();
		}
		if (memgonePressed) {
			this._memgone();
		}
	}

	_memcall() {
		new ig.EVENT_STEP.ADD_PARTY_MEMBER ({member: 'Glasses'}).start();
		new ig.EVENT_STEP.ADD_PARTY_MEMBER ({member: 'Shizuka'}).start();
		new ig.EVENT_STEP.ADD_PARTY_MEMBER ({member: 'Shizuka0'}).start();
		new ig.EVENT_STEP.ADD_PARTY_MEMBER ({member: 'Emilie'}).start();
		new ig.EVENT_STEP.ADD_PARTY_MEMBER ({member: 'Apollo'}).start();
		new ig.EVENT_STEP.ADD_PARTY_MEMBER ({member: 'Buggy'}).start();
		new ig.EVENT_STEP.ADD_PARTY_MEMBER ({member: 'Hlin'}).start();
		new ig.EVENT_STEP.ADD_PARTY_MEMBER ({member: 'Joern'}).start();
		new ig.EVENT_STEP.ADD_PARTY_MEMBER ({member: 'Schneider2'}).start();
		new ig.EVENT_STEP.ADD_PARTY_MEMBER ({member: 'Schneider'}).start();
		new ig.EVENT_STEP.ADD_PARTY_MEMBER ({member: 'Triblader1'}).start();
	}

	_memgone() {
		new ig.EVENT_STEP.REMOVE_PARTY_MEMBER ({member: 'Glasses'}).start();
		new ig.EVENT_STEP.REMOVE_PARTY_MEMBER ({member: 'Shizuka'}).start();
		new ig.EVENT_STEP.REMOVE_PARTY_MEMBER ({member: 'Shizuka0'}).start();
		new ig.EVENT_STEP.REMOVE_PARTY_MEMBER ({member: 'Emilie'}).start();
		new ig.EVENT_STEP.REMOVE_PARTY_MEMBER ({member: 'Apollo'}).start();
		new ig.EVENT_STEP.REMOVE_PARTY_MEMBER ({member: 'Buggy'}).start();
		new ig.EVENT_STEP.REMOVE_PARTY_MEMBER ({member: 'Hlin'}).start();
		new ig.EVENT_STEP.REMOVE_PARTY_MEMBER ({member: 'Joern'}).start();
		new ig.EVENT_STEP.REMOVE_PARTY_MEMBER ({member: 'Schneider2'}).start();
		new ig.EVENT_STEP.REMOVE_PARTY_MEMBER ({member: 'Schneider'}).start();
		new ig.EVENT_STEP.REMOVE_PARTY_MEMBER ({member: 'Triblader1'}).start();
	}
	_pressed(name) {
		const last = this['last' + name];
		const current = ig.input.state(name);
		this['last' + name] = current;
		return !last && current;
	}
}