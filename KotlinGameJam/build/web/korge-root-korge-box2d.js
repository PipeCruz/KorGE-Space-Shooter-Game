(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kbox2d-root-kbox2d', 'korge-root-korge', 'korma-root-korma'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kbox2d-root-kbox2d'), require('korge-root-korge'), require('korma-root-korma'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-box2d'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korge-root-korge-box2d'.");
    }if (typeof this['kbox2d-root-kbox2d'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-box2d'. Its dependency 'kbox2d-root-kbox2d' was not found. Please, check whether 'kbox2d-root-kbox2d' is loaded prior to 'korge-root-korge-box2d'.");
    }if (typeof this['korge-root-korge'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-box2d'. Its dependency 'korge-root-korge' was not found. Please, check whether 'korge-root-korge' is loaded prior to 'korge-root-korge-box2d'.");
    }if (typeof this['korma-root-korma'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-korge-box2d'. Its dependency 'korma-root-korma' was not found. Please, check whether 'korma-root-korma' is loaded prior to 'korge-root-korge-box2d'.");
    }root['korge-root-korge-box2d'] = factory(typeof this['korge-root-korge-box2d'] === 'undefined' ? {} : this['korge-root-korge-box2d'], kotlin, this['kbox2d-root-kbox2d'], this['korge-root-korge'], this['korma-root-korma']);
  }
}(this, function (_, Kotlin, $module$kbox2d_root_kbox2d, $module$korge_root_korge, $module$korma_root_korma) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Vec2 = $module$kbox2d_root_kbox2d.org.jbox2d.common.Vec2;
  var World_init = $module$kbox2d_root_kbox2d.org.jbox2d.dynamics.World_init_vv9y7y$;
  var Unit = Kotlin.kotlin.Unit;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Box2dTypedUserData$Key = $module$kbox2d_root_kbox2d.org.jbox2d.userdata.Box2dTypedUserData.Key;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Point = $module$korma_root_korma.com.soywiz.korma.geom.Point;
  var equals = Kotlin.equals;
  var Container = $module$korge_root_korge.com.soywiz.korge.view.Container;
  var get_debugLineRenderContext = $module$korge_root_korge.com.soywiz.korge.render.get_debugLineRenderContext_jxline$;
  var math = Kotlin.kotlin.math;
  var ChainShape = $module$kbox2d_root_kbox2d.org.jbox2d.collision.shapes.ChainShape;
  var PolygonShape = $module$kbox2d_root_kbox2d.org.jbox2d.collision.shapes.PolygonShape;
  var EdgeShape = $module$kbox2d_root_kbox2d.org.jbox2d.collision.shapes.EdgeShape;
  var CircleShape = $module$kbox2d_root_kbox2d.org.jbox2d.collision.shapes.CircleShape;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var WorldRef = $module$kbox2d_root_kbox2d.org.jbox2d.dynamics.WorldRef;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toMatrix3D = $module$korge_root_korge.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.toMatrix3D_g4hryh$;
  var Math_0 = Math;
  var numberToDouble = Kotlin.numberToDouble;
  WorldView.prototype = Object.create(Container.prototype);
  WorldView.prototype.constructor = WorldView;
  var worldView = defineInlineFunction('korge-root-korge-box2d.com.soywiz.korge.box2d.worldView_rehvyx$', wrapFunction(function () {
    var Vec2_init = _.$$importsForInline$$['kbox2d-root-kbox2d'].org.jbox2d.common.Vec2;
    var World_init = _.$$importsForInline$$['kbox2d-root-kbox2d'].org.jbox2d.dynamics.World_init_vv9y7y$;
    var Unit = Kotlin.kotlin.Unit;
    var WorldView_init = _.com.soywiz.korge.box2d.WorldView;
    var addTo = _.$$importsForInline$$['korge-root-korge'].com.soywiz.korge.view.addTo_fct211$;
    function worldView$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, world, callback) {
      if (world === void 0)
        world = World_init(new Vec2_init(0.0, -10.0));
      if (callback === void 0)
        callback = worldView$lambda;
      var $receiver_0 = addTo(new WorldView_init(world), $receiver);
      callback($receiver_0);
      return $receiver_0;
    };
  }));
  function WorldView(world) {
    WorldView$Companion_getInstance();
    if (world === void 0)
      world = World_init(new Vec2(0.0, -10.0));
    Container.call(this);
    this.world_sqvymg$_0 = world;
    this.velocityIterations = 6;
    this.positionIterations = 2;
    this.debugWorldViews = false;
    this.world.set_kj97s6$(WorldView$Companion_getInstance().WorldViewKey, this);
    this.addUpdatable_b4k9x1$(WorldView_init$lambda(this));
    this._p0_0 = new Vec2();
    this._p1_0 = new Vec2();
    this.tempVec0_0 = new Vec2();
    this.tempVec1_0 = new Vec2();
  }
  Object.defineProperty(WorldView.prototype, 'world', {
    get: function () {
      return this.world_sqvymg$_0;
    }
  });
  function WorldView$Companion() {
    WorldView$Companion_instance = this;
    this.WorldViewKey = new Box2dTypedUserData$Key();
    this.ViewKey = new Box2dTypedUserData$Key();
    this.ViewContainerKey = new Box2dTypedUserData$Key();
  }
  WorldView$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WorldView$Companion_instance = null;
  function WorldView$Companion_getInstance() {
    if (WorldView$Companion_instance === null) {
      new WorldView$Companion();
    }return WorldView$Companion_instance;
  }
  WorldView.prototype.convertPixelToWorld_lu1900$ = function (x, y) {
    return new Point((x - this.x) / this.scaleX, -(y - this.y) / this.scaleY);
  };
  WorldView.prototype.convertPixelToWorld_4l17gg$ = function (point) {
    return this.convertPixelToWorld_lu1900$(point.x, point.y);
  };
  WorldView.prototype.convertWorldToPixel_lu1900$ = function (x, y) {
    return new Point(x * this.scaleX + this.x, -(y * this.scaleY) + this.y);
  };
  WorldView.prototype.convertWorldToPixel_4l17gg$ = function (point) {
    return this.convertWorldToPixel_lu1900$(point.x, point.y);
  };
  WorldView.prototype.updateViews = function () {
    var node = this.world.world.bodyList;
    while (node != null) {
      var node_0 = node;
      var view = get_viewContainerOrNull(node_0);
      if (view != null) {
        if (!equals(view.parent, this)) {
          this.addChild_l5rad2$(view);
        }view.x = node_0.position.x;
        view.y = -node_0.position.y;
        view.rotationRadians = -node_0.angle;
      }node = node.m_next;
    }
  };
  function WorldView$renderInternal$lambda$lambda$lambda(closure$debugLineRender, closure$body, this$WorldView) {
    return function (fixture) {
      var shape = fixture.getShape();
      if (shape != null) {
        this$WorldView.renderShape_0(closure$debugLineRender, closure$body, shape);
      }return Unit;
    };
  }
  WorldView.prototype.renderInternal_8isv09$ = function (ctx) {
    var tmp$, tmp$_0, tmp$_1;
    var debugViews = (tmp$_1 = (tmp$_0 = (tmp$ = this.stage) != null ? tmp$.views : null) != null ? tmp$_0.debugViews : null) != null ? tmp$_1 : false;
    Container.prototype.renderInternal_8isv09$.call(this, ctx);
    if (this.debugWorldViews || debugViews) {
      var debugLineRender = get_debugLineRenderContext(ctx);
      var matrix = this.globalMatrix;
      debugLineRender.ctx.flush();
      toMatrix3D(matrix, debugLineRender.viewMat);
      try {
        var node = this.world.world.bodyList;
        while (node != null) {
          var body = node;
          forEachFixture(body, WorldView$renderInternal$lambda$lambda$lambda(debugLineRender, body, this));
          node = node.m_next;
        }
      }finally {
        debugLineRender.flush();
      }
    }};
  WorldView.prototype.getCirclePoint_0 = function (radius, ratio, out) {
    if (out === void 0)
      out = new Vec2();
    var angle = ratio * math.PI * 2.0;
    return out.set_dleff0$(Math_0.cos(angle) * radius, Math_0.sin(angle) * radius);
  };
  WorldView.prototype.renderPoints_0 = function (ctx, body, npoints, getPoint) {
    for (var n = 0; n < npoints; n++) {
      var p0 = this._p0_0.set_z1lo5s$(getPoint(n));
      var p1 = this._p1_0.set_z1lo5s$(getPoint((n + 1 | 0) % npoints));
      body.getWorldPointToOut_xjacks$(p0, this.tempVec0_0);
      body.getWorldPointToOut_xjacks$(p1, this.tempVec1_0);
      ctx.line_7b5o5w$(this.tempVec0_0.x, -this.tempVec0_0.y, this.tempVec1_0.x, -this.tempVec1_0.y);
    }
  };
  WorldView.prototype.renderShape_0 = function (ctx, body, shape) {
    if (!Kotlin.isType(shape, ChainShape))
      if (Kotlin.isType(shape, PolygonShape)) {
        var npoints = shape.m_count;
        for (var n = 0; n < npoints; n++) {
          var p0 = this._p0_0.set_z1lo5s$(shape.getVertex_za3lpa$(n));
          var p1 = this._p1_0.set_z1lo5s$(shape.getVertex_za3lpa$((n + 1 | 0) % npoints));
          body.getWorldPointToOut_xjacks$(p0, this.tempVec0_0);
          body.getWorldPointToOut_xjacks$(p1, this.tempVec1_0);
          ctx.line_7b5o5w$(this.tempVec0_0.x, -this.tempVec0_0.y, this.tempVec1_0.x, -this.tempVec1_0.y);
        }
      } else if (!Kotlin.isType(shape, EdgeShape))
        if (Kotlin.isType(shape, CircleShape)) {
          var npoints_0 = 64;
          var radius = shape.m_radius;
          for (var n_0 = 0; n_0 < npoints_0; n_0++) {
            var p0_0 = this._p0_0.set_z1lo5s$(this.getCirclePoint_0(radius, n_0 / (npoints_0 - 1 | 0), this.tempVec0_0));
            var p1_0 = this._p1_0.set_z1lo5s$(this.getCirclePoint_0(radius, (n_0 + 1 | 0) % npoints_0 / (npoints_0 - 1 | 0), this.tempVec0_0));
            body.getWorldPointToOut_xjacks$(p0_0, this.tempVec0_0);
            body.getWorldPointToOut_xjacks$(p1_0, this.tempVec1_0);
            ctx.line_7b5o5w$(this.tempVec0_0.x, -this.tempVec0_0.y, this.tempVec1_0.x, -this.tempVec1_0.y);
          }
        }};
  function WorldView_init$lambda(this$WorldView) {
    return function (it) {
      this$WorldView.world.step_rjhsen$(it / 1000.0, this$WorldView.velocityIterations, this$WorldView.positionIterations);
      this$WorldView.updateViews();
      return Unit;
    };
  }
  WorldView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WorldView',
    interfaces: [WorldRef, Container]
  };
  function forEachFixture($receiver, callback) {
    var node = $receiver.m_fixtureList;
    while (node != null) {
      callback(node);
      node = node.m_next;
    }
  }
  var bodyDef = defineInlineFunction('korge-root-korge-box2d.com.soywiz.korge.box2d.bodyDef_1m02fd$', wrapFunction(function () {
    var BodyDef_init = _.$$importsForInline$$['kbox2d-root-kbox2d'].org.jbox2d.dynamics.BodyDef;
    return function (callback) {
      var $receiver = new BodyDef_init();
      callback($receiver);
      return $receiver;
    };
  }));
  var fixtureDef = defineInlineFunction('korge-root-korge-box2d.com.soywiz.korge.box2d.fixtureDef_drdj1u$', wrapFunction(function () {
    var FixtureDef_init = _.$$importsForInline$$['kbox2d-root-kbox2d'].org.jbox2d.dynamics.FixtureDef;
    return function (callback) {
      var $receiver = new FixtureDef_init();
      callback($receiver);
      return $receiver;
    };
  }));
  var createBody = defineInlineFunction('korge-root-korge-box2d.com.soywiz.korge.box2d.createBody_ydiinw$', wrapFunction(function () {
    var BodyDef_init = _.$$importsForInline$$['kbox2d-root-kbox2d'].org.jbox2d.dynamics.BodyDef;
    return function ($receiver, callback) {
      var tmp$ = $receiver.world;
      var $receiver_0 = new BodyDef_init();
      callback($receiver_0);
      return tmp$.createBody_ok456i$($receiver_0);
    };
  }));
  var createBody_0 = defineInlineFunction('korge-root-korge-box2d.com.soywiz.korge.box2d.createBody_4ohba2$', wrapFunction(function () {
    var set_view = _.com.soywiz.korge.box2d.set_view_yat30b$;
    return function ($receiver, body, fixture, view) {
      var rbody = $receiver.world.createBody_ok456i$(body);
      rbody.createFixture_60iouz$(fixture);
      set_view(rbody, view);
      return rbody;
    };
  }));
  var defaultBoxShape;
  var createSimpleBody = defineInlineFunction('korge-root-korge-box2d.com.soywiz.korge.box2d.createSimpleBody_8kky73$', wrapFunction(function () {
    var get_degrees = _.$$importsForInline$$['korma-root-korma'].com.soywiz.korma.geom.get_degrees_s8ev3n$;
    var box2d = _.com.soywiz.korge.box2d;
    var BodyType = _.$$importsForInline$$['kbox2d-root-kbox2d'].org.jbox2d.dynamics.BodyType;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var numberToDouble = Kotlin.numberToDouble;
    var BodyDef_init = _.$$importsForInline$$['kbox2d-root-kbox2d'].org.jbox2d.dynamics.BodyDef;
    var FixtureDef_init = _.$$importsForInline$$['kbox2d-root-kbox2d'].org.jbox2d.dynamics.FixtureDef;
    var set_view = _.com.soywiz.korge.box2d.set_view_yat30b$;
    function createSimpleBody$lambda($receiver) {
      return Unit;
    }
    function createSimpleBody$lambda_0($receiver) {
      return Unit;
    }
    var createSimpleBody$lambda_1 = wrapFunction(function () {
      var FixtureDef_init = _.$$importsForInline$$['kbox2d-root-kbox2d'].org.jbox2d.dynamics.FixtureDef;
      var set_view = _.com.soywiz.korge.box2d.set_view_yat30b$;
      return function (closure$shape, closure$friction, closure$restitution, closure$density, closure$fixture, closure$view) {
        return function (it) {
          var $receiver = new FixtureDef_init();
          var closure$shape_0 = closure$shape;
          var closure$friction_0 = closure$friction;
          var closure$restitution_0 = closure$restitution;
          var closure$density_0 = closure$density;
          var closure$fixture_0 = closure$fixture;
          $receiver.shape = closure$shape_0;
          $receiver.friction = numberToDouble(closure$friction_0);
          $receiver.restitution = numberToDouble(closure$restitution_0);
          $receiver.density = numberToDouble(closure$density_0);
          closure$fixture_0($receiver);
          it.createFixture_60iouz$($receiver);
          if (closure$view != null) {
            set_view(it, closure$view);
          }return Unit;
        };
      };
    });
    return function ($receiver, x, y, angle, angularVelocity, linearVelocityX, linearVelocityY, linearDamping, angularDamping, gravityScale, shape, allowSleep, awake, fixedRotation, bullet, type, friction, restitution, density, view, fixture, body) {
      if (x === void 0)
        x = 0.0;
      if (y === void 0)
        y = 0.0;
      if (angle === void 0)
        angle = get_degrees(0);
      if (angularVelocity === void 0)
        angularVelocity = 0.0;
      if (linearVelocityX === void 0)
        linearVelocityX = 0.0;
      if (linearVelocityY === void 0)
        linearVelocityY = 0.0;
      if (linearDamping === void 0)
        linearDamping = 0.0;
      if (angularDamping === void 0)
        angularDamping = 0.0;
      if (gravityScale === void 0)
        gravityScale = 1.0;
      if (shape === void 0)
        shape = box2d.defaultBoxShape;
      if (allowSleep === void 0)
        allowSleep = true;
      if (awake === void 0)
        awake = true;
      if (fixedRotation === void 0)
        fixedRotation = false;
      if (bullet === void 0)
        bullet = false;
      if (type === void 0)
        type = BodyType.STATIC;
      if (friction === void 0)
        friction = 0.2;
      if (restitution === void 0)
        restitution = 0.0;
      if (density === void 0)
        density = 0.0;
      if (view === void 0)
        view = null;
      if (fixture === void 0)
        fixture = createSimpleBody$lambda;
      if (body === void 0)
        body = createSimpleBody$lambda_0;
      var tmp$ = $receiver.world;
      var $receiver_0 = new BodyDef_init();
      $receiver_0.type = type;
      $receiver_0.angle = angle.radians;
      $receiver_0.angularVelocity = numberToDouble(angularVelocity);
      $receiver_0.position.set_dleff0$(numberToDouble(x), numberToDouble(y));
      $receiver_0.linearVelocity.set_dleff0$(numberToDouble(linearVelocityX), numberToDouble(linearVelocityY));
      $receiver_0.linearDamping = numberToDouble(linearDamping);
      $receiver_0.angularDamping = numberToDouble(angularDamping);
      $receiver_0.gravityScale = numberToDouble(gravityScale);
      $receiver_0.allowSleep = allowSleep;
      $receiver_0.fixedRotation = fixedRotation;
      $receiver_0.bullet = bullet;
      $receiver_0.awake = awake;
      body($receiver_0);
      var $receiver_1 = tmp$.createBody_ok456i$($receiver_0);
      var $receiver_2 = new FixtureDef_init();
      $receiver_2.shape = shape;
      $receiver_2.friction = numberToDouble(friction);
      $receiver_2.restitution = numberToDouble(restitution);
      $receiver_2.density = numberToDouble(density);
      fixture($receiver_2);
      $receiver_1.createFixture_60iouz$($receiver_2);
      if (view != null) {
        set_view($receiver_1, view);
      }return $receiver_1;
    };
  }));
  var fixture = defineInlineFunction('korge-root-korge-box2d.com.soywiz.korge.box2d.fixture_k0eaky$', wrapFunction(function () {
    var FixtureDef_init = _.$$importsForInline$$['kbox2d-root-kbox2d'].org.jbox2d.dynamics.FixtureDef;
    return function ($receiver, callback) {
      var $receiver_0 = new FixtureDef_init();
      callback($receiver_0);
      $receiver.createFixture_60iouz$($receiver_0);
      return $receiver;
    };
  }));
  var setView = defineInlineFunction('korge-root-korge-box2d.com.soywiz.korge.box2d.setView_h8gkuy$', wrapFunction(function () {
    var get_viewContainer = _.com.soywiz.korge.box2d.get_viewContainer_w1wkzg$;
    var set_view = _.com.soywiz.korge.box2d.set_view_yat30b$;
    return function ($receiver, builder) {
      set_view($receiver, builder(get_viewContainer($receiver)));
      return $receiver;
    };
  }));
  var setViewWithContainer = defineInlineFunction('korge-root-korge-box2d.com.soywiz.korge.box2d.setViewWithContainer_cn3bwa$', wrapFunction(function () {
    var set_view = _.com.soywiz.korge.box2d.set_view_yat30b$;
    return function ($receiver, view) {
      set_view($receiver, view);
      return $receiver;
    };
  }));
  var setView_0 = defineInlineFunction('korge-root-korge-box2d.com.soywiz.korge.box2d.setView_cn3bwa$', wrapFunction(function () {
    var set_view = _.com.soywiz.korge.box2d.set_view_yat30b$;
    return function ($receiver, view) {
      set_view($receiver, view);
      return $receiver;
    };
  }));
  var BoxShape = defineInlineFunction('korge-root-korge-box2d.com.soywiz.korge.box2d.BoxShape_z8e4lc$', wrapFunction(function () {
    var PolygonShape_init = _.$$importsForInline$$['kbox2d-root-kbox2d'].org.jbox2d.collision.shapes.PolygonShape;
    var numberToDouble = Kotlin.numberToDouble;
    return function (width, height) {
      var $receiver = new PolygonShape_init();
      $receiver.setAsBox_dleff0$(numberToDouble(width) / 2, numberToDouble(height) / 2);
      return $receiver;
    };
  }));
  var setPosition = defineInlineFunction('korge-root-korge-box2d.com.soywiz.korge.box2d.setPosition_wp3ul1$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, x, y) {
      return $receiver.position.set_dleff0$(numberToDouble(x), numberToDouble(y));
    };
  }));
  function get_worldView($receiver) {
    return $receiver.world.get_d2xgsj$(WorldView$Companion_getInstance().WorldViewKey);
  }
  function get_viewContainerOrNull($receiver) {
    return $receiver.get_d2xgsj$(WorldView$Companion_getInstance().ViewContainerKey);
  }
  function get_viewContainer($receiver) {
    if (!$receiver.contains_d2xgsj$(WorldView$Companion_getInstance().ViewContainerKey))
      $receiver.set_kj97s6$(WorldView$Companion_getInstance().ViewContainerKey, new Container());
    return ensureNotNull($receiver.get_d2xgsj$(WorldView$Companion_getInstance().ViewContainerKey));
  }
  function get_view($receiver) {
    return $receiver.get_d2xgsj$(WorldView$Companion_getInstance().ViewKey);
  }
  function set_view($receiver, view) {
    if (!equals($receiver.get_d2xgsj$(WorldView$Companion_getInstance().ViewKey), view)) {
      $receiver.set_kj97s6$(WorldView$Companion_getInstance().ViewKey, view);
      get_viewContainer($receiver).removeChildren();
      if (view != null) {
        get_viewContainer($receiver).addChild_l5rad2$(view);
      }}}
  $$importsForInline$$['kbox2d-root-kbox2d'] = $module$kbox2d_root_kbox2d;
  $$importsForInline$$['korge-root-korge'] = $module$korge_root_korge;
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korge = package$soywiz.korge || (package$soywiz.korge = {});
  var package$box2d = package$korge.box2d || (package$korge.box2d = {});
  package$box2d.worldView_rehvyx$ = worldView;
  Object.defineProperty(WorldView, 'Companion', {
    get: WorldView$Companion_getInstance
  });
  $$importsForInline$$['korge-root-korge-box2d'] = _;
  package$box2d.WorldView = WorldView;
  package$box2d.bodyDef_1m02fd$ = bodyDef;
  package$box2d.fixtureDef_drdj1u$ = fixtureDef;
  package$box2d.createBody_ydiinw$ = createBody;
  package$box2d.set_view_yat30b$ = set_view;
  package$box2d.createBody_4ohba2$ = createBody_0;
  Object.defineProperty(package$box2d, 'defaultBoxShape', {
    get: function () {
      return defaultBoxShape;
    }
  });
  $$importsForInline$$['korma-root-korma'] = $module$korma_root_korma;
  package$box2d.fixture_k0eaky$ = fixture;
  package$box2d.setView_cn3bwa$ = setView_0;
  package$box2d.createSimpleBody_8kky73$ = createSimpleBody;
  package$box2d.get_viewContainer_w1wkzg$ = get_viewContainer;
  package$box2d.setView_h8gkuy$ = setView;
  package$box2d.setViewWithContainer_cn3bwa$ = setViewWithContainer;
  package$box2d.BoxShape_z8e4lc$ = BoxShape;
  package$box2d.setPosition_wp3ul1$ = setPosition;
  package$box2d.get_worldView_gys5yd$ = get_worldView;
  package$box2d.get_viewContainerOrNull_w1wkzg$ = get_viewContainerOrNull;
  package$box2d.get_view_w1wkzg$ = get_view;
  var $receiver = new PolygonShape();
  $receiver.setAsBox_dleff0$(numberToDouble(10) / 2, numberToDouble(10) / 2);
  defaultBoxShape = $receiver;
  Kotlin.defineModule('korge-root-korge-box2d', _);
  return _;
}));

//# sourceMappingURL=korge-root-korge-box2d.js.map
