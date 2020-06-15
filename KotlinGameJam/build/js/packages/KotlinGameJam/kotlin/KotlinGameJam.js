(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kmem-root-kmem', 'korge-root-korge', 'korgw-root-korgw', 'kbox2d-root-kbox2d', 'korim-root-korim', 'korio-root-korio', 'korinject-root-korinject'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kmem-root-kmem'), require('korge-root-korge'), require('korgw-root-korgw'), require('kbox2d-root-kbox2d'), require('korim-root-korim'), require('korio-root-korio'), require('korinject-root-korinject'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KotlinGameJam'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinGameJam'.");
    }if (typeof this['kmem-root-kmem'] === 'undefined') {
      throw new Error("Error loading module 'KotlinGameJam'. Its dependency 'kmem-root-kmem' was not found. Please, check whether 'kmem-root-kmem' is loaded prior to 'KotlinGameJam'.");
    }if (typeof this['korge-root-korge'] === 'undefined') {
      throw new Error("Error loading module 'KotlinGameJam'. Its dependency 'korge-root-korge' was not found. Please, check whether 'korge-root-korge' is loaded prior to 'KotlinGameJam'.");
    }if (typeof this['korgw-root-korgw'] === 'undefined') {
      throw new Error("Error loading module 'KotlinGameJam'. Its dependency 'korgw-root-korgw' was not found. Please, check whether 'korgw-root-korgw' is loaded prior to 'KotlinGameJam'.");
    }if (typeof this['kbox2d-root-kbox2d'] === 'undefined') {
      throw new Error("Error loading module 'KotlinGameJam'. Its dependency 'kbox2d-root-kbox2d' was not found. Please, check whether 'kbox2d-root-kbox2d' is loaded prior to 'KotlinGameJam'.");
    }if (typeof this['korim-root-korim'] === 'undefined') {
      throw new Error("Error loading module 'KotlinGameJam'. Its dependency 'korim-root-korim' was not found. Please, check whether 'korim-root-korim' is loaded prior to 'KotlinGameJam'.");
    }if (typeof this['korio-root-korio'] === 'undefined') {
      throw new Error("Error loading module 'KotlinGameJam'. Its dependency 'korio-root-korio' was not found. Please, check whether 'korio-root-korio' is loaded prior to 'KotlinGameJam'.");
    }if (typeof this['korinject-root-korinject'] === 'undefined') {
      throw new Error("Error loading module 'KotlinGameJam'. Its dependency 'korinject-root-korinject' was not found. Please, check whether 'korinject-root-korinject' is loaded prior to 'KotlinGameJam'.");
    }root.KotlinGameJam = factory(typeof KotlinGameJam === 'undefined' ? {} : KotlinGameJam, kotlin, this['kmem-root-kmem'], this['korge-root-korge'], this['korgw-root-korgw'], this['kbox2d-root-kbox2d'], this['korim-root-korim'], this['korio-root-korio'], this['korinject-root-korinject']);
  }
}(this, function (_, Kotlin, $module$kmem_root_kmem, $module$korge_root_korge, $module$korgw_root_korgw, $module$kbox2d_root_kbox2d, $module$korim_root_korim, $module$korio_root_korio, $module$korinject_root_korinject) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Image_init = $module$korge_root_korge.com.soywiz.korge.view.Image_init_8drxwf$;
  var Key = $module$korgw_root_korgw.com.soywiz.korev.Key;
  var Vec2 = $module$kbox2d_root_kbox2d.org.jbox2d.common.Vec2;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Image = $module$korge_root_korge.com.soywiz.korge.view.Image;
  var UpdateComponentWithViews = $module$korge_root_korge.com.soywiz.korge.component.UpdateComponentWithViews;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var color = $module$korim_root_korim.com.soywiz.korim.color;
  var position = $module$korge_root_korge.com.soywiz.korge.view.position_ajix5r$;
  var getKClass = Kotlin.getKClass;
  var Unit = Kotlin.kotlin.Unit;
  var launchImmediately = $module$korio_root_korio.com.soywiz.korio.async.launchImmediately_hilpzi$;
  var std = $module$korio_root_korio.com.soywiz.korio.file.std;
  var readBitmap = $module$korim_root_korim.com.soywiz.korim.format.readBitmap_vi5npc$;
  var Scene = $module$korge_root_korge.com.soywiz.korge.scene.Scene;
  var TimeSpan = $module$korge_root_korge.$$importsForInline$$['klock-root-klock'].com.soywiz.klock.TimeSpan;
  var color_0 = $module$korge_root_korge.$$importsForInline$$['korim-root-korim'].com.soywiz.korim.color;
  var Fonts = $module$korge_root_korge.com.soywiz.korge.view.Fonts;
  var Text = $module$korge_root_korge.com.soywiz.korge.view.Text;
  var addTo = $module$korge_root_korge.com.soywiz.korge.view.addTo_fct211$;
  var numberToDouble = Kotlin.numberToDouble;
  var SolidRect_init = $module$korge_root_korge.com.soywiz.korge.view.SolidRect;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var get_mouse = $module$korge_root_korge.com.soywiz.korge.input.get_mouse_gohfi1$;
  var launchImmediately_0 = $module$korge_root_korge.$$importsForInline$$['korio-root-korio'].com.soywiz.korio.async.launchImmediately_ykkwzu$;
  var korge = $module$korge_root_korge.com.soywiz.korge;
  var Korge$Config = $module$korge_root_korge.com.soywiz.korge.Korge.Config;
  var Module = $module$korge_root_korge.com.soywiz.korge.scene.Module;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var internal = Kotlin.kotlin.coroutines.js.internal;
  var numberToInt = Kotlin.numberToInt;
  var Math_0 = Math;
  Player.prototype = Object.create(Image.prototype);
  Player.prototype.constructor = Player;
  GameScene.prototype = Object.create(Scene.prototype);
  GameScene.prototype.constructor = GameScene;
  MainMenuScene.prototype = Object.create(Scene.prototype);
  MainMenuScene.prototype.constructor = MainMenuScene;
  GameModule.prototype = Object.create(Module.prototype);
  GameModule.prototype.constructor = GameModule;
  function Player(bm, view) {
    Image_init(bm, void 0, void 0, void 0, void 0, this);
    this.view_7puvvv$_0 = view;
    this.moveUpKey = Key.W;
    this.moveDownKey = Key.S;
    this.moveRightKey = Key.D;
    this.moveLeftKey = Key.A;
    this.moveSpeed = 0.1;
    this.deacceleration = 0.999;
    this.velocity = new Vec2();
    this.input = new Vec2();
    this.bounciness = -0.75;
  }
  Object.defineProperty(Player.prototype, 'view', {
    get: function () {
      return this.view_7puvvv$_0;
    }
  });
  Player.prototype.update_vcgvf3$ = function (views, ms) {
    println('bruh');
    var i = views.input;
    this.input.x = (i.keys.pressing_9s040q$(this.moveRightKey) ? 1 : 0) - (i.keys.pressing_9s040q$(this.moveLeftKey) ? 1 : 0) | 0;
    this.input.y = (i.keys.pressing_9s040q$(this.moveDownKey) ? 1 : 0) - (i.keys.pressing_9s040q$(this.moveUpKey) ? 1 : 0) | 0;
    this.input.normalize();
    this.velocity.x = this.velocity.x + this.input.x * this.moveSpeed;
    this.velocity.y = this.velocity.y + this.input.y * this.moveSpeed;
    this.velocity.x = this.velocity.x * this.deacceleration;
    this.velocity.y = this.velocity.y * this.deacceleration;
    this.x = this.x + this.velocity.x * ms;
    this.y = this.y + this.velocity.y * ms;
  };
  Player.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Player',
    interfaces: [UpdateComponentWithViews, Image]
  };
  function GameDependency(value) {
    this.value = value;
  }
  GameDependency.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameDependency',
    interfaces: []
  };
  function text$lambda($receiver) {
    return Unit;
  }
  function solidRect$lambda($receiver) {
    return Unit;
  }
  function Coroutine$doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$handler = closure$handler_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$doMouseEvent$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype.constructor = Coroutine$doMouseEvent$lambda$lambda$lambda;
  Coroutine$doMouseEvent$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$handler(this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$doMouseEvent$lambda$lambda$lambda(closure$handler_0, closure$it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function doMouseEvent$lambda$lambda(closure$mouse, closure$handler) {
    return function (it) {
      launchImmediately_0(closure$mouse.coroutineContext, doMouseEvent$lambda$lambda$lambda(closure$handler, it));
      return Unit;
    };
  }
  function GameScene(myDependency) {
    Scene.call(this);
    this.myDependency_0 = myDependency;
  }
  function Coroutine$GameScene$sceneInit$lambda$lambda(this$GameScene_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GameScene = this$GameScene_0;
  }
  Coroutine$GameScene$sceneInit$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameScene$sceneInit$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameScene$sceneInit$lambda$lambda.prototype.constructor = Coroutine$GameScene$sceneInit$lambda$lambda;
  Coroutine$GameScene$sceneInit$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $this = this.local$this$GameScene.sceneContainer;
            var injects = [new GameDependency('MainMenu')];
            var time;
            var transition;
            if (time === void 0) {
              time = TimeSpan.Companion.fromSeconds_14dthe$(0);
            }
            if (transition === void 0)
              transition = $this.defaultTransition;
            this.state_0 = 2;
            this.result_0 = $this.changeTo_oszfv1$(getKClass(MainMenuScene), injects.slice(), time, transition, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GameScene$sceneInit$lambda$lambda(this$GameScene_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$GameScene$sceneInit$lambda$lambda(this$GameScene_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$GameScene$sceneInit$lambda(this$GameScene_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$GameScene = this$GameScene_0;
  }
  Coroutine$GameScene$sceneInit$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameScene$sceneInit$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameScene$sceneInit$lambda.prototype.constructor = Coroutine$GameScene$sceneInit$lambda;
  Coroutine$GameScene$sceneInit$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return launchImmediately(this.local$this$GameScene, GameScene$sceneInit$lambda$lambda(this.local$this$GameScene));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GameScene$sceneInit$lambda(this$GameScene_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$GameScene$sceneInit$lambda(this$GameScene_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$sceneInit_st8p7j$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$.prototype.constructor = Coroutine$sceneInit_st8p7j$;
  Coroutine$sceneInit_st8p7j$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var text = 'Test Game: ' + this.$this.myDependency_0.value;
            var color_0_0;
            var font;
            color_0_0 = color_0.Colors.WHITE;
            font = Fonts.Companion.defaultFont;
            var $receiver_0_0 = addTo(Text.Companion.invoke_8ii8iq$(text, 16.0, color_0_0, font), this.local$$receiver);
            text$lambda($receiver_0_0);
            var color_1 = color.Colors.RED;
            var $receiver_0_1 = addTo(new SolidRect_init(numberToDouble(100), numberToDouble(100), color_1), this.local$$receiver);
            solidRect$lambda($receiver_0_1);
            var $receiver = position($receiver_0_1, 100, 100);
            var prop = getPropertyCallableRef('click', 1, function ($receiver_0) {
              return $receiver_0.click;
            });
            var tmp$;
            if ((tmp$ = $receiver != null ? get_mouse($receiver) : null) != null) {
              prop.get(tmp$).add_qlkmfe$(doMouseEvent$lambda$lambda(tmp$, GameScene$sceneInit$lambda(this.$this)));
            }
            this.state_0 = 2;
            this.result_0 = readBitmap(std.resourcesVfs.get_61zpoe$('korge.png'), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var player = new Player(this.result_0, this.$this.views.root);
            return;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  GameScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  GameScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameScene',
    interfaces: [Scene]
  };
  function text$lambda_0($receiver) {
    return Unit;
  }
  function solidRect$lambda_0($receiver) {
    return Unit;
  }
  function Coroutine$doMouseEvent$lambda$lambda$lambda_0(closure$handler_0, closure$it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$handler = closure$handler_0;
    this.local$closure$it = closure$it_0;
  }
  Coroutine$doMouseEvent$lambda$lambda$lambda_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$doMouseEvent$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doMouseEvent$lambda$lambda$lambda_0.prototype.constructor = Coroutine$doMouseEvent$lambda$lambda$lambda_0;
  Coroutine$doMouseEvent$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$handler(this.local$closure$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function doMouseEvent$lambda$lambda$lambda_0(closure$handler_0, closure$it_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$doMouseEvent$lambda$lambda$lambda_0(closure$handler_0, closure$it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function doMouseEvent$lambda$lambda_0(closure$mouse, closure$handler) {
    return function (it) {
      launchImmediately_0(closure$mouse.coroutineContext, doMouseEvent$lambda$lambda$lambda_0(closure$handler, it));
      return Unit;
    };
  }
  function MainMenuScene(myDependency) {
    Scene.call(this);
    this.myDependency_0 = myDependency;
  }
  function Coroutine$MainMenuScene$sceneInit$lambda$lambda(this$MainMenuScene_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$MainMenuScene = this$MainMenuScene_0;
  }
  Coroutine$MainMenuScene$sceneInit$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MainMenuScene$sceneInit$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MainMenuScene$sceneInit$lambda$lambda.prototype.constructor = Coroutine$MainMenuScene$sceneInit$lambda$lambda;
  Coroutine$MainMenuScene$sceneInit$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $this = this.local$this$MainMenuScene.sceneContainer;
            var injects = [new GameDependency('Game')];
            var time;
            var transition;
            if (time === void 0) {
              time = TimeSpan.Companion.fromSeconds_14dthe$(0);
            }
            if (transition === void 0)
              transition = $this.defaultTransition;
            this.state_0 = 2;
            this.result_0 = $this.changeTo_oszfv1$(getKClass(GameScene), injects.slice(), time, transition, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MainMenuScene$sceneInit$lambda$lambda(this$MainMenuScene_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$MainMenuScene$sceneInit$lambda$lambda(this$MainMenuScene_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MainMenuScene$sceneInit$lambda(this$MainMenuScene_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$MainMenuScene = this$MainMenuScene_0;
  }
  Coroutine$MainMenuScene$sceneInit$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MainMenuScene$sceneInit$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MainMenuScene$sceneInit$lambda.prototype.constructor = Coroutine$MainMenuScene$sceneInit$lambda;
  Coroutine$MainMenuScene$sceneInit$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return launchImmediately(this.local$this$MainMenuScene, MainMenuScene$sceneInit$lambda$lambda(this.local$this$MainMenuScene));
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function MainMenuScene$sceneInit$lambda(this$MainMenuScene_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$MainMenuScene$sceneInit$lambda(this$MainMenuScene_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  MainMenuScene.prototype.sceneInit_st8p7j$ = function ($receiver, continuation) {
    var text = 'Test Main Menu: ' + this.myDependency_0.value;
    var color_0_0;
    var font;
    color_0_0 = color_0.Colors.WHITE;
    font = Fonts.Companion.defaultFont;
    var $receiver_0_0 = addTo(Text.Companion.invoke_8ii8iq$(text, 16.0, color_0_0, font), $receiver);
    text$lambda_0($receiver_0_0);
    var color_1 = color.Colors.RED;
    var $receiver_0_1 = addTo(new SolidRect_init(numberToDouble(100), numberToDouble(100), color_1), $receiver);
    solidRect$lambda_0($receiver_0_1);
    var $receiver_1 = position($receiver_0_1, 100, 100);
    var prop = getPropertyCallableRef('click', 1, function ($receiver_0) {
      return $receiver_0.click;
    });
    var tmp$;
    if ((tmp$ = $receiver_1 != null ? get_mouse($receiver_1) : null) != null) {
      prop.get(tmp$).add_qlkmfe$(doMouseEvent$lambda$lambda_0(tmp$, MainMenuScene$sceneInit$lambda(this)));
    }};
  MainMenuScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MainMenuScene',
    interfaces: [Scene]
  };
  function main(continuation) {
    return korge.Korge.invoke_dnucxw$(new Korge$Config(GameModule_getInstance()), continuation);
  }
  function GameModule() {
    GameModule_instance = this;
    Module.call(this);
    this.mainScene_kxtxcn$_0 = getKClass(MainMenuScene);
  }
  Object.defineProperty(GameModule.prototype, 'mainScene', {
    get: function () {
      return this.mainScene_kxtxcn$_0;
    }
  });
  function Coroutine$GameModule$configure$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$GameModule$configure$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$GameModule$configure$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameModule$configure$lambda.prototype.constructor = Coroutine$GameModule$configure$lambda;
  Coroutine$GameModule$configure$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(GameDependency), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return new MainMenuScene(this.result_0);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GameModule$configure$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$GameModule$configure$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  GameModule.prototype.configure_5qt7s4$ = function ($receiver, continuation) {
    var instance = new GameDependency('Main Menu');
    $receiver.mapInstance_b1ce0a$(getKClass(GameDependency), instance);
    $receiver.mapPrototype_siz2e9$(getKClass(MainMenuScene), GameModule$configure$lambda);
  };
  GameModule.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GameModule',
    interfaces: [Module]
  };
  var GameModule_instance = null;
  function GameModule_getInstance() {
    if (GameModule_instance === null) {
      new GameModule();
    }return GameModule_instance;
  }
  function Perlin() {
    Perlin_instance = this;
    this.permutation_0 = new Int32Array([151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180]);
    var array = new Int32Array(512);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = i < 256 ? this.permutation_0[i] : this.permutation_0[i - 256 | 0];
    }
    this.p_0 = array;
  }
  Perlin.prototype.noise_yvo9jy$ = function (x, y, z) {
    var xi = numberToInt(Math_0.floor(x)) & 255;
    var yi = numberToInt(Math_0.floor(y)) & 255;
    var zi = numberToInt(Math_0.floor(z)) & 255;
    var xx = x - Math_0.floor(x);
    var yy = y - Math_0.floor(y);
    var zz = z - Math_0.floor(z);
    var u = this.fade_0(xx);
    var v = this.fade_0(yy);
    var w = this.fade_0(zz);
    var a = this.p_0[xi] + yi | 0;
    var aa = this.p_0[a] + zi | 0;
    var ab = this.p_0[a + 1 | 0] + zi | 0;
    var b = this.p_0[xi + 1 | 0] + yi | 0;
    var ba = this.p_0[b] + zi | 0;
    var bb = this.p_0[b + 1 | 0] + zi | 0;
    return this.lerp_0(w, this.lerp_0(v, this.lerp_0(u, this.grad_0(this.p_0[aa], xx, yy, zz), this.grad_0(this.p_0[ba], xx - 1, yy, zz)), this.lerp_0(u, this.grad_0(this.p_0[ab], xx, yy - 1, zz), this.grad_0(this.p_0[bb], xx - 1, yy - 1, zz))), this.lerp_0(v, this.lerp_0(u, this.grad_0(this.p_0[aa + 1 | 0], xx, yy, zz - 1), this.grad_0(this.p_0[ba + 1 | 0], xx - 1, yy, zz - 1)), this.lerp_0(u, this.grad_0(this.p_0[ab + 1 | 0], xx, yy - 1, zz - 1), this.grad_0(this.p_0[bb + 1 | 0], xx - 1, yy - 1, zz - 1))));
  };
  Perlin.prototype.fade_0 = function (t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  };
  Perlin.prototype.lerp_0 = function (t, a, b) {
    return a + t * (b - a);
  };
  Perlin.prototype.grad_0 = function (hash, x, y, z) {
    var h = hash & 15;
    var u = h < 8 ? x : y;
    var v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  };
  Perlin.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Perlin',
    interfaces: []
  };
  var Perlin_instance = null;
  function Perlin_getInstance() {
    if (Perlin_instance === null) {
      new Perlin();
    }return Perlin_instance;
  }
  function main_0(args) {
    println(Perlin_getInstance().noise_yvo9jy$(3.14, 42.0, 7.0));
  }
  $$importsForInline$$['kmem-root-kmem'] = $module$kmem_root_kmem;
  var package$entities = _.entities || (_.entities = {});
  package$entities.Player = Player;
  var package$gameStateManager = _.gameStateManager || (_.gameStateManager = {});
  package$gameStateManager.GameDependency = GameDependency;
  $$importsForInline$$['korge-root-korge'] = $module$korge_root_korge;
  var package$scenes = package$gameStateManager.scenes || (package$gameStateManager.scenes = {});
  package$scenes.GameScene = GameScene;
  package$scenes.MainMenuScene = MainMenuScene;
  _.main = main;
  $$importsForInline$$['korinject-root-korinject'] = $module$korinject_root_korinject;
  Object.defineProperty(_, 'GameModule', {
    get: GameModule_getInstance
  });
  var package$math = _.math || (_.math = {});
  Object.defineProperty(package$math, 'Perlin', {
    get: Perlin_getInstance
  });
  package$math.main_kand9s$ = main_0;
  Player.prototype.update_xp3vpi$ = UpdateComponentWithViews.prototype.update_xp3vpi$;
  main(internal.EmptyContinuation, false);
  Kotlin.defineModule('KotlinGameJam', _);
  return _;
}));

//# sourceMappingURL=KotlinGameJam.js.map
