
export class Mem {
	constructor() {
		this.memcall = false;
		this.memgone = false;
		this._init();
	}
//do not touch stuff here
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
//is this even working lmao
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
//main thing
const headerId = 'AMCS';
//members
const callId = 'Call';
const goneId = 'Vanish';
//time
const artTime = 'Luna dial';
const antiArtTime = 'Reset time flow';

//whats this for who cares
const cp = require('child_process');
const fs = require('fs');
//stuff that adds keys in settings
function dependenciesLoaded() {
	
	ig.lang.labels.sc.gui.options.headers[headerId] = 'AMCS';
//-----------------------------------------------------------
    ig.lang.labels.sc.gui.options.controls.keys[callId] = 'Call';
    //-----------
	const tab = 5;
	//-----------
    let defaultKey = '6'.charCodeAt(0);
    let defaultKeys = {key1: defaultKey, key2: undefined};
    simplify.options.addEntry('keys-'+callId, 'CONTROLS', defaultKeys, tab, undefined, undefined, headerId);
    ig.input.bind(defaultKey, callId); 

    ig.lang.labels.sc.gui.options.controls.keys[goneId] = 'Vanish';
	
	 defaultKey = '7'.charCodeAt(0);
	 defaultKeys = {key1: defaultKey, key2: undefined};
	simplify.options.addEntry('keys-'+goneId, 'CONTROLS', defaultKeys, tab, undefined, undefined);
	ig.input.bind(defaultKey, goneId); 
	//time
	ig.lang.labels.sc.gui.options.controls.keys[artTime] = 'Luna dial';

	defaultKey = '8'.charCodeAt(0);
	defaultKeys = {key1: defaultKey, key2: undefined};
	simplify.options.addEntry('keys-'+artTime, 'CONTROLS', defaultKeys, tab, undefined, undefined);
	ig.input.bind(defaultKey, artTime);

	ig.lang.labels.sc.gui.options.controls.keys[antiArtTime] = 'Reset time flow';

	defaultKey = '9'.charCodeAt(0);
	defaultKeys = {key1: defaultKey, key2: undefined};
	simplify.options.addEntry('keys-'+antiArtTime, 'CONTROLS', defaultKeys, tab, undefined, undefined);
	ig.input.bind(defaultKey, antiArtTime);


	//grind 2.0
    simplify.registerUpdate(() => {
        if(ig.input.state(callId)) {
            Call();
        }
    });
	simplify.registerUpdate(() => {
        if(ig.input.state(goneId)) {
            Gone();
        }
	});
	//time freeze hue hue
	simplify.registerUpdate(() => {
        if(ig.input.state(artTime)) {
            Art();
        }
	});
	simplify.registerUpdate(() => {
        if(ig.input.state(antiArtTime)) {
            Anti();
        }
    });
}
//music listeners = ['Autumn']
const listeners = [];
function addListener(listener) {
    listeners.push(listener);
}
//these do commands?
function Call(){
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

function Gone(){
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


let time = 1;
let originalEnabled = true;

init();

function init() {
    ig.System.inject({
        setTimeFactor(factor) {
            if (originalEnabled) {
                return this.parent(factor);
            } else {
                return this.parent(time);
            }

        }
    });
    sc.CrossCode.inject({
        init(...args) {
            this.parent(...args);
            this.addons.levelLoaded.push({
                onLevelLoaded() {
                    ig.game.playerEntity.coll.time.globalStatic = true;
                }
            });
        }
    });
}

function Art() {
    originalEnabled = false;
    time = 0.00001;
	ig.system.setTimeFactor();
	ig.game.playerEntity.coll.time.globalStatic = true;
}
function Anti() {
    originalEnabled = true;
    ig.system.setTimeFactor(1);
}


//essential stuff no touchy >:O
window.restartButton = {addListener};
document.body.addEventListener('modsLoaded', dependenciesLoaded);