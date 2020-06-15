(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kbox2d-root-kbox2d'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kbox2d-root-kbox2d'.");
    }root['kbox2d-root-kbox2d'] = factory(typeof this['kbox2d-root-kbox2d'] === 'undefined' ? {} : this['kbox2d-root-kbox2d'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var toByte = Kotlin.toByte;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var equals = Kotlin.equals;
  var Array_0 = Array;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Comparable = Kotlin.kotlin.Comparable;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var wrapFunction = Kotlin.wrapFunction;
  var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
  var throwUPAE = Kotlin.throwUPAE;
  var toString = Kotlin.toString;
  var Any = Object;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var numberToDouble = Kotlin.numberToDouble;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var numberToInt = Kotlin.numberToInt;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var Random = Kotlin.kotlin.random.Random;
  var math = Kotlin.kotlin.math;
  var Math_0 = Math;
  var toRawBits = Kotlin.floatToRawBits;
  var L0 = Kotlin.Long.ZERO;
  var isNaN_0 = Kotlin.kotlin.isNaN_81szk$;
  var isInfinite = Kotlin.kotlin.isInfinite_81szk$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var copyOfRange = Kotlin.kotlin.collections.copyOfRange_5f8l3u$;
  var sortedArray = Kotlin.kotlin.collections.sortedArray_j2hqw1$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var L1000000 = Kotlin.Long.fromInt(1000000);
  Collision$PointState.prototype = Object.create(Enum.prototype);
  Collision$PointState.prototype.constructor = Collision$PointState;
  Collision$EPAxis$Type.prototype = Object.create(Enum.prototype);
  Collision$EPAxis$Type.prototype.constructor = Collision$EPAxis$Type;
  Collision$EPCollider$VertexType.prototype = Object.create(Enum.prototype);
  Collision$EPCollider$VertexType.prototype.constructor = Collision$EPCollider$VertexType;
  ContactID$Type.prototype = Object.create(Enum.prototype);
  ContactID$Type.prototype.constructor = ContactID$Type;
  Manifold$ManifoldType.prototype = Object.create(Enum.prototype);
  Manifold$ManifoldType.prototype.constructor = Manifold$ManifoldType;
  TimeOfImpact$TOIOutputState.prototype = Object.create(Enum.prototype);
  TimeOfImpact$TOIOutputState.prototype.constructor = TimeOfImpact$TOIOutputState;
  Type.prototype = Object.create(Enum.prototype);
  Type.prototype.constructor = Type;
  ChainShape.prototype = Object.create(Shape.prototype);
  ChainShape.prototype.constructor = ChainShape;
  CircleShape.prototype = Object.create(Shape.prototype);
  CircleShape.prototype.constructor = CircleShape;
  EdgeShape.prototype = Object.create(Shape.prototype);
  EdgeShape.prototype.constructor = EdgeShape;
  PolygonShape.prototype = Object.create(Shape.prototype);
  PolygonShape.prototype.constructor = PolygonShape;
  ShapeType.prototype = Object.create(Enum.prototype);
  ShapeType.prototype.constructor = ShapeType;
  MathUtils.prototype = Object.create(PlatformMathUtils.prototype);
  MathUtils.prototype.constructor = MathUtils;
  BodyType.prototype = Object.create(Enum.prototype);
  BodyType.prototype.constructor = BodyType;
  ChainAndCircleContact.prototype = Object.create(Contact.prototype);
  ChainAndCircleContact.prototype.constructor = ChainAndCircleContact;
  ChainAndPolygonContact.prototype = Object.create(Contact.prototype);
  ChainAndPolygonContact.prototype.constructor = ChainAndPolygonContact;
  CircleContact.prototype = Object.create(Contact.prototype);
  CircleContact.prototype.constructor = CircleContact;
  EdgeAndCircleContact.prototype = Object.create(Contact.prototype);
  EdgeAndCircleContact.prototype.constructor = EdgeAndCircleContact;
  EdgeAndPolygonContact.prototype = Object.create(Contact.prototype);
  EdgeAndPolygonContact.prototype.constructor = EdgeAndPolygonContact;
  PolygonAndCircleContact.prototype = Object.create(Contact.prototype);
  PolygonAndCircleContact.prototype.constructor = PolygonAndCircleContact;
  PolygonContact.prototype = Object.create(Contact.prototype);
  PolygonContact.prototype.constructor = PolygonContact;
  ConstantVolumeJoint.prototype = Object.create(Joint.prototype);
  ConstantVolumeJoint.prototype.constructor = ConstantVolumeJoint;
  ConstantVolumeJointDef.prototype = Object.create(JointDef.prototype);
  ConstantVolumeJointDef.prototype.constructor = ConstantVolumeJointDef;
  DistanceJoint.prototype = Object.create(Joint.prototype);
  DistanceJoint.prototype.constructor = DistanceJoint;
  DistanceJointDef.prototype = Object.create(JointDef.prototype);
  DistanceJointDef.prototype.constructor = DistanceJointDef;
  FrictionJoint.prototype = Object.create(Joint.prototype);
  FrictionJoint.prototype.constructor = FrictionJoint;
  FrictionJointDef.prototype = Object.create(JointDef.prototype);
  FrictionJointDef.prototype.constructor = FrictionJointDef;
  GearJoint.prototype = Object.create(Joint.prototype);
  GearJoint.prototype.constructor = GearJoint;
  GearJointDef.prototype = Object.create(JointDef.prototype);
  GearJointDef.prototype.constructor = GearJointDef;
  JointType.prototype = Object.create(Enum.prototype);
  JointType.prototype.constructor = JointType;
  LimitState.prototype = Object.create(Enum.prototype);
  LimitState.prototype.constructor = LimitState;
  MotorJoint.prototype = Object.create(Joint.prototype);
  MotorJoint.prototype.constructor = MotorJoint;
  MotorJointDef.prototype = Object.create(JointDef.prototype);
  MotorJointDef.prototype.constructor = MotorJointDef;
  MouseJoint.prototype = Object.create(Joint.prototype);
  MouseJoint.prototype.constructor = MouseJoint;
  MouseJointDef.prototype = Object.create(JointDef.prototype);
  MouseJointDef.prototype.constructor = MouseJointDef;
  PrismaticJoint.prototype = Object.create(Joint.prototype);
  PrismaticJoint.prototype.constructor = PrismaticJoint;
  PrismaticJointDef.prototype = Object.create(JointDef.prototype);
  PrismaticJointDef.prototype.constructor = PrismaticJointDef;
  PulleyJoint.prototype = Object.create(Joint.prototype);
  PulleyJoint.prototype.constructor = PulleyJoint;
  PulleyJointDef.prototype = Object.create(JointDef.prototype);
  PulleyJointDef.prototype.constructor = PulleyJointDef;
  RevoluteJoint.prototype = Object.create(Joint.prototype);
  RevoluteJoint.prototype.constructor = RevoluteJoint;
  RevoluteJointDef.prototype = Object.create(JointDef.prototype);
  RevoluteJointDef.prototype.constructor = RevoluteJointDef;
  RopeJoint.prototype = Object.create(Joint.prototype);
  RopeJoint.prototype.constructor = RopeJoint;
  RopeJointDef.prototype = Object.create(JointDef.prototype);
  RopeJointDef.prototype.constructor = RopeJointDef;
  WeldJoint.prototype = Object.create(Joint.prototype);
  WeldJoint.prototype.constructor = WeldJoint;
  WeldJointDef.prototype = Object.create(JointDef.prototype);
  WeldJointDef.prototype.constructor = WeldJointDef;
  WheelJoint.prototype = Object.create(Joint.prototype);
  WheelJoint.prototype.constructor = WheelJoint;
  WheelJointDef.prototype = Object.create(JointDef.prototype);
  WheelJointDef.prototype.constructor = WheelJointDef;
  VoronoiDiagram$VoronoiDiagramTaskMutableStack.prototype = Object.create(MutableStack.prototype);
  VoronoiDiagram$VoronoiDiagramTaskMutableStack.prototype.constructor = VoronoiDiagram$VoronoiDiagramTaskMutableStack;
  LambdaOrderedStack.prototype = Object.create(OrderedStack.prototype);
  LambdaOrderedStack.prototype.constructor = LambdaOrderedStack;
  ContactMutableStack.prototype = Object.create(MutableStack.prototype);
  ContactMutableStack.prototype.constructor = ContactMutableStack;
  var KBOX2D_VERSION;
  function KBox2d() {
    KBox2d_instance = this;
    this.VERSION = KBOX2D_VERSION;
  }
  KBox2d.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KBox2d',
    interfaces: []
  };
  var KBox2d_instance = null;
  function KBox2d_getInstance() {
    if (KBox2d_instance === null) {
      new KBox2d();
    }return KBox2d_instance;
  }
  function ContactFilter() {
  }
  ContactFilter.prototype.shouldCollide_tw86jw$ = function (fixtureA, fixtureB) {
    var filterA = fixtureA.filterData;
    var filterB = fixtureB.filterData;
    if (filterA.groupIndex === filterB.groupIndex && filterA.groupIndex !== 0) {
      return filterA.groupIndex > 0;
    }var collide = (filterA.maskBits & filterB.categoryBits) !== 0 && (filterA.categoryBits & filterB.maskBits) !== 0;
    return collide;
  };
  ContactFilter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactFilter',
    interfaces: []
  };
  function ContactImpulse() {
    this.normalImpulses = new Float32Array(Settings_getInstance().maxManifoldPoints);
    this.tangentImpulses = new Float32Array(Settings_getInstance().maxManifoldPoints);
    this.count = 0;
  }
  ContactImpulse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactImpulse',
    interfaces: []
  };
  function ContactListener() {
  }
  ContactListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ContactListener',
    interfaces: []
  };
  function DebugDraw(viewport) {
    DebugDraw$Companion_getInstance();
    if (viewport === void 0)
      viewport = null;
    this.flags = 0;
    this.viewportTranform_oeqf31$_0 = null;
    this.flags = 0;
    this.viewportTranform = viewport;
  }
  Object.defineProperty(DebugDraw.prototype, 'viewportTranform', {
    get: function () {
      return this.viewportTranform_oeqf31$_0;
    },
    set: function (viewportTranform) {
      this.viewportTranform_oeqf31$_0 = viewportTranform;
    }
  });
  DebugDraw.prototype.setViewportTransform_58g3yp$ = function (viewportTransform) {
    this.viewportTranform = viewportTransform;
  };
  DebugDraw.prototype.appendFlags_za3lpa$ = function (flags) {
    this.flags = this.flags | flags;
  };
  DebugDraw.prototype.clearFlags_za3lpa$ = function (flags) {
    this.flags = this.flags & ~flags;
  };
  DebugDraw.prototype.drawPolygon_om3j2w$ = function (vertices, vertexCount, color) {
    if (vertexCount === 1) {
      this.drawSegment_j9j37o$(vertices[0], vertices[0], color);
      return;
    }var i = 0;
    while (i < (vertexCount - 1 | 0)) {
      this.drawSegment_j9j37o$(vertices[i], vertices[i + 1 | 0], color);
      i = i + 1 | 0;
    }
    if (vertexCount > 2) {
      this.drawSegment_j9j37o$(vertices[vertexCount - 1 | 0], vertices[0], color);
    }};
  DebugDraw.prototype.drawCircle_x33xrr$ = function (center, radius, axis, color) {
    this.drawCircle_xu6chv$(center, radius, color);
  };
  DebugDraw.prototype.flush = function () {
  };
  DebugDraw.prototype.drawString_70cow6$ = function (pos, s, color) {
    this.drawString_m6qolm$(pos.x, pos.y, s, color);
  };
  DebugDraw.prototype.setCamera_y2kzbl$ = function (x, y, scale) {
    ensureNotNull(this.viewportTranform).setCamera_y2kzbl$(x, y, scale);
  };
  DebugDraw.prototype.getScreenToWorldToOut_xjacks$ = function (argScreen, argWorld) {
    ensureNotNull(this.viewportTranform).getScreenToWorld_xjacks$(argScreen, argWorld);
  };
  DebugDraw.prototype.getWorldToScreenToOut_xjacks$ = function (argWorld, argScreen) {
    ensureNotNull(this.viewportTranform).getWorldToScreen_xjacks$(argWorld, argScreen);
  };
  DebugDraw.prototype.getWorldToScreenToOut_8cmdlc$ = function (worldX, worldY, argScreen) {
    argScreen.set_dleff0$(worldX, worldY);
    ensureNotNull(this.viewportTranform).getWorldToScreen_xjacks$(argScreen, argScreen);
  };
  DebugDraw.prototype.getWorldToScreen_z1lo5s$ = function (argWorld) {
    var screen = new Vec2();
    ensureNotNull(this.viewportTranform).getWorldToScreen_xjacks$(argWorld, screen);
    return screen;
  };
  DebugDraw.prototype.getWorldToScreen_dleff0$ = function (worldX, worldY) {
    var argScreen = new Vec2(worldX, worldY);
    ensureNotNull(this.viewportTranform).getWorldToScreen_xjacks$(argScreen, argScreen);
    return argScreen;
  };
  DebugDraw.prototype.getScreenToWorldToOut_8cmdlc$ = function (screenX, screenY, argWorld) {
    argWorld.set_dleff0$(screenX, screenY);
    ensureNotNull(this.viewportTranform).getScreenToWorld_xjacks$(argWorld, argWorld);
  };
  DebugDraw.prototype.getScreenToWorld_z1lo5s$ = function (argScreen) {
    var world = new Vec2();
    ensureNotNull(this.viewportTranform).getScreenToWorld_xjacks$(argScreen, world);
    return world;
  };
  DebugDraw.prototype.getScreenToWorld_dleff0$ = function (screenX, screenY) {
    var screen = new Vec2(screenX, screenY);
    ensureNotNull(this.viewportTranform).getScreenToWorld_xjacks$(screen, screen);
    return screen;
  };
  function DebugDraw$Companion() {
    DebugDraw$Companion_instance = this;
    this.e_shapeBit = 2;
    this.e_jointBit = 4;
    this.e_aabbBit = 8;
    this.e_pairBit = 16;
    this.e_centerOfMassBit = 32;
    this.e_dynamicTreeBit = 64;
    this.e_wireframeDrawingBit = 128;
  }
  DebugDraw$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DebugDraw$Companion_instance = null;
  function DebugDraw$Companion_getInstance() {
    if (DebugDraw$Companion_instance === null) {
      new DebugDraw$Companion();
    }return DebugDraw$Companion_instance;
  }
  DebugDraw.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DebugDraw',
    interfaces: []
  };
  function DestructionListener() {
  }
  DestructionListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DestructionListener',
    interfaces: []
  };
  function PairCallback() {
  }
  PairCallback.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PairCallback',
    interfaces: []
  };
  function ParticleDestructionListener() {
  }
  ParticleDestructionListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ParticleDestructionListener',
    interfaces: []
  };
  function ParticleQueryCallback() {
  }
  ParticleQueryCallback.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ParticleQueryCallback',
    interfaces: []
  };
  function ParticleRaycastCallback() {
  }
  ParticleRaycastCallback.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ParticleRaycastCallback',
    interfaces: []
  };
  function QueryCallback() {
  }
  QueryCallback.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'QueryCallback',
    interfaces: []
  };
  function RayCastCallback() {
  }
  RayCastCallback.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RayCastCallback',
    interfaces: []
  };
  function TreeCallback() {
  }
  TreeCallback.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TreeCallback',
    interfaces: []
  };
  function TreeRayCastCallback() {
  }
  TreeRayCastCallback.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TreeRayCastCallback',
    interfaces: []
  };
  function AABB() {
    AABB$Companion_getInstance();
    this.lowerBound = null;
    this.upperBound = null;
  }
  Object.defineProperty(AABB.prototype, 'isValid', {
    get: function () {
      var tmp$;
      var dx = this.upperBound.x - this.lowerBound.x;
      if (dx < 0.0) {
        return false;
      }var dy = this.upperBound.y - this.lowerBound.y;
      if (dy < 0) {
        tmp$ = false;
      } else
        tmp$ = (this.lowerBound.isValid && this.upperBound.isValid);
      return tmp$;
    }
  });
  Object.defineProperty(AABB.prototype, 'center', {
    get: function () {
      var center = Vec2_init(this.lowerBound);
      center.addLocal_z1lo5s$(this.upperBound);
      center.mulLocal_mx4ult$(0.5);
      return center;
    }
  });
  Object.defineProperty(AABB.prototype, 'extents', {
    get: function () {
      var center = Vec2_init(this.upperBound);
      center.subLocal_z1lo5s$(this.lowerBound);
      center.mulLocal_mx4ult$(0.5);
      return center;
    }
  });
  Object.defineProperty(AABB.prototype, 'perimeter', {
    get: function () {
      return 2.0 * (this.upperBound.x - this.lowerBound.x + this.upperBound.y - this.lowerBound.y);
    }
  });
  AABB.prototype.set_lvg3qr$ = function (aabb) {
    var v = aabb.lowerBound;
    this.lowerBound.x = v.x;
    this.lowerBound.y = v.y;
    var v1 = aabb.upperBound;
    this.upperBound.x = v1.x;
    this.upperBound.y = v1.y;
  };
  AABB.prototype.getCenterToOut_z1lo5s$ = function (out) {
    out.x = (this.lowerBound.x + this.upperBound.x) * 0.5;
    out.y = (this.lowerBound.y + this.upperBound.y) * 0.5;
  };
  AABB.prototype.getExtentsToOut_z1lo5s$ = function (out) {
    out.x = (this.upperBound.x - this.lowerBound.x) * 0.5;
    out.y = (this.upperBound.y - this.lowerBound.y) * 0.5;
  };
  AABB.prototype.getVertices_jorshu$ = function (argRay) {
    argRay[0].set_z1lo5s$(this.lowerBound);
    argRay[1].set_z1lo5s$(this.lowerBound);
    argRay[1].x = argRay[1].x + (this.upperBound.x - this.lowerBound.x);
    argRay[2].set_z1lo5s$(this.upperBound);
    argRay[3].set_z1lo5s$(this.upperBound);
    argRay[3].x = argRay[3].x - (this.upperBound.x - this.lowerBound.x);
  };
  AABB.prototype.combine_rppivm$ = function (aabb1, aab) {
    this.lowerBound.x = aabb1.lowerBound.x < aab.lowerBound.x ? aabb1.lowerBound.x : aab.lowerBound.x;
    this.lowerBound.y = aabb1.lowerBound.y < aab.lowerBound.y ? aabb1.lowerBound.y : aab.lowerBound.y;
    this.upperBound.x = aabb1.upperBound.x > aab.upperBound.x ? aabb1.upperBound.x : aab.upperBound.x;
    this.upperBound.y = aabb1.upperBound.y > aab.upperBound.y ? aabb1.upperBound.y : aab.upperBound.y;
  };
  AABB.prototype.combine_lvg3qr$ = function (aabb) {
    this.lowerBound.x = this.lowerBound.x < aabb.lowerBound.x ? this.lowerBound.x : aabb.lowerBound.x;
    this.lowerBound.y = this.lowerBound.y < aabb.lowerBound.y ? this.lowerBound.y : aabb.lowerBound.y;
    this.upperBound.x = this.upperBound.x > aabb.upperBound.x ? this.upperBound.x : aabb.upperBound.x;
    this.upperBound.y = this.upperBound.y > aabb.upperBound.y ? this.upperBound.y : aabb.upperBound.y;
  };
  AABB.prototype.contains_lvg3qr$ = function (aabb) {
    return this.lowerBound.x <= aabb.lowerBound.x && this.lowerBound.y <= aabb.lowerBound.y && aabb.upperBound.x <= this.upperBound.x && aabb.upperBound.y <= this.upperBound.y;
  };
  AABB.prototype.raycast_guzs7l$ = function (output, input, argPool) {
    if (argPool === void 0)
      argPool = new DefaultWorldPool(4, 4);
    var tmin = -kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    var tmax = kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    var p = argPool.popVec2();
    var d = argPool.popVec2();
    var absD = argPool.popVec2();
    var normal = argPool.popVec2();
    p.set_z1lo5s$(input.p1);
    d.set_z1lo5s$(input.p2).subLocal_z1lo5s$(input.p1);
    Vec2$Companion_getInstance().absToOut_xjacks$(d, absD);
    if (absD.x < Settings_getInstance().EPSILON) {
      if (p.x < this.lowerBound.x || this.upperBound.x < p.x) {
        argPool.pushVec2_za3lpa$(4);
        return false;
      }} else {
      var inv_d = 1.0 / d.x;
      var t1 = (this.lowerBound.x - p.x) * inv_d;
      var t2 = (this.upperBound.x - p.x) * inv_d;
      var s = -1.0;
      if (t1 > t2) {
        var temp = t1;
        t1 = t2;
        t2 = temp;
        s = 1.0;
      }if (t1 > tmin) {
        normal.setZero();
        normal.x = s;
        tmin = t1;
      }tmax = MathUtils$Companion_getInstance().min_dleff0$(tmax, t2);
      if (tmin > tmax) {
        argPool.pushVec2_za3lpa$(4);
        return false;
      }}
    if (absD.y < Settings_getInstance().EPSILON) {
      if (p.y < this.lowerBound.y || this.upperBound.y < p.y) {
        argPool.pushVec2_za3lpa$(4);
        return false;
      }} else {
      var inv_d_0 = 1.0 / d.y;
      var t1_0 = (this.lowerBound.y - p.y) * inv_d_0;
      var t2_0 = (this.upperBound.y - p.y) * inv_d_0;
      var s_0 = -1.0;
      if (t1_0 > t2_0) {
        var temp_0 = t1_0;
        t1_0 = t2_0;
        t2_0 = temp_0;
        s_0 = 1.0;
      }if (t1_0 > tmin) {
        normal.setZero();
        normal.y = s_0;
        tmin = t1_0;
      }tmax = MathUtils$Companion_getInstance().min_dleff0$(tmax, t2_0);
      if (tmin > tmax) {
        argPool.pushVec2_za3lpa$(4);
        return false;
      }}
    if (tmin < 0.0 || input.maxFraction < tmin) {
      argPool.pushVec2_za3lpa$(4);
      return false;
    }output.fraction = tmin;
    output.normal.x = normal.x;
    output.normal.y = normal.y;
    argPool.pushVec2_za3lpa$(4);
    return true;
  };
  AABB.prototype.toString = function () {
    var s = 'AABB[' + this.lowerBound + ' . ' + this.upperBound + ']';
    return s;
  };
  function AABB$Companion() {
    AABB$Companion_instance = this;
  }
  AABB$Companion.prototype.testOverlap_rppivm$ = function (a, b) {
    var tmp$;
    if (b.lowerBound.x - a.upperBound.x > 0.0 || b.lowerBound.y - a.upperBound.y > 0.0) {
      return false;
    }if (a.lowerBound.x - b.upperBound.x > 0.0 || a.lowerBound.y - b.upperBound.y > 0.0) {
      tmp$ = false;
    } else
      tmp$ = true;
    return tmp$;
  };
  AABB$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AABB$Companion_instance = null;
  function AABB$Companion_getInstance() {
    if (AABB$Companion_instance === null) {
      new AABB$Companion();
    }return AABB$Companion_instance;
  }
  AABB.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AABB',
    interfaces: []
  };
  function AABB_init($this) {
    $this = $this || Object.create(AABB.prototype);
    AABB.call($this);
    $this.lowerBound = new Vec2();
    $this.upperBound = new Vec2();
    return $this;
  }
  function AABB_init_0(copy, $this) {
    $this = $this || Object.create(AABB.prototype);
    AABB_init_1(copy.lowerBound, copy.upperBound, $this);
    return $this;
  }
  function AABB_init_1(lowerVertex, upperVertex, $this) {
    $this = $this || Object.create(AABB.prototype);
    AABB.call($this);
    $this.lowerBound = lowerVertex.clone();
    $this.upperBound = upperVertex.clone();
    return $this;
  }
  function Collision(pool) {
    Collision$Companion_getInstance();
    this.pool_0 = pool;
    this.input_0 = new DistanceInput();
    this.cache_0 = new Distance$SimplexCache();
    this.output_0 = new DistanceOutput();
    this.temp_0 = new Vec2();
    this.xf_0 = Transform_init();
    this.n_0 = new Vec2();
    this.v1_0 = new Vec2();
    this.results1_0 = new Collision$EdgeResults();
    this.results2_0 = new Collision$EdgeResults();
    var array = Array_0(2);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Collision$ClipVertex();
    }
    this.incidentEdge_0 = array;
    this.localTangent_0 = new Vec2();
    this.localNormal_0 = new Vec2();
    this.planePoint_0 = new Vec2();
    this.tangent_0 = new Vec2();
    this.v11_0 = new Vec2();
    this.v12_0 = new Vec2();
    var array_0 = Array_0(2);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = new Collision$ClipVertex();
    }
    this.clipPoints1_0 = array_0;
    var array_1 = Array_0(2);
    var tmp$_1;
    tmp$_1 = array_1.length - 1 | 0;
    for (var i_1 = 0; i_1 <= tmp$_1; i_1++) {
      array_1[i_1] = new Collision$ClipVertex();
    }
    this.clipPoints2_0 = array_1;
    this.Q_0 = new Vec2();
    this.e_0 = new Vec2();
    this.cf_0 = ContactID_init();
    this.e1_0 = new Vec2();
    this.P_0 = new Vec2();
    this.collider_0 = new Collision$EPCollider();
    this.poolVec2_0 = new Vec2();
    this.d_0 = new Vec2();
  }
  Collision.prototype.testOverlap_uy2p54$ = function (shapeA, indexA, shapeB, indexB, xfA, xfB) {
    this.input_0.proxyA.set_f381zw$(shapeA, indexA);
    this.input_0.proxyB.set_f381zw$(shapeB, indexB);
    this.input_0.transformA.set_m97ft2$(xfA);
    this.input_0.transformB.set_m97ft2$(xfB);
    this.input_0.useRadii = true;
    this.cache_0.count = 0;
    this.pool_0.distance.distance_x1dvfn$(this.output_0, this.cache_0, this.input_0);
    return this.output_0.distance < 10.0 * Settings_getInstance().EPSILON;
  };
  Collision.prototype.collideCircles_xmpyqj$ = function (manifold, circle1, xfA, circle2, xfB) {
    manifold.pointCount = 0;
    var circle1p = circle1.m_p;
    var circle2p = circle2.m_p;
    var pAx = xfA.q.c * circle1p.x - xfA.q.s * circle1p.y + xfA.p.x;
    var pAy = xfA.q.s * circle1p.x + xfA.q.c * circle1p.y + xfA.p.y;
    var pBx = xfB.q.c * circle2p.x - xfB.q.s * circle2p.y + xfB.p.x;
    var pBy = xfB.q.s * circle2p.x + xfB.q.c * circle2p.y + xfB.p.y;
    var dx = pBx - pAx;
    var dy = pBy - pAy;
    var distSqr = dx * dx + dy * dy;
    var radius = circle1.m_radius + circle2.m_radius;
    if (distSqr > radius * radius) {
      return;
    }manifold.type = Manifold$ManifoldType$CIRCLES_getInstance();
    manifold.localPoint.set_z1lo5s$(circle1p);
    manifold.localNormal.setZero();
    manifold.pointCount = 1;
    manifold.points[0].localPoint.set_z1lo5s$(circle2p);
    manifold.points[0].id.zero();
  };
  Collision.prototype.collidePolygonAndCircle_1xwx9z$ = function (manifold, polygon, xfA, circle, xfB) {
    manifold.pointCount = 0;
    var circlep = circle.m_p;
    var xfBq = xfB.q;
    var xfAq = xfA.q;
    var cx = xfBq.c * circlep.x - xfBq.s * circlep.y + xfB.p.x;
    var cy = xfBq.s * circlep.x + xfBq.c * circlep.y + xfB.p.y;
    var px = cx - xfA.p.x;
    var py = cy - xfA.p.y;
    var cLocalx = xfAq.c * px + xfAq.s * py;
    var cLocaly = -xfAq.s * px + xfAq.c * py;
    var normalIndex = 0;
    var separation = -kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    var radius = polygon.m_radius + circle.m_radius;
    var vertexCount = polygon.m_count;
    var s;
    var vertices = polygon.m_vertices;
    var normals = polygon.m_normals;
    for (var i = 0; i < vertexCount; i++) {
      var vertex = vertices[i];
      var tempx = cLocalx - vertex.x;
      var tempy = cLocaly - vertex.y;
      s = normals[i].x * tempx + normals[i].y * tempy;
      if (s > radius) {
        return;
      }if (s > separation) {
        separation = s;
        normalIndex = i;
      }}
    var vertIndex1 = normalIndex;
    var vertIndex2 = (vertIndex1 + 1 | 0) < vertexCount ? vertIndex1 + 1 | 0 : 0;
    var v1 = vertices[vertIndex1];
    var v2 = vertices[vertIndex2];
    if (separation < Settings_getInstance().EPSILON) {
      manifold.pointCount = 1;
      manifold.type = Manifold$ManifoldType$FACE_A_getInstance();
      var normal = normals[normalIndex];
      manifold.localNormal.x = normal.x;
      manifold.localNormal.y = normal.y;
      manifold.localPoint.x = (v1.x + v2.x) * 0.5;
      manifold.localPoint.y = (v1.y + v2.y) * 0.5;
      var mpoint = manifold.points[0];
      mpoint.localPoint.x = circlep.x;
      mpoint.localPoint.y = circlep.y;
      mpoint.id.zero();
      return;
    }var tempX = cLocalx - v1.x;
    var tempY = cLocaly - v1.y;
    var temp2X = v2.x - v1.x;
    var temp2Y = v2.y - v1.y;
    var u1 = tempX * temp2X + tempY * temp2Y;
    var temp3X = cLocalx - v2.x;
    var temp3Y = cLocaly - v2.y;
    var temp4X = v1.x - v2.x;
    var temp4Y = v1.y - v2.y;
    var u2 = temp3X * temp4X + temp3Y * temp4Y;
    if (u1 <= 0.0) {
      var dx = cLocalx - v1.x;
      var dy = cLocaly - v1.y;
      if (dx * dx + dy * dy > radius * radius) {
        return;
      }manifold.pointCount = 1;
      manifold.type = Manifold$ManifoldType$FACE_A_getInstance();
      manifold.localNormal.x = cLocalx - v1.x;
      manifold.localNormal.y = cLocaly - v1.y;
      manifold.localNormal.normalize();
      manifold.localPoint.set_z1lo5s$(v1);
      manifold.points[0].localPoint.set_z1lo5s$(circlep);
      manifold.points[0].id.zero();
    } else if (u2 <= 0.0) {
      var dx_0 = cLocalx - v2.x;
      var dy_0 = cLocaly - v2.y;
      if (dx_0 * dx_0 + dy_0 * dy_0 > radius * radius) {
        return;
      }manifold.pointCount = 1;
      manifold.type = Manifold$ManifoldType$FACE_A_getInstance();
      manifold.localNormal.x = cLocalx - v2.x;
      manifold.localNormal.y = cLocaly - v2.y;
      manifold.localNormal.normalize();
      manifold.localPoint.set_z1lo5s$(v2);
      manifold.points[0].localPoint.set_z1lo5s$(circlep);
      manifold.points[0].id.zero();
    } else {
      var fcx = (v1.x + v2.x) * 0.5;
      var fcy = (v1.y + v2.y) * 0.5;
      var tx = cLocalx - fcx;
      var ty = cLocaly - fcy;
      var normal_0 = normals[vertIndex1];
      separation = tx * normal_0.x + ty * normal_0.y;
      if (separation > radius) {
        return;
      }manifold.pointCount = 1;
      manifold.type = Manifold$ManifoldType$FACE_A_getInstance();
      manifold.localNormal.set_z1lo5s$(normals[vertIndex1]);
      manifold.localPoint.x = fcx;
      manifold.localPoint.y = fcy;
      manifold.points[0].localPoint.set_z1lo5s$(circlep);
      manifold.points[0].id.zero();
    }
  };
  Collision.prototype.findMaxSeparation_6wjzhs$ = function (results, poly1, xf1, poly2, xf2) {
    var count1 = poly1.m_count;
    var count2 = poly2.m_count;
    var n1s = poly1.m_normals;
    var v1s = poly1.m_vertices;
    var v2s = poly2.m_vertices;
    Transform$Companion_getInstance().mulTransToOutUnsafe_bn1rqe$(xf2, xf1, this.xf_0, this.poolVec2_0);
    var xfq = this.xf_0.q;
    var bestIndex = 0;
    var maxSeparation = -kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    for (var i = 0; i < count1; i++) {
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(xfq, n1s[i], this.n_0);
      Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xf_0, v1s[i], this.v1_0);
      var si = kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
      for (var j = 0; j < count2; j++) {
        var v2sj = v2s[j];
        var sij = this.n_0.x * (v2sj.x - this.v1_0.x) + this.n_0.y * (v2sj.y - this.v1_0.y);
        if (sij < si) {
          si = sij;
        }}
      if (si > maxSeparation) {
        maxSeparation = si;
        bestIndex = i;
      }}
    results.edgeIndex = bestIndex;
    results.separation = maxSeparation;
  };
  Collision.prototype.findIncidentEdge_2xu3z5$ = function (c, poly1, xf1, edge1, poly2, xf2) {
    var count1 = poly1.m_count;
    var normals1 = poly1.m_normals;
    var count2 = poly2.m_count;
    var vertices2 = poly2.m_vertices;
    var normals2 = poly2.m_normals;
    if (!(0 <= edge1 && edge1 < count1)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var c0 = c[0];
    var c1 = c[1];
    var xf1q = xf1.q;
    var xf2q = xf2.q;
    var v = normals1[edge1];
    var tempx = xf1q.c * v.x - xf1q.s * v.y;
    var tempy = xf1q.s * v.x + xf1q.c * v.y;
    var normal1x = xf2q.c * tempx + xf2q.s * tempy;
    var normal1y = -xf2q.s * tempx + xf2q.c * tempy;
    var index = 0;
    var minDot = kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    for (var i = 0; i < count2; i++) {
      var b = normals2[i];
      var dot = normal1x * b.x + normal1y * b.y;
      if (dot < minDot) {
        minDot = dot;
        index = i;
      }}
    var i1 = index;
    var i2 = (i1 + 1 | 0) < count2 ? i1 + 1 | 0 : 0;
    var v1 = vertices2[i1];
    var out = c0.v;
    out.x = xf2q.c * v1.x - xf2q.s * v1.y + xf2.p.x;
    out.y = xf2q.s * v1.x + xf2q.c * v1.y + xf2.p.y;
    c0.id.indexA = toByte(edge1);
    c0.id.indexB = toByte(i1);
    c0.id.typeA = toByte(ContactID$Type$FACE_getInstance().ordinal);
    c0.id.typeB = toByte(ContactID$Type$VERTEX_getInstance().ordinal);
    var v2 = vertices2[i2];
    var out1 = c1.v;
    out1.x = xf2q.c * v2.x - xf2q.s * v2.y + xf2.p.x;
    out1.y = xf2q.s * v2.x + xf2q.c * v2.y + xf2.p.y;
    c1.id.indexA = toByte(edge1);
    c1.id.indexB = toByte(i2);
    c1.id.typeA = toByte(ContactID$Type$FACE_getInstance().ordinal);
    c1.id.typeB = toByte(ContactID$Type$VERTEX_getInstance().ordinal);
  };
  Collision.prototype.collidePolygons_fsxbfn$ = function (manifold, polyA, xfA, polyB, xfB) {
    var tmp$;
    manifold.pointCount = 0;
    var totalRadius = polyA.m_radius + polyB.m_radius;
    this.findMaxSeparation_6wjzhs$(this.results1_0, polyA, xfA, polyB, xfB);
    if (this.results1_0.separation > totalRadius) {
      return;
    }this.findMaxSeparation_6wjzhs$(this.results2_0, polyB, xfB, polyA, xfA);
    if (this.results2_0.separation > totalRadius) {
      return;
    }var poly1;
    var poly2;
    var xf1;
    var xf2;
    var edge1;
    var flip;
    var k_tol = 0.1 * Settings_getInstance().linearSlop;
    if (this.results2_0.separation > this.results1_0.separation + k_tol) {
      poly1 = polyB;
      poly2 = polyA;
      xf1 = xfB;
      xf2 = xfA;
      edge1 = this.results2_0.edgeIndex;
      manifold.type = Manifold$ManifoldType$FACE_B_getInstance();
      flip = true;
    } else {
      poly1 = polyA;
      poly2 = polyB;
      xf1 = xfA;
      xf2 = xfB;
      edge1 = this.results1_0.edgeIndex;
      manifold.type = Manifold$ManifoldType$FACE_A_getInstance();
      flip = false;
    }
    var xf1q = xf1.q;
    this.findIncidentEdge_2xu3z5$(this.incidentEdge_0, poly1, xf1, edge1, poly2, xf2);
    var count1 = poly1.m_count;
    var vertices1 = poly1.m_vertices;
    var iv1 = edge1;
    var iv2 = (edge1 + 1 | 0) < count1 ? edge1 + 1 | 0 : 0;
    this.v11_0.set_z1lo5s$(vertices1[iv1]);
    this.v12_0.set_z1lo5s$(vertices1[iv2]);
    this.localTangent_0.x = this.v12_0.x - this.v11_0.x;
    this.localTangent_0.y = this.v12_0.y - this.v11_0.y;
    this.localTangent_0.normalize();
    this.localNormal_0.x = 1.0 * this.localTangent_0.y;
    this.localNormal_0.y = -1.0 * this.localTangent_0.x;
    this.planePoint_0.x = (this.v11_0.x + this.v12_0.x) * 0.5;
    this.planePoint_0.y = (this.v11_0.y + this.v12_0.y) * 0.5;
    this.tangent_0.x = xf1q.c * this.localTangent_0.x - xf1q.s * this.localTangent_0.y;
    this.tangent_0.y = xf1q.s * this.localTangent_0.x + xf1q.c * this.localTangent_0.y;
    var normalx = 1.0 * this.tangent_0.y;
    var normaly = -1.0 * this.tangent_0.x;
    Transform$Companion_getInstance().mulToOut_r18ri2$(xf1, this.v11_0, this.v11_0);
    Transform$Companion_getInstance().mulToOut_r18ri2$(xf1, this.v12_0, this.v12_0);
    var frontOffset = normalx * this.v11_0.x + normaly * this.v11_0.y;
    var sideOffset1 = -(this.tangent_0.x * this.v11_0.x + this.tangent_0.y * this.v11_0.y) + totalRadius;
    var sideOffset2 = this.tangent_0.x * this.v12_0.x + this.tangent_0.y * this.v12_0.y + totalRadius;
    var np;
    this.tangent_0.negateLocal();
    np = Collision$Companion_getInstance().clipSegmentToLine_apo6ex$(this.clipPoints1_0, this.incidentEdge_0, this.tangent_0, sideOffset1, iv1);
    this.tangent_0.negateLocal();
    if (np < 2) {
      return;
    }np = Collision$Companion_getInstance().clipSegmentToLine_apo6ex$(this.clipPoints2_0, this.clipPoints1_0, this.tangent_0, sideOffset2, iv2);
    if (np < 2) {
      return;
    }manifold.localNormal.set_z1lo5s$(this.localNormal_0);
    manifold.localPoint.set_z1lo5s$(this.planePoint_0);
    var pointCount = 0;
    tmp$ = Settings_getInstance().maxManifoldPoints;
    for (var i = 0; i < tmp$; i++) {
      var separation = normalx * this.clipPoints2_0[i].v.x + normaly * this.clipPoints2_0[i].v.y - frontOffset;
      if (separation <= totalRadius) {
        var cp = manifold.points[pointCount];
        var out = cp.localPoint;
        var px = this.clipPoints2_0[i].v.x - xf2.p.x;
        var py = this.clipPoints2_0[i].v.y - xf2.p.y;
        out.x = xf2.q.c * px + xf2.q.s * py;
        out.y = -xf2.q.s * px + xf2.q.c * py;
        cp.id.set_ejcfhu$(this.clipPoints2_0[i].id);
        if (flip) {
          cp.id.flip();
        }pointCount = pointCount + 1 | 0;
      }}
    manifold.pointCount = pointCount;
  };
  Collision.prototype.collideEdgeAndCircle_eglyfs$ = function (manifold, edgeA, xfA, circleB, xfB) {
    manifold.pointCount = 0;
    Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(xfB, circleB.m_p, this.temp_0);
    Transform$Companion_getInstance().mulTransToOutUnsafe_r18ri2$(xfA, this.temp_0, this.Q_0);
    var A = edgeA.m_vertex1;
    var B = edgeA.m_vertex2;
    this.e_0.set_z1lo5s$(B).subLocal_z1lo5s$(A);
    var u = Vec2$Companion_getInstance().dot_xjacks$(this.e_0, this.temp_0.set_z1lo5s$(B).subLocal_z1lo5s$(this.Q_0));
    var v = Vec2$Companion_getInstance().dot_xjacks$(this.e_0, this.temp_0.set_z1lo5s$(this.Q_0).subLocal_z1lo5s$(A));
    var radius = edgeA.m_radius + circleB.m_radius;
    this.cf_0.indexB = 0;
    this.cf_0.typeB = toByte(ContactID$Type$VERTEX_getInstance().ordinal);
    if (v <= 0.0) {
      var P = A;
      this.d_0.set_z1lo5s$(this.Q_0).subLocal_z1lo5s$(P);
      var dd = Vec2$Companion_getInstance().dot_xjacks$(this.d_0, this.d_0);
      if (dd > radius * radius) {
        return;
      }if (edgeA.m_hasVertex0) {
        var A1 = edgeA.m_vertex0;
        var B1 = A;
        this.e1_0.set_z1lo5s$(B1).subLocal_z1lo5s$(A1);
        var u1 = Vec2$Companion_getInstance().dot_xjacks$(this.e1_0, this.temp_0.set_z1lo5s$(B1).subLocal_z1lo5s$(this.Q_0));
        if (u1 > 0.0) {
          return;
        }}this.cf_0.indexA = 0;
      this.cf_0.typeA = toByte(ContactID$Type$VERTEX_getInstance().ordinal);
      manifold.pointCount = 1;
      manifold.type = Manifold$ManifoldType$CIRCLES_getInstance();
      manifold.localNormal.setZero();
      manifold.localPoint.set_z1lo5s$(P);
      manifold.points[0].id.set_ejcfhu$(this.cf_0);
      manifold.points[0].localPoint.set_z1lo5s$(circleB.m_p);
      return;
    }if (u <= 0.0) {
      var P_0 = B;
      this.d_0.set_z1lo5s$(this.Q_0).subLocal_z1lo5s$(P_0);
      var dd_0 = Vec2$Companion_getInstance().dot_xjacks$(this.d_0, this.d_0);
      if (dd_0 > radius * radius) {
        return;
      }if (edgeA.m_hasVertex3) {
        var B2 = edgeA.m_vertex3;
        var A2 = B;
        var e2 = this.e1_0;
        e2.set_z1lo5s$(B2).subLocal_z1lo5s$(A2);
        var v2 = Vec2$Companion_getInstance().dot_xjacks$(e2, this.temp_0.set_z1lo5s$(this.Q_0).subLocal_z1lo5s$(A2));
        if (v2 > 0.0) {
          return;
        }}this.cf_0.indexA = 1;
      this.cf_0.typeA = toByte(ContactID$Type$VERTEX_getInstance().ordinal);
      manifold.pointCount = 1;
      manifold.type = Manifold$ManifoldType$CIRCLES_getInstance();
      manifold.localNormal.setZero();
      manifold.localPoint.set_z1lo5s$(P_0);
      manifold.points[0].id.set_ejcfhu$(this.cf_0);
      manifold.points[0].localPoint.set_z1lo5s$(circleB.m_p);
      return;
    }var den = Vec2$Companion_getInstance().dot_xjacks$(this.e_0, this.e_0);
    if (!(den > 0.0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }this.P_0.set_z1lo5s$(A).mulLocal_mx4ult$(u).addLocal_z1lo5s$(this.temp_0.set_z1lo5s$(B).mulLocal_mx4ult$(v));
    this.P_0.mulLocal_mx4ult$(1.0 / den);
    this.d_0.set_z1lo5s$(this.Q_0).subLocal_z1lo5s$(this.P_0);
    var dd_1 = Vec2$Companion_getInstance().dot_xjacks$(this.d_0, this.d_0);
    if (dd_1 > radius * radius) {
      return;
    }this.n_0.x = -this.e_0.y;
    this.n_0.y = this.e_0.x;
    if (Vec2$Companion_getInstance().dot_xjacks$(this.n_0, this.temp_0.set_z1lo5s$(this.Q_0).subLocal_z1lo5s$(A)) < 0.0) {
      this.n_0.set_dleff0$(-this.n_0.x, -this.n_0.y);
    }this.n_0.normalize();
    this.cf_0.indexA = 0;
    this.cf_0.typeA = toByte(ContactID$Type$FACE_getInstance().ordinal);
    manifold.pointCount = 1;
    manifold.type = Manifold$ManifoldType$FACE_A_getInstance();
    manifold.localNormal.set_z1lo5s$(this.n_0);
    manifold.localPoint.set_z1lo5s$(A);
    manifold.points[0].id.set_ejcfhu$(this.cf_0);
    manifold.points[0].localPoint.set_z1lo5s$(circleB.m_p);
  };
  Collision.prototype.collideEdgeAndPolygon_h52eos$ = function (manifold, edgeA, xfA, polygonB, xfB) {
    this.collider_0.collide_h52eos$(manifold, edgeA, xfA, polygonB, xfB);
  };
  function Collision$EdgeResults() {
    this.separation = 0;
    this.edgeIndex = 0;
  }
  Collision$EdgeResults.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EdgeResults',
    interfaces: []
  };
  function Collision$ClipVertex() {
    this.v = new Vec2();
    this.id = ContactID_init();
  }
  Collision$ClipVertex.prototype.set_cizwsj$ = function (cv) {
    var v1 = cv.v;
    this.v.x = v1.x;
    this.v.y = v1.y;
    var c = cv.id;
    this.id.indexA = c.indexA;
    this.id.indexB = c.indexB;
    this.id.typeA = c.typeA;
    this.id.typeB = c.typeB;
  };
  Collision$ClipVertex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClipVertex',
    interfaces: []
  };
  function Collision$PointState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Collision$PointState_initFields() {
    Collision$PointState_initFields = function () {
    };
    Collision$PointState$NULL_STATE_instance = new Collision$PointState('NULL_STATE', 0);
    Collision$PointState$ADD_STATE_instance = new Collision$PointState('ADD_STATE', 1);
    Collision$PointState$PERSIST_STATE_instance = new Collision$PointState('PERSIST_STATE', 2);
    Collision$PointState$REMOVE_STATE_instance = new Collision$PointState('REMOVE_STATE', 3);
  }
  var Collision$PointState$NULL_STATE_instance;
  function Collision$PointState$NULL_STATE_getInstance() {
    Collision$PointState_initFields();
    return Collision$PointState$NULL_STATE_instance;
  }
  var Collision$PointState$ADD_STATE_instance;
  function Collision$PointState$ADD_STATE_getInstance() {
    Collision$PointState_initFields();
    return Collision$PointState$ADD_STATE_instance;
  }
  var Collision$PointState$PERSIST_STATE_instance;
  function Collision$PointState$PERSIST_STATE_getInstance() {
    Collision$PointState_initFields();
    return Collision$PointState$PERSIST_STATE_instance;
  }
  var Collision$PointState$REMOVE_STATE_instance;
  function Collision$PointState$REMOVE_STATE_getInstance() {
    Collision$PointState_initFields();
    return Collision$PointState$REMOVE_STATE_instance;
  }
  Collision$PointState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PointState',
    interfaces: [Enum]
  };
  function Collision$PointState$values() {
    return [Collision$PointState$NULL_STATE_getInstance(), Collision$PointState$ADD_STATE_getInstance(), Collision$PointState$PERSIST_STATE_getInstance(), Collision$PointState$REMOVE_STATE_getInstance()];
  }
  Collision$PointState.values = Collision$PointState$values;
  function Collision$PointState$valueOf(name) {
    switch (name) {
      case 'NULL_STATE':
        return Collision$PointState$NULL_STATE_getInstance();
      case 'ADD_STATE':
        return Collision$PointState$ADD_STATE_getInstance();
      case 'PERSIST_STATE':
        return Collision$PointState$PERSIST_STATE_getInstance();
      case 'REMOVE_STATE':
        return Collision$PointState$REMOVE_STATE_getInstance();
      default:throwISE('No enum constant org.jbox2d.collision.Collision.PointState.' + name);
    }
  }
  Collision$PointState.valueOf_61zpoe$ = Collision$PointState$valueOf;
  function Collision$EPAxis() {
    this.type = null;
    this.index = 0;
    this.separation = 0;
  }
  function Collision$EPAxis$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Collision$EPAxis$Type_initFields() {
    Collision$EPAxis$Type_initFields = function () {
    };
    Collision$EPAxis$Type$UNKNOWN_instance = new Collision$EPAxis$Type('UNKNOWN', 0);
    Collision$EPAxis$Type$EDGE_A_instance = new Collision$EPAxis$Type('EDGE_A', 1);
    Collision$EPAxis$Type$EDGE_B_instance = new Collision$EPAxis$Type('EDGE_B', 2);
  }
  var Collision$EPAxis$Type$UNKNOWN_instance;
  function Collision$EPAxis$Type$UNKNOWN_getInstance() {
    Collision$EPAxis$Type_initFields();
    return Collision$EPAxis$Type$UNKNOWN_instance;
  }
  var Collision$EPAxis$Type$EDGE_A_instance;
  function Collision$EPAxis$Type$EDGE_A_getInstance() {
    Collision$EPAxis$Type_initFields();
    return Collision$EPAxis$Type$EDGE_A_instance;
  }
  var Collision$EPAxis$Type$EDGE_B_instance;
  function Collision$EPAxis$Type$EDGE_B_getInstance() {
    Collision$EPAxis$Type_initFields();
    return Collision$EPAxis$Type$EDGE_B_instance;
  }
  Collision$EPAxis$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function Collision$EPAxis$Type$values() {
    return [Collision$EPAxis$Type$UNKNOWN_getInstance(), Collision$EPAxis$Type$EDGE_A_getInstance(), Collision$EPAxis$Type$EDGE_B_getInstance()];
  }
  Collision$EPAxis$Type.values = Collision$EPAxis$Type$values;
  function Collision$EPAxis$Type$valueOf(name) {
    switch (name) {
      case 'UNKNOWN':
        return Collision$EPAxis$Type$UNKNOWN_getInstance();
      case 'EDGE_A':
        return Collision$EPAxis$Type$EDGE_A_getInstance();
      case 'EDGE_B':
        return Collision$EPAxis$Type$EDGE_B_getInstance();
      default:throwISE('No enum constant org.jbox2d.collision.Collision.EPAxis.Type.' + name);
    }
  }
  Collision$EPAxis$Type.valueOf_61zpoe$ = Collision$EPAxis$Type$valueOf;
  Collision$EPAxis.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EPAxis',
    interfaces: []
  };
  function Collision$TempPolygon() {
    var array = Array_0(Settings_getInstance().maxPolygonVertices);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Vec2();
    }
    this.vertices = array;
    var array_0 = Array_0(Settings_getInstance().maxPolygonVertices);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = new Vec2();
    }
    this.normals = array_0;
    this.count = 0;
  }
  Collision$TempPolygon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TempPolygon',
    interfaces: []
  };
  function Collision$ReferenceFace() {
    this.i1 = 0;
    this.i2 = 0;
    this.v1 = new Vec2();
    this.v2 = new Vec2();
    this.normal = new Vec2();
    this.sideNormal1 = new Vec2();
    this.sideOffset1 = 0;
    this.sideNormal2 = new Vec2();
    this.sideOffset2 = 0;
  }
  Collision$ReferenceFace.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReferenceFace',
    interfaces: []
  };
  function Collision$EPCollider() {
    this.m_polygonB = new Collision$TempPolygon();
    this.m_xf = Transform_init();
    this.m_centroidB = new Vec2();
    this.m_v0 = new Vec2();
    this.m_v1 = new Vec2();
    this.m_v2 = new Vec2();
    this.m_v3 = new Vec2();
    this.m_normal0 = new Vec2();
    this.m_normal1 = new Vec2();
    this.m_normal2 = new Vec2();
    this.m_normal = new Vec2();
    this.m_type1 = null;
    this.m_type2 = null;
    this.m_lowerLimit = new Vec2();
    this.m_upperLimit = new Vec2();
    this.m_radius = 0;
    this.m_front = false;
    this.edge1_0 = new Vec2();
    this.temp_0 = new Vec2();
    this.edge0_0 = new Vec2();
    this.edge2_0 = new Vec2();
    var array = Array_0(2);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Collision$ClipVertex();
    }
    this.ie_0 = array;
    var array_0 = Array_0(2);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = new Collision$ClipVertex();
    }
    this.clipPoints1_0 = array_0;
    var array_1 = Array_0(2);
    var tmp$_1;
    tmp$_1 = array_1.length - 1 | 0;
    for (var i_1 = 0; i_1 <= tmp$_1; i_1++) {
      array_1[i_1] = new Collision$ClipVertex();
    }
    this.clipPoints2_0 = array_1;
    this.rf_0 = new Collision$ReferenceFace();
    this.edgeAxis_0 = new Collision$EPAxis();
    this.polygonAxis_0 = new Collision$EPAxis();
    this.perp_0 = new Vec2();
    this.n_0 = new Vec2();
    this.poolVec2_0 = new Vec2();
  }
  function Collision$EPCollider$VertexType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Collision$EPCollider$VertexType_initFields() {
    Collision$EPCollider$VertexType_initFields = function () {
    };
    Collision$EPCollider$VertexType$ISOLATED_instance = new Collision$EPCollider$VertexType('ISOLATED', 0);
    Collision$EPCollider$VertexType$CONCAVE_instance = new Collision$EPCollider$VertexType('CONCAVE', 1);
    Collision$EPCollider$VertexType$CONVEX_instance = new Collision$EPCollider$VertexType('CONVEX', 2);
  }
  var Collision$EPCollider$VertexType$ISOLATED_instance;
  function Collision$EPCollider$VertexType$ISOLATED_getInstance() {
    Collision$EPCollider$VertexType_initFields();
    return Collision$EPCollider$VertexType$ISOLATED_instance;
  }
  var Collision$EPCollider$VertexType$CONCAVE_instance;
  function Collision$EPCollider$VertexType$CONCAVE_getInstance() {
    Collision$EPCollider$VertexType_initFields();
    return Collision$EPCollider$VertexType$CONCAVE_instance;
  }
  var Collision$EPCollider$VertexType$CONVEX_instance;
  function Collision$EPCollider$VertexType$CONVEX_getInstance() {
    Collision$EPCollider$VertexType_initFields();
    return Collision$EPCollider$VertexType$CONVEX_instance;
  }
  Collision$EPCollider$VertexType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VertexType',
    interfaces: [Enum]
  };
  function Collision$EPCollider$VertexType$values() {
    return [Collision$EPCollider$VertexType$ISOLATED_getInstance(), Collision$EPCollider$VertexType$CONCAVE_getInstance(), Collision$EPCollider$VertexType$CONVEX_getInstance()];
  }
  Collision$EPCollider$VertexType.values = Collision$EPCollider$VertexType$values;
  function Collision$EPCollider$VertexType$valueOf(name) {
    switch (name) {
      case 'ISOLATED':
        return Collision$EPCollider$VertexType$ISOLATED_getInstance();
      case 'CONCAVE':
        return Collision$EPCollider$VertexType$CONCAVE_getInstance();
      case 'CONVEX':
        return Collision$EPCollider$VertexType$CONVEX_getInstance();
      default:throwISE('No enum constant org.jbox2d.collision.Collision.EPCollider.VertexType.' + name);
    }
  }
  Collision$EPCollider$VertexType.valueOf_61zpoe$ = Collision$EPCollider$VertexType$valueOf;
  Collision$EPCollider.prototype.collide_h52eos$ = function (manifold, edgeA, xfA, polygonB, xfB) {
    var tmp$, tmp$_0, tmp$_1;
    Transform$Companion_getInstance().mulTransToOutUnsafe_bn1rqe$(xfA, xfB, this.m_xf, this.poolVec2_0);
    Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.m_xf, polygonB.m_centroid, this.m_centroidB);
    this.m_v0 = edgeA.m_vertex0;
    this.m_v1 = edgeA.m_vertex1;
    this.m_v2 = edgeA.m_vertex2;
    this.m_v3 = edgeA.m_vertex3;
    var hasVertex0 = edgeA.m_hasVertex0;
    var hasVertex3 = edgeA.m_hasVertex3;
    this.edge1_0.set_z1lo5s$(this.m_v2).subLocal_z1lo5s$(this.m_v1);
    this.edge1_0.normalize();
    this.m_normal1.set_dleff0$(this.edge1_0.y, -this.edge1_0.x);
    var offset1 = Vec2$Companion_getInstance().dot_xjacks$(this.m_normal1, this.temp_0.set_z1lo5s$(this.m_centroidB).subLocal_z1lo5s$(this.m_v1));
    var offset0 = 0.0;
    var offset2 = 0.0;
    var convex1 = false;
    var convex2 = false;
    if (hasVertex0) {
      this.edge0_0.set_z1lo5s$(this.m_v1).subLocal_z1lo5s$(this.m_v0);
      this.edge0_0.normalize();
      this.m_normal0.set_dleff0$(this.edge0_0.y, -this.edge0_0.x);
      convex1 = Vec2$Companion_getInstance().cross_xjacks$(this.edge0_0, this.edge1_0) >= 0.0;
      offset0 = Vec2$Companion_getInstance().dot_xjacks$(this.m_normal0, this.temp_0.set_z1lo5s$(this.m_centroidB).subLocal_z1lo5s$(this.m_v0));
    }if (hasVertex3) {
      this.edge2_0.set_z1lo5s$(this.m_v3).subLocal_z1lo5s$(this.m_v2);
      this.edge2_0.normalize();
      this.m_normal2.set_dleff0$(this.edge2_0.y, -this.edge2_0.x);
      convex2 = Vec2$Companion_getInstance().cross_xjacks$(this.edge1_0, this.edge2_0) > 0.0;
      offset2 = Vec2$Companion_getInstance().dot_xjacks$(this.m_normal2, this.temp_0.set_z1lo5s$(this.m_centroidB).subLocal_z1lo5s$(this.m_v2));
    }if (hasVertex0 && hasVertex3) {
      if (convex1 && convex2) {
        this.m_front = offset0 >= 0.0 || offset1 >= 0.0 || offset2 >= 0.0;
        if (this.m_front) {
          this.m_normal.x = this.m_normal1.x;
          this.m_normal.y = this.m_normal1.y;
          this.m_lowerLimit.x = this.m_normal0.x;
          this.m_lowerLimit.y = this.m_normal0.y;
          this.m_upperLimit.x = this.m_normal2.x;
          this.m_upperLimit.y = this.m_normal2.y;
        } else {
          this.m_normal.x = -this.m_normal1.x;
          this.m_normal.y = -this.m_normal1.y;
          this.m_lowerLimit.x = -this.m_normal1.x;
          this.m_lowerLimit.y = -this.m_normal1.y;
          this.m_upperLimit.x = -this.m_normal1.x;
          this.m_upperLimit.y = -this.m_normal1.y;
        }
      } else if (convex1) {
        this.m_front = offset0 >= 0.0 || (offset1 >= 0.0 && offset2 >= 0.0);
        if (this.m_front) {
          this.m_normal.x = this.m_normal1.x;
          this.m_normal.y = this.m_normal1.y;
          this.m_lowerLimit.x = this.m_normal0.x;
          this.m_lowerLimit.y = this.m_normal0.y;
          this.m_upperLimit.x = this.m_normal1.x;
          this.m_upperLimit.y = this.m_normal1.y;
        } else {
          this.m_normal.x = -this.m_normal1.x;
          this.m_normal.y = -this.m_normal1.y;
          this.m_lowerLimit.x = -this.m_normal2.x;
          this.m_lowerLimit.y = -this.m_normal2.y;
          this.m_upperLimit.x = -this.m_normal1.x;
          this.m_upperLimit.y = -this.m_normal1.y;
        }
      } else if (convex2) {
        this.m_front = offset2 >= 0.0 || (offset0 >= 0.0 && offset1 >= 0.0);
        if (this.m_front) {
          this.m_normal.x = this.m_normal1.x;
          this.m_normal.y = this.m_normal1.y;
          this.m_lowerLimit.x = this.m_normal1.x;
          this.m_lowerLimit.y = this.m_normal1.y;
          this.m_upperLimit.x = this.m_normal2.x;
          this.m_upperLimit.y = this.m_normal2.y;
        } else {
          this.m_normal.x = -this.m_normal1.x;
          this.m_normal.y = -this.m_normal1.y;
          this.m_lowerLimit.x = -this.m_normal1.x;
          this.m_lowerLimit.y = -this.m_normal1.y;
          this.m_upperLimit.x = -this.m_normal0.x;
          this.m_upperLimit.y = -this.m_normal0.y;
        }
      } else {
        this.m_front = (offset0 >= 0.0 && offset1 >= 0.0 && offset2 >= 0.0);
        if (this.m_front) {
          this.m_normal.x = this.m_normal1.x;
          this.m_normal.y = this.m_normal1.y;
          this.m_lowerLimit.x = this.m_normal1.x;
          this.m_lowerLimit.y = this.m_normal1.y;
          this.m_upperLimit.x = this.m_normal1.x;
          this.m_upperLimit.y = this.m_normal1.y;
        } else {
          this.m_normal.x = -this.m_normal1.x;
          this.m_normal.y = -this.m_normal1.y;
          this.m_lowerLimit.x = -this.m_normal2.x;
          this.m_lowerLimit.y = -this.m_normal2.y;
          this.m_upperLimit.x = -this.m_normal0.x;
          this.m_upperLimit.y = -this.m_normal0.y;
        }
      }
    } else if (hasVertex0) {
      if (convex1) {
        this.m_front = offset0 >= 0.0 || offset1 >= 0.0;
        if (this.m_front) {
          this.m_normal.x = this.m_normal1.x;
          this.m_normal.y = this.m_normal1.y;
          this.m_lowerLimit.x = this.m_normal0.x;
          this.m_lowerLimit.y = this.m_normal0.y;
          this.m_upperLimit.x = -this.m_normal1.x;
          this.m_upperLimit.y = -this.m_normal1.y;
        } else {
          this.m_normal.x = -this.m_normal1.x;
          this.m_normal.y = -this.m_normal1.y;
          this.m_lowerLimit.x = this.m_normal1.x;
          this.m_lowerLimit.y = this.m_normal1.y;
          this.m_upperLimit.x = -this.m_normal1.x;
          this.m_upperLimit.y = -this.m_normal1.y;
        }
      } else {
        this.m_front = (offset0 >= 0.0 && offset1 >= 0.0);
        if (this.m_front) {
          this.m_normal.x = this.m_normal1.x;
          this.m_normal.y = this.m_normal1.y;
          this.m_lowerLimit.x = this.m_normal1.x;
          this.m_lowerLimit.y = this.m_normal1.y;
          this.m_upperLimit.x = -this.m_normal1.x;
          this.m_upperLimit.y = -this.m_normal1.y;
        } else {
          this.m_normal.x = -this.m_normal1.x;
          this.m_normal.y = -this.m_normal1.y;
          this.m_lowerLimit.x = this.m_normal1.x;
          this.m_lowerLimit.y = this.m_normal1.y;
          this.m_upperLimit.x = -this.m_normal0.x;
          this.m_upperLimit.y = -this.m_normal0.y;
        }
      }
    } else if (hasVertex3) {
      if (convex2) {
        this.m_front = offset1 >= 0.0 || offset2 >= 0.0;
        if (this.m_front) {
          this.m_normal.x = this.m_normal1.x;
          this.m_normal.y = this.m_normal1.y;
          this.m_lowerLimit.x = -this.m_normal1.x;
          this.m_lowerLimit.y = -this.m_normal1.y;
          this.m_upperLimit.x = this.m_normal2.x;
          this.m_upperLimit.y = this.m_normal2.y;
        } else {
          this.m_normal.x = -this.m_normal1.x;
          this.m_normal.y = -this.m_normal1.y;
          this.m_lowerLimit.x = -this.m_normal1.x;
          this.m_lowerLimit.y = -this.m_normal1.y;
          this.m_upperLimit.x = this.m_normal1.x;
          this.m_upperLimit.y = this.m_normal1.y;
        }
      } else {
        this.m_front = (offset1 >= 0.0 && offset2 >= 0.0);
        if (this.m_front) {
          this.m_normal.x = this.m_normal1.x;
          this.m_normal.y = this.m_normal1.y;
          this.m_lowerLimit.x = -this.m_normal1.x;
          this.m_lowerLimit.y = -this.m_normal1.y;
          this.m_upperLimit.x = this.m_normal1.x;
          this.m_upperLimit.y = this.m_normal1.y;
        } else {
          this.m_normal.x = -this.m_normal1.x;
          this.m_normal.y = -this.m_normal1.y;
          this.m_lowerLimit.x = -this.m_normal2.x;
          this.m_lowerLimit.y = -this.m_normal2.y;
          this.m_upperLimit.x = this.m_normal1.x;
          this.m_upperLimit.y = this.m_normal1.y;
        }
      }
    } else {
      this.m_front = offset1 >= 0.0;
      if (this.m_front) {
        this.m_normal.x = this.m_normal1.x;
        this.m_normal.y = this.m_normal1.y;
        this.m_lowerLimit.x = -this.m_normal1.x;
        this.m_lowerLimit.y = -this.m_normal1.y;
        this.m_upperLimit.x = -this.m_normal1.x;
        this.m_upperLimit.y = -this.m_normal1.y;
      } else {
        this.m_normal.x = -this.m_normal1.x;
        this.m_normal.y = -this.m_normal1.y;
        this.m_lowerLimit.x = this.m_normal1.x;
        this.m_lowerLimit.y = this.m_normal1.y;
        this.m_upperLimit.x = this.m_normal1.x;
        this.m_upperLimit.y = this.m_normal1.y;
      }
    }
    this.m_polygonB.count = polygonB.m_count;
    tmp$ = polygonB.m_count;
    for (var i = 0; i < tmp$; i++) {
      Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.m_xf, polygonB.m_vertices[i], this.m_polygonB.vertices[i]);
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(this.m_xf.q, polygonB.m_normals[i], this.m_polygonB.normals[i]);
    }
    this.m_radius = 2.0 * Settings_getInstance().polygonRadius;
    manifold.pointCount = 0;
    this.computeEdgeSeparation_r5jtyt$(this.edgeAxis_0);
    if (equals(this.edgeAxis_0.type, Collision$EPAxis$Type$UNKNOWN_getInstance())) {
      return;
    }if (this.edgeAxis_0.separation > this.m_radius) {
      return;
    }this.computePolygonSeparation_r5jtyt$(this.polygonAxis_0);
    if (!equals(this.polygonAxis_0.type, Collision$EPAxis$Type$UNKNOWN_getInstance()) && this.polygonAxis_0.separation > this.m_radius) {
      return;
    }var k_relativeTol = 0.98;
    var k_absoluteTol = 0.001;
    var primaryAxis;
    if (equals(this.polygonAxis_0.type, Collision$EPAxis$Type$UNKNOWN_getInstance())) {
      primaryAxis = this.edgeAxis_0;
    } else if (this.polygonAxis_0.separation > k_relativeTol * this.edgeAxis_0.separation + k_absoluteTol) {
      primaryAxis = this.polygonAxis_0;
    } else {
      primaryAxis = this.edgeAxis_0;
    }
    var ie0 = this.ie_0[0];
    var ie1 = this.ie_0[1];
    if (equals(primaryAxis.type, Collision$EPAxis$Type$EDGE_A_getInstance())) {
      manifold.type = Manifold$ManifoldType$FACE_A_getInstance();
      var bestIndex = 0;
      var bestValue = Vec2$Companion_getInstance().dot_xjacks$(this.m_normal, this.m_polygonB.normals[0]);
      tmp$_0 = this.m_polygonB.count;
      for (var i_0 = 1; i_0 < tmp$_0; i_0++) {
        var value = Vec2$Companion_getInstance().dot_xjacks$(this.m_normal, this.m_polygonB.normals[i_0]);
        if (value < bestValue) {
          bestValue = value;
          bestIndex = i_0;
        }}
      var i1 = bestIndex;
      var i2 = (i1 + 1 | 0) < this.m_polygonB.count ? i1 + 1 | 0 : 0;
      ie0.v.set_z1lo5s$(this.m_polygonB.vertices[i1]);
      ie0.id.indexA = 0;
      ie0.id.indexB = toByte(i1);
      ie0.id.typeA = toByte(ContactID$Type$FACE_getInstance().ordinal);
      ie0.id.typeB = toByte(ContactID$Type$VERTEX_getInstance().ordinal);
      ie1.v.set_z1lo5s$(this.m_polygonB.vertices[i2]);
      ie1.id.indexA = 0;
      ie1.id.indexB = toByte(i2);
      ie1.id.typeA = toByte(ContactID$Type$FACE_getInstance().ordinal);
      ie1.id.typeB = toByte(ContactID$Type$VERTEX_getInstance().ordinal);
      if (this.m_front) {
        this.rf_0.i1 = 0;
        this.rf_0.i2 = 1;
        this.rf_0.v1.set_z1lo5s$(this.m_v1);
        this.rf_0.v2.set_z1lo5s$(this.m_v2);
        this.rf_0.normal.set_z1lo5s$(this.m_normal1);
      } else {
        this.rf_0.i1 = 1;
        this.rf_0.i2 = 0;
        this.rf_0.v1.set_z1lo5s$(this.m_v2);
        this.rf_0.v2.set_z1lo5s$(this.m_v1);
        this.rf_0.normal.set_z1lo5s$(this.m_normal1).negateLocal();
      }
    } else {
      manifold.type = Manifold$ManifoldType$FACE_B_getInstance();
      ie0.v.set_z1lo5s$(this.m_v1);
      ie0.id.indexA = 0;
      ie0.id.indexB = toByte(primaryAxis.index);
      ie0.id.typeA = toByte(ContactID$Type$VERTEX_getInstance().ordinal);
      ie0.id.typeB = toByte(ContactID$Type$FACE_getInstance().ordinal);
      ie1.v.set_z1lo5s$(this.m_v2);
      ie1.id.indexA = 0;
      ie1.id.indexB = toByte(primaryAxis.index);
      ie1.id.typeA = toByte(ContactID$Type$VERTEX_getInstance().ordinal);
      ie1.id.typeB = toByte(ContactID$Type$FACE_getInstance().ordinal);
      this.rf_0.i1 = primaryAxis.index;
      this.rf_0.i2 = (this.rf_0.i1 + 1 | 0) < this.m_polygonB.count ? this.rf_0.i1 + 1 | 0 : 0;
      this.rf_0.v1.set_z1lo5s$(this.m_polygonB.vertices[this.rf_0.i1]);
      this.rf_0.v2.set_z1lo5s$(this.m_polygonB.vertices[this.rf_0.i2]);
      this.rf_0.normal.set_z1lo5s$(this.m_polygonB.normals[this.rf_0.i1]);
    }
    this.rf_0.sideNormal1.set_dleff0$(this.rf_0.normal.y, -this.rf_0.normal.x);
    this.rf_0.sideNormal2.set_z1lo5s$(this.rf_0.sideNormal1).negateLocal();
    this.rf_0.sideOffset1 = Vec2$Companion_getInstance().dot_xjacks$(this.rf_0.sideNormal1, this.rf_0.v1);
    this.rf_0.sideOffset2 = Vec2$Companion_getInstance().dot_xjacks$(this.rf_0.sideNormal2, this.rf_0.v2);
    var np;
    np = Collision$Companion_getInstance().clipSegmentToLine_apo6ex$(this.clipPoints1_0, this.ie_0, this.rf_0.sideNormal1, this.rf_0.sideOffset1, this.rf_0.i1);
    if (np < Settings_getInstance().maxManifoldPoints) {
      return;
    }np = Collision$Companion_getInstance().clipSegmentToLine_apo6ex$(this.clipPoints2_0, this.clipPoints1_0, this.rf_0.sideNormal2, this.rf_0.sideOffset2, this.rf_0.i2);
    if (np < Settings_getInstance().maxManifoldPoints) {
      return;
    }if (equals(primaryAxis.type, Collision$EPAxis$Type$EDGE_A_getInstance())) {
      manifold.localNormal.set_z1lo5s$(this.rf_0.normal);
      manifold.localPoint.set_z1lo5s$(this.rf_0.v1);
    } else {
      manifold.localNormal.set_z1lo5s$(polygonB.m_normals[this.rf_0.i1]);
      manifold.localPoint.set_z1lo5s$(polygonB.m_vertices[this.rf_0.i1]);
    }
    var pointCount = 0;
    tmp$_1 = Settings_getInstance().maxManifoldPoints;
    for (var i_1 = 0; i_1 < tmp$_1; i_1++) {
      var separation;
      separation = Vec2$Companion_getInstance().dot_xjacks$(this.rf_0.normal, this.temp_0.set_z1lo5s$(this.clipPoints2_0[i_1].v).subLocal_z1lo5s$(this.rf_0.v1));
      if (separation <= this.m_radius) {
        var cp = manifold.points[pointCount];
        if (equals(primaryAxis.type, Collision$EPAxis$Type$EDGE_A_getInstance())) {
          Transform$Companion_getInstance().mulTransToOutUnsafe_r18ri2$(this.m_xf, this.clipPoints2_0[i_1].v, cp.localPoint);
          cp.id.set_ejcfhu$(this.clipPoints2_0[i_1].id);
        } else {
          cp.localPoint.set_z1lo5s$(this.clipPoints2_0[i_1].v);
          cp.id.typeA = this.clipPoints2_0[i_1].id.typeB;
          cp.id.typeB = this.clipPoints2_0[i_1].id.typeA;
          cp.id.indexA = this.clipPoints2_0[i_1].id.indexB;
          cp.id.indexB = this.clipPoints2_0[i_1].id.indexA;
        }
        pointCount = pointCount + 1 | 0;
      }}
    manifold.pointCount = pointCount;
  };
  Collision$EPCollider.prototype.computeEdgeSeparation_r5jtyt$ = function (axis) {
    var tmp$;
    axis.type = Collision$EPAxis$Type$EDGE_A_getInstance();
    axis.index = this.m_front ? 0 : 1;
    axis.separation = kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    var nx = this.m_normal.x;
    var ny = this.m_normal.y;
    tmp$ = this.m_polygonB.count;
    for (var i = 0; i < tmp$; i++) {
      var v = this.m_polygonB.vertices[i];
      var tempx = v.x - this.m_v1.x;
      var tempy = v.y - this.m_v1.y;
      var s = nx * tempx + ny * tempy;
      if (s < axis.separation) {
        axis.separation = s;
      }}
  };
  Collision$EPCollider.prototype.computePolygonSeparation_r5jtyt$ = function (axis) {
    var tmp$;
    axis.type = Collision$EPAxis$Type$UNKNOWN_getInstance();
    axis.index = -1;
    axis.separation = -kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    this.perp_0.x = -this.m_normal.y;
    this.perp_0.y = this.m_normal.x;
    tmp$ = this.m_polygonB.count;
    for (var i = 0; i < tmp$; i++) {
      var normalB = this.m_polygonB.normals[i];
      var vB = this.m_polygonB.vertices[i];
      this.n_0.x = -normalB.x;
      this.n_0.y = -normalB.y;
      var tempx = vB.x - this.m_v1.x;
      var tempy = vB.y - this.m_v1.y;
      var s1 = this.n_0.x * tempx + this.n_0.y * tempy;
      tempx = vB.x - this.m_v2.x;
      tempy = vB.y - this.m_v2.y;
      var s2 = this.n_0.x * tempx + this.n_0.y * tempy;
      var s = MathUtils$Companion_getInstance().min_dleff0$(s1, s2);
      if (s > this.m_radius) {
        axis.type = Collision$EPAxis$Type$EDGE_B_getInstance();
        axis.index = i;
        axis.separation = s;
        return;
      }if (this.n_0.x * this.perp_0.x + this.n_0.y * this.perp_0.y >= 0.0) {
        if (Vec2$Companion_getInstance().dot_xjacks$(this.temp_0.set_z1lo5s$(this.n_0).subLocal_z1lo5s$(this.m_upperLimit), this.m_normal) < -Settings_getInstance().angularSlop) {
          continue;
        }} else {
        if (Vec2$Companion_getInstance().dot_xjacks$(this.temp_0.set_z1lo5s$(this.n_0).subLocal_z1lo5s$(this.m_lowerLimit), this.m_normal) < -Settings_getInstance().angularSlop) {
          continue;
        }}
      if (s > axis.separation) {
        axis.type = Collision$EPAxis$Type$EDGE_B_getInstance();
        axis.index = i;
        axis.separation = s;
      }}
  };
  Collision$EPCollider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EPCollider',
    interfaces: []
  };
  function Collision$Companion() {
    Collision$Companion_instance = this;
    this.NULL_FEATURE = 2147483647;
  }
  Collision$Companion.prototype.getPointStates_gzu7r2$ = function (state1, state2, manifold1, manifold2) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = Settings_getInstance().maxManifoldPoints;
    for (var i = 0; i < tmp$; i++) {
      state1[i] = Collision$PointState$NULL_STATE_getInstance();
      state2[i] = Collision$PointState$NULL_STATE_getInstance();
    }
    tmp$_0 = manifold1.pointCount;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
      var id = manifold1.points[i_0].id;
      state1[i_0] = Collision$PointState$REMOVE_STATE_getInstance();
      tmp$_1 = manifold2.pointCount;
      for (var j = 0; j < tmp$_1; j++) {
        if (manifold2.points[j].id.isEqual_ejcfhu$(id)) {
          state1[i_0] = Collision$PointState$PERSIST_STATE_getInstance();
          break;
        }}
    }
    tmp$_2 = manifold2.pointCount;
    for (var i_1 = 0; i_1 < tmp$_2; i_1++) {
      var id_0 = manifold2.points[i_1].id;
      state2[i_1] = Collision$PointState$ADD_STATE_getInstance();
      tmp$_3 = manifold1.pointCount;
      for (var j_0 = 0; j_0 < tmp$_3; j_0++) {
        if (manifold1.points[j_0].id.isEqual_ejcfhu$(id_0)) {
          state2[i_1] = Collision$PointState$PERSIST_STATE_getInstance();
          break;
        }}
    }
  };
  Collision$Companion.prototype.clipSegmentToLine_apo6ex$ = function (vOut, vIn, normal, offset, vertexIndexA) {
    var tmp$, tmp$_0;
    var numOut = 0;
    var vIn0 = vIn[0];
    var vIn1 = vIn[1];
    var vIn0v = vIn0.v;
    var vIn1v = vIn1.v;
    var distance0 = Vec2$Companion_getInstance().dot_xjacks$(normal, vIn0v) - offset;
    var distance1 = Vec2$Companion_getInstance().dot_xjacks$(normal, vIn1v) - offset;
    if (distance0 <= 0.0) {
      vOut[tmp$ = numOut, numOut = tmp$ + 1 | 0, tmp$].set_cizwsj$(vIn0);
    }if (distance1 <= 0.0) {
      vOut[tmp$_0 = numOut, numOut = tmp$_0 + 1 | 0, tmp$_0].set_cizwsj$(vIn1);
    }if (distance0 * distance1 < 0.0) {
      var interp = distance0 / (distance0 - distance1);
      var vOutNO = vOut[numOut];
      vOutNO.v.x = vIn0v.x + interp * (vIn1v.x - vIn0v.x);
      vOutNO.v.y = vIn0v.y + interp * (vIn1v.y - vIn0v.y);
      vOutNO.id.indexA = toByte(vertexIndexA);
      vOutNO.id.indexB = vIn0.id.indexB;
      vOutNO.id.typeA = toByte(ContactID$Type$VERTEX_getInstance().ordinal);
      vOutNO.id.typeB = toByte(ContactID$Type$FACE_getInstance().ordinal);
      numOut = numOut + 1 | 0;
    }return numOut;
  };
  Collision$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Collision$Companion_instance = null;
  function Collision$Companion_getInstance() {
    if (Collision$Companion_instance === null) {
      new Collision$Companion();
    }return Collision$Companion_instance;
  }
  Collision.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Collision',
    interfaces: []
  };
  function ContactID() {
    this.indexA = 0;
    this.indexB = 0;
    this.typeA = 0;
    this.typeB = 0;
  }
  Object.defineProperty(ContactID.prototype, 'key', {
    get: function () {
      return this.indexA << 24 | this.indexB << 16 | this.typeA << 8 | this.typeB;
    }
  });
  function ContactID$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ContactID$Type_initFields() {
    ContactID$Type_initFields = function () {
    };
    ContactID$Type$VERTEX_instance = new ContactID$Type('VERTEX', 0);
    ContactID$Type$FACE_instance = new ContactID$Type('FACE', 1);
  }
  var ContactID$Type$VERTEX_instance;
  function ContactID$Type$VERTEX_getInstance() {
    ContactID$Type_initFields();
    return ContactID$Type$VERTEX_instance;
  }
  var ContactID$Type$FACE_instance;
  function ContactID$Type$FACE_getInstance() {
    ContactID$Type_initFields();
    return ContactID$Type$FACE_instance;
  }
  ContactID$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function ContactID$Type$values() {
    return [ContactID$Type$VERTEX_getInstance(), ContactID$Type$FACE_getInstance()];
  }
  ContactID$Type.values = ContactID$Type$values;
  function ContactID$Type$valueOf(name) {
    switch (name) {
      case 'VERTEX':
        return ContactID$Type$VERTEX_getInstance();
      case 'FACE':
        return ContactID$Type$FACE_getInstance();
      default:throwISE('No enum constant org.jbox2d.collision.ContactID.Type.' + name);
    }
  }
  ContactID$Type.valueOf_61zpoe$ = ContactID$Type$valueOf;
  ContactID.prototype.isEqual_ejcfhu$ = function (cid) {
    return this.key === cid.key;
  };
  ContactID.prototype.set_ejcfhu$ = function (c) {
    this.indexA = c.indexA;
    this.indexB = c.indexB;
    this.typeA = c.typeA;
    this.typeB = c.typeB;
  };
  ContactID.prototype.flip = function () {
    var tempA = this.indexA;
    this.indexA = this.indexB;
    this.indexB = tempA;
    tempA = this.typeA;
    this.typeA = this.typeB;
    this.typeB = tempA;
  };
  ContactID.prototype.zero = function () {
    this.indexA = 0;
    this.indexB = 0;
    this.typeA = 0;
    this.typeB = 0;
  };
  ContactID.prototype.compareTo_11rb$ = function (o) {
    return this.key - o.key | 0;
  };
  ContactID.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactID',
    interfaces: [Comparable]
  };
  function ContactID_init($this) {
    $this = $this || Object.create(ContactID.prototype);
    ContactID.call($this);
    return $this;
  }
  function ContactID_init_0(c, $this) {
    $this = $this || Object.create(ContactID.prototype);
    ContactID.call($this);
    $this.set_ejcfhu$(c);
    return $this;
  }
  var arraycopy$lambda = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function Distance(stats) {
    Distance$Companion_getInstance();
    if (stats === void 0)
      stats = new Distance$Stats();
    this.stats = stats;
    this.simplex_0 = new Distance$Simplex(this);
    this.saveA_0 = new Int32Array(3);
    this.saveB_0 = new Int32Array(3);
    this.closestPoint_0 = new Vec2();
    this.d_0 = new Vec2();
    this.temp_0 = new Vec2();
    this.normal_0 = new Vec2();
  }
  function Distance$SimplexVertex($outer) {
    this.$outer = $outer;
    this.wA = new Vec2();
    this.wB = new Vec2();
    this.w = new Vec2();
    this.a = 0;
    this.indexA = 0;
    this.indexB = 0;
  }
  Distance$SimplexVertex.prototype.set_73lnya$ = function (sv) {
    this.wA.set_z1lo5s$(sv.wA);
    this.wB.set_z1lo5s$(sv.wB);
    this.w.set_z1lo5s$(sv.w);
    this.a = sv.a;
    this.indexA = sv.indexA;
    this.indexB = sv.indexB;
  };
  Distance$SimplexVertex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimplexVertex',
    interfaces: []
  };
  function Distance$SimplexCache() {
    this.metric = 0;
    this.count = 0;
    this.indexA = new Int32Array(3);
    this.indexB = new Int32Array(3);
    this.metric = 0.0;
    this.count = 0;
    this.indexA[0] = 2147483647;
    this.indexA[1] = 2147483647;
    this.indexA[2] = 2147483647;
    this.indexB[0] = 2147483647;
    this.indexB[1] = 2147483647;
    this.indexB[2] = 2147483647;
  }
  Distance$SimplexCache.prototype.set_ht4m08$ = function (sc) {
    arrayCopy(sc.indexA, this.indexA, 0, 0, 0 + this.indexA.length | 0);
    arrayCopy(sc.indexB, this.indexB, 0, 0, 0 + this.indexB.length | 0);
    this.metric = sc.metric;
    this.count = sc.count;
  };
  Distance$SimplexCache.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimplexCache',
    interfaces: []
  };
  function Distance$Simplex($outer) {
    this.$outer = $outer;
    this.m_v1 = new Distance$SimplexVertex(this.$outer);
    this.m_v2 = new Distance$SimplexVertex(this.$outer);
    this.m_v3 = new Distance$SimplexVertex(this.$outer);
    this.vertices = [this.m_v1, this.m_v2, this.m_v3];
    this.m_count = 0;
    this.e12_0 = new Vec2();
    this.case2_0 = new Vec2();
    this.case22_0 = new Vec2();
    this.case3_0 = new Vec2();
    this.case33_0 = new Vec2();
    this.e13_0 = new Vec2();
    this.e23_0 = new Vec2();
    this.w1_0 = new Vec2();
    this.w2_0 = new Vec2();
    this.w3_0 = new Vec2();
  }
  Object.defineProperty(Distance$Simplex.prototype, 'metric', {
    get: function () {
      switch (this.m_count) {
        case 0:
          if (!false) {
            var message = 'Check failed.';
            throw IllegalStateException_init(message.toString());
          }
          return 0.0;
        case 1:
          return 0.0;
        case 2:
          return MathUtils$Companion_getInstance().distance_xjacks$(this.m_v1.w, this.m_v2.w);
        case 3:
          this.case3_0.set_z1lo5s$(this.m_v2.w).subLocal_z1lo5s$(this.m_v1.w);
          this.case33_0.set_z1lo5s$(this.m_v3.w).subLocal_z1lo5s$(this.m_v1.w);
          return Vec2$Companion_getInstance().cross_xjacks$(this.case3_0, this.case33_0);
        default:if (!false) {
            var message_0 = 'Check failed.';
            throw IllegalStateException_init(message_0.toString());
          }
          return 0.0;
      }
    }
  });
  Distance$Simplex.prototype.readCache_5u70qi$ = function (cache, proxyA, transformA, proxyB, transformB) {
    var tmp$;
    if (!(cache.count <= 3)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }this.m_count = cache.count;
    tmp$ = this.m_count;
    for (var i = 0; i < tmp$; i++) {
      var v = this.vertices[i];
      v.indexA = cache.indexA[i];
      v.indexB = cache.indexB[i];
      var wALocal = proxyA.getVertex_za3lpa$(v.indexA);
      var wBLocal = proxyB.getVertex_za3lpa$(v.indexB);
      Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(transformA, wALocal, v.wA);
      Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(transformB, wBLocal, v.wB);
      v.w.set_z1lo5s$(v.wB).subLocal_z1lo5s$(v.wA);
      v.a = 0.0;
    }
    if (this.m_count > 1) {
      var metric1 = cache.metric;
      var metric2 = this.metric;
      if (metric2 < 0.5 * metric1 || 2.0 * metric1 < metric2 || metric2 < Settings_getInstance().EPSILON) {
        this.m_count = 0;
      }}if (this.m_count === 0) {
      var v_0 = this.vertices[0];
      v_0.indexA = 0;
      v_0.indexB = 0;
      var wALocal_0 = proxyA.getVertex_za3lpa$(0);
      var wBLocal_0 = proxyB.getVertex_za3lpa$(0);
      Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(transformA, wALocal_0, v_0.wA);
      Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(transformB, wBLocal_0, v_0.wB);
      v_0.w.set_z1lo5s$(v_0.wB).subLocal_z1lo5s$(v_0.wA);
      this.m_count = 1;
    }};
  Distance$Simplex.prototype.writeCache_ht4m08$ = function (cache) {
    var tmp$;
    cache.metric = this.metric;
    cache.count = this.m_count;
    tmp$ = this.m_count;
    for (var i = 0; i < tmp$; i++) {
      cache.indexA[i] = this.vertices[i].indexA;
      cache.indexB[i] = this.vertices[i].indexB;
    }
  };
  Distance$Simplex.prototype.getSearchDirection_z1lo5s$ = function (out) {
    switch (this.m_count) {
      case 1:
        out.set_z1lo5s$(this.m_v1.w).negateLocal();
        return;
      case 2:
        this.e12_0.set_z1lo5s$(this.m_v2.w).subLocal_z1lo5s$(this.m_v1.w);
        out.set_z1lo5s$(this.m_v1.w).negateLocal();
        var sgn = Vec2$Companion_getInstance().cross_xjacks$(this.e12_0, out);
        if (sgn > 0.0) {
          Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(1.0, this.e12_0, out);
          return;
        } else {
          Vec2$Companion_getInstance().crossToOutUnsafe_ixbvwv$(this.e12_0, 1.0, out);
          return;
        }

      default:if (!false) {
          var message = 'Check failed.';
          throw IllegalStateException_init(message.toString());
        }
        out.setZero();
        return;
    }
  };
  Distance$Simplex.prototype.getClosestPoint_z1lo5s$ = function (out) {
    switch (this.m_count) {
      case 0:
        if (!false) {
          var message = 'Check failed.';
          throw IllegalStateException_init(message.toString());
        }
        out.setZero();
        return;
      case 1:
        out.set_z1lo5s$(this.m_v1.w);
        return;
      case 2:
        this.case22_0.set_z1lo5s$(this.m_v2.w).mulLocal_mx4ult$(this.m_v2.a);
        this.case2_0.set_z1lo5s$(this.m_v1.w).mulLocal_mx4ult$(this.m_v1.a).addLocal_z1lo5s$(this.case22_0);
        out.set_z1lo5s$(this.case2_0);
        return;
      case 3:
        out.setZero();
        return;
      default:if (!false) {
          var message_0 = 'Check failed.';
          throw IllegalStateException_init(message_0.toString());
        }
        out.setZero();
        return;
    }
  };
  Distance$Simplex.prototype.getWitnessPoints_xjacks$ = function (pA, pB) {
    switch (this.m_count) {
      case 0:
        if (!false) {
          var message = 'Check failed.';
          throw IllegalStateException_init(message.toString());
        }
        break;
      case 1:
        pA.set_z1lo5s$(this.m_v1.wA);
        pB.set_z1lo5s$(this.m_v1.wB);
        break;
      case 2:
        this.case2_0.set_z1lo5s$(this.m_v1.wA).mulLocal_mx4ult$(this.m_v1.a);
        pA.set_z1lo5s$(this.m_v2.wA).mulLocal_mx4ult$(this.m_v2.a).addLocal_z1lo5s$(this.case2_0);
        this.case2_0.set_z1lo5s$(this.m_v1.wB).mulLocal_mx4ult$(this.m_v1.a);
        pB.set_z1lo5s$(this.m_v2.wB).mulLocal_mx4ult$(this.m_v2.a).addLocal_z1lo5s$(this.case2_0);
        break;
      case 3:
        pA.set_z1lo5s$(this.m_v1.wA).mulLocal_mx4ult$(this.m_v1.a);
        this.case3_0.set_z1lo5s$(this.m_v2.wA).mulLocal_mx4ult$(this.m_v2.a);
        this.case33_0.set_z1lo5s$(this.m_v3.wA).mulLocal_mx4ult$(this.m_v3.a);
        pA.addLocal_z1lo5s$(this.case3_0).addLocal_z1lo5s$(this.case33_0);
        pB.set_z1lo5s$(pA);
        break;
      default:if (!false) {
          var message_0 = 'Check failed.';
          throw IllegalStateException_init(message_0.toString());
        }
        break;
    }
  };
  Distance$Simplex.prototype.solve2 = function () {
    var w1 = this.m_v1.w;
    var w2 = this.m_v2.w;
    this.e12_0.set_z1lo5s$(w2).subLocal_z1lo5s$(w1);
    var d12_2 = -Vec2$Companion_getInstance().dot_xjacks$(w1, this.e12_0);
    if (d12_2 <= 0.0) {
      this.m_v1.a = 1.0;
      this.m_count = 1;
      return;
    }var d12_1 = Vec2$Companion_getInstance().dot_xjacks$(w2, this.e12_0);
    if (d12_1 <= 0.0) {
      this.m_v2.a = 1.0;
      this.m_count = 1;
      this.m_v1.set_73lnya$(this.m_v2);
      return;
    }var inv_d12 = 1.0 / (d12_1 + d12_2);
    this.m_v1.a = d12_1 * inv_d12;
    this.m_v2.a = d12_2 * inv_d12;
    this.m_count = 2;
  };
  Distance$Simplex.prototype.solve3 = function () {
    this.w1_0.set_z1lo5s$(this.m_v1.w);
    this.w2_0.set_z1lo5s$(this.m_v2.w);
    this.w3_0.set_z1lo5s$(this.m_v3.w);
    this.e12_0.set_z1lo5s$(this.w2_0).subLocal_z1lo5s$(this.w1_0);
    var w1e12 = Vec2$Companion_getInstance().dot_xjacks$(this.w1_0, this.e12_0);
    var w2e12 = Vec2$Companion_getInstance().dot_xjacks$(this.w2_0, this.e12_0);
    var d12_1 = w2e12;
    var d12_2 = -w1e12;
    this.e13_0.set_z1lo5s$(this.w3_0).subLocal_z1lo5s$(this.w1_0);
    var w1e13 = Vec2$Companion_getInstance().dot_xjacks$(this.w1_0, this.e13_0);
    var w3e13 = Vec2$Companion_getInstance().dot_xjacks$(this.w3_0, this.e13_0);
    var d13_1 = w3e13;
    var d13_2 = -w1e13;
    this.e23_0.set_z1lo5s$(this.w3_0).subLocal_z1lo5s$(this.w2_0);
    var w2e23 = Vec2$Companion_getInstance().dot_xjacks$(this.w2_0, this.e23_0);
    var w3e23 = Vec2$Companion_getInstance().dot_xjacks$(this.w3_0, this.e23_0);
    var d23_1 = w3e23;
    var d23_2 = -w2e23;
    var n123 = Vec2$Companion_getInstance().cross_xjacks$(this.e12_0, this.e13_0);
    var d123_1 = n123 * Vec2$Companion_getInstance().cross_xjacks$(this.w2_0, this.w3_0);
    var d123_2 = n123 * Vec2$Companion_getInstance().cross_xjacks$(this.w3_0, this.w1_0);
    var d123_3 = n123 * Vec2$Companion_getInstance().cross_xjacks$(this.w1_0, this.w2_0);
    if (d12_2 <= 0.0 && d13_2 <= 0.0) {
      this.m_v1.a = 1.0;
      this.m_count = 1;
      return;
    }if (d12_1 > 0.0 && d12_2 > 0.0 && d123_3 <= 0.0) {
      var inv_d12 = 1.0 / (d12_1 + d12_2);
      this.m_v1.a = d12_1 * inv_d12;
      this.m_v2.a = d12_2 * inv_d12;
      this.m_count = 2;
      return;
    }if (d13_1 > 0.0 && d13_2 > 0.0 && d123_2 <= 0.0) {
      var inv_d13 = 1.0 / (d13_1 + d13_2);
      this.m_v1.a = d13_1 * inv_d13;
      this.m_v3.a = d13_2 * inv_d13;
      this.m_count = 2;
      this.m_v2.set_73lnya$(this.m_v3);
      return;
    }if (d12_1 <= 0.0 && d23_2 <= 0.0) {
      this.m_v2.a = 1.0;
      this.m_count = 1;
      this.m_v1.set_73lnya$(this.m_v2);
      return;
    }if (d13_1 <= 0.0 && d23_1 <= 0.0) {
      this.m_v3.a = 1.0;
      this.m_count = 1;
      this.m_v1.set_73lnya$(this.m_v3);
      return;
    }if (d23_1 > 0.0 && d23_2 > 0.0 && d123_1 <= 0.0) {
      var inv_d23 = 1.0 / (d23_1 + d23_2);
      this.m_v2.a = d23_1 * inv_d23;
      this.m_v3.a = d23_2 * inv_d23;
      this.m_count = 2;
      this.m_v1.set_73lnya$(this.m_v3);
      return;
    }var inv_d123 = 1.0 / (d123_1 + d123_2 + d123_3);
    this.m_v1.a = d123_1 * inv_d123;
    this.m_v2.a = d123_2 * inv_d123;
    this.m_v3.a = d123_3 * inv_d123;
    this.m_count = 3;
  };
  Distance$Simplex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Simplex',
    interfaces: []
  };
  function Distance$DistanceProxy() {
    var array = Array_0(Settings_getInstance().maxPolygonVertices);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Vec2();
    }
    this.m_vertices = array;
    this.vertexCount = 0;
    this.m_radius = 0.0;
    var array_0 = Array_0(2);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = new Vec2();
    }
    this.m_buffer = array_0;
  }
  Distance$DistanceProxy.prototype.set_f381zw$ = function (shape, index) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    switch (shape.getType().name) {
      case 'CIRCLE':
        var circle = Kotlin.isType(tmp$ = shape, CircleShape) ? tmp$ : throwCCE();
        this.m_vertices[0].set_z1lo5s$(circle.m_p);
        this.vertexCount = 1;
        this.m_radius = circle.m_radius;
        break;
      case 'POLYGON':
        var poly = Kotlin.isType(tmp$_0 = shape, PolygonShape) ? tmp$_0 : throwCCE();
        this.vertexCount = poly.m_count;
        this.m_radius = poly.m_radius;
        tmp$_1 = this.vertexCount;
        for (var i = 0; i < tmp$_1; i++) {
          this.m_vertices[i].set_z1lo5s$(poly.m_vertices[i]);
        }

        break;
      case 'CHAIN':
        var chain = Kotlin.isType(tmp$_2 = shape, ChainShape) ? tmp$_2 : throwCCE();
        if (!(0 <= index && index < chain.m_count)) {
          var message = 'Check failed.';
          throw IllegalStateException_init(message.toString());
        }
        this.m_buffer[0] = ensureNotNull(chain.m_vertices)[index];
        if ((index + 1 | 0) < chain.m_count) {
          this.m_buffer[1] = ensureNotNull(chain.m_vertices)[index + 1 | 0];
        } else {
          this.m_buffer[1] = ensureNotNull(chain.m_vertices)[0];
        }

        this.m_vertices[0].set_z1lo5s$(this.m_buffer[0]);
        this.m_vertices[1].set_z1lo5s$(this.m_buffer[1]);
        this.vertexCount = 2;
        this.m_radius = chain.m_radius;
        break;
      case 'EDGE':
        var edge = Kotlin.isType(tmp$_3 = shape, EdgeShape) ? tmp$_3 : throwCCE();
        this.m_vertices[0].set_z1lo5s$(edge.m_vertex1);
        this.m_vertices[1].set_z1lo5s$(edge.m_vertex2);
        this.vertexCount = 2;
        this.m_radius = edge.m_radius;
        break;
      default:if (!false) {
          var message_0 = 'Check failed.';
          throw IllegalStateException_init(message_0.toString());
        }
        break;
    }
  };
  Distance$DistanceProxy.prototype.getSupport_z1lo5s$ = function (d) {
    var tmp$;
    var bestIndex = 0;
    var bestValue = Vec2$Companion_getInstance().dot_xjacks$(this.m_vertices[0], d);
    tmp$ = this.vertexCount;
    for (var i = 1; i < tmp$; i++) {
      var value = Vec2$Companion_getInstance().dot_xjacks$(this.m_vertices[i], d);
      if (value > bestValue) {
        bestIndex = i;
        bestValue = value;
      }}
    return bestIndex;
  };
  Distance$DistanceProxy.prototype.getSupportVertex_z1lo5s$ = function (d) {
    var tmp$;
    var bestIndex = 0;
    var bestValue = Vec2$Companion_getInstance().dot_xjacks$(this.m_vertices[0], d);
    tmp$ = this.vertexCount;
    for (var i = 1; i < tmp$; i++) {
      var value = Vec2$Companion_getInstance().dot_xjacks$(this.m_vertices[i], d);
      if (value > bestValue) {
        bestIndex = i;
        bestValue = value;
      }}
    return this.m_vertices[bestIndex];
  };
  Distance$DistanceProxy.prototype.getVertex_za3lpa$ = function (index) {
    if (!(0 <= index && index < this.vertexCount)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }return this.m_vertices[index];
  };
  Distance$DistanceProxy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DistanceProxy',
    interfaces: []
  };
  Distance.prototype.distance_x1dvfn$ = function (output, cache, input) {
    var tmp$, tmp$_0;
    var tmp$_1;
    tmp$_1 = this.stats;
    tmp$_1.GJK_CALLS = tmp$_1.GJK_CALLS + 1 | 0;
    var proxyA = input.proxyA;
    var proxyB = input.proxyB;
    var transformA = input.transformA;
    var transformB = input.transformB;
    this.simplex_0.readCache_5u70qi$(cache, proxyA, transformA, proxyB, transformB);
    var vertices = this.simplex_0.vertices;
    var saveCount = 0;
    this.simplex_0.getClosestPoint_z1lo5s$(this.closestPoint_0);
    var distanceSqr1 = this.closestPoint_0.lengthSquared();
    var distanceSqr2 = distanceSqr1;
    var iter = 0;
    while (iter < Distance$Companion_getInstance().MAX_ITERS) {
      saveCount = this.simplex_0.m_count;
      tmp$ = saveCount;
      for (var i = 0; i < tmp$; i++) {
        this.saveA_0[i] = vertices[i].indexA;
        this.saveB_0[i] = vertices[i].indexB;
      }
      switch (this.simplex_0.m_count) {
        case 1:
          break;
        case 2:
          this.simplex_0.solve2();
          break;
        case 3:
          this.simplex_0.solve3();
          break;
        default:if (!false) {
            var message = 'Check failed.';
            throw IllegalStateException_init(message.toString());
          }
          break;
      }
      if (this.simplex_0.m_count === 3) {
        break;
      }this.simplex_0.getClosestPoint_z1lo5s$(this.closestPoint_0);
      distanceSqr2 = this.closestPoint_0.lengthSquared();
      distanceSqr1 = distanceSqr2;
      this.simplex_0.getSearchDirection_z1lo5s$(this.d_0);
      if (this.d_0.lengthSquared() < Settings_getInstance().EPSILON * Settings_getInstance().EPSILON) {
        break;
      }var vertex = vertices[this.simplex_0.m_count];
      Rot$Companion_getInstance().mulTransUnsafe_ok1ihx$(transformA.q, this.d_0.negateLocal(), this.temp_0);
      vertex.indexA = proxyA.getSupport_z1lo5s$(this.temp_0);
      Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(transformA, proxyA.getVertex_za3lpa$(vertex.indexA), vertex.wA);
      Rot$Companion_getInstance().mulTransUnsafe_ok1ihx$(transformB.q, this.d_0.negateLocal(), this.temp_0);
      vertex.indexB = proxyB.getSupport_z1lo5s$(this.temp_0);
      Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(transformB, proxyB.getVertex_za3lpa$(vertex.indexB), vertex.wB);
      vertex.w.set_z1lo5s$(vertex.wB).subLocal_z1lo5s$(vertex.wA);
      iter = iter + 1 | 0;
      var tmp$_2;
      tmp$_2 = this.stats;
      tmp$_2.GJK_ITERS = tmp$_2.GJK_ITERS + 1 | 0;
      var duplicate = false;
      tmp$_0 = saveCount;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        if (vertex.indexA === this.saveA_0[i_0] && vertex.indexB === this.saveB_0[i_0]) {
          duplicate = true;
          break;
        }}
      if (duplicate) {
        break;
      }var tmp$_3;
      tmp$_3 = this.simplex_0;
      tmp$_3.m_count = tmp$_3.m_count + 1 | 0;
    }
    this.stats.GJK_MAX_ITERS = MathUtils$Companion_getInstance().max_vux9f0$(this.stats.GJK_MAX_ITERS, iter);
    this.simplex_0.getWitnessPoints_xjacks$(output.pointA, output.pointB);
    output.distance = MathUtils$Companion_getInstance().distance_xjacks$(output.pointA, output.pointB);
    output.iterations = iter;
    this.simplex_0.writeCache_ht4m08$(cache);
    if (input.useRadii) {
      var rA = proxyA.m_radius;
      var rB = proxyB.m_radius;
      if (output.distance > rA + rB && output.distance > Settings_getInstance().EPSILON) {
        output.distance = output.distance - (rA + rB);
        this.normal_0.set_z1lo5s$(output.pointB).subLocal_z1lo5s$(output.pointA);
        this.normal_0.normalize();
        this.temp_0.set_z1lo5s$(this.normal_0).mulLocal_mx4ult$(rA);
        output.pointA.addLocal_z1lo5s$(this.temp_0);
        this.temp_0.set_z1lo5s$(this.normal_0).mulLocal_mx4ult$(rB);
        output.pointB.subLocal_z1lo5s$(this.temp_0);
      } else {
        output.pointA.addLocal_z1lo5s$(output.pointB).mulLocal_mx4ult$(0.5);
        output.pointB.set_z1lo5s$(output.pointA);
        output.distance = 0.0;
      }
    }};
  function Distance$Companion() {
    Distance$Companion_instance = this;
    this.MAX_ITERS = 20;
  }
  Distance$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Distance$Companion_instance = null;
  function Distance$Companion_getInstance() {
    if (Distance$Companion_instance === null) {
      new Distance$Companion();
    }return Distance$Companion_instance;
  }
  function Distance$Stats() {
    this.GJK_CALLS = 0;
    this.GJK_ITERS = 0;
    this.GJK_MAX_ITERS = 20;
  }
  Distance$Stats.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stats',
    interfaces: []
  };
  Distance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Distance',
    interfaces: []
  };
  function DistanceInput() {
    this.proxyA = new Distance$DistanceProxy();
    this.proxyB = new Distance$DistanceProxy();
    this.transformA = Transform_init();
    this.transformB = Transform_init();
    this.useRadii = false;
  }
  DistanceInput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DistanceInput',
    interfaces: []
  };
  function DistanceOutput() {
    this.pointA = new Vec2();
    this.pointB = new Vec2();
    this.distance = 0;
    this.iterations = 0;
  }
  DistanceOutput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DistanceOutput',
    interfaces: []
  };
  function Manifold() {
    this.points = null;
    this.localNormal = null;
    this.localPoint = null;
    this.type = Manifold$ManifoldType$CIRCLES_getInstance();
    this.pointCount = 0;
  }
  function Manifold$ManifoldType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Manifold$ManifoldType_initFields() {
    Manifold$ManifoldType_initFields = function () {
    };
    Manifold$ManifoldType$CIRCLES_instance = new Manifold$ManifoldType('CIRCLES', 0);
    Manifold$ManifoldType$FACE_A_instance = new Manifold$ManifoldType('FACE_A', 1);
    Manifold$ManifoldType$FACE_B_instance = new Manifold$ManifoldType('FACE_B', 2);
  }
  var Manifold$ManifoldType$CIRCLES_instance;
  function Manifold$ManifoldType$CIRCLES_getInstance() {
    Manifold$ManifoldType_initFields();
    return Manifold$ManifoldType$CIRCLES_instance;
  }
  var Manifold$ManifoldType$FACE_A_instance;
  function Manifold$ManifoldType$FACE_A_getInstance() {
    Manifold$ManifoldType_initFields();
    return Manifold$ManifoldType$FACE_A_instance;
  }
  var Manifold$ManifoldType$FACE_B_instance;
  function Manifold$ManifoldType$FACE_B_getInstance() {
    Manifold$ManifoldType_initFields();
    return Manifold$ManifoldType$FACE_B_instance;
  }
  Manifold$ManifoldType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ManifoldType',
    interfaces: [Enum]
  };
  function Manifold$ManifoldType$values() {
    return [Manifold$ManifoldType$CIRCLES_getInstance(), Manifold$ManifoldType$FACE_A_getInstance(), Manifold$ManifoldType$FACE_B_getInstance()];
  }
  Manifold$ManifoldType.values = Manifold$ManifoldType$values;
  function Manifold$ManifoldType$valueOf(name) {
    switch (name) {
      case 'CIRCLES':
        return Manifold$ManifoldType$CIRCLES_getInstance();
      case 'FACE_A':
        return Manifold$ManifoldType$FACE_A_getInstance();
      case 'FACE_B':
        return Manifold$ManifoldType$FACE_B_getInstance();
      default:throwISE('No enum constant org.jbox2d.collision.Manifold.ManifoldType.' + name);
    }
  }
  Manifold$ManifoldType.valueOf_61zpoe$ = Manifold$ManifoldType$valueOf;
  Manifold.prototype.set_6hrjtp$ = function (cp) {
    var tmp$;
    tmp$ = cp.pointCount;
    for (var i = 0; i < tmp$; i++) {
      this.points[i].set_zaruk3$(cp.points[i]);
    }
    this.type = cp.type;
    this.localNormal.set_z1lo5s$(cp.localNormal);
    this.localPoint.set_z1lo5s$(cp.localPoint);
    this.pointCount = cp.pointCount;
  };
  Manifold.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Manifold',
    interfaces: []
  };
  function Manifold_init($this) {
    $this = $this || Object.create(Manifold.prototype);
    Manifold.call($this);
    var array = Array_0(Settings_getInstance().maxManifoldPoints);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = ManifoldPoint_init();
    }
    $this.points = array;
    $this.localNormal = new Vec2();
    $this.localPoint = new Vec2();
    $this.pointCount = 0;
    return $this;
  }
  function Manifold_init_0(other, $this) {
    $this = $this || Object.create(Manifold.prototype);
    Manifold.call($this);
    $this.localNormal = other.localNormal.clone();
    $this.localPoint = other.localPoint.clone();
    $this.pointCount = other.pointCount;
    $this.type = other.type;
    var array = Array_0(Settings_getInstance().maxManifoldPoints);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = ManifoldPoint_init_0(other.points[i]);
    }
    $this.points = array;
    return $this;
  }
  function ManifoldPoint() {
    this.localPoint = null;
    this.normalImpulse = 0;
    this.tangentImpulse = 0;
    this.id = null;
  }
  ManifoldPoint.prototype.set_zaruk3$ = function (cp) {
    this.localPoint.set_z1lo5s$(cp.localPoint);
    this.normalImpulse = cp.normalImpulse;
    this.tangentImpulse = cp.tangentImpulse;
    this.id.set_ejcfhu$(cp.id);
  };
  ManifoldPoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ManifoldPoint',
    interfaces: []
  };
  function ManifoldPoint_init($this) {
    $this = $this || Object.create(ManifoldPoint.prototype);
    ManifoldPoint.call($this);
    $this.localPoint = new Vec2();
    $this.tangentImpulse = 0.0;
    $this.normalImpulse = $this.tangentImpulse;
    $this.id = ContactID_init();
    return $this;
  }
  function ManifoldPoint_init_0(cp, $this) {
    $this = $this || Object.create(ManifoldPoint.prototype);
    ManifoldPoint.call($this);
    $this.localPoint = cp.localPoint.clone();
    $this.normalImpulse = cp.normalImpulse;
    $this.tangentImpulse = cp.tangentImpulse;
    $this.id = ContactID_init_0(cp.id);
    return $this;
  }
  function RayCastInput() {
    this.p1 = null;
    this.p2 = null;
    this.maxFraction = 0;
    this.p1 = new Vec2();
    this.p2 = new Vec2();
    this.maxFraction = 0.0;
  }
  RayCastInput.prototype.set_qcpqwi$ = function (rci) {
    this.p1.set_z1lo5s$(rci.p1);
    this.p2.set_z1lo5s$(rci.p2);
    this.maxFraction = rci.maxFraction;
  };
  RayCastInput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RayCastInput',
    interfaces: []
  };
  function RayCastOutput() {
    this.normal = null;
    this.fraction = 0;
    this.normal = new Vec2();
    this.fraction = 0.0;
  }
  RayCastOutput.prototype.set_wnqtdv$ = function (rco) {
    this.normal.set_z1lo5s$(rco.normal);
    this.fraction = rco.fraction;
  };
  RayCastOutput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RayCastOutput',
    interfaces: []
  };
  function TimeOfImpact(pool, stats) {
    TimeOfImpact$Companion_getInstance();
    if (stats === void 0)
      stats = new TimeOfImpact$Stats();
    this.pool_0 = pool;
    this.stats_0 = stats;
    this.cache_0 = new Distance$SimplexCache();
    this.distanceInput_0 = new DistanceInput();
    this.xfA_0 = Transform_init();
    this.xfB_0 = Transform_init();
    this.distanceOutput_0 = new DistanceOutput();
    this.fcn_0 = new SeparationFunction();
    this.indexes_0 = new Int32Array(2);
    this.sweepA_0 = new Sweep();
    this.sweepB_0 = new Sweep();
  }
  function TimeOfImpact$TOIInput() {
    this.proxyA = new Distance$DistanceProxy();
    this.proxyB = new Distance$DistanceProxy();
    this.sweepA = new Sweep();
    this.sweepB = new Sweep();
    this.tMax = 0;
  }
  TimeOfImpact$TOIInput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TOIInput',
    interfaces: []
  };
  function TimeOfImpact$TOIOutputState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TimeOfImpact$TOIOutputState_initFields() {
    TimeOfImpact$TOIOutputState_initFields = function () {
    };
    TimeOfImpact$TOIOutputState$UNKNOWN_instance = new TimeOfImpact$TOIOutputState('UNKNOWN', 0);
    TimeOfImpact$TOIOutputState$FAILED_instance = new TimeOfImpact$TOIOutputState('FAILED', 1);
    TimeOfImpact$TOIOutputState$OVERLAPPED_instance = new TimeOfImpact$TOIOutputState('OVERLAPPED', 2);
    TimeOfImpact$TOIOutputState$TOUCHING_instance = new TimeOfImpact$TOIOutputState('TOUCHING', 3);
    TimeOfImpact$TOIOutputState$SEPARATED_instance = new TimeOfImpact$TOIOutputState('SEPARATED', 4);
  }
  var TimeOfImpact$TOIOutputState$UNKNOWN_instance;
  function TimeOfImpact$TOIOutputState$UNKNOWN_getInstance() {
    TimeOfImpact$TOIOutputState_initFields();
    return TimeOfImpact$TOIOutputState$UNKNOWN_instance;
  }
  var TimeOfImpact$TOIOutputState$FAILED_instance;
  function TimeOfImpact$TOIOutputState$FAILED_getInstance() {
    TimeOfImpact$TOIOutputState_initFields();
    return TimeOfImpact$TOIOutputState$FAILED_instance;
  }
  var TimeOfImpact$TOIOutputState$OVERLAPPED_instance;
  function TimeOfImpact$TOIOutputState$OVERLAPPED_getInstance() {
    TimeOfImpact$TOIOutputState_initFields();
    return TimeOfImpact$TOIOutputState$OVERLAPPED_instance;
  }
  var TimeOfImpact$TOIOutputState$TOUCHING_instance;
  function TimeOfImpact$TOIOutputState$TOUCHING_getInstance() {
    TimeOfImpact$TOIOutputState_initFields();
    return TimeOfImpact$TOIOutputState$TOUCHING_instance;
  }
  var TimeOfImpact$TOIOutputState$SEPARATED_instance;
  function TimeOfImpact$TOIOutputState$SEPARATED_getInstance() {
    TimeOfImpact$TOIOutputState_initFields();
    return TimeOfImpact$TOIOutputState$SEPARATED_instance;
  }
  TimeOfImpact$TOIOutputState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TOIOutputState',
    interfaces: [Enum]
  };
  function TimeOfImpact$TOIOutputState$values() {
    return [TimeOfImpact$TOIOutputState$UNKNOWN_getInstance(), TimeOfImpact$TOIOutputState$FAILED_getInstance(), TimeOfImpact$TOIOutputState$OVERLAPPED_getInstance(), TimeOfImpact$TOIOutputState$TOUCHING_getInstance(), TimeOfImpact$TOIOutputState$SEPARATED_getInstance()];
  }
  TimeOfImpact$TOIOutputState.values = TimeOfImpact$TOIOutputState$values;
  function TimeOfImpact$TOIOutputState$valueOf(name) {
    switch (name) {
      case 'UNKNOWN':
        return TimeOfImpact$TOIOutputState$UNKNOWN_getInstance();
      case 'FAILED':
        return TimeOfImpact$TOIOutputState$FAILED_getInstance();
      case 'OVERLAPPED':
        return TimeOfImpact$TOIOutputState$OVERLAPPED_getInstance();
      case 'TOUCHING':
        return TimeOfImpact$TOIOutputState$TOUCHING_getInstance();
      case 'SEPARATED':
        return TimeOfImpact$TOIOutputState$SEPARATED_getInstance();
      default:throwISE('No enum constant org.jbox2d.collision.TimeOfImpact.TOIOutputState.' + name);
    }
  }
  TimeOfImpact$TOIOutputState.valueOf_61zpoe$ = TimeOfImpact$TOIOutputState$valueOf;
  function TimeOfImpact$TOIOutput() {
    this.state = null;
    this.t = 0;
  }
  TimeOfImpact$TOIOutput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TOIOutput',
    interfaces: []
  };
  TimeOfImpact.prototype.timeOfImpact_8iqk61$ = function (output, input) {
    var tmp$;
    tmp$ = this.stats_0;
    tmp$.toiCalls = tmp$.toiCalls + 1 | 0;
    output.state = TimeOfImpact$TOIOutputState$UNKNOWN_getInstance();
    output.t = input.tMax;
    var proxyA = input.proxyA;
    var proxyB = input.proxyB;
    this.sweepA_0.set_kvn64a$(input.sweepA);
    this.sweepB_0.set_kvn64a$(input.sweepB);
    this.sweepA_0.normalize();
    this.sweepB_0.normalize();
    var tMax = input.tMax;
    var totalRadius = proxyA.m_radius + proxyB.m_radius;
    var target = MathUtils$Companion_getInstance().max_dleff0$(Settings_getInstance().linearSlop, totalRadius - 3.0 * Settings_getInstance().linearSlop);
    var tolerance = 0.25 * Settings_getInstance().linearSlop;
    if (!(target > tolerance)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var t1 = 0.0;
    var iter = 0;
    this.cache_0.count = 0;
    this.distanceInput_0.proxyA = input.proxyA;
    this.distanceInput_0.proxyB = input.proxyB;
    this.distanceInput_0.useRadii = false;
    while (true) {
      this.sweepA_0.getTransform_pwshmp$(this.xfA_0, t1);
      this.sweepB_0.getTransform_pwshmp$(this.xfB_0, t1);
      this.distanceInput_0.transformA = this.xfA_0;
      this.distanceInput_0.transformB = this.xfB_0;
      this.pool_0.distance.distance_x1dvfn$(this.distanceOutput_0, this.cache_0, this.distanceInput_0);
      if (this.distanceOutput_0.distance <= 0.0) {
        output.state = TimeOfImpact$TOIOutputState$OVERLAPPED_getInstance();
        output.t = 0.0;
        break;
      }if (this.distanceOutput_0.distance < target + tolerance) {
        output.state = TimeOfImpact$TOIOutputState$TOUCHING_getInstance();
        output.t = t1;
        break;
      }this.fcn_0.initialize_l97uz$(this.cache_0, proxyA, this.sweepA_0, proxyB, this.sweepB_0, t1);
      var done = false;
      var t2 = tMax;
      var pushBackIter = 0;
      while (true) {
        var s2 = this.fcn_0.findMinSeparation_ssiet8$(this.indexes_0, t2);
        if (s2 > target + tolerance) {
          output.state = TimeOfImpact$TOIOutputState$SEPARATED_getInstance();
          output.t = tMax;
          done = true;
          break;
        }if (s2 > target - tolerance) {
          t1 = t2;
          break;
        }var s1 = this.fcn_0.evaluate_n0b4r3$(this.indexes_0[0], this.indexes_0[1], t1);
        if (s1 < target - tolerance) {
          output.state = TimeOfImpact$TOIOutputState$FAILED_getInstance();
          output.t = t1;
          done = true;
          break;
        }if (s1 <= target + tolerance) {
          output.state = TimeOfImpact$TOIOutputState$TOUCHING_getInstance();
          output.t = t1;
          done = true;
          break;
        }var rootIterCount = 0;
        var a1 = t1;
        var a2 = t2;
        while (true) {
          var t;
          if ((rootIterCount & 1) === 1) {
            t = a1 + (target - s1) * (a2 - a1) / (s2 - s1);
          } else {
            t = 0.5 * (a1 + a2);
          }
          rootIterCount = rootIterCount + 1 | 0;
          var tmp$_0;
          tmp$_0 = this.stats_0;
          tmp$_0.toiRootIters = tmp$_0.toiRootIters + 1 | 0;
          var s = this.fcn_0.evaluate_n0b4r3$(this.indexes_0[0], this.indexes_0[1], t);
          if (MathUtils$Companion_getInstance().abs_mx4ult$(s - target) < tolerance) {
            t2 = t;
            break;
          }if (s > target) {
            a1 = t;
            s1 = s;
          } else {
            a2 = t;
            s2 = s;
          }
          if (rootIterCount === TimeOfImpact$Companion_getInstance().MAX_ROOT_ITERATIONS) {
            break;
          }}
        this.stats_0.toiMaxRootIters = MathUtils$Companion_getInstance().max_vux9f0$(this.stats_0.toiMaxRootIters, rootIterCount);
        pushBackIter = pushBackIter + 1 | 0;
        if (pushBackIter === Settings_getInstance().maxPolygonVertices || rootIterCount === TimeOfImpact$Companion_getInstance().MAX_ROOT_ITERATIONS) {
          break;
        }}
      iter = iter + 1 | 0;
      var tmp$_1;
      tmp$_1 = this.stats_0;
      tmp$_1.toiIters = tmp$_1.toiIters + 1 | 0;
      if (done) {
        break;
      }if (iter === TimeOfImpact$Companion_getInstance().MAX_ITERATIONS) {
        output.state = TimeOfImpact$TOIOutputState$FAILED_getInstance();
        output.t = t1;
        break;
      }}
    this.stats_0.toiMaxIters = MathUtils$Companion_getInstance().max_vux9f0$(this.stats_0.toiMaxIters, iter);
  };
  function TimeOfImpact$Companion() {
    TimeOfImpact$Companion_instance = this;
    this.MAX_ITERATIONS = 20;
    this.MAX_ROOT_ITERATIONS = 50;
  }
  TimeOfImpact$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimeOfImpact$Companion_instance = null;
  function TimeOfImpact$Companion_getInstance() {
    if (TimeOfImpact$Companion_instance === null) {
      new TimeOfImpact$Companion();
    }return TimeOfImpact$Companion_instance;
  }
  function TimeOfImpact$Stats() {
    this.toiCalls = 0;
    this.toiIters = 0;
    this.toiMaxIters = 0;
    this.toiRootIters = 0;
    this.toiMaxRootIters = 0;
  }
  TimeOfImpact$Stats.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stats',
    interfaces: []
  };
  TimeOfImpact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeOfImpact',
    interfaces: []
  };
  function Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Type_initFields() {
    Type_initFields = function () {
    };
    Type$POINTS_instance = new Type('POINTS', 0);
    Type$FACE_A_instance = new Type('FACE_A', 1);
    Type$FACE_B_instance = new Type('FACE_B', 2);
  }
  var Type$POINTS_instance;
  function Type$POINTS_getInstance() {
    Type_initFields();
    return Type$POINTS_instance;
  }
  var Type$FACE_A_instance;
  function Type$FACE_A_getInstance() {
    Type_initFields();
    return Type$FACE_A_instance;
  }
  var Type$FACE_B_instance;
  function Type$FACE_B_getInstance() {
    Type_initFields();
    return Type$FACE_B_instance;
  }
  Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function Type$values() {
    return [Type$POINTS_getInstance(), Type$FACE_A_getInstance(), Type$FACE_B_getInstance()];
  }
  Type.values = Type$values;
  function Type$valueOf(name) {
    switch (name) {
      case 'POINTS':
        return Type$POINTS_getInstance();
      case 'FACE_A':
        return Type$FACE_A_getInstance();
      case 'FACE_B':
        return Type$FACE_B_getInstance();
      default:throwISE('No enum constant org.jbox2d.collision.Type.' + name);
    }
  }
  Type.valueOf_61zpoe$ = Type$valueOf;
  function SeparationFunction() {
    this.m_proxyA_ezgu36$_0 = this.m_proxyA_ezgu36$_0;
    this.m_proxyB_ezgu41$_0 = this.m_proxyB_ezgu41$_0;
    this.m_type_ahmdv9$_0 = this.m_type_ahmdv9$_0;
    this.m_localPoint = new Vec2();
    this.m_axis = new Vec2();
    this.m_sweepA_9t2ils$_0 = this.m_sweepA_9t2ils$_0;
    this.m_sweepB_9t2ikx$_0 = this.m_sweepB_9t2ikx$_0;
    this.localPointA_0 = new Vec2();
    this.localPointB_0 = new Vec2();
    this.pointA_0 = new Vec2();
    this.pointB_0 = new Vec2();
    this.localPointA1_0 = new Vec2();
    this.localPointA2_0 = new Vec2();
    this.normal_0 = new Vec2();
    this.localPointB1_0 = new Vec2();
    this.localPointB2_0 = new Vec2();
    this.temp_0 = new Vec2();
    this.xfa_0 = Transform_init();
    this.xfb_0 = Transform_init();
    this.axisA_0 = new Vec2();
    this.axisB_0 = new Vec2();
  }
  Object.defineProperty(SeparationFunction.prototype, 'm_proxyA', {
    get: function () {
      if (this.m_proxyA_ezgu36$_0 == null)
        return throwUPAE('m_proxyA');
      return this.m_proxyA_ezgu36$_0;
    },
    set: function (m_proxyA) {
      this.m_proxyA_ezgu36$_0 = m_proxyA;
    }
  });
  Object.defineProperty(SeparationFunction.prototype, 'm_proxyB', {
    get: function () {
      if (this.m_proxyB_ezgu41$_0 == null)
        return throwUPAE('m_proxyB');
      return this.m_proxyB_ezgu41$_0;
    },
    set: function (m_proxyB) {
      this.m_proxyB_ezgu41$_0 = m_proxyB;
    }
  });
  Object.defineProperty(SeparationFunction.prototype, 'm_type', {
    get: function () {
      if (this.m_type_ahmdv9$_0 == null)
        return throwUPAE('m_type');
      return this.m_type_ahmdv9$_0;
    },
    set: function (m_type) {
      this.m_type_ahmdv9$_0 = m_type;
    }
  });
  Object.defineProperty(SeparationFunction.prototype, 'm_sweepA', {
    get: function () {
      if (this.m_sweepA_9t2ils$_0 == null)
        return throwUPAE('m_sweepA');
      return this.m_sweepA_9t2ils$_0;
    },
    set: function (m_sweepA) {
      this.m_sweepA_9t2ils$_0 = m_sweepA;
    }
  });
  Object.defineProperty(SeparationFunction.prototype, 'm_sweepB', {
    get: function () {
      if (this.m_sweepB_9t2ikx$_0 == null)
        return throwUPAE('m_sweepB');
      return this.m_sweepB_9t2ikx$_0;
    },
    set: function (m_sweepB) {
      this.m_sweepB_9t2ikx$_0 = m_sweepB;
    }
  });
  SeparationFunction.prototype.initialize_l97uz$ = function (cache, proxyA, sweepA, proxyB, sweepB, t1) {
    this.m_proxyA = proxyA;
    this.m_proxyB = proxyB;
    var count = cache.count;
    if (!(0 < count && count < 3)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }this.m_sweepA = sweepA;
    this.m_sweepB = sweepB;
    this.m_sweepA.getTransform_pwshmp$(this.xfa_0, t1);
    this.m_sweepB.getTransform_pwshmp$(this.xfb_0, t1);
    if (count === 1) {
      this.m_type = Type$POINTS_getInstance();
      this.localPointA_0.set_z1lo5s$(this.m_proxyA.getVertex_za3lpa$(cache.indexA[0]));
      this.localPointB_0.set_z1lo5s$(this.m_proxyB.getVertex_za3lpa$(cache.indexB[0]));
      Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xfa_0, this.localPointA_0, this.pointA_0);
      Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xfb_0, this.localPointB_0, this.pointB_0);
      this.m_axis.set_z1lo5s$(this.pointB_0).subLocal_z1lo5s$(this.pointA_0);
      var s = this.m_axis.normalize();
      return s;
    } else if (cache.indexA[0] === cache.indexA[1]) {
      this.m_type = Type$FACE_B_getInstance();
      this.localPointB1_0.set_z1lo5s$(this.m_proxyB.getVertex_za3lpa$(cache.indexB[0]));
      this.localPointB2_0.set_z1lo5s$(this.m_proxyB.getVertex_za3lpa$(cache.indexB[1]));
      this.temp_0.set_z1lo5s$(this.localPointB2_0).subLocal_z1lo5s$(this.localPointB1_0);
      Vec2$Companion_getInstance().crossToOutUnsafe_ixbvwv$(this.temp_0, 1.0, this.m_axis);
      this.m_axis.normalize();
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(this.xfb_0.q, this.m_axis, this.normal_0);
      this.m_localPoint.set_z1lo5s$(this.localPointB1_0).addLocal_z1lo5s$(this.localPointB2_0).mulLocal_mx4ult$(0.5);
      Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xfb_0, this.m_localPoint, this.pointB_0);
      this.localPointA_0.set_z1lo5s$(proxyA.getVertex_za3lpa$(cache.indexA[0]));
      Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xfa_0, this.localPointA_0, this.pointA_0);
      this.temp_0.set_z1lo5s$(this.pointA_0).subLocal_z1lo5s$(this.pointB_0);
      var s_0 = Vec2$Companion_getInstance().dot_xjacks$(this.temp_0, this.normal_0);
      if (s_0 < 0.0) {
        this.m_axis.negateLocal();
        s_0 = -s_0;
      }return s_0;
    } else {
      this.m_type = Type$FACE_A_getInstance();
      this.localPointA1_0.set_z1lo5s$(this.m_proxyA.getVertex_za3lpa$(cache.indexA[0]));
      this.localPointA2_0.set_z1lo5s$(this.m_proxyA.getVertex_za3lpa$(cache.indexA[1]));
      this.temp_0.set_z1lo5s$(this.localPointA2_0).subLocal_z1lo5s$(this.localPointA1_0);
      Vec2$Companion_getInstance().crossToOutUnsafe_ixbvwv$(this.temp_0, 1.0, this.m_axis);
      this.m_axis.normalize();
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(this.xfa_0.q, this.m_axis, this.normal_0);
      this.m_localPoint.set_z1lo5s$(this.localPointA1_0).addLocal_z1lo5s$(this.localPointA2_0).mulLocal_mx4ult$(0.5);
      Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xfa_0, this.m_localPoint, this.pointA_0);
      this.localPointB_0.set_z1lo5s$(this.m_proxyB.getVertex_za3lpa$(cache.indexB[0]));
      Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xfb_0, this.localPointB_0, this.pointB_0);
      this.temp_0.set_z1lo5s$(this.pointB_0).subLocal_z1lo5s$(this.pointA_0);
      var s_1 = Vec2$Companion_getInstance().dot_xjacks$(this.temp_0, this.normal_0);
      if (s_1 < 0.0) {
        this.m_axis.negateLocal();
        s_1 = -s_1;
      }return s_1;
    }
  };
  SeparationFunction.prototype.findMinSeparation_ssiet8$ = function (indexes, t) {
    this.m_sweepA.getTransform_pwshmp$(this.xfa_0, t);
    this.m_sweepB.getTransform_pwshmp$(this.xfb_0, t);
    switch (this.m_type.name) {
      case 'POINTS':
        Rot$Companion_getInstance().mulTransUnsafe_ok1ihx$(this.xfa_0.q, this.m_axis, this.axisA_0);
        Rot$Companion_getInstance().mulTransUnsafe_ok1ihx$(this.xfb_0.q, this.m_axis.negateLocal(), this.axisB_0);
        this.m_axis.negateLocal();
        indexes[0] = this.m_proxyA.getSupport_z1lo5s$(this.axisA_0);
        indexes[1] = this.m_proxyB.getSupport_z1lo5s$(this.axisB_0);
        this.localPointA_0.set_z1lo5s$(this.m_proxyA.getVertex_za3lpa$(indexes[0]));
        this.localPointB_0.set_z1lo5s$(this.m_proxyB.getVertex_za3lpa$(indexes[1]));
        Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xfa_0, this.localPointA_0, this.pointA_0);
        Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xfb_0, this.localPointB_0, this.pointB_0);
        var separation = Vec2$Companion_getInstance().dot_xjacks$(this.pointB_0.subLocal_z1lo5s$(this.pointA_0), this.m_axis);
        return separation;
      case 'FACE_A':
        Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(this.xfa_0.q, this.m_axis, this.normal_0);
        Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xfa_0, this.m_localPoint, this.pointA_0);
        Rot$Companion_getInstance().mulTransUnsafe_ok1ihx$(this.xfb_0.q, this.normal_0.negateLocal(), this.axisB_0);
        this.normal_0.negateLocal();
        indexes[0] = -1;
        indexes[1] = this.m_proxyB.getSupport_z1lo5s$(this.axisB_0);
        this.localPointB_0.set_z1lo5s$(this.m_proxyB.getVertex_za3lpa$(indexes[1]));
        Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xfb_0, this.localPointB_0, this.pointB_0);
        var separation_0 = Vec2$Companion_getInstance().dot_xjacks$(this.pointB_0.subLocal_z1lo5s$(this.pointA_0), this.normal_0);
        return separation_0;
      case 'FACE_B':
        Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(this.xfb_0.q, this.m_axis, this.normal_0);
        Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xfb_0, this.m_localPoint, this.pointB_0);
        Rot$Companion_getInstance().mulTransUnsafe_ok1ihx$(this.xfa_0.q, this.normal_0.negateLocal(), this.axisA_0);
        this.normal_0.negateLocal();
        indexes[1] = -1;
        indexes[0] = this.m_proxyA.getSupport_z1lo5s$(this.axisA_0);
        this.localPointA_0.set_z1lo5s$(this.m_proxyA.getVertex_za3lpa$(indexes[0]));
        Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xfa_0, this.localPointA_0, this.pointA_0);
        var separation_1 = Vec2$Companion_getInstance().dot_xjacks$(this.pointA_0.subLocal_z1lo5s$(this.pointB_0), this.normal_0);
        return separation_1;
      default:if (!false) {
          var message = 'Check failed.';
          throw IllegalStateException_init(message.toString());
        }
        indexes[0] = -1;
        indexes[1] = -1;
        return 0.0;
    }
  };
  SeparationFunction.prototype.evaluate_n0b4r3$ = function (indexA, indexB, t) {
    this.m_sweepA.getTransform_pwshmp$(this.xfa_0, t);
    this.m_sweepB.getTransform_pwshmp$(this.xfb_0, t);
    switch (this.m_type.name) {
      case 'POINTS':
        this.localPointA_0.set_z1lo5s$(this.m_proxyA.getVertex_za3lpa$(indexA));
        this.localPointB_0.set_z1lo5s$(this.m_proxyB.getVertex_za3lpa$(indexB));
        Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xfa_0, this.localPointA_0, this.pointA_0);
        Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xfb_0, this.localPointB_0, this.pointB_0);
        var separation = Vec2$Companion_getInstance().dot_xjacks$(this.pointB_0.subLocal_z1lo5s$(this.pointA_0), this.m_axis);
        return separation;
      case 'FACE_A':
        Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(this.xfa_0.q, this.m_axis, this.normal_0);
        Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xfa_0, this.m_localPoint, this.pointA_0);
        this.localPointB_0.set_z1lo5s$(this.m_proxyB.getVertex_za3lpa$(indexB));
        Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xfb_0, this.localPointB_0, this.pointB_0);
        var separation_0 = Vec2$Companion_getInstance().dot_xjacks$(this.pointB_0.subLocal_z1lo5s$(this.pointA_0), this.normal_0);
        return separation_0;
      case 'FACE_B':
        Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(this.xfb_0.q, this.m_axis, this.normal_0);
        Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xfb_0, this.m_localPoint, this.pointB_0);
        this.localPointA_0.set_z1lo5s$(this.m_proxyA.getVertex_za3lpa$(indexA));
        Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.xfa_0, this.localPointA_0, this.pointA_0);
        var separation_1 = Vec2$Companion_getInstance().dot_xjacks$(this.pointA_0.subLocal_z1lo5s$(this.pointB_0), this.normal_0);
        return separation_1;
      default:if (!false) {
          var message = 'Check failed.';
          throw IllegalStateException_init(message.toString());
        }
        return 0.0;
    }
  };
  SeparationFunction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SeparationFunction',
    interfaces: []
  };
  function WorldManifold() {
    this.normal = new Vec2();
    var array = Array_0(Settings_getInstance().maxManifoldPoints);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Vec2();
    }
    this.points = array;
    this.separations = new Float32Array(Settings_getInstance().maxManifoldPoints);
    this.pool3_0 = new Vec2();
    this.pool4_0 = new Vec2();
  }
  WorldManifold.prototype.initialize_2vqwsd$ = function (manifold, xfA, radiusA, xfB, radiusB) {
    var tmp$, tmp$_0;
    if (manifold.pointCount === 0) {
      return;
    }switch (manifold.type.name) {
      case 'CIRCLES':
        var pointA = this.pool3_0;
        var pointB = this.pool4_0;
        this.normal.x = 1.0;
        this.normal.y = 0.0;
        var v = manifold.localPoint;
        pointA.x = xfA.q.c * v.x - xfA.q.s * v.y + xfA.p.x;
        pointA.y = xfA.q.s * v.x + xfA.q.c * v.y + xfA.p.y;
        var mp0p = manifold.points[0].localPoint;
        pointB.x = xfB.q.c * mp0p.x - xfB.q.s * mp0p.y + xfB.p.x;
        pointB.y = xfB.q.s * mp0p.x + xfB.q.c * mp0p.y + xfB.p.y;
        if (MathUtils$Companion_getInstance().distanceSquared_xjacks$(pointA, pointB) > Settings_getInstance().EPSILON * Settings_getInstance().EPSILON) {
          this.normal.x = pointB.x - pointA.x;
          this.normal.y = pointB.y - pointA.y;
          this.normal.normalize();
        }
        var cAx = this.normal.x * radiusA + pointA.x;
        var cAy = this.normal.y * radiusA + pointA.y;
        var cBx = -this.normal.x * radiusB + pointB.x;
        var cBy = -this.normal.y * radiusB + pointB.y;
        this.points[0].x = (cAx + cBx) * 0.5;
        this.points[0].y = (cAy + cBy) * 0.5;
        this.separations[0] = (cBx - cAx) * this.normal.x + (cBy - cAy) * this.normal.y;
        break;
      case 'FACE_A':
        var planePoint = this.pool3_0;
        Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(xfA.q, manifold.localNormal, this.normal);
        Transform$Companion_getInstance().mulToOut_r18ri2$(xfA, manifold.localPoint, planePoint);
        var clipPoint = this.pool4_0;
        tmp$ = manifold.pointCount;
        for (var i = 0; i < tmp$; i++) {
          Transform$Companion_getInstance().mulToOut_r18ri2$(xfB, manifold.points[i].localPoint, clipPoint);
          var scalar = radiusA - ((clipPoint.x - planePoint.x) * this.normal.x + (clipPoint.y - planePoint.y) * this.normal.y);
          var cAx_0 = this.normal.x * scalar + clipPoint.x;
          var cAy_0 = this.normal.y * scalar + clipPoint.y;
          var cBx_0 = -this.normal.x * radiusB + clipPoint.x;
          var cBy_0 = -this.normal.y * radiusB + clipPoint.y;
          this.points[i].x = (cAx_0 + cBx_0) * 0.5;
          this.points[i].y = (cAy_0 + cBy_0) * 0.5;
          this.separations[i] = (cBx_0 - cAx_0) * this.normal.x + (cBy_0 - cAy_0) * this.normal.y;
        }

        break;
      case 'FACE_B':
        var planePoint_0 = this.pool3_0;
        Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(xfB.q, manifold.localNormal, this.normal);
        Transform$Companion_getInstance().mulToOut_r18ri2$(xfB, manifold.localPoint, planePoint_0);
        var clipPoint_0 = this.pool4_0;
        tmp$_0 = manifold.pointCount;
        for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
          Transform$Companion_getInstance().mulToOut_r18ri2$(xfA, manifold.points[i_0].localPoint, clipPoint_0);
          var scalar_0 = radiusB - ((clipPoint_0.x - planePoint_0.x) * this.normal.x + (clipPoint_0.y - planePoint_0.y) * this.normal.y);
          var cBx_1 = this.normal.x * scalar_0 + clipPoint_0.x;
          var cBy_1 = this.normal.y * scalar_0 + clipPoint_0.y;
          var cAx_1 = -this.normal.x * radiusA + clipPoint_0.x;
          var cAy_1 = -this.normal.y * radiusA + clipPoint_0.y;
          this.points[i_0].x = (cAx_1 + cBx_1) * 0.5;
          this.points[i_0].y = (cAy_1 + cBy_1) * 0.5;
          this.separations[i_0] = (cAx_1 - cBx_1) * this.normal.x + (cAy_1 - cBy_1) * this.normal.y;
        }

        this.normal.x = -this.normal.x;
        this.normal.y = -this.normal.y;
        break;
    }
  };
  WorldManifold.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WorldManifold',
    interfaces: []
  };
  function BroadPhase() {
    BroadPhase$Companion_getInstance();
  }
  function BroadPhase$Companion() {
    BroadPhase$Companion_instance = this;
    this.NULL_PROXY = -1;
  }
  BroadPhase$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BroadPhase$Companion_instance = null;
  function BroadPhase$Companion_getInstance() {
    if (BroadPhase$Companion_instance === null) {
      new BroadPhase$Companion();
    }return BroadPhase$Companion_instance;
  }
  BroadPhase.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BroadPhase',
    interfaces: []
  };
  function BroadPhaseStrategy() {
  }
  BroadPhaseStrategy.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BroadPhaseStrategy',
    interfaces: []
  };
  var arraycopy$lambda_0 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  var arraycopy$lambda_1 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function DefaultBroadPhaseBuffer(m_tree) {
    this.m_tree_0 = m_tree;
    this.proxyCount_gxa2ql$_0 = 0;
    this.m_moveBuffer_0 = null;
    this.m_moveCapacity_0 = 0;
    this.m_moveCount_0 = 0;
    this.m_pairBuffer_0 = null;
    this.m_pairCapacity_0 = 0;
    this.m_pairCount_0 = 0;
    this.m_queryProxyId_0 = 0;
    this.proxyCount = 0;
    this.m_pairCapacity_0 = 16;
    this.m_pairCount_0 = 0;
    var array = Array_0(this.m_pairCapacity_0);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Pair();
    }
    this.m_pairBuffer_0 = array;
    this.m_moveCapacity_0 = 16;
    this.m_moveCount_0 = 0;
    this.m_moveBuffer_0 = new Int32Array(this.m_moveCapacity_0);
    this.m_queryProxyId_0 = BroadPhase$Companion_getInstance().NULL_PROXY;
  }
  Object.defineProperty(DefaultBroadPhaseBuffer.prototype, 'proxyCount', {
    get: function () {
      return this.proxyCount_gxa2ql$_0;
    },
    set: function (value) {
      this.proxyCount_gxa2ql$_0 = value;
    }
  });
  Object.defineProperty(DefaultBroadPhaseBuffer.prototype, 'treeHeight', {
    get: function () {
      return this.m_tree_0.height;
    }
  });
  Object.defineProperty(DefaultBroadPhaseBuffer.prototype, 'treeBalance', {
    get: function () {
      return this.m_tree_0.maxBalance;
    }
  });
  Object.defineProperty(DefaultBroadPhaseBuffer.prototype, 'treeQuality', {
    get: function () {
      return this.m_tree_0.areaRatio;
    }
  });
  DefaultBroadPhaseBuffer.prototype.createProxy_rngc4e$ = function (aabb, userData) {
    var proxyId = this.m_tree_0.createProxy_rngc4e$(aabb, userData);
    this.proxyCount = this.proxyCount + 1 | 0;
    this.proxyCount;
    this.bufferMove_0(proxyId);
    return proxyId;
  };
  DefaultBroadPhaseBuffer.prototype.destroyProxy_za3lpa$ = function (proxyId) {
    this.unbufferMove_0(proxyId);
    this.proxyCount = this.proxyCount - 1 | 0;
    this.proxyCount;
    this.m_tree_0.destroyProxy_za3lpa$(proxyId);
  };
  DefaultBroadPhaseBuffer.prototype.moveProxy_jf99nd$ = function (proxyId, aabb, displacement) {
    var buffer = this.m_tree_0.moveProxy_jf99nd$(proxyId, aabb, displacement);
    if (buffer) {
      this.bufferMove_0(proxyId);
    }};
  DefaultBroadPhaseBuffer.prototype.touchProxy_za3lpa$ = function (proxyId) {
    this.bufferMove_0(proxyId);
  };
  DefaultBroadPhaseBuffer.prototype.getUserData_za3lpa$ = function (proxyId) {
    return this.m_tree_0.getUserData_za3lpa$(proxyId);
  };
  DefaultBroadPhaseBuffer.prototype.getFatAABB_za3lpa$ = function (proxyId) {
    return this.m_tree_0.getFatAABB_za3lpa$(proxyId);
  };
  DefaultBroadPhaseBuffer.prototype.testOverlap_vux9f0$ = function (proxyIdA, proxyIdB) {
    var tmp$;
    var a = this.m_tree_0.getFatAABB_za3lpa$(proxyIdA);
    var b = this.m_tree_0.getFatAABB_za3lpa$(proxyIdB);
    if (b.lowerBound.x - a.upperBound.x > 0.0 || b.lowerBound.y - a.upperBound.y > 0.0) {
      return false;
    }if (a.lowerBound.x - b.upperBound.x > 0.0 || a.lowerBound.y - b.upperBound.y > 0.0) {
      tmp$ = false;
    } else
      tmp$ = true;
    return tmp$;
  };
  DefaultBroadPhaseBuffer.prototype.drawTree_38pq6y$ = function (argDraw) {
    this.m_tree_0.drawTree_38pq6y$(argDraw);
  };
  DefaultBroadPhaseBuffer.prototype.updatePairs_uo1ez4$ = function (callback) {
    var tmp$;
    this.m_pairCount_0 = 0;
    tmp$ = this.m_moveCount_0;
    for (var i = 0; i < tmp$; i++) {
      this.m_queryProxyId_0 = ensureNotNull(this.m_moveBuffer_0)[i];
      if (this.m_queryProxyId_0 === BroadPhase$Companion_getInstance().NULL_PROXY) {
        continue;
      }var fatAABB = this.m_tree_0.getFatAABB_za3lpa$(this.m_queryProxyId_0);
      this.m_tree_0.query_yc3l05$(this, fatAABB);
    }
    this.m_moveCount_0 = 0;
    Arrays_sort(ensureNotNull(this.m_pairBuffer_0), 0, this.m_pairCount_0);
    var i_0 = 0;
    while (i_0 < this.m_pairCount_0) {
      var primaryPair = ensureNotNull(this.m_pairBuffer_0)[i_0];
      var userDataA = this.m_tree_0.getUserData_za3lpa$(primaryPair.proxyIdA);
      var userDataB = this.m_tree_0.getUserData_za3lpa$(primaryPair.proxyIdB);
      callback.addPair_oaftn8$(userDataA, userDataB);
      i_0 = i_0 + 1 | 0;
      while (i_0 < this.m_pairCount_0) {
        var pair = ensureNotNull(this.m_pairBuffer_0)[i_0];
        if (pair.proxyIdA !== primaryPair.proxyIdA || pair.proxyIdB !== primaryPair.proxyIdB) {
          break;
        }i_0 = i_0 + 1 | 0;
      }
    }
  };
  DefaultBroadPhaseBuffer.prototype.query_yc3l05$ = function (callback, aabb) {
    this.m_tree_0.query_yc3l05$(callback, aabb);
  };
  DefaultBroadPhaseBuffer.prototype.raycast_j5vfpb$ = function (callback, input) {
    this.m_tree_0.raycast_j5vfpb$(callback, input);
  };
  DefaultBroadPhaseBuffer.prototype.bufferMove_0 = function (proxyId) {
    if (this.m_moveCount_0 === this.m_moveCapacity_0) {
      var old = this.m_moveBuffer_0;
      this.m_moveCapacity_0 = this.m_moveCapacity_0 * 2 | 0;
      this.m_moveBuffer_0 = new Int32Array(this.m_moveCapacity_0);
      arrayCopy(ensureNotNull(old), ensureNotNull(this.m_moveBuffer_0), 0, 0, 0 + old.length | 0);
    }ensureNotNull(this.m_moveBuffer_0)[this.m_moveCount_0] = proxyId;
    this.m_moveCount_0 = this.m_moveCount_0 + 1 | 0;
  };
  DefaultBroadPhaseBuffer.prototype.unbufferMove_0 = function (proxyId) {
    var tmp$;
    tmp$ = this.m_moveCount_0;
    for (var i = 0; i < tmp$; i++) {
      if (ensureNotNull(this.m_moveBuffer_0)[i] === proxyId) {
        ensureNotNull(this.m_moveBuffer_0)[i] = BroadPhase$Companion_getInstance().NULL_PROXY;
      }}
  };
  DefaultBroadPhaseBuffer.prototype.treeCallback_za3lpa$ = function (proxyId) {
    var tmp$, tmp$_0;
    if (proxyId === this.m_queryProxyId_0) {
      return true;
    }if (this.m_pairCount_0 === this.m_pairCapacity_0) {
      var oldBuffer = this.m_pairBuffer_0;
      this.m_pairCapacity_0 = this.m_pairCapacity_0 * 2 | 0;
      this.m_pairBuffer_0 = Kotlin.isArray(tmp$ = Kotlin.newArray(this.m_pairCapacity_0, null)) ? tmp$ : throwCCE();
      arrayCopy(ensureNotNull(oldBuffer), ensureNotNull(this.m_pairBuffer_0), 0, 0, 0 + oldBuffer.length | 0);
      tmp$_0 = this.m_pairCapacity_0;
      for (var i = oldBuffer.length; i < tmp$_0; i++) {
        ensureNotNull(this.m_pairBuffer_0)[i] = new Pair();
      }
    }if (proxyId < this.m_queryProxyId_0) {
      ensureNotNull(this.m_pairBuffer_0)[this.m_pairCount_0].proxyIdA = proxyId;
      ensureNotNull(this.m_pairBuffer_0)[this.m_pairCount_0].proxyIdB = this.m_queryProxyId_0;
    } else {
      ensureNotNull(this.m_pairBuffer_0)[this.m_pairCount_0].proxyIdA = this.m_queryProxyId_0;
      ensureNotNull(this.m_pairBuffer_0)[this.m_pairCount_0].proxyIdB = proxyId;
    }
    this.m_pairCount_0 = this.m_pairCount_0 + 1 | 0;
    return true;
  };
  DefaultBroadPhaseBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultBroadPhaseBuffer',
    interfaces: [BroadPhase, TreeCallback]
  };
  var arraycopy$lambda_2 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function DynamicTree() {
    DynamicTree$Companion_getInstance();
    this.m_root_0 = null;
    var array = Array_0(16);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new DynamicTreeNode(i);
    }
    this.m_nodes_0 = array;
    this.m_nodeCount_0 = 0;
    this.m_nodeCapacity_0 = 16;
    this.m_freeList_0 = 0;
    var array_0 = Array_0(4);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = new Vec2();
    }
    this.drawVecs_0 = array_0;
    this.nodeStack_0 = Kotlin.newArray(20, null);
    this.nodeStackIndex_0 = 0;
    this.r_0 = new Vec2();
    this.aabb_0 = AABB_init();
    this.subInput_0 = new RayCastInput();
    this.combinedAABB_0 = AABB_init();
    this.color_0 = Color3f_init();
    this.textVec_0 = new Vec2();
    for (var i_1 = this.m_nodeCapacity_0 - 1 | 0; i_1 >= 0; i_1--) {
      ensureNotNull(this.m_nodes_0)[i_1].parent_8be2vx$ = i_1 === (this.m_nodeCapacity_0 - 1 | 0) ? null : ensureNotNull(this.m_nodes_0)[i_1 + 1 | 0];
      ensureNotNull(this.m_nodes_0)[i_1].height_8be2vx$ = -1;
    }
  }
  Object.defineProperty(DynamicTree.prototype, 'height', {
    get: function () {
      if (this.m_root_0 == null) {
        return 0;
      } else
        return ensureNotNull(this.m_root_0).height_8be2vx$;
    }
  });
  Object.defineProperty(DynamicTree.prototype, 'maxBalance', {
    get: function () {
      var tmp$;
      var maxBalance = 0;
      tmp$ = this.m_nodeCapacity_0;
      for (var i = 0; i < tmp$; i++) {
        var node = ensureNotNull(this.m_nodes_0)[i];
        if (node.height_8be2vx$ <= 1) {
          continue;
        }if (!(node.child1_8be2vx$ == null === false)) {
          var message = 'Check failed.';
          throw IllegalStateException_init(message.toString());
        }var child1 = node.child1_8be2vx$;
        var child2 = node.child2_8be2vx$;
        var balance = MathUtils$Companion_getInstance().abs_za3lpa$(ensureNotNull(child2).height_8be2vx$ - ensureNotNull(child1).height_8be2vx$ | 0);
        maxBalance = MathUtils$Companion_getInstance().max_vux9f0$(maxBalance, balance);
      }
      return maxBalance;
    }
  });
  Object.defineProperty(DynamicTree.prototype, 'areaRatio', {
    get: function () {
      var tmp$;
      if (this.m_root_0 == null) {
        return 0.0;
      }var root = this.m_root_0;
      var rootArea = ensureNotNull(root).aabb.perimeter;
      var totalArea = 0.0;
      tmp$ = this.m_nodeCapacity_0;
      for (var i = 0; i < tmp$; i++) {
        var node = ensureNotNull(this.m_nodes_0)[i];
        if (node.height_8be2vx$ < 0) {
          continue;
        }totalArea += node.aabb.perimeter;
      }
      return totalArea / rootArea;
    }
  });
  DynamicTree.prototype.createProxy_rngc4e$ = function (aabb, userData) {
    if (!aabb.isValid) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var node = this.allocateNode_0();
    var proxyId = node.id_8be2vx$;
    var nodeAABB = node.aabb;
    nodeAABB.lowerBound.x = aabb.lowerBound.x - Settings_getInstance().aabbExtension;
    nodeAABB.lowerBound.y = aabb.lowerBound.y - Settings_getInstance().aabbExtension;
    nodeAABB.upperBound.x = aabb.upperBound.x + Settings_getInstance().aabbExtension;
    nodeAABB.upperBound.y = aabb.upperBound.y + Settings_getInstance().aabbExtension;
    node.userData = userData;
    this.insertLeaf_0(proxyId);
    return proxyId;
  };
  DynamicTree.prototype.destroyProxy_za3lpa$ = function (proxyId) {
    if (!(0 <= proxyId && proxyId < this.m_nodeCapacity_0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var node = ensureNotNull(this.m_nodes_0)[proxyId];
    if (!(node.child1_8be2vx$ == null)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }this.removeLeaf_0(node);
    this.freeNode_0(node);
  };
  DynamicTree.prototype.moveProxy_jf99nd$ = function (proxyId, aabb, displacement) {
    if (!aabb.isValid) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(0 <= proxyId && proxyId < this.m_nodeCapacity_0)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }var node = ensureNotNull(this.m_nodes_0)[proxyId];
    if (!(node.child1_8be2vx$ == null)) {
      var message_1 = 'Check failed.';
      throw IllegalStateException_init(message_1.toString());
    }var nodeAABB = node.aabb;
    if (nodeAABB.lowerBound.x <= aabb.lowerBound.x && nodeAABB.lowerBound.y <= aabb.lowerBound.y && aabb.upperBound.x <= nodeAABB.upperBound.x && aabb.upperBound.y <= nodeAABB.upperBound.y) {
      return false;
    }this.removeLeaf_0(node);
    var lowerBound = nodeAABB.lowerBound;
    var upperBound = nodeAABB.upperBound;
    lowerBound.x = aabb.lowerBound.x - Settings_getInstance().aabbExtension;
    lowerBound.y = aabb.lowerBound.y - Settings_getInstance().aabbExtension;
    upperBound.x = aabb.upperBound.x + Settings_getInstance().aabbExtension;
    upperBound.y = aabb.upperBound.y + Settings_getInstance().aabbExtension;
    var dx = displacement.x * Settings_getInstance().aabbMultiplier;
    var dy = displacement.y * Settings_getInstance().aabbMultiplier;
    if (dx < 0.0) {
      lowerBound.x = lowerBound.x + dx;
    } else {
      upperBound.x = upperBound.x + dx;
    }
    if (dy < 0.0) {
      lowerBound.y = lowerBound.y + dy;
    } else {
      upperBound.y = upperBound.y + dy;
    }
    this.insertLeaf_0(proxyId);
    return true;
  };
  DynamicTree.prototype.getUserData_za3lpa$ = function (proxyId) {
    if (!(0 <= proxyId && proxyId < this.m_nodeCapacity_0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }return ensureNotNull(this.m_nodes_0)[proxyId].userData;
  };
  DynamicTree.prototype.getFatAABB_za3lpa$ = function (proxyId) {
    if (!(0 <= proxyId && proxyId < this.m_nodeCapacity_0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }return ensureNotNull(this.m_nodes_0)[proxyId].aabb;
  };
  DynamicTree.prototype.query_yc3l05$ = function (callback, aabb) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (!aabb.isValid) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }this.nodeStackIndex_0 = 0;
    this.nodeStack_0[tmp$ = this.nodeStackIndex_0, this.nodeStackIndex_0 = tmp$ + 1 | 0, tmp$] = this.m_root_0;
    while (this.nodeStackIndex_0 > 0) {
      tmp$_0 = this.nodeStack_0[this.nodeStackIndex_0 = this.nodeStackIndex_0 - 1 | 0, this.nodeStackIndex_0];
      if (tmp$_0 == null) {
        continue;
      }var node = tmp$_0;
      if (AABB$Companion_getInstance().testOverlap_rppivm$(node.aabb, aabb)) {
        if (node.child1_8be2vx$ == null) {
          var proceed = callback.treeCallback_za3lpa$(node.id_8be2vx$);
          if (!proceed) {
            return;
          }} else {
          if ((this.nodeStack_0.length - this.nodeStackIndex_0 - 2 | 0) <= 0) {
            var newBuffer = Kotlin.newArray(this.nodeStack_0.length * 2 | 0, null);
            arrayCopy(this.nodeStack_0, newBuffer, 0, 0, 0 + this.nodeStack_0.length | 0);
            this.nodeStack_0 = newBuffer;
          }this.nodeStack_0[tmp$_1 = this.nodeStackIndex_0, this.nodeStackIndex_0 = tmp$_1 + 1 | 0, tmp$_1] = node.child1_8be2vx$;
          this.nodeStack_0[tmp$_2 = this.nodeStackIndex_0, this.nodeStackIndex_0 = tmp$_2 + 1 | 0, tmp$_2] = node.child2_8be2vx$;
        }
      }}
  };
  DynamicTree.prototype.raycast_j5vfpb$ = function (callback, input) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var p1 = input.p1;
    var p2 = input.p2;
    var p1x = p1.x;
    var p2x = p2.x;
    var p1y = p1.y;
    var p2y = p2.y;
    var vx;
    var vy;
    var rx;
    var ry;
    var absVx;
    var absVy;
    var cx;
    var cy;
    var hx;
    var hy;
    var tempx;
    var tempy;
    this.r_0.x = p2x - p1x;
    this.r_0.y = p2y - p1y;
    if (!(this.r_0.x * this.r_0.x + this.r_0.y * this.r_0.y > 0.0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }this.r_0.normalize();
    rx = this.r_0.x;
    ry = this.r_0.y;
    vx = -1.0 * ry;
    vy = 1.0 * rx;
    absVx = MathUtils$Companion_getInstance().abs_mx4ult$(vx);
    absVy = MathUtils$Companion_getInstance().abs_mx4ult$(vy);
    var maxFraction = input.maxFraction;
    var segAABB = this.aabb_0;
    tempx = (p2x - p1x) * maxFraction + p1x;
    tempy = (p2y - p1y) * maxFraction + p1y;
    segAABB.lowerBound.x = p1x < tempx ? p1x : tempx;
    segAABB.lowerBound.y = p1y < tempy ? p1y : tempy;
    segAABB.upperBound.x = p1x > tempx ? p1x : tempx;
    segAABB.upperBound.y = p1y > tempy ? p1y : tempy;
    this.nodeStackIndex_0 = 0;
    this.nodeStack_0[tmp$ = this.nodeStackIndex_0, this.nodeStackIndex_0 = tmp$ + 1 | 0, tmp$] = this.m_root_0;
    while (this.nodeStackIndex_0 > 0) {
      tmp$_0 = this.nodeStack_0[this.nodeStackIndex_0 = this.nodeStackIndex_0 - 1 | 0, this.nodeStackIndex_0];
      if (tmp$_0 == null) {
        continue;
      }var node = tmp$_0;
      var nodeAABB = node.aabb;
      if (!AABB$Companion_getInstance().testOverlap_rppivm$(nodeAABB, segAABB)) {
        continue;
      }cx = (nodeAABB.lowerBound.x + nodeAABB.upperBound.x) * 0.5;
      cy = (nodeAABB.lowerBound.y + nodeAABB.upperBound.y) * 0.5;
      hx = (nodeAABB.upperBound.x - nodeAABB.lowerBound.x) * 0.5;
      hy = (nodeAABB.upperBound.y - nodeAABB.lowerBound.y) * 0.5;
      tempx = p1x - cx;
      tempy = p1y - cy;
      var separation = MathUtils$Companion_getInstance().abs_mx4ult$(vx * tempx + vy * tempy) - (absVx * hx + absVy * hy);
      if (separation > 0.0) {
        continue;
      }if (node.child1_8be2vx$ == null) {
        this.subInput_0.p1.x = p1x;
        this.subInput_0.p1.y = p1y;
        this.subInput_0.p2.x = p2x;
        this.subInput_0.p2.y = p2y;
        this.subInput_0.maxFraction = maxFraction;
        var value = callback.raycastCallback_5zkam8$(this.subInput_0, node.id_8be2vx$);
        if (value === 0.0) {
          return;
        }if (value > 0.0) {
          maxFraction = value;
          tempx = (p2x - p1x) * maxFraction + p1x;
          tempy = (p2y - p1y) * maxFraction + p1y;
          segAABB.lowerBound.x = p1x < tempx ? p1x : tempx;
          segAABB.lowerBound.y = p1y < tempy ? p1y : tempy;
          segAABB.upperBound.x = p1x > tempx ? p1x : tempx;
          segAABB.upperBound.y = p1y > tempy ? p1y : tempy;
        }} else {
        if ((this.nodeStack_0.length - this.nodeStackIndex_0 - 2 | 0) <= 0) {
          var newBuffer = Kotlin.newArray(this.nodeStack_0.length * 2 | 0, null);
          arrayCopy(this.nodeStack_0, newBuffer, 0, 0, 0 + this.nodeStack_0.length | 0);
          this.nodeStack_0 = newBuffer;
        }this.nodeStack_0[tmp$_1 = this.nodeStackIndex_0, this.nodeStackIndex_0 = tmp$_1 + 1 | 0, tmp$_1] = node.child1_8be2vx$;
        this.nodeStack_0[tmp$_2 = this.nodeStackIndex_0, this.nodeStackIndex_0 = tmp$_2 + 1 | 0, tmp$_2] = node.child2_8be2vx$;
      }
    }
  };
  DynamicTree.prototype.computeHeight = function () {
    return this.computeHeight_0(ensureNotNull(this.m_root_0));
  };
  DynamicTree.prototype.computeHeight_0 = function (node) {
    if (!(0 <= node.id_8be2vx$ && node.id_8be2vx$ < this.m_nodeCapacity_0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (node.child1_8be2vx$ == null) {
      return 0;
    }var height1 = this.computeHeight_0(ensureNotNull(node.child1_8be2vx$));
    var height2 = this.computeHeight_0(ensureNotNull(node.child2_8be2vx$));
    return 1 + MathUtils$Companion_getInstance().max_vux9f0$(height1, height2) | 0;
  };
  DynamicTree.prototype.validate = function () {
    this.validateStructure_0(this.m_root_0);
    this.validateMetrics_0(this.m_root_0);
    var freeCount = 0;
    var freeNode = this.m_freeList_0 !== DynamicTree$Companion_getInstance().NULL_NODE ? ensureNotNull(this.m_nodes_0)[this.m_freeList_0] : null;
    while (freeNode != null) {
      if (!(0 <= freeNode.id_8be2vx$ && freeNode.id_8be2vx$ < this.m_nodeCapacity_0)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }if (!(freeNode === ensureNotNull(this.m_nodes_0)[freeNode.id_8be2vx$])) {
        var message_0 = 'Check failed.';
        throw IllegalStateException_init(message_0.toString());
      }freeNode = freeNode.parent_8be2vx$;
      freeCount = freeCount + 1 | 0;
    }
    if (!(this.height === this.computeHeight())) {
      var message_1 = 'Check failed.';
      throw IllegalStateException_init(message_1.toString());
    }if (!((this.m_nodeCount_0 + freeCount | 0) === this.m_nodeCapacity_0)) {
      var message_2 = 'Check failed.';
      throw IllegalStateException_init(message_2.toString());
    }};
  DynamicTree.prototype.rebuildBottomUp = function () {
    var tmp$, tmp$_0, tmp$_1;
    var nodes = new Int32Array(this.m_nodeCount_0);
    var count = 0;
    tmp$ = this.m_nodeCapacity_0;
    for (var i = 0; i < tmp$; i++) {
      if (ensureNotNull(this.m_nodes_0)[i].height_8be2vx$ < 0) {
        continue;
      }var node = ensureNotNull(this.m_nodes_0)[i];
      if (node.child1_8be2vx$ == null) {
        node.parent_8be2vx$ = null;
        nodes[count] = i;
        count = count + 1 | 0;
      } else {
        this.freeNode_0(node);
      }
    }
    var b = AABB_init();
    while (count > 1) {
      var minCost = kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
      var iMin = -1;
      var jMin = -1;
      tmp$_0 = count;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        var aabbi = ensureNotNull(this.m_nodes_0)[nodes[i_0]].aabb;
        tmp$_1 = count;
        for (var j = i_0 + 1 | 0; j < tmp$_1; j++) {
          var aabbj = ensureNotNull(this.m_nodes_0)[nodes[j]].aabb;
          b.combine_rppivm$(aabbi, aabbj);
          var cost = b.perimeter;
          if (cost < minCost) {
            iMin = i_0;
            jMin = j;
            minCost = cost;
          }}
      }
      var index1 = nodes[iMin];
      var index2 = nodes[jMin];
      var child1 = ensureNotNull(this.m_nodes_0)[index1];
      var child2 = ensureNotNull(this.m_nodes_0)[index2];
      var parent = this.allocateNode_0();
      parent.child1_8be2vx$ = child1;
      parent.child2_8be2vx$ = child2;
      parent.height_8be2vx$ = 1 + MathUtils$Companion_getInstance().max_vux9f0$(child1.height_8be2vx$, child2.height_8be2vx$) | 0;
      parent.aabb.combine_rppivm$(child1.aabb, child2.aabb);
      parent.parent_8be2vx$ = null;
      child1.parent_8be2vx$ = parent;
      child2.parent_8be2vx$ = parent;
      nodes[jMin] = nodes[count - 1 | 0];
      nodes[iMin] = parent.id_8be2vx$;
      count = count - 1 | 0;
    }
    this.m_root_0 = ensureNotNull(this.m_nodes_0)[nodes[0]];
    this.validate();
  };
  DynamicTree.prototype.allocateNode_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    if (this.m_freeList_0 === DynamicTree$Companion_getInstance().NULL_NODE) {
      if (!(this.m_nodeCount_0 === this.m_nodeCapacity_0)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }var old = this.m_nodes_0;
      this.m_nodeCapacity_0 = this.m_nodeCapacity_0 * 2 | 0;
      this.m_nodes_0 = Kotlin.isArray(tmp$ = Kotlin.newArray(this.m_nodeCapacity_0, null)) ? tmp$ : throwCCE();
      arrayCopy(ensureNotNull(old), ensureNotNull(this.m_nodes_0), 0, 0, 0 + old.length | 0);
      tmp$_0 = this.m_nodeCapacity_0 - 1 | 0;
      tmp$_1 = this.m_nodeCount_0;
      for (var i = tmp$_0; i >= tmp$_1; i--) {
        ensureNotNull(this.m_nodes_0)[i] = new DynamicTreeNode(i);
        ensureNotNull(this.m_nodes_0)[i].parent_8be2vx$ = i === (this.m_nodeCapacity_0 - 1 | 0) ? null : ensureNotNull(this.m_nodes_0)[i + 1 | 0];
        ensureNotNull(this.m_nodes_0)[i].height_8be2vx$ = -1;
      }
      this.m_freeList_0 = this.m_nodeCount_0;
    }var nodeId = this.m_freeList_0;
    var treeNode = ensureNotNull(this.m_nodes_0)[nodeId];
    this.m_freeList_0 = treeNode.parent_8be2vx$ != null ? ensureNotNull(treeNode.parent_8be2vx$).id_8be2vx$ : DynamicTree$Companion_getInstance().NULL_NODE;
    treeNode.parent_8be2vx$ = null;
    treeNode.child1_8be2vx$ = null;
    treeNode.child2_8be2vx$ = null;
    treeNode.height_8be2vx$ = 0;
    treeNode.userData = null;
    this.m_nodeCount_0 = this.m_nodeCount_0 + 1 | 0;
    return treeNode;
  };
  DynamicTree.prototype.freeNode_0 = function (node) {
    if (!(node != null)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(0 < this.m_nodeCount_0)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }node.parent_8be2vx$ = this.m_freeList_0 !== DynamicTree$Companion_getInstance().NULL_NODE ? ensureNotNull(this.m_nodes_0)[this.m_freeList_0] : null;
    node.height_8be2vx$ = -1;
    this.m_freeList_0 = node.id_8be2vx$;
    this.m_nodeCount_0 = this.m_nodeCount_0 - 1 | 0;
  };
  DynamicTree.prototype.insertLeaf_0 = function (leaf_index) {
    var leaf = ensureNotNull(this.m_nodes_0)[leaf_index];
    if (this.m_root_0 == null) {
      this.m_root_0 = leaf;
      ensureNotNull(this.m_root_0).parent_8be2vx$ = null;
      return;
    }var leafAABB = leaf.aabb;
    var index = this.m_root_0;
    while (ensureNotNull(index).child1_8be2vx$ != null) {
      var node = index;
      var child1 = node.child1_8be2vx$;
      var child2 = node.child2_8be2vx$;
      var area = node.aabb.perimeter;
      this.combinedAABB_0.combine_rppivm$(node.aabb, leafAABB);
      var combinedArea = this.combinedAABB_0.perimeter;
      var cost = 2.0 * combinedArea;
      var inheritanceCost = 2.0 * (combinedArea - area);
      var cost1;
      if (ensureNotNull(child1).child1_8be2vx$ == null) {
        this.combinedAABB_0.combine_rppivm$(leafAABB, child1.aabb);
        cost1 = this.combinedAABB_0.perimeter + inheritanceCost;
      } else {
        this.combinedAABB_0.combine_rppivm$(leafAABB, child1.aabb);
        var oldArea = child1.aabb.perimeter;
        var newArea = this.combinedAABB_0.perimeter;
        cost1 = newArea - oldArea + inheritanceCost;
      }
      var cost2;
      if (ensureNotNull(child2).child1_8be2vx$ == null) {
        this.combinedAABB_0.combine_rppivm$(leafAABB, child2.aabb);
        cost2 = this.combinedAABB_0.perimeter + inheritanceCost;
      } else {
        this.combinedAABB_0.combine_rppivm$(leafAABB, child2.aabb);
        var oldArea_0 = child2.aabb.perimeter;
        var newArea_0 = this.combinedAABB_0.perimeter;
        cost2 = newArea_0 - oldArea_0 + inheritanceCost;
      }
      if (cost < cost1 && cost < cost2) {
        break;
      }if (cost1 < cost2) {
        index = child1;
      } else {
        index = child2;
      }
    }
    var sibling = index;
    var oldParent = ensureNotNull(this.m_nodes_0)[sibling.id_8be2vx$].parent_8be2vx$;
    var newParent = this.allocateNode_0();
    newParent.parent_8be2vx$ = oldParent;
    newParent.userData = null;
    newParent.aabb.combine_rppivm$(leafAABB, sibling.aabb);
    newParent.height_8be2vx$ = sibling.height_8be2vx$ + 1 | 0;
    if (oldParent != null) {
      if (oldParent.child1_8be2vx$ === sibling) {
        oldParent.child1_8be2vx$ = newParent;
      } else {
        oldParent.child2_8be2vx$ = newParent;
      }
      newParent.child1_8be2vx$ = sibling;
      newParent.child2_8be2vx$ = leaf;
      sibling.parent_8be2vx$ = newParent;
      leaf.parent_8be2vx$ = newParent;
    } else {
      newParent.child1_8be2vx$ = sibling;
      newParent.child2_8be2vx$ = leaf;
      sibling.parent_8be2vx$ = newParent;
      leaf.parent_8be2vx$ = newParent;
      this.m_root_0 = newParent;
    }
    index = leaf.parent_8be2vx$;
    while (index != null) {
      index = this.balance_0(index);
      var child1_0 = index.child1_8be2vx$;
      var child2_0 = index.child2_8be2vx$;
      if (!(child1_0 != null)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }if (!(child2_0 != null)) {
        var message_0 = 'Check failed.';
        throw IllegalStateException_init(message_0.toString());
      }index.height_8be2vx$ = 1 + MathUtils$Companion_getInstance().max_vux9f0$(ensureNotNull(child1_0).height_8be2vx$, ensureNotNull(child2_0).height_8be2vx$) | 0;
      index.aabb.combine_rppivm$(child1_0.aabb, child2_0.aabb);
      index = index.parent_8be2vx$;
    }
  };
  DynamicTree.prototype.removeLeaf_0 = function (leaf) {
    if (leaf === this.m_root_0) {
      this.m_root_0 = null;
      return;
    }var parent = leaf.parent_8be2vx$;
    var grandParent = parent != null ? parent.parent_8be2vx$ : null;
    var sibling;
    if (ensureNotNull(parent).child1_8be2vx$ === leaf) {
      sibling = ensureNotNull(ensureNotNull(parent).child2_8be2vx$);
    } else {
      sibling = ensureNotNull(ensureNotNull(parent).child1_8be2vx$);
    }
    if (grandParent != null) {
      if (grandParent.child1_8be2vx$ === parent) {
        grandParent.child1_8be2vx$ = sibling;
      } else {
        grandParent.child2_8be2vx$ = sibling;
      }
      sibling.parent_8be2vx$ = grandParent;
      this.freeNode_0(parent);
      var index = grandParent;
      while (index != null) {
        index = this.balance_0(index);
        var child1 = index.child1_8be2vx$;
        var child2 = index.child2_8be2vx$;
        index.aabb.combine_rppivm$(ensureNotNull(child1).aabb, ensureNotNull(child2).aabb);
        index.height_8be2vx$ = 1 + MathUtils$Companion_getInstance().max_vux9f0$(child1.height_8be2vx$, child2.height_8be2vx$) | 0;
        index = index.parent_8be2vx$;
      }
    } else {
      this.m_root_0 = sibling;
      sibling.parent_8be2vx$ = null;
      this.freeNode_0(parent);
    }
  };
  DynamicTree.prototype.balance_0 = function (iA) {
    if (!(iA != null)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var A = iA;
    if (ensureNotNull(A).child1_8be2vx$ == null || A.height_8be2vx$ < 2) {
      return iA;
    }var iB = A.child1_8be2vx$;
    var iC = A.child2_8be2vx$;
    if (!(0 <= ensureNotNull(iB).id_8be2vx$ && iB.id_8be2vx$ < this.m_nodeCapacity_0)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }if (!(0 <= ensureNotNull(iC).id_8be2vx$ && iC.id_8be2vx$ < this.m_nodeCapacity_0)) {
      var message_1 = 'Check failed.';
      throw IllegalStateException_init(message_1.toString());
    }var B = iB;
    var C = iC;
    var balance = C.height_8be2vx$ - B.height_8be2vx$ | 0;
    if (balance > 1) {
      var iF = C.child1_8be2vx$;
      var iG = C.child2_8be2vx$;
      var F = iF;
      var G = iG;
      if (!(F != null)) {
        var message_2 = 'Check failed.';
        throw IllegalStateException_init(message_2.toString());
      }if (!(G != null)) {
        var message_3 = 'Check failed.';
        throw IllegalStateException_init(message_3.toString());
      }if (!(0 <= ensureNotNull(iF).id_8be2vx$ && iF.id_8be2vx$ < this.m_nodeCapacity_0)) {
        var message_4 = 'Check failed.';
        throw IllegalStateException_init(message_4.toString());
      }if (!(0 <= ensureNotNull(iG).id_8be2vx$ && iG.id_8be2vx$ < this.m_nodeCapacity_0)) {
        var message_5 = 'Check failed.';
        throw IllegalStateException_init(message_5.toString());
      }C.child1_8be2vx$ = iA;
      C.parent_8be2vx$ = A.parent_8be2vx$;
      A.parent_8be2vx$ = iC;
      if (C.parent_8be2vx$ != null) {
        if (ensureNotNull(C.parent_8be2vx$).child1_8be2vx$ === iA) {
          ensureNotNull(C.parent_8be2vx$).child1_8be2vx$ = iC;
        } else {
          if (!(ensureNotNull(C.parent_8be2vx$).child2_8be2vx$ === iA)) {
            var message_6 = 'Check failed.';
            throw IllegalStateException_init(message_6.toString());
          }ensureNotNull(C.parent_8be2vx$).child2_8be2vx$ = iC;
        }
      } else {
        this.m_root_0 = iC;
      }
      if (ensureNotNull(F).height_8be2vx$ > ensureNotNull(G).height_8be2vx$) {
        C.child2_8be2vx$ = iF;
        A.child2_8be2vx$ = iG;
        G.parent_8be2vx$ = iA;
        A.aabb.combine_rppivm$(B.aabb, G.aabb);
        C.aabb.combine_rppivm$(A.aabb, F.aabb);
        A.height_8be2vx$ = 1 + MathUtils$Companion_getInstance().max_vux9f0$(B.height_8be2vx$, G.height_8be2vx$) | 0;
        C.height_8be2vx$ = 1 + MathUtils$Companion_getInstance().max_vux9f0$(A.height_8be2vx$, F.height_8be2vx$) | 0;
      } else {
        C.child2_8be2vx$ = iG;
        A.child2_8be2vx$ = iF;
        F.parent_8be2vx$ = iA;
        A.aabb.combine_rppivm$(B.aabb, F.aabb);
        C.aabb.combine_rppivm$(A.aabb, G.aabb);
        A.height_8be2vx$ = 1 + MathUtils$Companion_getInstance().max_vux9f0$(B.height_8be2vx$, F.height_8be2vx$) | 0;
        C.height_8be2vx$ = 1 + MathUtils$Companion_getInstance().max_vux9f0$(A.height_8be2vx$, G.height_8be2vx$) | 0;
      }
      return iC;
    }if (balance < -1) {
      var iD = B.child1_8be2vx$;
      var iE = B.child2_8be2vx$;
      var D = iD;
      var E = iE;
      if (!(0 <= ensureNotNull(iD).id_8be2vx$ && iD.id_8be2vx$ < this.m_nodeCapacity_0)) {
        var message_7 = 'Check failed.';
        throw IllegalStateException_init(message_7.toString());
      }if (!(0 <= ensureNotNull(iE).id_8be2vx$ && iE.id_8be2vx$ < this.m_nodeCapacity_0)) {
        var message_8 = 'Check failed.';
        throw IllegalStateException_init(message_8.toString());
      }B.child1_8be2vx$ = iA;
      B.parent_8be2vx$ = A.parent_8be2vx$;
      A.parent_8be2vx$ = iB;
      if (B.parent_8be2vx$ != null) {
        if (ensureNotNull(B.parent_8be2vx$).child1_8be2vx$ === iA) {
          ensureNotNull(B.parent_8be2vx$).child1_8be2vx$ = iB;
        } else {
          if (!(ensureNotNull(B.parent_8be2vx$).child2_8be2vx$ === iA)) {
            var message_9 = 'Check failed.';
            throw IllegalStateException_init(message_9.toString());
          }ensureNotNull(B.parent_8be2vx$).child2_8be2vx$ = iB;
        }
      } else {
        this.m_root_0 = iB;
      }
      if (ensureNotNull(D).height_8be2vx$ > ensureNotNull(E).height_8be2vx$) {
        B.child2_8be2vx$ = iD;
        A.child1_8be2vx$ = iE;
        E.parent_8be2vx$ = iA;
        A.aabb.combine_rppivm$(C.aabb, E.aabb);
        B.aabb.combine_rppivm$(A.aabb, D.aabb);
        A.height_8be2vx$ = 1 + MathUtils$Companion_getInstance().max_vux9f0$(C.height_8be2vx$, E.height_8be2vx$) | 0;
        B.height_8be2vx$ = 1 + MathUtils$Companion_getInstance().max_vux9f0$(A.height_8be2vx$, D.height_8be2vx$) | 0;
      } else {
        B.child2_8be2vx$ = iE;
        A.child1_8be2vx$ = iD;
        D.parent_8be2vx$ = iA;
        A.aabb.combine_rppivm$(C.aabb, D.aabb);
        B.aabb.combine_rppivm$(A.aabb, E.aabb);
        A.height_8be2vx$ = 1 + MathUtils$Companion_getInstance().max_vux9f0$(C.height_8be2vx$, D.height_8be2vx$) | 0;
        B.height_8be2vx$ = 1 + MathUtils$Companion_getInstance().max_vux9f0$(A.height_8be2vx$, E.height_8be2vx$) | 0;
      }
      return iB;
    }return iA;
  };
  DynamicTree.prototype.validateStructure_0 = function (node) {
    if (node == null) {
      return;
    }if (!(node === ensureNotNull(this.m_nodes_0)[node.id_8be2vx$])) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (node === this.m_root_0) {
      if (!(node.parent_8be2vx$ == null)) {
        var message_0 = 'Check failed.';
        throw IllegalStateException_init(message_0.toString());
      }}var child1 = node.child1_8be2vx$;
    var child2 = node.child2_8be2vx$;
    if (node.child1_8be2vx$ == null) {
      if (!(child1 == null)) {
        var message_1 = 'Check failed.';
        throw IllegalStateException_init(message_1.toString());
      }if (!(child2 == null)) {
        var message_2 = 'Check failed.';
        throw IllegalStateException_init(message_2.toString());
      }if (!(node.height_8be2vx$ === 0)) {
        var message_3 = 'Check failed.';
        throw IllegalStateException_init(message_3.toString());
      }return;
    }if (!(child1 != null && 0 <= child1.id_8be2vx$ && child1.id_8be2vx$ < this.m_nodeCapacity_0)) {
      var message_4 = 'Check failed.';
      throw IllegalStateException_init(message_4.toString());
    }if (!(child2 != null && 0 <= child2.id_8be2vx$ && child2.id_8be2vx$ < this.m_nodeCapacity_0)) {
      var message_5 = 'Check failed.';
      throw IllegalStateException_init(message_5.toString());
    }if (!(ensureNotNull(child1).parent_8be2vx$ === node)) {
      var message_6 = 'Check failed.';
      throw IllegalStateException_init(message_6.toString());
    }if (!(ensureNotNull(child2).parent_8be2vx$ === node)) {
      var message_7 = 'Check failed.';
      throw IllegalStateException_init(message_7.toString());
    }this.validateStructure_0(child1);
    this.validateStructure_0(child2);
  };
  DynamicTree.prototype.validateMetrics_0 = function (node) {
    var tmp$, tmp$_0;
    if (node == null) {
      return;
    }var child1 = node.child1_8be2vx$;
    var child2 = node.child2_8be2vx$;
    if (node.child1_8be2vx$ == null) {
      if (!(child1 == null)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }if (!(child2 == null)) {
        var message_0 = 'Check failed.';
        throw IllegalStateException_init(message_0.toString());
      }if (!(node.height_8be2vx$ === 0)) {
        var message_1 = 'Check failed.';
        throw IllegalStateException_init(message_1.toString());
      }return;
    }if (!(child1 != null && 0 <= child1.id_8be2vx$ && child1.id_8be2vx$ < this.m_nodeCapacity_0)) {
      var message_2 = 'Check failed.';
      throw IllegalStateException_init(message_2.toString());
    }if (!(child2 != null && 0 <= child2.id_8be2vx$ && child2.id_8be2vx$ < this.m_nodeCapacity_0)) {
      var message_3 = 'Check failed.';
      throw IllegalStateException_init(message_3.toString());
    }var height1 = ensureNotNull(child1).height_8be2vx$;
    var height2 = ensureNotNull(child2).height_8be2vx$;
    var height;
    height = 1 + MathUtils$Companion_getInstance().max_vux9f0$(height1, height2) | 0;
    if (!(node.height_8be2vx$ === height)) {
      var message_4 = 'Check failed.';
      throw IllegalStateException_init(message_4.toString());
    }var aabb = AABB_init();
    aabb.combine_rppivm$(child1.aabb, child2.aabb);
    if (!((tmp$ = aabb.lowerBound) != null ? tmp$.equals(node.aabb.lowerBound) : null)) {
      var message_5 = 'Check failed.';
      throw IllegalStateException_init(message_5.toString());
    }if (!((tmp$_0 = aabb.upperBound) != null ? tmp$_0.equals(node.aabb.upperBound) : null)) {
      var message_6 = 'Check failed.';
      throw IllegalStateException_init(message_6.toString());
    }this.validateMetrics_0(child1);
    this.validateMetrics_0(child2);
  };
  DynamicTree.prototype.drawTree_38pq6y$ = function (argDraw) {
    if (this.m_root_0 == null) {
      return;
    }var height = this.computeHeight();
    this.drawTree_7637pr$(argDraw, ensureNotNull(this.m_root_0), 0, height);
  };
  DynamicTree.prototype.drawTree_7637pr$ = function (argDraw, node, spot, height) {
    var tmp$;
    node.aabb.getVertices_jorshu$(ensureNotNull(this.drawVecs_0));
    this.color_0.set_y2kzbl$(1.0, (height - spot | 0) * 1.0 / height, (height - spot | 0) * 1.0 / height);
    argDraw.drawPolygon_om3j2w$(Kotlin.isArray(tmp$ = ensureNotNull(this.drawVecs_0)) ? tmp$ : throwCCE(), 4, this.color_0);
    ensureNotNull(argDraw.viewportTranform).getWorldToScreen_xjacks$(node.aabb.upperBound, this.textVec_0);
    argDraw.drawString_m6qolm$(this.textVec_0.x, this.textVec_0.y, node.id_8be2vx$.toString() + '-' + toString(spot + 1 | 0) + '/' + toString(height), this.color_0);
    if (node.child1_8be2vx$ != null) {
      this.drawTree_7637pr$(argDraw, ensureNotNull(node.child1_8be2vx$), spot + 1 | 0, height);
    }if (node.child2_8be2vx$ != null) {
      this.drawTree_7637pr$(argDraw, ensureNotNull(node.child2_8be2vx$), spot + 1 | 0, height);
    }};
  function DynamicTree$Companion() {
    DynamicTree$Companion_instance = this;
    this.MAX_STACK_SIZE = 64;
    this.NULL_NODE = -1;
  }
  DynamicTree$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DynamicTree$Companion_instance = null;
  function DynamicTree$Companion_getInstance() {
    if (DynamicTree$Companion_instance === null) {
      new DynamicTree$Companion();
    }return DynamicTree$Companion_instance;
  }
  DynamicTree.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicTree',
    interfaces: [BroadPhaseStrategy]
  };
  function DynamicTreeFlatNodes() {
    DynamicTreeFlatNodes$Companion_getInstance();
    this.m_root = DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE;
    this.m_aabb_3h3gzn$_0 = this.m_aabb_3h3gzn$_0;
    this.m_userData_4x1fhk$_0 = this.m_userData_4x1fhk$_0;
    this.m_parent_6e3wqb$_0 = this.m_parent_6e3wqb$_0;
    this.m_child1_vurt2g$_0 = this.m_child1_vurt2g$_0;
    this.m_child2_vurt3b$_0 = this.m_child2_vurt3b$_0;
    this.m_height_wsf8nq$_0 = this.m_height_wsf8nq$_0;
    this.m_nodeCount_0 = 0;
    this.m_nodeCapacity_0 = 16;
    this.m_freeList_0 = 0;
    var array = Array_0(4);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Vec2();
    }
    this.drawVecs_0 = array;
    this.nodeStack_0 = new Int32Array(20);
    this.nodeStackIndex_0 = 0;
    this.r_0 = new Vec2();
    this.aabb_0 = AABB_init();
    this.subInput_0 = new RayCastInput();
    this.combinedAABB_0 = AABB_init();
    this.color_0 = Color3f_init();
    this.textVec_0 = new Vec2();
    this.expandBuffers_0(0, this.m_nodeCapacity_0);
  }
  Object.defineProperty(DynamicTreeFlatNodes.prototype, 'm_aabb', {
    get: function () {
      if (this.m_aabb_3h3gzn$_0 == null)
        return throwUPAE('m_aabb');
      return this.m_aabb_3h3gzn$_0;
    },
    set: function (m_aabb) {
      this.m_aabb_3h3gzn$_0 = m_aabb;
    }
  });
  Object.defineProperty(DynamicTreeFlatNodes.prototype, 'm_userData', {
    get: function () {
      if (this.m_userData_4x1fhk$_0 == null)
        return throwUPAE('m_userData');
      return this.m_userData_4x1fhk$_0;
    },
    set: function (m_userData) {
      this.m_userData_4x1fhk$_0 = m_userData;
    }
  });
  Object.defineProperty(DynamicTreeFlatNodes.prototype, 'm_parent_0', {
    get: function () {
      if (this.m_parent_6e3wqb$_0 == null)
        return throwUPAE('m_parent');
      return this.m_parent_6e3wqb$_0;
    },
    set: function (m_parent) {
      this.m_parent_6e3wqb$_0 = m_parent;
    }
  });
  Object.defineProperty(DynamicTreeFlatNodes.prototype, 'm_child1_0', {
    get: function () {
      if (this.m_child1_vurt2g$_0 == null)
        return throwUPAE('m_child1');
      return this.m_child1_vurt2g$_0;
    },
    set: function (m_child1) {
      this.m_child1_vurt2g$_0 = m_child1;
    }
  });
  Object.defineProperty(DynamicTreeFlatNodes.prototype, 'm_child2_0', {
    get: function () {
      if (this.m_child2_vurt3b$_0 == null)
        return throwUPAE('m_child2');
      return this.m_child2_vurt3b$_0;
    },
    set: function (m_child2) {
      this.m_child2_vurt3b$_0 = m_child2;
    }
  });
  Object.defineProperty(DynamicTreeFlatNodes.prototype, 'm_height_0', {
    get: function () {
      if (this.m_height_wsf8nq$_0 == null)
        return throwUPAE('m_height');
      return this.m_height_wsf8nq$_0;
    },
    set: function (m_height) {
      this.m_height_wsf8nq$_0 = m_height;
    }
  });
  Object.defineProperty(DynamicTreeFlatNodes.prototype, 'height', {
    get: function () {
      if (this.m_root === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
        return 0;
      } else
        return this.m_height_0[this.m_root];
    }
  });
  Object.defineProperty(DynamicTreeFlatNodes.prototype, 'maxBalance', {
    get: function () {
      var tmp$;
      var maxBalance = 0;
      tmp$ = this.m_nodeCapacity_0;
      for (var i = 0; i < tmp$; i++) {
        if (this.m_height_0[i] <= 1) {
          continue;
        }if (!(this.m_child1_0[i] !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE)) {
          var message = 'Check failed.';
          throw IllegalStateException_init(message.toString());
        }var child1 = this.m_child1_0[i];
        var child2 = this.m_child2_0[i];
        var balance = MathUtils$Companion_getInstance().abs_za3lpa$(this.m_height_0[child2] - this.m_height_0[child1] | 0);
        maxBalance = MathUtils$Companion_getInstance().max_vux9f0$(maxBalance, balance);
      }
      return maxBalance;
    }
  });
  Object.defineProperty(DynamicTreeFlatNodes.prototype, 'areaRatio', {
    get: function () {
      var tmp$;
      if (this.m_root === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
        return 0.0;
      }var root = this.m_root;
      var rootArea = this.m_aabb[root].perimeter;
      var totalArea = 0.0;
      tmp$ = this.m_nodeCapacity_0;
      for (var i = 0; i < tmp$; i++) {
        if (this.m_height_0[i] < 0) {
          continue;
        }totalArea += this.m_aabb[i].perimeter;
      }
      return totalArea / rootArea;
    }
  });
  function DynamicTreeFlatNodes$expandBuffers$lambda() {
    return AABB_init();
  }
  function DynamicTreeFlatNodes$expandBuffers$lambda_0() {
    return new Any();
  }
  DynamicTreeFlatNodes.prototype.expandBuffers_0 = function (oldSize, newSize) {
    var tmp$, tmp$_0;
    this.m_aabb = BufferUtils_getInstance().reallocateBuffer_z72n54$(DynamicTreeFlatNodes$expandBuffers$lambda, this.m_aabb, oldSize, newSize);
    this.m_userData = Kotlin.isArray(tmp$_0 = BufferUtils_getInstance().reallocateBuffer_z72n54$(DynamicTreeFlatNodes$expandBuffers$lambda_0, Kotlin.isArray(tmp$ = this.m_userData) ? tmp$ : throwCCE(), oldSize, newSize)) ? tmp$_0 : throwCCE();
    this.m_parent_0 = BufferUtils_getInstance().reallocateBuffer_q8imh4$(this.m_parent_0, oldSize, newSize);
    this.m_child1_0 = BufferUtils_getInstance().reallocateBuffer_q8imh4$(this.m_child1_0, oldSize, newSize);
    this.m_child2_0 = BufferUtils_getInstance().reallocateBuffer_q8imh4$(this.m_child2_0, oldSize, newSize);
    this.m_height_0 = BufferUtils_getInstance().reallocateBuffer_q8imh4$(this.m_height_0, oldSize, newSize);
    for (var i = oldSize; i < newSize; i++) {
      this.m_aabb[i] = AABB_init();
      this.m_parent_0[i] = i === (newSize - 1 | 0) ? DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE : i + 1 | 0;
      this.m_height_0[i] = -1;
      this.m_child1_0[i] = -1;
      this.m_child2_0[i] = -1;
    }
    this.m_freeList_0 = oldSize;
  };
  DynamicTreeFlatNodes.prototype.createProxy_rngc4e$ = function (aabb, userData) {
    var node = this.allocateNode_0();
    var nodeAABB = this.m_aabb[node];
    nodeAABB.lowerBound.x = aabb.lowerBound.x - Settings_getInstance().aabbExtension;
    nodeAABB.lowerBound.y = aabb.lowerBound.y - Settings_getInstance().aabbExtension;
    nodeAABB.upperBound.x = aabb.upperBound.x + Settings_getInstance().aabbExtension;
    nodeAABB.upperBound.y = aabb.upperBound.y + Settings_getInstance().aabbExtension;
    this.m_userData[node] = userData;
    this.insertLeaf_0(node);
    return node;
  };
  DynamicTreeFlatNodes.prototype.destroyProxy_za3lpa$ = function (proxyId) {
    if (!(0 <= proxyId && proxyId < this.m_nodeCapacity_0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(this.m_child1_0[proxyId] === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }this.removeLeaf_0(proxyId);
    this.freeNode_0(proxyId);
  };
  DynamicTreeFlatNodes.prototype.moveProxy_jf99nd$ = function (proxyId, aabb, displacement) {
    if (!(0 <= proxyId && proxyId < this.m_nodeCapacity_0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var node = proxyId;
    if (!(this.m_child1_0[node] === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }var nodeAABB = this.m_aabb[node];
    if (nodeAABB.lowerBound.x <= aabb.lowerBound.x && nodeAABB.lowerBound.y <= aabb.lowerBound.y && aabb.upperBound.x <= nodeAABB.upperBound.x && aabb.upperBound.y <= nodeAABB.upperBound.y) {
      return false;
    }this.removeLeaf_0(node);
    var lowerBound = nodeAABB.lowerBound;
    var upperBound = nodeAABB.upperBound;
    lowerBound.x = aabb.lowerBound.x - Settings_getInstance().aabbExtension;
    lowerBound.y = aabb.lowerBound.y - Settings_getInstance().aabbExtension;
    upperBound.x = aabb.upperBound.x + Settings_getInstance().aabbExtension;
    upperBound.y = aabb.upperBound.y + Settings_getInstance().aabbExtension;
    var dx = displacement.x * Settings_getInstance().aabbMultiplier;
    var dy = displacement.y * Settings_getInstance().aabbMultiplier;
    if (dx < 0.0) {
      lowerBound.x = lowerBound.x + dx;
    } else {
      upperBound.x = upperBound.x + dx;
    }
    if (dy < 0.0) {
      lowerBound.y = lowerBound.y + dy;
    } else {
      upperBound.y = upperBound.y + dy;
    }
    this.insertLeaf_0(proxyId);
    return true;
  };
  DynamicTreeFlatNodes.prototype.getUserData_za3lpa$ = function (proxyId) {
    if (!(0 <= proxyId && proxyId < this.m_nodeCount_0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }return this.m_userData[proxyId];
  };
  DynamicTreeFlatNodes.prototype.getFatAABB_za3lpa$ = function (proxyId) {
    if (!(0 <= proxyId && proxyId < this.m_nodeCount_0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }return this.m_aabb[proxyId];
  };
  DynamicTreeFlatNodes.prototype.query_yc3l05$ = function (callback, aabb) {
    var tmp$, tmp$_0, tmp$_1;
    this.nodeStackIndex_0 = 0;
    this.nodeStack_0[tmp$ = this.nodeStackIndex_0, this.nodeStackIndex_0 = tmp$ + 1 | 0, tmp$] = this.m_root;
    while (this.nodeStackIndex_0 > 0) {
      var node = this.nodeStack_0[this.nodeStackIndex_0 = this.nodeStackIndex_0 - 1 | 0, this.nodeStackIndex_0];
      if (node === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
        continue;
      }if (AABB$Companion_getInstance().testOverlap_rppivm$(this.m_aabb[node], aabb)) {
        var child1 = this.m_child1_0[node];
        if (child1 === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
          var proceed = callback.treeCallback_za3lpa$(node);
          if (!proceed) {
            return;
          }} else {
          if ((this.nodeStack_0.length - this.nodeStackIndex_0 - 2 | 0) <= 0) {
            this.nodeStack_0 = BufferUtils_getInstance().reallocateBuffer_q8imh4$(this.nodeStack_0, this.nodeStack_0.length, this.nodeStack_0.length * 2 | 0);
          }this.nodeStack_0[tmp$_0 = this.nodeStackIndex_0, this.nodeStackIndex_0 = tmp$_0 + 1 | 0, tmp$_0] = child1;
          this.nodeStack_0[tmp$_1 = this.nodeStackIndex_0, this.nodeStackIndex_0 = tmp$_1 + 1 | 0, tmp$_1] = this.m_child2_0[node];
        }
      }}
  };
  DynamicTreeFlatNodes.prototype.raycast_j5vfpb$ = function (callback, input) {
    var tmp$, tmp$_0, tmp$_1;
    var p1 = input.p1;
    var p2 = input.p2;
    var p1x = p1.x;
    var p2x = p2.x;
    var p1y = p1.y;
    var p2y = p2.y;
    var vx;
    var vy;
    var rx;
    var ry;
    var absVx;
    var absVy;
    var cx;
    var cy;
    var hx;
    var hy;
    var tempx;
    var tempy;
    this.r_0.x = p2x - p1x;
    this.r_0.y = p2y - p1y;
    if (!(this.r_0.x * this.r_0.x + this.r_0.y * this.r_0.y > 0.0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }this.r_0.normalize();
    rx = this.r_0.x;
    ry = this.r_0.y;
    vx = -1.0 * ry;
    vy = 1.0 * rx;
    absVx = MathUtils$Companion_getInstance().abs_mx4ult$(vx);
    absVy = MathUtils$Companion_getInstance().abs_mx4ult$(vy);
    var maxFraction = input.maxFraction;
    var segAABB = this.aabb_0;
    tempx = (p2x - p1x) * maxFraction + p1x;
    tempy = (p2y - p1y) * maxFraction + p1y;
    segAABB.lowerBound.x = p1x < tempx ? p1x : tempx;
    segAABB.lowerBound.y = p1y < tempy ? p1y : tempy;
    segAABB.upperBound.x = p1x > tempx ? p1x : tempx;
    segAABB.upperBound.y = p1y > tempy ? p1y : tempy;
    this.nodeStackIndex_0 = 0;
    this.nodeStack_0[tmp$ = this.nodeStackIndex_0, this.nodeStackIndex_0 = tmp$ + 1 | 0, tmp$] = this.m_root;
    while (this.nodeStackIndex_0 > 0) {
      this.nodeStack_0[this.nodeStackIndex_0 = this.nodeStackIndex_0 - 1 | 0, this.nodeStackIndex_0] = this.m_root;
      var node = this.nodeStack_0[this.nodeStackIndex_0 = this.nodeStackIndex_0 - 1 | 0, this.nodeStackIndex_0];
      if (node === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
        continue;
      }var nodeAABB = this.m_aabb[node];
      if (!AABB$Companion_getInstance().testOverlap_rppivm$(nodeAABB, segAABB)) {
        continue;
      }cx = (nodeAABB.lowerBound.x + nodeAABB.upperBound.x) * 0.5;
      cy = (nodeAABB.lowerBound.y + nodeAABB.upperBound.y) * 0.5;
      hx = (nodeAABB.upperBound.x - nodeAABB.lowerBound.x) * 0.5;
      hy = (nodeAABB.upperBound.y - nodeAABB.lowerBound.y) * 0.5;
      tempx = p1x - cx;
      tempy = p1y - cy;
      var separation = MathUtils$Companion_getInstance().abs_mx4ult$(vx * tempx + vy * tempy) - (absVx * hx + absVy * hy);
      if (separation > 0.0) {
        continue;
      }var child1 = this.m_child1_0[node];
      if (child1 === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
        this.subInput_0.p1.x = p1x;
        this.subInput_0.p1.y = p1y;
        this.subInput_0.p2.x = p2x;
        this.subInput_0.p2.y = p2y;
        this.subInput_0.maxFraction = maxFraction;
        var value = callback.raycastCallback_5zkam8$(this.subInput_0, node);
        if (value === 0.0) {
          return;
        }if (value > 0.0) {
          maxFraction = value;
          tempx = (p2x - p1x) * maxFraction + p1x;
          tempy = (p2y - p1y) * maxFraction + p1y;
          segAABB.lowerBound.x = p1x < tempx ? p1x : tempx;
          segAABB.lowerBound.y = p1y < tempy ? p1y : tempy;
          segAABB.upperBound.x = p1x > tempx ? p1x : tempx;
          segAABB.upperBound.y = p1y > tempy ? p1y : tempy;
        }} else {
        this.nodeStack_0[tmp$_0 = this.nodeStackIndex_0, this.nodeStackIndex_0 = tmp$_0 + 1 | 0, tmp$_0] = child1;
        this.nodeStack_0[tmp$_1 = this.nodeStackIndex_0, this.nodeStackIndex_0 = tmp$_1 + 1 | 0, tmp$_1] = this.m_child2_0[node];
      }
    }
  };
  DynamicTreeFlatNodes.prototype.computeHeight = function () {
    return this.computeHeight_0(this.m_root);
  };
  DynamicTreeFlatNodes.prototype.computeHeight_0 = function (node) {
    if (!(0 <= node && node < this.m_nodeCapacity_0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (this.m_child1_0[node] === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
      return 0;
    }var height1 = this.computeHeight_0(this.m_child1_0[node]);
    var height2 = this.computeHeight_0(this.m_child2_0[node]);
    return 1 + MathUtils$Companion_getInstance().max_vux9f0$(height1, height2) | 0;
  };
  DynamicTreeFlatNodes.prototype.validate = function () {
    this.validateStructure_0(this.m_root);
    this.validateMetrics_0(this.m_root);
    var freeCount = 0;
    var freeNode = this.m_freeList_0;
    while (freeNode !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
      if (!(0 <= freeNode && freeNode < this.m_nodeCapacity_0)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }freeNode = this.m_parent_0[freeNode];
      freeCount = freeCount + 1 | 0;
    }
    if (!(this.height === this.computeHeight())) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }if (!((this.m_nodeCount_0 + freeCount | 0) === this.m_nodeCapacity_0)) {
      var message_1 = 'Check failed.';
      throw IllegalStateException_init(message_1.toString());
    }};
  DynamicTreeFlatNodes.prototype.allocateNode_0 = function () {
    if (this.m_freeList_0 === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
      if (!(this.m_nodeCount_0 === this.m_nodeCapacity_0)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }this.m_nodeCapacity_0 = this.m_nodeCapacity_0 * 2 | 0;
      this.expandBuffers_0(this.m_nodeCount_0, this.m_nodeCapacity_0);
    }if (!(this.m_freeList_0 !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }var node = this.m_freeList_0;
    this.m_freeList_0 = this.m_parent_0[node];
    this.m_parent_0[node] = DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE;
    this.m_child1_0[node] = DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE;
    this.m_height_0[node] = 0;
    this.m_nodeCount_0 = this.m_nodeCount_0 + 1 | 0;
    return node;
  };
  DynamicTreeFlatNodes.prototype.freeNode_0 = function (node) {
    if (!(node !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(0 < this.m_nodeCount_0)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }this.m_parent_0[node] = this.m_freeList_0 !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE ? this.m_freeList_0 : DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE;
    this.m_height_0[node] = -1;
    this.m_freeList_0 = node;
    this.m_nodeCount_0 = this.m_nodeCount_0 - 1 | 0;
  };
  DynamicTreeFlatNodes.prototype.insertLeaf_0 = function (leaf) {
    if (this.m_root === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
      this.m_root = leaf;
      this.m_parent_0[this.m_root] = DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE;
      return;
    }var leafAABB = this.m_aabb[leaf];
    var index = this.m_root;
    while (this.m_child1_0[index] !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
      var node = index;
      var child1 = this.m_child1_0[node];
      var child2 = this.m_child2_0[node];
      var nodeAABB = this.m_aabb[node];
      var area = nodeAABB.perimeter;
      this.combinedAABB_0.combine_rppivm$(nodeAABB, leafAABB);
      var combinedArea = this.combinedAABB_0.perimeter;
      var cost = 2.0 * combinedArea;
      var inheritanceCost = 2.0 * (combinedArea - area);
      var cost1;
      var child1AABB = this.m_aabb[child1];
      if (this.m_child1_0[child1] === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
        this.combinedAABB_0.combine_rppivm$(leafAABB, child1AABB);
        cost1 = this.combinedAABB_0.perimeter + inheritanceCost;
      } else {
        this.combinedAABB_0.combine_rppivm$(leafAABB, child1AABB);
        var oldArea = child1AABB.perimeter;
        var newArea = this.combinedAABB_0.perimeter;
        cost1 = newArea - oldArea + inheritanceCost;
      }
      var cost2;
      var child2AABB = this.m_aabb[child2];
      if (this.m_child1_0[child2] === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
        this.combinedAABB_0.combine_rppivm$(leafAABB, child2AABB);
        cost2 = this.combinedAABB_0.perimeter + inheritanceCost;
      } else {
        this.combinedAABB_0.combine_rppivm$(leafAABB, child2AABB);
        var oldArea_0 = child2AABB.perimeter;
        var newArea_0 = this.combinedAABB_0.perimeter;
        cost2 = newArea_0 - oldArea_0 + inheritanceCost;
      }
      if (cost < cost1 && cost < cost2) {
        break;
      }if (cost1 < cost2) {
        index = child1;
      } else {
        index = child2;
      }
    }
    var sibling = index;
    var oldParent = this.m_parent_0[sibling];
    var newParent = this.allocateNode_0();
    this.m_parent_0[newParent] = oldParent;
    this.m_userData[newParent] = null;
    this.m_aabb[newParent].combine_rppivm$(leafAABB, this.m_aabb[sibling]);
    this.m_height_0[newParent] = this.m_height_0[sibling] + 1 | 0;
    if (oldParent !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
      if (this.m_child1_0[oldParent] === sibling) {
        this.m_child1_0[oldParent] = newParent;
      } else {
        this.m_child2_0[oldParent] = newParent;
      }
      this.m_child1_0[newParent] = sibling;
      this.m_child2_0[newParent] = leaf;
      this.m_parent_0[sibling] = newParent;
      this.m_parent_0[leaf] = newParent;
    } else {
      this.m_child1_0[newParent] = sibling;
      this.m_child2_0[newParent] = leaf;
      this.m_parent_0[sibling] = newParent;
      this.m_parent_0[leaf] = newParent;
      this.m_root = newParent;
    }
    index = this.m_parent_0[leaf];
    while (index !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
      index = this.balance_0(index);
      var child1_0 = this.m_child1_0[index];
      var child2_0 = this.m_child2_0[index];
      if (!(child1_0 !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }if (!(child2_0 !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE)) {
        var message_0 = 'Check failed.';
        throw IllegalStateException_init(message_0.toString());
      }this.m_height_0[index] = 1 + MathUtils$Companion_getInstance().max_vux9f0$(this.m_height_0[child1_0], this.m_height_0[child2_0]) | 0;
      this.m_aabb[index].combine_rppivm$(this.m_aabb[child1_0], this.m_aabb[child2_0]);
      index = this.m_parent_0[index];
    }
  };
  DynamicTreeFlatNodes.prototype.removeLeaf_0 = function (leaf) {
    if (leaf === this.m_root) {
      this.m_root = DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE;
      return;
    }var parent = this.m_parent_0[leaf];
    var grandParent = this.m_parent_0[parent];
    var parentChild1 = this.m_child1_0[parent];
    var parentChild2 = this.m_child2_0[parent];
    var sibling;
    if (parentChild1 === leaf) {
      sibling = parentChild2;
    } else {
      sibling = parentChild1;
    }
    if (grandParent !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
      if (this.m_child1_0[grandParent] === parent) {
        this.m_child1_0[grandParent] = sibling;
      } else {
        this.m_child2_0[grandParent] = sibling;
      }
      this.m_parent_0[sibling] = grandParent;
      this.freeNode_0(parent);
      var index = grandParent;
      while (index !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
        index = this.balance_0(index);
        var child1 = this.m_child1_0[index];
        var child2 = this.m_child2_0[index];
        this.m_aabb[index].combine_rppivm$(this.m_aabb[child1], this.m_aabb[child2]);
        this.m_height_0[index] = 1 + MathUtils$Companion_getInstance().max_vux9f0$(this.m_height_0[child1], this.m_height_0[child2]) | 0;
        index = this.m_parent_0[index];
      }
    } else {
      this.m_root = sibling;
      this.m_parent_0[sibling] = DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE;
      this.freeNode_0(parent);
    }
  };
  DynamicTreeFlatNodes.prototype.balance_0 = function (iA) {
    if (!(iA !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var A = iA;
    if (this.m_child1_0[A] === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE || this.m_height_0[A] < 2) {
      return iA;
    }var iB = this.m_child1_0[A];
    var iC = this.m_child2_0[A];
    if (!(0 <= iB && iB < this.m_nodeCapacity_0)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }if (!(0 <= iC && iC < this.m_nodeCapacity_0)) {
      var message_1 = 'Check failed.';
      throw IllegalStateException_init(message_1.toString());
    }var B = iB;
    var C = iC;
    var balance = this.m_height_0[C] - this.m_height_0[B] | 0;
    if (balance > 1) {
      var iF = this.m_child1_0[C];
      var iG = this.m_child2_0[C];
      var F = iF;
      var G = iG;
      if (!(0 <= iF && iF < this.m_nodeCapacity_0)) {
        var message_2 = 'Check failed.';
        throw IllegalStateException_init(message_2.toString());
      }if (!(0 <= iG && iG < this.m_nodeCapacity_0)) {
        var message_3 = 'Check failed.';
        throw IllegalStateException_init(message_3.toString());
      }this.m_child1_0[C] = iA;
      this.m_parent_0[C] = this.m_parent_0[A];
      var cParent = this.m_parent_0[C];
      this.m_parent_0[A] = iC;
      if (cParent !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
        if (this.m_child1_0[cParent] === iA) {
          this.m_child1_0[cParent] = iC;
        } else {
          if (!(this.m_child2_0[cParent] === iA)) {
            var message_4 = 'Check failed.';
            throw IllegalStateException_init(message_4.toString());
          }this.m_child2_0[cParent] = iC;
        }
      } else {
        this.m_root = iC;
      }
      if (this.m_height_0[F] > this.m_height_0[G]) {
        this.m_child2_0[C] = iF;
        this.m_child2_0[A] = iG;
        this.m_parent_0[G] = iA;
        this.m_aabb[A].combine_rppivm$(this.m_aabb[B], this.m_aabb[G]);
        this.m_aabb[C].combine_rppivm$(this.m_aabb[A], this.m_aabb[F]);
        this.m_height_0[A] = 1 + MathUtils$Companion_getInstance().max_vux9f0$(this.m_height_0[B], this.m_height_0[G]) | 0;
        this.m_height_0[C] = 1 + MathUtils$Companion_getInstance().max_vux9f0$(this.m_height_0[A], this.m_height_0[F]) | 0;
      } else {
        this.m_child2_0[C] = iG;
        this.m_child2_0[A] = iF;
        this.m_parent_0[F] = iA;
        this.m_aabb[A].combine_rppivm$(this.m_aabb[B], this.m_aabb[F]);
        this.m_aabb[C].combine_rppivm$(this.m_aabb[A], this.m_aabb[G]);
        this.m_height_0[A] = 1 + MathUtils$Companion_getInstance().max_vux9f0$(this.m_height_0[B], this.m_height_0[F]) | 0;
        this.m_height_0[C] = 1 + MathUtils$Companion_getInstance().max_vux9f0$(this.m_height_0[A], this.m_height_0[G]) | 0;
      }
      return iC;
    }if (balance < -1) {
      var iD = this.m_child1_0[B];
      var iE = this.m_child2_0[B];
      var D = iD;
      var E = iE;
      if (!(0 <= iD && iD < this.m_nodeCapacity_0)) {
        var message_5 = 'Check failed.';
        throw IllegalStateException_init(message_5.toString());
      }if (!(0 <= iE && iE < this.m_nodeCapacity_0)) {
        var message_6 = 'Check failed.';
        throw IllegalStateException_init(message_6.toString());
      }this.m_child1_0[B] = iA;
      this.m_parent_0[B] = this.m_parent_0[A];
      var Bparent = this.m_parent_0[B];
      this.m_parent_0[A] = iB;
      if (Bparent !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
        if (this.m_child1_0[Bparent] === iA) {
          this.m_child1_0[Bparent] = iB;
        } else {
          if (!(this.m_child2_0[Bparent] === iA)) {
            var message_7 = 'Check failed.';
            throw IllegalStateException_init(message_7.toString());
          }this.m_child2_0[Bparent] = iB;
        }
      } else {
        this.m_root = iB;
      }
      if (this.m_height_0[D] > this.m_height_0[E]) {
        this.m_child2_0[B] = iD;
        this.m_child1_0[A] = iE;
        this.m_parent_0[E] = iA;
        this.m_aabb[A].combine_rppivm$(this.m_aabb[C], this.m_aabb[E]);
        this.m_aabb[B].combine_rppivm$(this.m_aabb[A], this.m_aabb[D]);
        this.m_height_0[A] = 1 + MathUtils$Companion_getInstance().max_vux9f0$(this.m_height_0[C], this.m_height_0[E]) | 0;
        this.m_height_0[B] = 1 + MathUtils$Companion_getInstance().max_vux9f0$(this.m_height_0[A], this.m_height_0[D]) | 0;
      } else {
        this.m_child2_0[B] = iE;
        this.m_child1_0[A] = iD;
        this.m_parent_0[D] = iA;
        this.m_aabb[A].combine_rppivm$(this.m_aabb[C], this.m_aabb[D]);
        this.m_aabb[B].combine_rppivm$(this.m_aabb[A], this.m_aabb[E]);
        this.m_height_0[A] = 1 + MathUtils$Companion_getInstance().max_vux9f0$(this.m_height_0[C], this.m_height_0[D]) | 0;
        this.m_height_0[B] = 1 + MathUtils$Companion_getInstance().max_vux9f0$(this.m_height_0[A], this.m_height_0[E]) | 0;
      }
      return iB;
    }return iA;
  };
  DynamicTreeFlatNodes.prototype.validateStructure_0 = function (node) {
    if (node === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
      return;
    }if (node === this.m_root) {
      if (!(this.m_parent_0[node] === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }}var child1 = this.m_child1_0[node];
    var child2 = this.m_child2_0[node];
    if (child1 === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
      if (!(child1 === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE)) {
        var message_0 = 'Check failed.';
        throw IllegalStateException_init(message_0.toString());
      }if (!(child2 === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE)) {
        var message_1 = 'Check failed.';
        throw IllegalStateException_init(message_1.toString());
      }if (!(this.m_height_0[node] === 0)) {
        var message_2 = 'Check failed.';
        throw IllegalStateException_init(message_2.toString());
      }return;
    }if (!(child1 !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE && 0 <= child1 && child1 < this.m_nodeCapacity_0)) {
      var message_3 = 'Check failed.';
      throw IllegalStateException_init(message_3.toString());
    }if (!(child2 !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE && 0 <= child2 && child2 < this.m_nodeCapacity_0)) {
      var message_4 = 'Check failed.';
      throw IllegalStateException_init(message_4.toString());
    }if (!(this.m_parent_0[child1] === node)) {
      var message_5 = 'Check failed.';
      throw IllegalStateException_init(message_5.toString());
    }if (!(this.m_parent_0[child2] === node)) {
      var message_6 = 'Check failed.';
      throw IllegalStateException_init(message_6.toString());
    }this.validateStructure_0(child1);
    this.validateStructure_0(child2);
  };
  DynamicTreeFlatNodes.prototype.validateMetrics_0 = function (node) {
    var tmp$, tmp$_0;
    if (node === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
      return;
    }var child1 = this.m_child1_0[node];
    var child2 = this.m_child2_0[node];
    if (child1 === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
      if (!(child1 === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }if (!(child2 === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE)) {
        var message_0 = 'Check failed.';
        throw IllegalStateException_init(message_0.toString());
      }if (!(this.m_height_0[node] === 0)) {
        var message_1 = 'Check failed.';
        throw IllegalStateException_init(message_1.toString());
      }return;
    }if (!(child1 !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE && 0 <= child1 && child1 < this.m_nodeCapacity_0)) {
      var message_2 = 'Check failed.';
      throw IllegalStateException_init(message_2.toString());
    }if (!(child2 !== child1 && 0 <= child2 && child2 < this.m_nodeCapacity_0)) {
      var message_3 = 'Check failed.';
      throw IllegalStateException_init(message_3.toString());
    }var height1 = this.m_height_0[child1];
    var height2 = this.m_height_0[child2];
    var height;
    height = 1 + MathUtils$Companion_getInstance().max_vux9f0$(height1, height2) | 0;
    if (!(this.m_height_0[node] === height)) {
      var message_4 = 'Check failed.';
      throw IllegalStateException_init(message_4.toString());
    }var aabb = AABB_init();
    aabb.combine_rppivm$(this.m_aabb[child1], this.m_aabb[child2]);
    if (!((tmp$ = aabb.lowerBound) != null ? tmp$.equals(this.m_aabb[node].lowerBound) : null)) {
      var message_5 = 'Check failed.';
      throw IllegalStateException_init(message_5.toString());
    }if (!((tmp$_0 = aabb.upperBound) != null ? tmp$_0.equals(this.m_aabb[node].upperBound) : null)) {
      var message_6 = 'Check failed.';
      throw IllegalStateException_init(message_6.toString());
    }this.validateMetrics_0(child1);
    this.validateMetrics_0(child2);
  };
  DynamicTreeFlatNodes.prototype.drawTree_38pq6y$ = function (argDraw) {
    if (this.m_root === DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
      return;
    }var height = this.computeHeight();
    this.drawTree_pu8uzs$(argDraw, this.m_root, 0, height);
  };
  DynamicTreeFlatNodes.prototype.drawTree_pu8uzs$ = function (argDraw, node, spot, height) {
    var a = this.m_aabb[node];
    a.getVertices_jorshu$(this.drawVecs_0);
    this.color_0.set_y2kzbl$(1.0, (height - spot | 0) * 1.0 / height, (height - spot | 0) * 1.0 / height);
    argDraw.drawPolygon_om3j2w$(this.drawVecs_0, 4, this.color_0);
    ensureNotNull(argDraw.viewportTranform).getWorldToScreen_xjacks$(a.upperBound, this.textVec_0);
    argDraw.drawString_m6qolm$(this.textVec_0.x, this.textVec_0.y, node.toString() + '-' + toString(spot + 1 | 0) + '/' + toString(height), this.color_0);
    var c1 = this.m_child1_0[node];
    var c2 = this.m_child2_0[node];
    if (c1 !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
      this.drawTree_pu8uzs$(argDraw, c1, spot + 1 | 0, height);
    }if (c2 !== DynamicTreeFlatNodes$Companion_getInstance().NULL_NODE) {
      this.drawTree_pu8uzs$(argDraw, c2, spot + 1 | 0, height);
    }};
  function DynamicTreeFlatNodes$Companion() {
    DynamicTreeFlatNodes$Companion_instance = this;
    this.MAX_STACK_SIZE = 64;
    this.NULL_NODE = -1;
    this.INITIAL_BUFFER_LENGTH = 16;
  }
  DynamicTreeFlatNodes$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DynamicTreeFlatNodes$Companion_instance = null;
  function DynamicTreeFlatNodes$Companion_getInstance() {
    if (DynamicTreeFlatNodes$Companion_instance === null) {
      new DynamicTreeFlatNodes$Companion();
    }return DynamicTreeFlatNodes$Companion_instance;
  }
  DynamicTreeFlatNodes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicTreeFlatNodes',
    interfaces: [BroadPhaseStrategy]
  };
  function DynamicTreeNode(id) {
    this.id_8be2vx$ = id;
    this.$delegate_fuezm1$_0 = new Box2dTypedUserData$Mixin();
    this.aabb = AABB_init();
    this.userData = Unit;
    this.parent_8be2vx$ = null;
    this.child1_8be2vx$ = null;
    this.child2_8be2vx$ = null;
    this.height_8be2vx$ = 0;
  }
  DynamicTreeNode.prototype.contains_d2xgsj$ = function (key) {
    return this.$delegate_fuezm1$_0.contains_d2xgsj$(key);
  };
  DynamicTreeNode.prototype.get_d2xgsj$ = function (key) {
    return this.$delegate_fuezm1$_0.get_d2xgsj$(key);
  };
  DynamicTreeNode.prototype.set_kj97s6$ = function (key, value) {
    return this.$delegate_fuezm1$_0.set_kj97s6$(key, value);
  };
  DynamicTreeNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicTreeNode',
    interfaces: [Box2dTypedUserData]
  };
  function Pair() {
    this.proxyIdA = 0;
    this.proxyIdB = 0;
  }
  Pair.prototype.compareTo_11rb$ = function (pair2) {
    var tmp$;
    if (this.proxyIdA < pair2.proxyIdA) {
      return -1;
    }if (this.proxyIdA === pair2.proxyIdA) {
      tmp$ = this.proxyIdB < pair2.proxyIdB ? -1 : this.proxyIdB === pair2.proxyIdB ? 0 : 1;
    } else
      tmp$ = 1;
    return tmp$;
  };
  Pair.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pair',
    interfaces: [Comparable]
  };
  function ChainShape() {
    Shape.call(this, ShapeType$CHAIN_getInstance());
    this.m_vertices = null;
    this.m_count = 0;
    this.m_prevVertex = new Vec2();
    this.m_nextVertex = new Vec2();
    this.m_hasPrevVertex = false;
    this.m_hasNextVertex = false;
    this.pool0_0 = new EdgeShape();
    this.m_vertices = null;
    this.m_radius = Settings_getInstance().polygonRadius;
    this.m_count = 0;
  }
  ChainShape.prototype.clear = function () {
    this.m_vertices = null;
    this.m_count = 0;
  };
  ChainShape.prototype.getChildCount = function () {
    return this.m_count - 1 | 0;
  };
  ChainShape.prototype.getChildEdge_vrnuyh$ = function (edge, index) {
    if (!(0 <= index && index < (this.m_count - 1 | 0))) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }edge.m_radius = this.m_radius;
    var v0 = ensureNotNull(this.m_vertices)[index + 0 | 0];
    var v1 = ensureNotNull(this.m_vertices)[index + 1 | 0];
    edge.m_vertex1.x = v0.x;
    edge.m_vertex1.y = v0.y;
    edge.m_vertex2.x = v1.x;
    edge.m_vertex2.y = v1.y;
    if (index > 0) {
      var v = ensureNotNull(this.m_vertices)[index - 1 | 0];
      edge.m_vertex0.x = v.x;
      edge.m_vertex0.y = v.y;
      edge.m_hasVertex0 = true;
    } else {
      edge.m_vertex0.x = this.m_prevVertex.x;
      edge.m_vertex0.y = this.m_prevVertex.y;
      edge.m_hasVertex0 = this.m_hasPrevVertex;
    }
    if (index < (this.m_count - 2 | 0)) {
      var v_0 = ensureNotNull(this.m_vertices)[index + 2 | 0];
      edge.m_vertex3.x = v_0.x;
      edge.m_vertex3.y = v_0.y;
      edge.m_hasVertex3 = true;
    } else {
      edge.m_vertex3.x = this.m_nextVertex.x;
      edge.m_vertex3.y = this.m_nextVertex.y;
      edge.m_hasVertex3 = this.m_hasNextVertex;
    }
  };
  ChainShape.prototype.computeDistanceToOut_j3owg$ = function (xf, p, childIndex, normalOut) {
    var edge = this.pool0_0;
    this.getChildEdge_vrnuyh$(edge, childIndex);
    return edge.computeDistanceToOut_j3owg$(xf, p, 0, normalOut);
  };
  ChainShape.prototype.testPoint_v1llj6$ = function (xf, p) {
    return false;
  };
  ChainShape.prototype.raycast_epey9r$ = function (output, input, xf, childIndex) {
    if (!(childIndex < this.m_count)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var edgeShape = this.pool0_0;
    var i1 = childIndex;
    var i2 = childIndex + 1 | 0;
    if (i2 === this.m_count) {
      i2 = 0;
    }var v = ensureNotNull(this.m_vertices)[i1];
    edgeShape.m_vertex1.x = v.x;
    edgeShape.m_vertex1.y = v.y;
    var v1 = ensureNotNull(this.m_vertices)[i2];
    edgeShape.m_vertex2.x = v1.x;
    edgeShape.m_vertex2.y = v1.y;
    return edgeShape.raycast_epey9r$(output, input, xf, 0);
  };
  ChainShape.prototype.computeAABB_wue7ir$ = function (aabb, xf, childIndex) {
    if (!(childIndex < this.m_count)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var lower = aabb.lowerBound;
    var upper = aabb.upperBound;
    var i1 = childIndex;
    var i2 = childIndex + 1 | 0;
    if (i2 === this.m_count) {
      i2 = 0;
    }var vi1 = ensureNotNull(this.m_vertices)[i1];
    var vi2 = ensureNotNull(this.m_vertices)[i2];
    var xfq = xf.q;
    var xfp = xf.p;
    var v1x = xfq.c * vi1.x - xfq.s * vi1.y + xfp.x;
    var v1y = xfq.s * vi1.x + xfq.c * vi1.y + xfp.y;
    var v2x = xfq.c * vi2.x - xfq.s * vi2.y + xfp.x;
    var v2y = xfq.s * vi2.x + xfq.c * vi2.y + xfp.y;
    lower.x = v1x < v2x ? v1x : v2x;
    lower.y = v1y < v2y ? v1y : v2y;
    upper.x = v1x > v2x ? v1x : v2x;
    upper.y = v1y > v2y ? v1y : v2y;
  };
  ChainShape.prototype.computeMass_8lm4zy$ = function (massData, density) {
    massData.mass = 0.0;
    massData.center.setZero();
    massData.I = 0.0;
  };
  ChainShape.prototype.clone = function () {
    var clone = new ChainShape();
    clone.createChain_1xbbpv$(this.m_vertices, this.m_count);
    clone.m_prevVertex.set_z1lo5s$(this.m_prevVertex);
    clone.m_nextVertex.set_z1lo5s$(this.m_nextVertex);
    clone.m_hasPrevVertex = this.m_hasPrevVertex;
    clone.m_hasNextVertex = this.m_hasNextVertex;
    return clone;
  };
  ChainShape.prototype.createLoop_g8u1io$ = function (vertices, count) {
    if (!(this.m_vertices == null && this.m_count === 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(count >= 3)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }this.m_count = count + 1 | 0;
    var array = Array_0(this.m_count);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = Vec2$Companion_getInstance().dummy_8be2vx$;
    }
    this.m_vertices = array;
    for (var i_0 = 1; i_0 < count; i_0++) {
      var v1 = vertices[i_0 - 1 | 0];
      var v2 = vertices[i_0];
      if (MathUtils$Companion_getInstance().distanceSquared_xjacks$(v1, v2) < Settings_getInstance().linearSlop * Settings_getInstance().linearSlop) {
        throw RuntimeException_init('Vertices of chain shape are too close together');
      }}
    for (var i_1 = 0; i_1 < count; i_1++) {
      ensureNotNull(this.m_vertices)[i_1] = Vec2_init(vertices[i_1]);
    }
    ensureNotNull(this.m_vertices)[count] = Vec2_init(ensureNotNull(this.m_vertices)[0]);
    this.m_prevVertex.set_z1lo5s$(ensureNotNull(this.m_vertices)[this.m_count - 2 | 0]);
    this.m_nextVertex.set_z1lo5s$(ensureNotNull(this.m_vertices)[1]);
    this.m_hasPrevVertex = true;
    this.m_hasNextVertex = true;
  };
  ChainShape.prototype.createChain_1xbbpv$ = function (vertices, count) {
    var tmp$, tmp$_0;
    if (!(this.m_vertices == null && this.m_count === 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(count >= 2)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }this.m_count = count;
    var array = Array_0(this.m_count);
    var tmp$_1;
    tmp$_1 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_1; i++) {
      array[i] = Vec2$Companion_getInstance().dummy_8be2vx$;
    }
    this.m_vertices = array;
    tmp$ = this.m_count;
    for (var i_0 = 1; i_0 < tmp$; i_0++) {
      var v1 = ensureNotNull(vertices)[i_0 - 1 | 0];
      var v2 = vertices[i_0];
      if (MathUtils$Companion_getInstance().distanceSquared_xjacks$(v1, v2) < Settings_getInstance().linearSlop * Settings_getInstance().linearSlop) {
        throw RuntimeException_init('Vertices of chain shape are too close together');
      }}
    tmp$_0 = this.m_count;
    for (var i_1 = 0; i_1 < tmp$_0; i_1++) {
      ensureNotNull(this.m_vertices)[i_1] = Vec2_init(ensureNotNull(vertices)[i_1]);
    }
    this.m_hasPrevVertex = false;
    this.m_hasNextVertex = false;
    this.m_prevVertex.setZero();
    this.m_nextVertex.setZero();
  };
  ChainShape.prototype.setPrevVertex_z1lo5s$ = function (prevVertex) {
    this.m_prevVertex.set_z1lo5s$(prevVertex);
    this.m_hasPrevVertex = true;
  };
  ChainShape.prototype.setNextVertex_z1lo5s$ = function (nextVertex) {
    this.m_nextVertex.set_z1lo5s$(nextVertex);
    this.m_hasNextVertex = true;
  };
  ChainShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChainShape',
    interfaces: [Shape]
  };
  function CircleShape() {
    CircleShape$Companion_getInstance();
    Shape.call(this, ShapeType$CIRCLE_getInstance());
    this.m_p = new Vec2();
  }
  function CircleShape$Companion() {
    CircleShape$Companion_instance = this;
  }
  CircleShape$Companion.prototype.invoke_3p81yu$ = function (radius) {
    var $receiver = new CircleShape();
    $receiver.m_radius = numberToDouble(radius);
    return $receiver;
  };
  CircleShape$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CircleShape$Companion_instance = null;
  function CircleShape$Companion_getInstance() {
    if (CircleShape$Companion_instance === null) {
      new CircleShape$Companion();
    }return CircleShape$Companion_instance;
  }
  Object.defineProperty(CircleShape.prototype, 'vertexCount', {
    get: function () {
      return 1;
    }
  });
  CircleShape.prototype.clone = function () {
    var shape = new CircleShape();
    shape.m_p.x = this.m_p.x;
    shape.m_p.y = this.m_p.y;
    shape.m_radius = this.m_radius;
    return shape;
  };
  CircleShape.prototype.getChildCount = function () {
    return 1;
  };
  CircleShape.prototype.getSupport_z1lo5s$ = function (d) {
    return 0;
  };
  CircleShape.prototype.getSupportVertex_z1lo5s$ = function (d) {
    return this.m_p;
  };
  CircleShape.prototype.getVertex_za3lpa$ = function (index) {
    if (!(index === 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }return this.m_p;
  };
  CircleShape.prototype.testPoint_v1llj6$ = function (transform, p) {
    var q = transform.q;
    var tp = transform.p;
    var centerx = -(q.c * this.m_p.x - q.s * this.m_p.y + tp.x - p.x);
    var centery = -(q.s * this.m_p.x + q.c * this.m_p.y + tp.y - p.y);
    return centerx * centerx + centery * centery <= this.m_radius * this.m_radius;
  };
  CircleShape.prototype.computeDistanceToOut_j3owg$ = function (xf, p, childIndex, normalOut) {
    var xfq = xf.q;
    var centerx = xfq.c * this.m_p.x - xfq.s * this.m_p.y + xf.p.x;
    var centery = xfq.s * this.m_p.x + xfq.c * this.m_p.y + xf.p.y;
    var dx = p.x - centerx;
    var dy = p.y - centery;
    var d1 = MathUtils$Companion_getInstance().sqrt_mx4ult$(dx * dx + dy * dy);
    normalOut.x = dx * 1 / d1;
    normalOut.y = dy * 1 / d1;
    return d1 - this.m_radius;
  };
  CircleShape.prototype.raycast_epey9r$ = function (output, input, transform, childIndex) {
    var inputp1 = input.p1;
    var inputp2 = input.p2;
    var tq = transform.q;
    var tp = transform.p;
    var positionx = tq.c * this.m_p.x - tq.s * this.m_p.y + tp.x;
    var positiony = tq.s * this.m_p.x + tq.c * this.m_p.y + tp.y;
    var sx = inputp1.x - positionx;
    var sy = inputp1.y - positiony;
    var b = sx * sx + sy * sy - this.m_radius * this.m_radius;
    var rx = inputp2.x - inputp1.x;
    var ry = inputp2.y - inputp1.y;
    var c = sx * rx + sy * ry;
    var rr = rx * rx + ry * ry;
    var sigma = c * c - rr * b;
    if (sigma < 0.0 || rr < Settings_getInstance().EPSILON) {
      return false;
    }var a = -(c + MathUtils$Companion_getInstance().sqrt_mx4ult$(sigma));
    if (0.0 <= a && a <= input.maxFraction * rr) {
      a /= rr;
      output.fraction = a;
      output.normal.x = rx * a + sx;
      output.normal.y = ry * a + sy;
      output.normal.normalize();
      return true;
    }return false;
  };
  CircleShape.prototype.computeAABB_wue7ir$ = function (aabb, transform, childIndex) {
    var tq = transform.q;
    var tp = transform.p;
    var px = tq.c * this.m_p.x - tq.s * this.m_p.y + tp.x;
    var py = tq.s * this.m_p.x + tq.c * this.m_p.y + tp.y;
    aabb.lowerBound.x = px - this.m_radius;
    aabb.lowerBound.y = py - this.m_radius;
    aabb.upperBound.x = px + this.m_radius;
    aabb.upperBound.y = py + this.m_radius;
  };
  CircleShape.prototype.computeMass_8lm4zy$ = function (massData, density) {
    massData.mass = density * Settings_getInstance().PI * this.m_radius * this.m_radius;
    massData.center.x = this.m_p.x;
    massData.center.y = this.m_p.y;
    massData.I = massData.mass * (0.5 * this.m_radius * this.m_radius + (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y));
  };
  CircleShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CircleShape',
    interfaces: [Shape]
  };
  function EdgeShape() {
    Shape.call(this, ShapeType$EDGE_getInstance());
    this.m_vertex1 = new Vec2();
    this.m_vertex2 = new Vec2();
    this.m_vertex0 = new Vec2();
    this.m_vertex3 = new Vec2();
    this.m_hasVertex0 = false;
    this.m_hasVertex3 = false;
    this.normal_0 = new Vec2();
    this.m_radius = Settings_getInstance().polygonRadius;
  }
  EdgeShape.prototype.getChildCount = function () {
    return 1;
  };
  EdgeShape.prototype.set_xjacks$ = function (v1, v2) {
    this.m_vertex1.set_z1lo5s$(v1);
    this.m_vertex2.set_z1lo5s$(v2);
    this.m_hasVertex3 = false;
    this.m_hasVertex0 = this.m_hasVertex3;
  };
  EdgeShape.prototype.testPoint_v1llj6$ = function (xf, p) {
    return false;
  };
  EdgeShape.prototype.computeDistanceToOut_j3owg$ = function (xf, p, childIndex, normalOut) {
    var xfqc = xf.q.c;
    var xfqs = xf.q.s;
    var xfpx = xf.p.x;
    var xfpy = xf.p.y;
    var v1x = xfqc * this.m_vertex1.x - xfqs * this.m_vertex1.y + xfpx;
    var v1y = xfqs * this.m_vertex1.x + xfqc * this.m_vertex1.y + xfpy;
    var v2x = xfqc * this.m_vertex2.x - xfqs * this.m_vertex2.y + xfpx;
    var v2y = xfqs * this.m_vertex2.x + xfqc * this.m_vertex2.y + xfpy;
    var dx = p.x - v1x;
    var dy = p.y - v1y;
    var sx = v2x - v1x;
    var sy = v2y - v1y;
    var ds = dx * sx + dy * sy;
    if (ds > 0) {
      var s2 = sx * sx + sy * sy;
      if (ds > s2) {
        dx = p.x - v2x;
        dy = p.y - v2y;
      } else {
        dx -= ds / s2 * sx;
        dy -= ds / s2 * sy;
      }
    }var d1 = MathUtils$Companion_getInstance().sqrt_mx4ult$(dx * dx + dy * dy);
    if (d1 > 0) {
      normalOut.x = 1 / d1 * dx;
      normalOut.y = 1 / d1 * dy;
    } else {
      normalOut.x = 0.0;
      normalOut.y = 0.0;
    }
    return d1;
  };
  EdgeShape.prototype.raycast_epey9r$ = function (output, input, xf, childIndex) {
    var tempx;
    var tempy;
    var v1 = this.m_vertex1;
    var v2 = this.m_vertex2;
    var xfq = xf.q;
    var xfp = xf.p;
    tempx = input.p1.x - xfp.x;
    tempy = input.p1.y - xfp.y;
    var p1x = xfq.c * tempx + xfq.s * tempy;
    var p1y = -xfq.s * tempx + xfq.c * tempy;
    tempx = input.p2.x - xfp.x;
    tempy = input.p2.y - xfp.y;
    var p2x = xfq.c * tempx + xfq.s * tempy;
    var p2y = -xfq.s * tempx + xfq.c * tempy;
    var dx = p2x - p1x;
    var dy = p2y - p1y;
    this.normal_0.x = v2.y - v1.y;
    this.normal_0.y = v1.x - v2.x;
    this.normal_0.normalize();
    var normalx = this.normal_0.x;
    var normaly = this.normal_0.y;
    tempx = v1.x - p1x;
    tempy = v1.y - p1y;
    var numerator = normalx * tempx + normaly * tempy;
    var denominator = normalx * dx + normaly * dy;
    if (denominator === 0.0) {
      return false;
    }var t = numerator / denominator;
    if (t < 0.0 || 1.0 < t) {
      return false;
    }var qx = p1x + t * dx;
    var qy = p1y + t * dy;
    var rx = v2.x - v1.x;
    var ry = v2.y - v1.y;
    var rr = rx * rx + ry * ry;
    if (rr === 0.0) {
      return false;
    }tempx = qx - v1.x;
    tempy = qy - v1.y;
    var s = (tempx * rx + tempy * ry) / rr;
    if (s < 0.0 || 1.0 < s) {
      return false;
    }output.fraction = t;
    if (numerator > 0.0) {
      output.normal.x = -xfq.c * this.normal_0.x + xfq.s * this.normal_0.y;
      output.normal.y = -xfq.s * this.normal_0.x - xfq.c * this.normal_0.y;
    } else {
      output.normal.x = xfq.c * this.normal_0.x - xfq.s * this.normal_0.y;
      output.normal.y = xfq.s * this.normal_0.x + xfq.c * this.normal_0.y;
    }
    return true;
  };
  EdgeShape.prototype.computeAABB_wue7ir$ = function (aabb, xf, childIndex) {
    var lowerBound = aabb.lowerBound;
    var upperBound = aabb.upperBound;
    var xfq = xf.q;
    var v1x = xfq.c * this.m_vertex1.x - xfq.s * this.m_vertex1.y + xf.p.x;
    var v1y = xfq.s * this.m_vertex1.x + xfq.c * this.m_vertex1.y + xf.p.y;
    var v2x = xfq.c * this.m_vertex2.x - xfq.s * this.m_vertex2.y + xf.p.x;
    var v2y = xfq.s * this.m_vertex2.x + xfq.c * this.m_vertex2.y + xf.p.y;
    lowerBound.x = v1x < v2x ? v1x : v2x;
    lowerBound.y = v1y < v2y ? v1y : v2y;
    upperBound.x = v1x > v2x ? v1x : v2x;
    upperBound.y = v1y > v2y ? v1y : v2y;
    lowerBound.x = lowerBound.x - this.m_radius;
    lowerBound.y = lowerBound.y - this.m_radius;
    upperBound.x = upperBound.x + this.m_radius;
    upperBound.y = upperBound.y + this.m_radius;
  };
  EdgeShape.prototype.computeMass_8lm4zy$ = function (massData, density) {
    massData.mass = 0.0;
    massData.center.set_z1lo5s$(this.m_vertex1).addLocal_z1lo5s$(this.m_vertex2).mulLocal_mx4ult$(0.5);
    massData.I = 0.0;
  };
  EdgeShape.prototype.clone = function () {
    var edge = new EdgeShape();
    edge.m_radius = this.m_radius;
    edge.m_hasVertex0 = this.m_hasVertex0;
    edge.m_hasVertex3 = this.m_hasVertex3;
    edge.m_vertex0.set_z1lo5s$(this.m_vertex0);
    edge.m_vertex1.set_z1lo5s$(this.m_vertex1);
    edge.m_vertex2.set_z1lo5s$(this.m_vertex2);
    edge.m_vertex3.set_z1lo5s$(this.m_vertex3);
    return edge;
  };
  EdgeShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EdgeShape',
    interfaces: [Shape]
  };
  function MassData() {
    this.mass = 0;
    this.center = null;
    this.I = 0;
  }
  MassData.prototype.set_jo33oz$ = function (md) {
    this.mass = md.mass;
    this.I = md.I;
    this.center.set_z1lo5s$(md.center);
  };
  MassData.prototype.clone = function () {
    return MassData_init_0(this);
  };
  MassData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MassData',
    interfaces: []
  };
  function MassData_init($this) {
    $this = $this || Object.create(MassData.prototype);
    MassData.call($this);
    $this.I = 0.0;
    $this.mass = $this.I;
    $this.center = new Vec2();
    return $this;
  }
  function MassData_init_0(md, $this) {
    $this = $this || Object.create(MassData.prototype);
    MassData.call($this);
    $this.mass = md.mass;
    $this.I = md.I;
    $this.center = md.center.clone();
    return $this;
  }
  function PolygonShape() {
    PolygonShape$Companion_getInstance();
    Shape.call(this, ShapeType$POLYGON_getInstance());
    this.m_centroid = new Vec2();
    var array = Array_0(Settings_getInstance().maxPolygonVertices);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Vec2();
    }
    this.m_vertices = array;
    var array_0 = Array_0(Settings_getInstance().maxPolygonVertices);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = new Vec2();
    }
    this.m_normals = array_0;
    this.m_count = 0;
    this.pool1_0 = new Vec2();
    this.pool2_0 = new Vec2();
    this.pool3_0 = new Vec2();
    this.pool4_0 = new Vec2();
    this.poolt1_0 = Transform_init();
    this.m_radius = Settings_getInstance().polygonRadius;
    this.m_centroid.setZero();
  }
  PolygonShape.prototype.clone = function () {
    var tmp$;
    var shape = new PolygonShape();
    shape.m_centroid.set_z1lo5s$(this.m_centroid);
    tmp$ = shape.m_normals;
    for (var i = 0; i !== tmp$.length; ++i) {
      shape.m_normals[i].set_z1lo5s$(this.m_normals[i]);
      shape.m_vertices[i].set_z1lo5s$(this.m_vertices[i]);
    }
    shape.m_radius = this.m_radius;
    shape.m_count = this.m_count;
    return shape;
  };
  PolygonShape.prototype.set_g8u1io$ = function (vertices, count) {
    this.set_mi4h73$(vertices, count, null, null);
  };
  PolygonShape.prototype.set_mi4h73$ = function (verts, num, vecPool, intPool) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (!(3 <= num && num <= Settings_getInstance().maxPolygonVertices)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (num < 3) {
      this.setAsBox_dleff0$(1.0, 1.0);
      return;
    }var n = MathUtils$Companion_getInstance().min_vux9f0$(num, Settings_getInstance().maxPolygonVertices);
    var ps = vecPool != null ? vecPool.get_za3lpa$(Settings_getInstance().maxPolygonVertices) : Kotlin.newArray(Settings_getInstance().maxPolygonVertices, null);
    var tempCount = 0;
    tmp$ = n;
    for (var i = 0; i < tmp$; i++) {
      var v = verts[i];
      var unique = true;
      tmp$_0 = tempCount;
      for (var j = 0; j < tmp$_0; j++) {
        if (MathUtils$Companion_getInstance().distanceSquared_xjacks$(v, ensureNotNull(ps[j])) < 0.5 * Settings_getInstance().linearSlop) {
          unique = false;
          break;
        }}
      if (unique) {
        ensureNotNull(ps[tmp$_1 = tempCount, tempCount = tmp$_1 + 1 | 0, tmp$_1]).set_z1lo5s$(v);
      }}
    n = tempCount;
    if (n < 3) {
      if (!false) {
        var message_0 = 'Check failed.';
        throw IllegalStateException_init(message_0.toString());
      }this.setAsBox_dleff0$(1.0, 1.0);
      return;
    }var i0 = 0;
    var x0 = ensureNotNull(ps[0]).x;
    tmp$_2 = n;
    for (var i_0 = 1; i_0 < tmp$_2; i_0++) {
      var x = ensureNotNull(ps[i_0]).x;
      if (x > x0 || (x === x0 && ensureNotNull(ps[i_0]).y < ensureNotNull(ps[i0]).y)) {
        i0 = i_0;
        x0 = x;
      }}
    var hull = intPool != null ? intPool.get_za3lpa$(Settings_getInstance().maxPolygonVertices) : new Int32Array(Settings_getInstance().maxPolygonVertices);
    var m = 0;
    var ih = i0;
    while (true) {
      hull[m] = ih;
      var ie = 0;
      tmp$_3 = n;
      for (var j_0 = 1; j_0 < tmp$_3; j_0++) {
        if (ie === ih) {
          ie = j_0;
          continue;
        }var r = this.pool1_0.set_z1lo5s$(ensureNotNull(ps[ie])).subLocal_z1lo5s$(ensureNotNull(ps[hull[m]]));
        var v_0 = this.pool2_0.set_z1lo5s$(ensureNotNull(ps[j_0])).subLocal_z1lo5s$(ensureNotNull(ps[hull[m]]));
        var c = Vec2$Companion_getInstance().cross_xjacks$(r, v_0);
        if (c < 0.0) {
          ie = j_0;
        }if (c === 0.0 && v_0.lengthSquared() > r.lengthSquared()) {
          ie = j_0;
        }}
      m = m + 1 | 0;
      ih = ie;
      if (ie === i0) {
        break;
      }}
    this.m_count = m;
    tmp$_4 = this.m_count;
    for (var i_1 = 0; i_1 < tmp$_4; i_1++) {
      if (this.m_vertices[i_1] == null) {
        this.m_vertices[i_1] = new Vec2();
      }this.m_vertices[i_1].set_z1lo5s$(ensureNotNull(ps[hull[i_1]]));
    }
    var edge = this.pool1_0;
    tmp$_5 = this.m_count;
    for (var i_2 = 0; i_2 < tmp$_5; i_2++) {
      var i1 = i_2;
      var i2 = (i_2 + 1 | 0) < this.m_count ? i_2 + 1 | 0 : 0;
      edge.set_z1lo5s$(this.m_vertices[i2]).subLocal_z1lo5s$(this.m_vertices[i1]);
      if (!(edge.lengthSquared() > Settings_getInstance().EPSILON * Settings_getInstance().EPSILON)) {
        var message_1 = 'Check failed.';
        throw IllegalStateException_init(message_1.toString());
      }Vec2$Companion_getInstance().crossToOutUnsafe_ixbvwv$(edge, 1.0, this.m_normals[i_2]);
      this.m_normals[i_2].normalize();
    }
    this.computeCentroidToOut_l4mmek$(this.m_vertices, this.m_count, this.m_centroid);
  };
  PolygonShape.prototype.setAsBox_dleff0$ = function (hx, hy) {
    this.m_count = 4;
    this.m_vertices[0].set_dleff0$(-hx, -hy);
    this.m_vertices[1].set_dleff0$(hx, -hy);
    this.m_vertices[2].set_dleff0$(hx, hy);
    this.m_vertices[3].set_dleff0$(-hx, hy);
    this.m_normals[0].set_dleff0$(0.0, -1.0);
    this.m_normals[1].set_dleff0$(1.0, 0.0);
    this.m_normals[2].set_dleff0$(0.0, 1.0);
    this.m_normals[3].set_dleff0$(-1.0, 0.0);
    this.m_centroid.setZero();
  };
  PolygonShape.prototype.setAsBox_9jpwuj$ = function (hx, hy, center, angle) {
    var tmp$;
    this.m_count = 4;
    this.m_vertices[0].set_dleff0$(-hx, -hy);
    this.m_vertices[1].set_dleff0$(hx, -hy);
    this.m_vertices[2].set_dleff0$(hx, hy);
    this.m_vertices[3].set_dleff0$(-hx, hy);
    this.m_normals[0].set_dleff0$(0.0, -1.0);
    this.m_normals[1].set_dleff0$(1.0, 0.0);
    this.m_normals[2].set_dleff0$(0.0, 1.0);
    this.m_normals[3].set_dleff0$(-1.0, 0.0);
    this.m_centroid.set_z1lo5s$(center);
    var xf = this.poolt1_0;
    xf.p.set_z1lo5s$(center);
    xf.q.set_mx4ult$(angle);
    tmp$ = this.m_count;
    for (var i = 0; i < tmp$; i++) {
      Transform$Companion_getInstance().mulToOut_r18ri2$(xf, this.m_vertices[i], this.m_vertices[i]);
      Rot$Companion_getInstance().mulToOut_ok1ihx$(xf.q, this.m_normals[i], this.m_normals[i]);
    }
  };
  PolygonShape.prototype.getChildCount = function () {
    return 1;
  };
  PolygonShape.prototype.testPoint_v1llj6$ = function (xf, p) {
    var tmp$, tmp$_0;
    var tempx;
    var tempy;
    var xfq = xf.q;
    tempx = p.x - xf.p.x;
    tempy = p.y - xf.p.y;
    var pLocalx = xfq.c * tempx + xfq.s * tempy;
    var pLocaly = -xfq.s * tempx + xfq.c * tempy;
    if (PolygonShape$Companion_getInstance().m_debug_0) {
      println('--testPoint debug--');
      println('Vertices: ');
      tmp$ = this.m_count;
      for (var i = 0; i < tmp$; i++) {
        println(this.m_vertices[i]);
      }
      println('pLocal: ' + pLocalx + ', ' + pLocaly);
    }tmp$_0 = this.m_count;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
      var vertex = this.m_vertices[i_0];
      var normal = this.m_normals[i_0];
      tempx = pLocalx - vertex.x;
      tempy = pLocaly - vertex.y;
      var dot = normal.x * tempx + normal.y * tempy;
      if (dot > 0.0) {
        return false;
      }}
    return true;
  };
  PolygonShape.prototype.computeAABB_wue7ir$ = function (aabb, xf, childIndex) {
    var tmp$;
    var lower = aabb.lowerBound;
    var upper = aabb.upperBound;
    var v1 = this.m_vertices[0];
    var xfqc = xf.q.c;
    var xfqs = xf.q.s;
    var xfpx = xf.p.x;
    var xfpy = xf.p.y;
    lower.x = xfqc * v1.x - xfqs * v1.y + xfpx;
    lower.y = xfqs * v1.x + xfqc * v1.y + xfpy;
    upper.x = lower.x;
    upper.y = lower.y;
    tmp$ = this.m_count;
    for (var i = 1; i < tmp$; i++) {
      var v2 = this.m_vertices[i];
      var vx = xfqc * v2.x - xfqs * v2.y + xfpx;
      var vy = xfqs * v2.x + xfqc * v2.y + xfpy;
      lower.x = lower.x < vx ? lower.x : vx;
      lower.y = lower.y < vy ? lower.y : vy;
      upper.x = upper.x > vx ? upper.x : vx;
      upper.y = upper.y > vy ? upper.y : vy;
    }
    lower.x = lower.x - this.m_radius;
    lower.y = lower.y - this.m_radius;
    upper.x = upper.x + this.m_radius;
    upper.y = upper.y + this.m_radius;
  };
  PolygonShape.prototype.getVertex_za3lpa$ = function (index) {
    if (!(0 <= index && index < this.m_count)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }return this.m_vertices[index];
  };
  PolygonShape.prototype.computeDistanceToOut_j3owg$ = function (xf, p, childIndex, normalOut) {
    var tmp$, tmp$_0;
    var xfqc = xf.q.c;
    var xfqs = xf.q.s;
    var tx = p.x - xf.p.x;
    var ty = p.y - xf.p.y;
    var pLocalx = xfqc * tx + xfqs * ty;
    var pLocaly = -xfqs * tx + xfqc * ty;
    var maxDistance = -kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    var normalForMaxDistanceX = pLocalx;
    var normalForMaxDistanceY = pLocaly;
    tmp$ = this.m_count;
    for (var i = 0; i < tmp$; i++) {
      var vertex = this.m_vertices[i];
      var normal = this.m_normals[i];
      tx = pLocalx - vertex.x;
      ty = pLocaly - vertex.y;
      var dot = normal.x * tx + normal.y * ty;
      if (dot > maxDistance) {
        maxDistance = dot;
        normalForMaxDistanceX = normal.x;
        normalForMaxDistanceY = normal.y;
      }}
    var distance;
    if (maxDistance > 0) {
      var minDistanceX = normalForMaxDistanceX;
      var minDistanceY = normalForMaxDistanceY;
      var minDistance2 = maxDistance * maxDistance;
      tmp$_0 = this.m_count;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        var vertex_0 = this.m_vertices[i_0];
        var distanceVecX = pLocalx - vertex_0.x;
        var distanceVecY = pLocaly - vertex_0.y;
        var distance2 = distanceVecX * distanceVecX + distanceVecY * distanceVecY;
        if (minDistance2 > distance2) {
          minDistanceX = distanceVecX;
          minDistanceY = distanceVecY;
          minDistance2 = distance2;
        }}
      distance = MathUtils$Companion_getInstance().sqrt_mx4ult$(minDistance2);
      normalOut.x = xfqc * minDistanceX - xfqs * minDistanceY;
      normalOut.y = xfqs * minDistanceX + xfqc * minDistanceY;
      normalOut.normalize();
    } else {
      distance = maxDistance;
      normalOut.x = xfqc * normalForMaxDistanceX - xfqs * normalForMaxDistanceY;
      normalOut.y = xfqs * normalForMaxDistanceX + xfqc * normalForMaxDistanceY;
    }
    return distance;
  };
  PolygonShape.prototype.raycast_epey9r$ = function (output, input, xf, childIndex) {
    var tmp$;
    var xfqc = xf.q.c;
    var xfqs = xf.q.s;
    var xfp = xf.p;
    var tempx;
    var tempy;
    tempx = input.p1.x - xfp.x;
    tempy = input.p1.y - xfp.y;
    var p1x = xfqc * tempx + xfqs * tempy;
    var p1y = -xfqs * tempx + xfqc * tempy;
    tempx = input.p2.x - xfp.x;
    tempy = input.p2.y - xfp.y;
    var p2x = xfqc * tempx + xfqs * tempy;
    var p2y = -xfqs * tempx + xfqc * tempy;
    var dx = p2x - p1x;
    var dy = p2y - p1y;
    var lower = 0.0;
    var upper = input.maxFraction;
    var index = -1;
    tmp$ = this.m_count;
    for (var i = 0; i < tmp$; i++) {
      var normal = this.m_normals[i];
      var vertex = this.m_vertices[i];
      var tempxn = vertex.x - p1x;
      var tempyn = vertex.y - p1y;
      var numerator = normal.x * tempxn + normal.y * tempyn;
      var denominator = normal.x * dx + normal.y * dy;
      if (denominator === 0.0) {
        if (numerator < 0.0) {
          return false;
        }} else {
        if (denominator < 0.0 && numerator < lower * denominator) {
          lower = numerator / denominator;
          index = i;
        } else if (denominator > 0.0 && numerator < upper * denominator) {
          upper = numerator / denominator;
        }}
      if (upper < lower) {
        return false;
      }}
    if (!(0.0 <= lower && lower <= input.maxFraction)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (index >= 0) {
      output.fraction = lower;
      var normal_0 = this.m_normals[index];
      var out = output.normal;
      out.x = xfqc * normal_0.x - xfqs * normal_0.y;
      out.y = xfqs * normal_0.x + xfqc * normal_0.y;
      return true;
    }return false;
  };
  PolygonShape.prototype.computeCentroidToOut_l4mmek$ = function (vs, count, out) {
    if (!(count >= 3)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }out.set_dleff0$(0.0, 0.0);
    var area = 0.0;
    var pRef = this.pool1_0;
    pRef.setZero();
    var e1 = this.pool2_0;
    var e2 = this.pool3_0;
    var inv3 = 1.0 / 3.0;
    for (var i = 0; i < count; i++) {
      var p1 = pRef;
      var p2 = vs[i];
      var p3 = (i + 1 | 0) < count ? vs[i + 1 | 0] : vs[0];
      e1.set_z1lo5s$(p2).subLocal_z1lo5s$(p1);
      e2.set_z1lo5s$(p3).subLocal_z1lo5s$(p1);
      var D = Vec2$Companion_getInstance().cross_xjacks$(e1, e2);
      var triangleArea = 0.5 * D;
      area += triangleArea;
      e1.set_z1lo5s$(p1).addLocal_z1lo5s$(p2).addLocal_z1lo5s$(p3).mulLocal_mx4ult$(triangleArea * inv3);
      out.addLocal_z1lo5s$(e1);
    }
    if (!(area > Settings_getInstance().EPSILON)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }out.mulLocal_mx4ult$(1.0 / area);
  };
  PolygonShape.prototype.computeMass_8lm4zy$ = function (massData, density) {
    var tmp$, tmp$_0;
    if (!(this.m_count >= 3)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var center = this.pool1_0;
    center.setZero();
    var area = 0.0;
    var I = 0.0;
    var s = this.pool2_0;
    s.setZero();
    tmp$ = this.m_count;
    for (var i = 0; i < tmp$; i++) {
      s.addLocal_z1lo5s$(this.m_vertices[i]);
    }
    s.mulLocal_mx4ult$(1.0 / this.m_count);
    var k_inv3 = 1.0 / 3.0;
    var e1 = this.pool3_0;
    var e2 = this.pool4_0;
    tmp$_0 = this.m_count;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
      e1.set_z1lo5s$(this.m_vertices[i_0]).subLocal_z1lo5s$(s);
      e2.set_z1lo5s$(s).negateLocal().addLocal_z1lo5s$((i_0 + 1 | 0) < this.m_count ? this.m_vertices[i_0 + 1 | 0] : this.m_vertices[0]);
      var D = Vec2$Companion_getInstance().cross_xjacks$(e1, e2);
      var triangleArea = 0.5 * D;
      area += triangleArea;
      center.x = center.x + triangleArea * k_inv3 * (e1.x + e2.x);
      center.y = center.y + triangleArea * k_inv3 * (e1.y + e2.y);
      var ex1 = e1.x;
      var ey1 = e1.y;
      var ex2 = e2.x;
      var ey2 = e2.y;
      var intx2 = ex1 * ex1 + ex2 * ex1 + ex2 * ex2;
      var inty2 = ey1 * ey1 + ey2 * ey1 + ey2 * ey2;
      I += 0.25 * k_inv3 * D * (intx2 + inty2);
    }
    massData.mass = density * area;
    if (!(area > Settings_getInstance().EPSILON)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }center.mulLocal_mx4ult$(1.0 / area);
    massData.center.set_z1lo5s$(center).addLocal_z1lo5s$(s);
    massData.I = I * density;
    massData.I = massData.I + massData.mass * Vec2$Companion_getInstance().dot_xjacks$(massData.center, massData.center);
  };
  PolygonShape.prototype.validate = function () {
    var tmp$, tmp$_0;
    tmp$ = this.m_count;
    for (var i = 0; i < tmp$; i++) {
      var i1 = i;
      var i2 = i < (this.m_count - 1 | 0) ? i1 + 1 | 0 : 0;
      var p = this.m_vertices[i1];
      var e = this.pool1_0.set_z1lo5s$(this.m_vertices[i2]).subLocal_z1lo5s$(p);
      tmp$_0 = this.m_count;
      for (var j = 0; j < tmp$_0; j++) {
        if (j === i1 || j === i2) {
          continue;
        }var v = this.pool2_0.set_z1lo5s$(this.m_vertices[j]).subLocal_z1lo5s$(p);
        var c = Vec2$Companion_getInstance().cross_xjacks$(e, v);
        if (c < 0.0) {
          return false;
        }}
    }
    return true;
  };
  PolygonShape.prototype.centroid_m97ft2$ = function (xf) {
    return Transform$Companion_getInstance().mul_v1llj6$(xf, this.m_centroid);
  };
  PolygonShape.prototype.centroidToOut_v1llj6$ = function (xf, out) {
    Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(xf, this.m_centroid, out);
    return out;
  };
  function PolygonShape$Companion() {
    PolygonShape$Companion_instance = this;
    this.m_debug_0 = false;
  }
  PolygonShape$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PolygonShape$Companion_instance = null;
  function PolygonShape$Companion_getInstance() {
    if (PolygonShape$Companion_instance === null) {
      new PolygonShape$Companion();
    }return PolygonShape$Companion_instance;
  }
  PolygonShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolygonShape',
    interfaces: [Shape]
  };
  function Shape(m_type) {
    this.m_type_ownkjy$_0 = m_type;
    this.m_radius = 0.0;
  }
  Shape.prototype.getType = function () {
    return this.m_type_ownkjy$_0;
  };
  Shape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Shape',
    interfaces: []
  };
  function ShapeType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ShapeType_initFields() {
    ShapeType_initFields = function () {
    };
    ShapeType$CIRCLE_instance = new ShapeType('CIRCLE', 0);
    ShapeType$EDGE_instance = new ShapeType('EDGE', 1);
    ShapeType$POLYGON_instance = new ShapeType('POLYGON', 2);
    ShapeType$CHAIN_instance = new ShapeType('CHAIN', 3);
  }
  var ShapeType$CIRCLE_instance;
  function ShapeType$CIRCLE_getInstance() {
    ShapeType_initFields();
    return ShapeType$CIRCLE_instance;
  }
  var ShapeType$EDGE_instance;
  function ShapeType$EDGE_getInstance() {
    ShapeType_initFields();
    return ShapeType$EDGE_instance;
  }
  var ShapeType$POLYGON_instance;
  function ShapeType$POLYGON_getInstance() {
    ShapeType_initFields();
    return ShapeType$POLYGON_instance;
  }
  var ShapeType$CHAIN_instance;
  function ShapeType$CHAIN_getInstance() {
    ShapeType_initFields();
    return ShapeType$CHAIN_instance;
  }
  ShapeType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShapeType',
    interfaces: [Enum]
  };
  function ShapeType$values() {
    return [ShapeType$CIRCLE_getInstance(), ShapeType$EDGE_getInstance(), ShapeType$POLYGON_getInstance(), ShapeType$CHAIN_getInstance()];
  }
  ShapeType.values = ShapeType$values;
  function ShapeType$valueOf(name) {
    switch (name) {
      case 'CIRCLE':
        return ShapeType$CIRCLE_getInstance();
      case 'EDGE':
        return ShapeType$EDGE_getInstance();
      case 'POLYGON':
        return ShapeType$POLYGON_getInstance();
      case 'CHAIN':
        return ShapeType$CHAIN_getInstance();
      default:throwISE('No enum constant org.jbox2d.collision.shapes.ShapeType.' + name);
    }
  }
  ShapeType.valueOf_61zpoe$ = ShapeType$valueOf;
  var arraycopy$lambda_3 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  var arraycopy$lambda_4 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function BufferUtils() {
    BufferUtils_instance = this;
  }
  BufferUtils.prototype.reallocateBuffer_z72n54$ = function (klass, oldBuffer, oldCapacity, newCapacity) {
    var tmp$;
    if (!(newCapacity > oldCapacity)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var array = Array_0(newCapacity);
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      array[i] = oldBuffer != null && i < oldCapacity ? oldBuffer[i] : klass();
    }
    return Kotlin.isArray(tmp$ = array) ? tmp$ : throwCCE();
  };
  BufferUtils.prototype.reallocateBuffer_q8imh4$ = function (oldBuffer, oldCapacity, newCapacity) {
    if (!(newCapacity > oldCapacity)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var newBuffer = new Int32Array(newCapacity);
    if (oldBuffer != null) {
      arrayCopy(oldBuffer, newBuffer, 0, 0, 0 + oldCapacity | 0);
    }return newBuffer;
  };
  BufferUtils.prototype.reallocateBuffer_gvs7zp$ = function (oldBuffer, oldCapacity, newCapacity) {
    if (!(newCapacity > oldCapacity)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var newBuffer = new Float32Array(newCapacity);
    if (oldBuffer != null) {
      arrayCopy(oldBuffer, newBuffer, 0, 0, 0 + oldCapacity | 0);
    }return newBuffer;
  };
  BufferUtils.prototype.reallocateBuffer_8tm975$ = function (klass, buffer, userSuppliedCapacity, oldCapacity, newCapacity, deferred) {
    var buffer_0 = buffer;
    if (!(newCapacity > oldCapacity)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(userSuppliedCapacity === 0 || newCapacity <= userSuppliedCapacity)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }if ((!deferred || buffer_0 != null) && userSuppliedCapacity === 0) {
      buffer_0 = this.reallocateBuffer_z72n54$(klass, buffer_0, oldCapacity, newCapacity);
    }return ensureNotNull(buffer_0);
  };
  BufferUtils.prototype.reallocateBuffer_gtrz29$ = function (buffer, userSuppliedCapacity, oldCapacity, newCapacity, deferred) {
    var buffer_0 = buffer;
    if (!(newCapacity > oldCapacity)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(userSuppliedCapacity === 0 || newCapacity <= userSuppliedCapacity)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }if ((!deferred || buffer_0 != null) && userSuppliedCapacity === 0) {
      buffer_0 = this.reallocateBuffer_q8imh4$(buffer_0, oldCapacity, newCapacity);
    }return ensureNotNull(buffer_0);
  };
  BufferUtils.prototype.reallocateBuffer_oghb6a$ = function (buffer, userSuppliedCapacity, oldCapacity, newCapacity, deferred) {
    var buffer_0 = buffer;
    if (!(newCapacity > oldCapacity)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(userSuppliedCapacity === 0 || newCapacity <= userSuppliedCapacity)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }if ((!deferred || buffer_0 != null) && userSuppliedCapacity === 0) {
      buffer_0 = this.reallocateBuffer_gvs7zp$(buffer_0, oldCapacity, newCapacity);
    }return ensureNotNull(buffer_0);
  };
  BufferUtils.prototype.rotate_rahehc$ = function (ray, first, new_first, last) {
    var first_0 = first;
    var new_first_0 = new_first;
    var next = new_first_0;
    while (next !== first_0) {
      var temp = ray[first_0];
      ray[first_0] = ray[next];
      ray[next] = temp;
      first_0 = first_0 + 1 | 0;
      next = next + 1 | 0;
      if (next === last) {
        next = new_first_0;
      } else if (first_0 === new_first_0) {
        new_first_0 = next;
      }}
  };
  BufferUtils.prototype.rotate_7lcbvb$ = function (ray, first, new_first, last) {
    var first_0 = first;
    var new_first_0 = new_first;
    var next = new_first_0;
    while (next !== first_0) {
      var temp = ray[first_0];
      ray[first_0] = ray[next];
      ray[next] = temp;
      first_0 = first_0 + 1 | 0;
      next = next + 1 | 0;
      if (next === last) {
        next = new_first_0;
      } else if (first_0 === new_first_0) {
        new_first_0 = next;
      }}
  };
  BufferUtils.prototype.rotate_ll5sec$ = function (ray, first, new_first, last) {
    var first_0 = first;
    var new_first_0 = new_first;
    var next = new_first_0;
    while (next !== first_0) {
      var temp = ray[first_0];
      ray[first_0] = ray[next];
      ray[next] = temp;
      first_0 = first_0 + 1 | 0;
      next = next + 1 | 0;
      if (next === last) {
        next = new_first_0;
      } else if (first_0 === new_first_0) {
        new_first_0 = next;
      }}
  };
  BufferUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BufferUtils',
    interfaces: []
  };
  var BufferUtils_instance = null;
  function BufferUtils_getInstance() {
    if (BufferUtils_instance === null) {
      new BufferUtils();
    }return BufferUtils_instance;
  }
  function Color3f() {
    Color3f$Companion_getInstance();
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  Color3f.prototype.set_y2kzbl$ = function (r, g, b) {
    this.x = r;
    this.y = g;
    this.z = b;
  };
  Color3f.prototype.set_8kej5w$ = function (argColor) {
    this.x = argColor.x;
    this.y = argColor.y;
    this.z = argColor.z;
  };
  function Color3f$Companion() {
    Color3f$Companion_instance = this;
    this.WHITE = Color3f_init_0(1.0, 1.0, 1.0);
    this.BLACK = Color3f_init_0(0.0, 0.0, 0.0);
    this.BLUE = Color3f_init_0(0.0, 0.0, 1.0);
    this.GREEN = Color3f_init_0(0.0, 1.0, 0.0);
    this.RED = Color3f_init_0(1.0, 0.0, 0.0);
  }
  Color3f$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Color3f$Companion_instance = null;
  function Color3f$Companion_getInstance() {
    if (Color3f$Companion_instance === null) {
      new Color3f$Companion();
    }return Color3f$Companion_instance;
  }
  Color3f.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Color3f',
    interfaces: []
  };
  function Color3f_init($this) {
    $this = $this || Object.create(Color3f.prototype);
    Color3f.call($this);
    $this.z = 0.0;
    $this.y = $this.z;
    $this.x = $this.y;
    return $this;
  }
  function Color3f_init_0(r, g, b, $this) {
    $this = $this || Object.create(Color3f.prototype);
    Color3f.call($this);
    $this.x = r;
    $this.y = g;
    $this.z = b;
    return $this;
  }
  function IViewportTransform() {
  }
  IViewportTransform.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IViewportTransform',
    interfaces: []
  };
  function Mat22() {
    Mat22$Companion_getInstance();
    this.ex = null;
    this.ey = null;
  }
  Object.defineProperty(Mat22.prototype, 'angle', {
    get: function () {
      return MathUtils$Companion_getInstance().atan2_dleff0$(this.ex.y, this.ex.x);
    }
  });
  Mat22.prototype.toString = function () {
    var s = '';
    s += '[' + toString(this.ex.x) + ',' + toString(this.ey.x) + ']\n';
    s += '[' + toString(this.ex.y) + ',' + toString(this.ey.y) + ']';
    return s;
  };
  Mat22.prototype.set_krympa$ = function (m) {
    this.ex.x = m.ex.x;
    this.ex.y = m.ex.y;
    this.ey.x = m.ey.x;
    this.ey.y = m.ey.y;
    return this;
  };
  Mat22.prototype.set_7b5o5w$ = function (exx, col2x, exy, col2y) {
    this.ex.x = exx;
    this.ex.y = exy;
    this.ey.x = col2x;
    this.ey.y = col2y;
    return this;
  };
  Mat22.prototype.clone = function () {
    return Mat22_init_0(ensureNotNull(this.ex), ensureNotNull(this.ey));
  };
  Mat22.prototype.set_mx4ult$ = function (angle) {
    var c = MathUtils$Companion_getInstance().cos_mx4ult$(angle);
    var s = MathUtils$Companion_getInstance().sin_mx4ult$(angle);
    this.ex.x = c;
    this.ey.x = -s;
    this.ex.y = s;
    this.ey.y = c;
  };
  Mat22.prototype.setIdentity = function () {
    this.ex.x = 1.0;
    this.ey.x = 0.0;
    this.ex.y = 0.0;
    this.ey.y = 1.0;
  };
  Mat22.prototype.setZero = function () {
    this.ex.x = 0.0;
    this.ey.x = 0.0;
    this.ex.y = 0.0;
    this.ey.y = 0.0;
  };
  Mat22.prototype.set_xjacks$ = function (c1, c2) {
    this.ex.x = c1.x;
    this.ey.x = c2.x;
    this.ex.y = c1.y;
    this.ey.y = c2.y;
  };
  Mat22.prototype.invert = function () {
    var a = this.ex.x;
    var b = this.ey.x;
    var c = this.ex.y;
    var d = this.ey.y;
    var B = Mat22_init();
    var det = a * d - b * c;
    if (det !== 0.0) {
      det = 1.0 / det;
    }B.ex.x = det * d;
    B.ey.x = -det * b;
    B.ex.y = -det * c;
    B.ey.y = det * a;
    return B;
  };
  Mat22.prototype.invertLocal = function () {
    var a = this.ex.x;
    var b = this.ey.x;
    var c = this.ex.y;
    var d = this.ey.y;
    var det = a * d - b * c;
    if (det !== 0.0) {
      det = 1.0 / det;
    }this.ex.x = det * d;
    this.ey.x = -det * b;
    this.ex.y = -det * c;
    this.ey.y = det * a;
    return this;
  };
  Mat22.prototype.invertToOut_krympa$ = function (out) {
    var a = this.ex.x;
    var b = this.ey.x;
    var c = this.ex.y;
    var d = this.ey.y;
    var det = a * d - b * c;
    det = 1.0 / det;
    out.ex.x = det * d;
    out.ey.x = -det * b;
    out.ex.y = -det * c;
    out.ey.y = det * a;
  };
  Mat22.prototype.abs = function () {
    return Mat22_init_1(MathUtils$Companion_getInstance().abs_mx4ult$(this.ex.x), MathUtils$Companion_getInstance().abs_mx4ult$(this.ey.x), MathUtils$Companion_getInstance().abs_mx4ult$(this.ex.y), MathUtils$Companion_getInstance().abs_mx4ult$(this.ey.y));
  };
  Mat22.prototype.absLocal = function () {
    this.ex.absLocal();
    this.ey.absLocal();
  };
  Mat22.prototype.mul_z1lo5s$ = function (v) {
    return new Vec2(this.ex.x * v.x + this.ey.x * v.y, this.ex.y * v.x + this.ey.y * v.y);
  };
  Mat22.prototype.mulToOut_xjacks$ = function (v, out) {
    var tempy = this.ex.y * v.x + this.ey.y * v.y;
    out.x = this.ex.x * v.x + this.ey.x * v.y;
    out.y = tempy;
  };
  Mat22.prototype.mulToOutUnsafe_xjacks$ = function (v, out) {
    if (!(v !== out)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }out.x = this.ex.x * v.x + this.ey.x * v.y;
    out.y = this.ex.y * v.x + this.ey.y * v.y;
  };
  Mat22.prototype.mul_krympa$ = function (R) {
    var C = Mat22_init();
    C.ex.x = this.ex.x * R.ex.x + this.ey.x * R.ex.y;
    C.ex.y = this.ex.y * R.ex.x + this.ey.y * R.ex.y;
    C.ey.x = this.ex.x * R.ey.x + this.ey.x * R.ey.y;
    C.ey.y = this.ex.y * R.ey.x + this.ey.y * R.ey.y;
    return C;
  };
  Mat22.prototype.mulLocal_krympa$ = function (R) {
    this.mulToOut_8axs5s$(R, this);
    return this;
  };
  Mat22.prototype.mulToOut_8axs5s$ = function (R, out) {
    var tempy1 = this.ex.y * R.ex.x + this.ey.y * R.ex.y;
    var tempx1 = this.ex.x * R.ex.x + this.ey.x * R.ex.y;
    out.ex.x = tempx1;
    out.ex.y = tempy1;
    var tempy2 = this.ex.y * R.ey.x + this.ey.y * R.ey.y;
    var tempx2 = this.ex.x * R.ey.x + this.ey.x * R.ey.y;
    out.ey.x = tempx2;
    out.ey.y = tempy2;
  };
  Mat22.prototype.mulToOutUnsafe_8axs5s$ = function (R, out) {
    if (!(out !== R)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(out !== this)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }out.ex.x = this.ex.x * R.ex.x + this.ey.x * R.ex.y;
    out.ex.y = this.ex.y * R.ex.x + this.ey.y * R.ex.y;
    out.ey.x = this.ex.x * R.ey.x + this.ey.x * R.ey.y;
    out.ey.y = this.ex.y * R.ey.x + this.ey.y * R.ey.y;
  };
  Mat22.prototype.mulTrans_krympa$ = function (B) {
    var C = Mat22_init();
    C.ex.x = Vec2$Companion_getInstance().dot_xjacks$(ensureNotNull(this.ex), ensureNotNull(B.ex));
    C.ex.y = Vec2$Companion_getInstance().dot_xjacks$(ensureNotNull(this.ey), B.ex);
    C.ey.x = Vec2$Companion_getInstance().dot_xjacks$(this.ex, ensureNotNull(B.ey));
    C.ey.y = Vec2$Companion_getInstance().dot_xjacks$(this.ey, B.ey);
    return C;
  };
  Mat22.prototype.mulTransLocal_krympa$ = function (B) {
    this.mulTransToOut_8axs5s$(B, this);
    return this;
  };
  Mat22.prototype.mulTransToOut_8axs5s$ = function (B, out) {
    var x1 = this.ex.x * B.ex.x + this.ex.y * B.ex.y;
    var y1 = this.ey.x * B.ex.x + this.ey.y * B.ex.y;
    var x2 = this.ex.x * B.ey.x + this.ex.y * B.ey.y;
    var y2 = this.ey.x * B.ey.x + this.ey.y * B.ey.y;
    out.ex.x = x1;
    out.ey.x = x2;
    out.ex.y = y1;
    out.ey.y = y2;
  };
  Mat22.prototype.mulTransToOutUnsafe_8axs5s$ = function (B, out) {
    if (!(B !== out)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(this !== out)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }out.ex.x = this.ex.x * B.ex.x + this.ex.y * B.ex.y;
    out.ey.x = this.ex.x * B.ey.x + this.ex.y * B.ey.y;
    out.ex.y = this.ey.x * B.ex.x + this.ey.y * B.ex.y;
    out.ey.y = this.ey.x * B.ey.x + this.ey.y * B.ey.y;
  };
  Mat22.prototype.mulTrans_z1lo5s$ = function (v) {
    return new Vec2(v.x * this.ex.x + v.y * this.ex.y, v.x * this.ey.x + v.y * this.ey.y);
  };
  Mat22.prototype.mulTransToOut_xjacks$ = function (v, out) {
    var tempx = v.x * this.ex.x + v.y * this.ex.y;
    out.y = v.x * this.ey.x + v.y * this.ey.y;
    out.x = tempx;
  };
  Mat22.prototype.add_krympa$ = function (B) {
    var m = Mat22_init();
    m.ex.x = this.ex.x + B.ex.x;
    m.ex.y = this.ex.y + B.ex.y;
    m.ey.x = this.ey.x + B.ey.x;
    m.ey.y = this.ey.y + B.ey.y;
    return m;
  };
  Mat22.prototype.addLocal_krympa$ = function (B) {
    this.ex.x = this.ex.x + B.ex.x;
    this.ex.y = this.ex.y + B.ex.y;
    this.ey.x = this.ey.x + B.ey.x;
    this.ey.y = this.ey.y + B.ey.y;
    return this;
  };
  Mat22.prototype.solve_z1lo5s$ = function (b) {
    var a11 = this.ex.x;
    var a12 = this.ey.x;
    var a21 = this.ex.y;
    var a22 = this.ey.y;
    var det = a11 * a22 - a12 * a21;
    if (det !== 0.0) {
      det = 1.0 / det;
    }var x = new Vec2(det * (a22 * b.x - a12 * b.y), det * (a11 * b.y - a21 * b.x));
    return x;
  };
  Mat22.prototype.solveToOut_xjacks$ = function (b, out) {
    var a11 = this.ex.x;
    var a12 = this.ey.x;
    var a21 = this.ex.y;
    var a22 = this.ey.y;
    var det = a11 * a22 - a12 * a21;
    if (det !== 0.0) {
      det = 1.0 / det;
    }var tempy = det * (a11 * b.y - a21 * b.x);
    out.x = det * (a22 * b.x - a12 * b.y);
    out.y = tempy;
  };
  Mat22.prototype.hashCode = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var prime = 31;
    var result = 1;
    result = Kotlin.imul(prime, result) + ((tmp$_0 = (tmp$ = this.ex) != null ? tmp$.hashCode() : null) != null ? tmp$_0 : 0) | 0;
    result = Kotlin.imul(prime, result) + ((tmp$_2 = (tmp$_1 = this.ey) != null ? tmp$_1.hashCode() : null) != null ? tmp$_2 : 0) | 0;
    return result;
  };
  Mat22.prototype.equals = function (obj) {
    var tmp$, tmp$_0;
    if (this === obj)
      return true;
    if (obj == null)
      return false;
    if (!((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(obj)) : null))
      return false;
    var other = (tmp$_0 = obj) == null || Kotlin.isType(tmp$_0, Mat22) ? tmp$_0 : throwCCE();
    if (this.ex == null) {
      if ((other != null ? other.ex : null) != null)
        return false;
    } else if (!equals(this.ex, other != null ? other.ex : null))
      return false;
    if (this.ey == null) {
      if ((other != null ? other.ey : null) != null)
        return false;
    } else if (!equals(this.ey, other != null ? other.ey : null))
      return false;
    return true;
  };
  function Mat22$Companion() {
    Mat22$Companion_instance = this;
  }
  Mat22$Companion.prototype.abs_krympa$ = function (R) {
    return R.abs();
  };
  Mat22$Companion.prototype.absToOut_8axs5s$ = function (R, out) {
    out.ex.x = MathUtils$Companion_getInstance().abs_mx4ult$(R.ex.x);
    out.ex.y = MathUtils$Companion_getInstance().abs_mx4ult$(R.ex.y);
    out.ey.x = MathUtils$Companion_getInstance().abs_mx4ult$(R.ey.x);
    out.ey.y = MathUtils$Companion_getInstance().abs_mx4ult$(R.ey.y);
  };
  Mat22$Companion.prototype.mul_i2f2by$ = function (R, v) {
    return new Vec2(R.ex.x * v.x + R.ey.x * v.y, R.ex.y * v.x + R.ey.y * v.y);
  };
  Mat22$Companion.prototype.mulToOut_q2b3pu$ = function (R, v, out) {
    var tempy = R.ex.y * v.x + R.ey.y * v.y;
    out.x = R.ex.x * v.x + R.ey.x * v.y;
    out.y = tempy;
  };
  Mat22$Companion.prototype.mulToOutUnsafe_q2b3pu$ = function (R, v, out) {
    if (!(v !== out)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }out.x = R.ex.x * v.x + R.ey.x * v.y;
    out.y = R.ex.y * v.x + R.ey.y * v.y;
  };
  Mat22$Companion.prototype.mul_8axs5s$ = function (A, B) {
    var C = Mat22_init();
    C.ex.x = A.ex.x * B.ex.x + A.ey.x * B.ex.y;
    C.ex.y = A.ex.y * B.ex.x + A.ey.y * B.ex.y;
    C.ey.x = A.ex.x * B.ey.x + A.ey.x * B.ey.y;
    C.ey.y = A.ex.y * B.ey.x + A.ey.y * B.ey.y;
    return C;
  };
  Mat22$Companion.prototype.mulToOut_wvtjbi$ = function (A, B, out) {
    var tempy1 = A.ex.y * B.ex.x + A.ey.y * B.ex.y;
    var tempx1 = A.ex.x * B.ex.x + A.ey.x * B.ex.y;
    var tempy2 = A.ex.y * B.ey.x + A.ey.y * B.ey.y;
    var tempx2 = A.ex.x * B.ey.x + A.ey.x * B.ey.y;
    out.ex.x = tempx1;
    out.ex.y = tempy1;
    out.ey.x = tempx2;
    out.ey.y = tempy2;
  };
  Mat22$Companion.prototype.mulToOutUnsafe_wvtjbi$ = function (A, B, out) {
    if (!(out !== A)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(out !== B)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }out.ex.x = A.ex.x * B.ex.x + A.ey.x * B.ex.y;
    out.ex.y = A.ex.y * B.ex.x + A.ey.y * B.ex.y;
    out.ey.x = A.ex.x * B.ey.x + A.ey.x * B.ey.y;
    out.ey.y = A.ex.y * B.ey.x + A.ey.y * B.ey.y;
  };
  Mat22$Companion.prototype.mulTrans_i2f2by$ = function (R, v) {
    return new Vec2(v.x * R.ex.x + v.y * R.ex.y, v.x * R.ey.x + v.y * R.ey.y);
  };
  Mat22$Companion.prototype.mulTransToOut_q2b3pu$ = function (R, v, out) {
    var outx = v.x * R.ex.x + v.y * R.ex.y;
    out.y = v.x * R.ey.x + v.y * R.ey.y;
    out.x = outx;
  };
  Mat22$Companion.prototype.mulTransToOutUnsafe_q2b3pu$ = function (R, v, out) {
    if (!(out !== v)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }out.y = v.x * R.ey.x + v.y * R.ey.y;
    out.x = v.x * R.ex.x + v.y * R.ex.y;
  };
  Mat22$Companion.prototype.mulTrans_8axs5s$ = function (A, B) {
    var C = Mat22_init();
    C.ex.x = A.ex.x * B.ex.x + A.ex.y * B.ex.y;
    C.ex.y = A.ey.x * B.ex.x + A.ey.y * B.ex.y;
    C.ey.x = A.ex.x * B.ey.x + A.ex.y * B.ey.y;
    C.ey.y = A.ey.x * B.ey.x + A.ey.y * B.ey.y;
    return C;
  };
  Mat22$Companion.prototype.mulTransToOut_wvtjbi$ = function (A, B, out) {
    var x1 = A.ex.x * B.ex.x + A.ex.y * B.ex.y;
    var y1 = A.ey.x * B.ex.x + A.ey.y * B.ex.y;
    var x2 = A.ex.x * B.ey.x + A.ex.y * B.ey.y;
    var y2 = A.ey.x * B.ey.x + A.ey.y * B.ey.y;
    out.ex.x = x1;
    out.ex.y = y1;
    out.ey.x = x2;
    out.ey.y = y2;
  };
  Mat22$Companion.prototype.mulTransToOutUnsafe_wvtjbi$ = function (A, B, out) {
    if (!(A !== out)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(B !== out)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }out.ex.x = A.ex.x * B.ex.x + A.ex.y * B.ex.y;
    out.ex.y = A.ey.x * B.ex.x + A.ey.y * B.ex.y;
    out.ey.x = A.ex.x * B.ey.x + A.ex.y * B.ey.y;
    out.ey.y = A.ey.x * B.ey.x + A.ey.y * B.ey.y;
  };
  Mat22$Companion.prototype.createRotationalTransform_mx4ult$ = function (angle) {
    var mat = Mat22_init();
    var c = MathUtils$Companion_getInstance().cos_mx4ult$(angle);
    var s = MathUtils$Companion_getInstance().sin_mx4ult$(angle);
    mat.ex.x = c;
    mat.ey.x = -s;
    mat.ex.y = s;
    mat.ey.y = c;
    return mat;
  };
  Mat22$Companion.prototype.createRotationalTransform_8jj9db$ = function (angle, out) {
    var c = MathUtils$Companion_getInstance().cos_mx4ult$(angle);
    var s = MathUtils$Companion_getInstance().sin_mx4ult$(angle);
    out.ex.x = c;
    out.ey.x = -s;
    out.ex.y = s;
    out.ey.y = c;
  };
  Mat22$Companion.prototype.createScaleTransform_mx4ult$ = function (scale) {
    var mat = Mat22_init();
    mat.ex.x = scale;
    mat.ey.y = scale;
    return mat;
  };
  Mat22$Companion.prototype.createScaleTransform_8jj9db$ = function (scale, out) {
    out.ex.x = scale;
    out.ey.y = scale;
  };
  Mat22$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Mat22$Companion_instance = null;
  function Mat22$Companion_getInstance() {
    if (Mat22$Companion_instance === null) {
      new Mat22$Companion();
    }return Mat22$Companion_instance;
  }
  Mat22.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mat22',
    interfaces: []
  };
  function Mat22_init($this) {
    $this = $this || Object.create(Mat22.prototype);
    Mat22.call($this);
    $this.ex = new Vec2();
    $this.ey = new Vec2();
    return $this;
  }
  function Mat22_init_0(c1, c2, $this) {
    $this = $this || Object.create(Mat22.prototype);
    Mat22.call($this);
    $this.ex = c1.clone();
    $this.ey = c2.clone();
    return $this;
  }
  function Mat22_init_1(exx, col2x, exy, col2y, $this) {
    $this = $this || Object.create(Mat22.prototype);
    Mat22.call($this);
    $this.ex = new Vec2(exx, exy);
    $this.ey = new Vec2(col2x, col2y);
    return $this;
  }
  function Mat33() {
    Mat33$Companion_getInstance();
    this.ex = null;
    this.ey = null;
    this.ez = null;
  }
  Mat33.prototype.setZero = function () {
    this.ex.setZero();
    this.ey.setZero();
    this.ez.setZero();
  };
  Mat33.prototype.set_b32tf5$ = function (exx, exy, exz, eyx, eyy, eyz, ezx, ezy, ezz) {
    this.ex.x = exx;
    this.ex.y = exy;
    this.ex.z = exz;
    this.ey.x = eyx;
    this.ey.y = eyy;
    this.ey.z = eyz;
    this.ez.x = eyx;
    this.ez.y = eyy;
    this.ez.z = eyz;
  };
  Mat33.prototype.set_krymq6$ = function (mat) {
    var vec = mat.ex;
    this.ex.x = vec.x;
    this.ex.y = vec.y;
    this.ex.z = vec.z;
    var vec1 = mat.ey;
    this.ey.x = vec1.x;
    this.ey.y = vec1.y;
    this.ey.z = vec1.z;
    var vec2 = mat.ez;
    this.ez.x = vec2.x;
    this.ez.y = vec2.y;
    this.ez.z = vec2.z;
  };
  Mat33.prototype.setIdentity = function () {
    this.ex.x = 1;
    this.ex.y = 0;
    this.ex.z = 0;
    this.ey.x = 0;
    this.ey.y = 1;
    this.ey.z = 0;
    this.ez.x = 0;
    this.ez.y = 0;
    this.ez.z = 1;
  };
  Mat33.prototype.solve22_z1lo5s$ = function (b) {
    var x = new Vec2();
    this.solve22ToOut_xjacks$(b, x);
    return x;
  };
  Mat33.prototype.solve22ToOut_xjacks$ = function (b, out) {
    var a11 = this.ex.x;
    var a12 = this.ey.x;
    var a21 = this.ex.y;
    var a22 = this.ey.y;
    var det = a11 * a22 - a12 * a21;
    if (det !== 0.0) {
      det = 1.0 / det;
    }out.x = det * (a22 * b.x - a12 * b.y);
    out.y = det * (a11 * b.y - a21 * b.x);
  };
  Mat33.prototype.solve33_z1lo5t$ = function (b) {
    var x = new Vec3();
    this.solve33ToOut_wfe5u4$(b, x);
    return x;
  };
  Mat33.prototype.solve33ToOut_wfe5u4$ = function (b, out) {
    if (!(b !== out)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }Vec3$Companion_getInstance().crossToOutUnsafe_tkxhov$(ensureNotNull(this.ey), ensureNotNull(this.ez), out);
    var det = Vec3$Companion_getInstance().dot_wfe5u4$(ensureNotNull(this.ex), out);
    if (det !== 0.0) {
      det = 1.0 / det;
    }Vec3$Companion_getInstance().crossToOutUnsafe_tkxhov$(this.ey, this.ez, out);
    var x = det * Vec3$Companion_getInstance().dot_wfe5u4$(b, out);
    Vec3$Companion_getInstance().crossToOutUnsafe_tkxhov$(b, this.ez, out);
    var y = det * Vec3$Companion_getInstance().dot_wfe5u4$(this.ex, out);
    Vec3$Companion_getInstance().crossToOutUnsafe_tkxhov$(this.ey, b, out);
    var z = det * Vec3$Companion_getInstance().dot_wfe5u4$(this.ex, out);
    out.x = x;
    out.y = y;
    out.z = z;
  };
  Mat33.prototype.getInverse22_krymq6$ = function (M) {
    var a = this.ex.x;
    var b = this.ey.x;
    var c = this.ex.y;
    var d = this.ey.y;
    var det = a * d - b * c;
    if (det !== 0.0) {
      det = 1.0 / det;
    }M.ex.x = det * d;
    M.ey.x = -det * b;
    M.ex.z = 0.0;
    M.ex.y = -det * c;
    M.ey.y = det * a;
    M.ey.z = 0.0;
    M.ez.x = 0.0;
    M.ez.y = 0.0;
    M.ez.z = 0.0;
  };
  Mat33.prototype.getSymInverse33_krymq6$ = function (M) {
    var bx = this.ey.y * this.ez.z - this.ey.z * this.ez.y;
    var by = this.ey.z * this.ez.x - this.ey.x * this.ez.z;
    var bz = this.ey.x * this.ez.y - this.ey.y * this.ez.x;
    var det = this.ex.x * bx + this.ex.y * by + this.ex.z * bz;
    if (det !== 0.0) {
      det = 1.0 / det;
    }var a11 = this.ex.x;
    var a12 = this.ey.x;
    var a13 = this.ez.x;
    var a22 = this.ey.y;
    var a23 = this.ez.y;
    var a33 = this.ez.z;
    M.ex.x = det * (a22 * a33 - a23 * a23);
    M.ex.y = det * (a13 * a23 - a12 * a33);
    M.ex.z = det * (a12 * a23 - a13 * a22);
    M.ey.x = M.ex.y;
    M.ey.y = det * (a11 * a33 - a13 * a13);
    M.ey.z = det * (a13 * a12 - a11 * a23);
    M.ez.x = M.ex.z;
    M.ez.y = M.ey.z;
    M.ez.z = det * (a11 * a22 - a12 * a12);
  };
  Mat33.prototype.hashCode = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var prime = 31;
    var result = 1;
    result = Kotlin.imul(prime, result) + ((tmp$_0 = (tmp$ = this.ex) != null ? tmp$.hashCode() : null) != null ? tmp$_0 : 0) | 0;
    result = Kotlin.imul(prime, result) + ((tmp$_2 = (tmp$_1 = this.ey) != null ? tmp$_1.hashCode() : null) != null ? tmp$_2 : 0) | 0;
    result = Kotlin.imul(prime, result) + ((tmp$_4 = (tmp$_3 = this.ez) != null ? tmp$_3.hashCode() : null) != null ? tmp$_4 : 0) | 0;
    return result;
  };
  Mat33.prototype.equals = function (obj) {
    var tmp$, tmp$_0;
    if (this === obj)
      return true;
    if (obj == null)
      return false;
    if (!((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(obj)) : null))
      return false;
    var other = (tmp$_0 = obj) == null || Kotlin.isType(tmp$_0, Mat33) ? tmp$_0 : throwCCE();
    if (this.ex == null) {
      if ((other != null ? other.ex : null) != null)
        return false;
    } else if (!equals(this.ex, other != null ? other.ex : null))
      return false;
    if (this.ey == null) {
      if ((other != null ? other.ey : null) != null)
        return false;
    } else if (!equals(this.ey, other != null ? other.ey : null))
      return false;
    if (this.ez == null) {
      if ((other != null ? other.ez : null) != null)
        return false;
    } else if (!equals(this.ez, other != null ? other.ez : null))
      return false;
    return true;
  };
  function Mat33$Companion() {
    Mat33$Companion_instance = this;
    this.IDENTITY = Mat33_init_1(new Vec3(1.0, 0.0, 0.0), new Vec3(0.0, 1.0, 0.0), new Vec3(0.0, 0.0, 1.0));
  }
  Mat33$Companion.prototype.mul_he6xe9$ = function (A, v) {
    return new Vec3(v.x * A.ex.x + v.y * A.ey.x + v.z + A.ez.x, v.x * A.ex.y + v.y * A.ey.y + v.z * A.ez.y, v.x * A.ex.z + v.y * A.ey.z + v.z * A.ez.z);
  };
  Mat33$Companion.prototype.mul22_he6xea$ = function (A, v) {
    return new Vec2(A.ex.x * v.x + A.ey.x * v.y, A.ex.y * v.x + A.ey.y * v.y);
  };
  Mat33$Companion.prototype.mul22ToOut_mkegem$ = function (A, v, out) {
    var tempx = A.ex.x * v.x + A.ey.x * v.y;
    out.y = A.ex.y * v.x + A.ey.y * v.y;
    out.x = tempx;
  };
  Mat33$Companion.prototype.mul22ToOutUnsafe_mkegem$ = function (A, v, out) {
    if (!(v !== out)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }out.y = A.ex.y * v.x + A.ey.y * v.y;
    out.x = A.ex.x * v.x + A.ey.x * v.y;
  };
  Mat33$Companion.prototype.mulToOut_lgi9ny$ = function (A, v, out) {
    var tempy = v.x * A.ex.y + v.y * A.ey.y + v.z * A.ez.y;
    var tempz = v.x * A.ex.z + v.y * A.ey.z + v.z * A.ez.z;
    out.x = v.x * A.ex.x + v.y * A.ey.x + v.z * A.ez.x;
    out.y = tempy;
    out.z = tempz;
  };
  Mat33$Companion.prototype.mulToOutUnsafe_lgi9ny$ = function (A, v, out) {
    if (!(out !== v)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }out.x = v.x * A.ex.x + v.y * A.ey.x + v.z * A.ez.x;
    out.y = v.x * A.ex.y + v.y * A.ey.y + v.z * A.ez.y;
    out.z = v.x * A.ex.z + v.y * A.ey.z + v.z * A.ez.z;
  };
  Mat33$Companion.prototype.setScaleTransform_8jj9cf$ = function (scale, out) {
    out.ex.x = scale;
    out.ey.y = scale;
  };
  Mat33$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Mat33$Companion_instance = null;
  function Mat33$Companion_getInstance() {
    if (Mat33$Companion_instance === null) {
      new Mat33$Companion();
    }return Mat33$Companion_instance;
  }
  Mat33.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mat33',
    interfaces: []
  };
  function Mat33_init($this) {
    $this = $this || Object.create(Mat33.prototype);
    Mat33.call($this);
    $this.ex = new Vec3();
    $this.ey = new Vec3();
    $this.ez = new Vec3();
    return $this;
  }
  function Mat33_init_0(exx, exy, exz, eyx, eyy, eyz, ezx, ezy, ezz, $this) {
    $this = $this || Object.create(Mat33.prototype);
    Mat33.call($this);
    $this.ex = new Vec3(exx, exy, exz);
    $this.ey = new Vec3(eyx, eyy, eyz);
    $this.ez = new Vec3(ezx, ezy, ezz);
    return $this;
  }
  function Mat33_init_1(argCol1, argCol2, argCol3, $this) {
    $this = $this || Object.create(Mat33.prototype);
    Mat33.call($this);
    $this.ex = argCol1.clone();
    $this.ey = argCol2.clone();
    $this.ez = argCol3.clone();
    return $this;
  }
  function MathUtils() {
    MathUtils$Companion_getInstance();
    PlatformMathUtils.call(this);
  }
  function MathUtils$Companion() {
    MathUtils$Companion_instance = this;
    this.PI = math.PI;
    this.TWOPI = math.PI * 2;
    this.INV_PI = 1.0 / this.PI;
    this.HALF_PI = this.PI / 2;
    this.QUARTER_PI = this.PI / 4;
    this.THREE_HALVES_PI = this.TWOPI - this.HALF_PI;
    this.DEG2RAD = this.PI / 180;
    this.RAD2DEG = 180 / this.PI;
    var array = new Float32Array(Settings_getInstance().SINCOS_LUT_LENGTH);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var x = i * Settings_getInstance().SINCOS_LUT_PRECISION;
      array[i] = Math_0.sin(x);
    }
    this.sinLUT = array;
  }
  MathUtils$Companion.prototype.sin_mx4ult$ = function (x) {
    var tmp$;
    if (Settings_getInstance().SINCOS_LUT_ENABLED) {
      tmp$ = this.sinLUT_mx4ult$(x);
    } else {
      tmp$ = Math_0.sin(x);
    }
    return tmp$;
  };
  MathUtils$Companion.prototype.sinLUT_mx4ult$ = function (x) {
    var tmp$;
    var x_0 = x;
    x_0 %= this.TWOPI;
    if (x_0 < 0) {
      x_0 += this.TWOPI;
    }if (Settings_getInstance().SINCOS_LUT_LERP) {
      x_0 /= Settings_getInstance().SINCOS_LUT_PRECISION;
      var index = numberToInt(x_0);
      if (index !== 0) {
        x_0 %= index;
      }if (index === (Settings_getInstance().SINCOS_LUT_LENGTH - 1 | 0)) {
        tmp$ = (1 - x_0) * this.sinLUT[index] + x_0 * this.sinLUT[0];
      } else {
        tmp$ = (1 - x_0) * this.sinLUT[index] + x_0 * this.sinLUT[index + 1 | 0];
      }
      return tmp$;
    } else {
      return this.sinLUT[MathUtils$Companion_getInstance().round_mx4ult$(x_0 / Settings_getInstance().SINCOS_LUT_PRECISION) % Settings_getInstance().SINCOS_LUT_LENGTH];
    }
  };
  MathUtils$Companion.prototype.cos_mx4ult$ = function (x) {
    var tmp$;
    if (Settings_getInstance().SINCOS_LUT_ENABLED) {
      tmp$ = this.sinLUT_mx4ult$(this.HALF_PI - x);
    } else {
      tmp$ = Math_0.cos(x);
    }
    return tmp$;
  };
  MathUtils$Companion.prototype.abs_mx4ult$ = function (x) {
    var tmp$;
    if (Settings_getInstance().FAST_ABS) {
      tmp$ = x > 0 ? x : -x;
    } else {
      tmp$ = Math_0.abs(x);
    }
    return tmp$;
  };
  MathUtils$Companion.prototype.fastAbs_mx4ult$ = function (x) {
    return x > 0 ? x : -x;
  };
  MathUtils$Companion.prototype.abs_za3lpa$ = function (x) {
    var y = x >> 31;
    return (x ^ y) - y | 0;
  };
  MathUtils$Companion.prototype.floor_mx4ult$ = function (x) {
    return Settings_getInstance().FAST_FLOOR ? this.fastFloor_mx4ult$(x) : numberToInt(Math_0.floor(x));
  };
  MathUtils$Companion.prototype.fastFloor_mx4ult$ = function (x) {
    var y = numberToInt(x);
    return x < y ? y - 1 | 0 : y;
  };
  MathUtils$Companion.prototype.ceil_mx4ult$ = function (x) {
    return Settings_getInstance().FAST_CEIL ? this.fastCeil_mx4ult$(x) : numberToInt(Math_0.ceil(x));
  };
  MathUtils$Companion.prototype.fastCeil_mx4ult$ = function (x) {
    var y = numberToInt(x);
    return x > y ? y + 1 | 0 : y;
  };
  MathUtils$Companion.prototype.round_mx4ult$ = function (x) {
    return Settings_getInstance().FAST_ROUND ? this.floor_mx4ult$(x + 0.5) : numberToInt(round(x));
  };
  MathUtils$Companion.prototype.ceilPowerOf2_za3lpa$ = function (x) {
    var pow2 = 1;
    while (pow2 < x)
      pow2 = pow2 << 1;
    return pow2;
  };
  MathUtils$Companion.prototype.max_dleff0$ = function (a, b) {
    return a > b ? a : b;
  };
  MathUtils$Companion.prototype.max_vux9f0$ = function (a, b) {
    return a > b ? a : b;
  };
  MathUtils$Companion.prototype.min_dleff0$ = function (a, b) {
    return a < b ? a : b;
  };
  MathUtils$Companion.prototype.min_vux9f0$ = function (a, b) {
    return a < b ? a : b;
  };
  MathUtils$Companion.prototype.map_s2l86p$ = function (val, fromMin, fromMax, toMin, toMax) {
    var mult = (val - fromMin) / (fromMax - fromMin);
    var res = toMin + mult * (toMax - toMin);
    return res;
  };
  MathUtils$Companion.prototype.clamp_y2kzbl$ = function (a, low, high) {
    return this.max_dleff0$(low, this.min_dleff0$(a, high));
  };
  MathUtils$Companion.prototype.clamp_9ymoeo$ = function (a, low, high) {
    var min = new Vec2();
    min.x = a.x < high.x ? a.x : high.x;
    min.y = a.y < high.y ? a.y : high.y;
    min.x = low.x > min.x ? low.x : min.x;
    min.y = low.y > min.y ? low.y : min.y;
    return min;
  };
  MathUtils$Companion.prototype.clampToOut_9zjv4k$ = function (a, low, high, dest) {
    dest.x = a.x < high.x ? a.x : high.x;
    dest.y = a.y < high.y ? a.y : high.y;
    dest.x = low.x > dest.x ? low.x : dest.x;
    dest.y = low.y > dest.y ? low.y : dest.y;
  };
  MathUtils$Companion.prototype.nextPowerOfTwo_za3lpa$ = function (x) {
    var x_0 = x;
    x_0 = x_0 | x_0 >> 1;
    x_0 = x_0 | x_0 >> 2;
    x_0 = x_0 | x_0 >> 4;
    x_0 = x_0 | x_0 >> 8;
    x_0 = x_0 | x_0 >> 16;
    return x_0 + 1 | 0;
  };
  MathUtils$Companion.prototype.isPowerOfTwo_za3lpa$ = function (x) {
    return x > 0 && (x & x - 1) === 0;
  };
  MathUtils$Companion.prototype.pow_dleff0$ = function (a, b) {
    var tmp$;
    if (Settings_getInstance().FAST_POW) {
      tmp$ = PlatformMathUtils$Companion_getInstance().fastPow_dleff0$(a, b);
    } else {
      tmp$ = Math_0.pow(a, b);
    }
    return tmp$;
  };
  MathUtils$Companion.prototype.atan2_dleff0$ = function (y, x) {
    var tmp$;
    if (Settings_getInstance().FAST_ATAN2) {
      tmp$ = this.fastAtan2_dleff0$(y, x);
    } else {
      tmp$ = Math_0.atan2(y, x);
    }
    return tmp$;
  };
  MathUtils$Companion.prototype.fastAtan2_dleff0$ = function (y, x) {
    if (x === 0.0) {
      if (y > 0.0)
        return this.HALF_PI;
      return y === 0.0 ? 0.0 : -this.HALF_PI;
    }var atan;
    var z = y / x;
    if (this.abs_mx4ult$(z) < 1.0) {
      atan = z / (1.0 + 0.28 * z * z);
      if (x < 0.0) {
        return y < 0.0 ? atan - this.PI : atan + this.PI;
      }} else {
      atan = this.HALF_PI - z / (z * z + 0.28);
      if (y < 0.0)
        return atan - this.PI;
    }
    return atan;
  };
  MathUtils$Companion.prototype.reduceAngle_mx4ult$ = function (theta) {
    var theta_0 = theta;
    theta_0 %= this.TWOPI;
    if (this.abs_mx4ult$(theta_0) > this.PI) {
      theta_0 = theta_0 - this.TWOPI;
    }if (this.abs_mx4ult$(theta_0) > this.HALF_PI) {
      theta_0 = this.PI - theta_0;
    }return theta_0;
  };
  MathUtils$Companion.prototype.randomFloat_dleff0$ = function (argLow, argHigh) {
    return Random.Default.nextFloat() * (argHigh - argLow) + argLow;
  };
  MathUtils$Companion.prototype.randomFloat_z3f55t$ = function (r, argLow, argHigh) {
    return r.nextFloat() * (argHigh - argLow) + argLow;
  };
  MathUtils$Companion.prototype.sqrt_mx4ult$ = function (x) {
    return Math_0.sqrt(x);
  };
  MathUtils$Companion.prototype.distanceSquared_xjacks$ = function (v1, v2) {
    var dx = v1.x - v2.x;
    var dy = v1.y - v2.y;
    return dx * dx + dy * dy;
  };
  MathUtils$Companion.prototype.distance_xjacks$ = function (v1, v2) {
    return this.sqrt_mx4ult$(this.distanceSquared_xjacks$(v1, v2));
  };
  MathUtils$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MathUtils$Companion_instance = null;
  function MathUtils$Companion_getInstance() {
    if (MathUtils$Companion_instance === null) {
      new MathUtils$Companion();
    }return MathUtils$Companion_instance;
  }
  MathUtils.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MathUtils',
    interfaces: [PlatformMathUtils]
  };
  function OBBViewportTransform() {
    this.box_0 = new OBBViewportTransform$OBB();
    this.isYFlip_i9qwpp$_0 = false;
    this.yFlipMat_0 = Mat22_init_1(1.0, 0.0, 0.0, -1.0);
    this.inv_0 = Mat22_init();
    this.inv2_0 = Mat22_init();
    this.box_0.R.setIdentity();
  }
  Object.defineProperty(OBBViewportTransform.prototype, 'isYFlip', {
    get: function () {
      return this.isYFlip_i9qwpp$_0;
    },
    set: function (isYFlip) {
      this.isYFlip_i9qwpp$_0 = isYFlip;
    }
  });
  Object.defineProperty(OBBViewportTransform.prototype, 'extents', {
    get: function () {
      return this.box_0.extents;
    },
    set: function (argExtents) {
      this.box_0.extents.set_z1lo5s$(argExtents);
    }
  });
  Object.defineProperty(OBBViewportTransform.prototype, 'mat22Representation', {
    get: function () {
      return this.box_0.R;
    }
  });
  Object.defineProperty(OBBViewportTransform.prototype, 'center', {
    get: function () {
      return this.box_0.center;
    },
    set: function (argPos) {
      this.box_0.center.set_z1lo5s$(argPos);
    }
  });
  Object.defineProperty(OBBViewportTransform.prototype, 'transform', {
    get: function () {
      return this.box_0.R;
    },
    set: function (transform) {
      this.box_0.R.set_krympa$(transform);
    }
  });
  function OBBViewportTransform$OBB() {
    this.R = Mat22_init();
    this.center = new Vec2();
    this.extents = new Vec2();
  }
  OBBViewportTransform$OBB.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OBB',
    interfaces: []
  };
  OBBViewportTransform.prototype.set_zgxbh3$ = function (vpt) {
    this.box_0.center.set_z1lo5s$(vpt.box_0.center);
    this.box_0.extents.set_z1lo5s$(vpt.box_0.extents);
    this.box_0.R.set_krympa$(vpt.box_0.R);
    this.isYFlip = vpt.isYFlip;
  };
  OBBViewportTransform.prototype.setCamera_y2kzbl$ = function (x, y, scale) {
    this.box_0.center.set_dleff0$(x, y);
    Mat22$Companion_getInstance().createScaleTransform_8jj9db$(scale, this.box_0.R);
  };
  OBBViewportTransform.prototype.setExtents_dleff0$ = function (halfWidth, halfHeight) {
    this.box_0.extents.set_dleff0$(halfWidth, halfHeight);
  };
  OBBViewportTransform.prototype.setCenter_dleff0$ = function (x, y) {
    this.box_0.center.set_dleff0$(x, y);
  };
  OBBViewportTransform.prototype.mulByTransform_krympa$ = function (transform) {
    this.box_0.R.mulLocal_krympa$(transform);
  };
  OBBViewportTransform.prototype.getScreenVectorToWorld_xjacks$ = function (screen, world) {
    this.box_0.R.invertToOut_krympa$(this.inv_0);
    this.inv_0.mulToOut_xjacks$(screen, world);
    if (this.isYFlip) {
      this.yFlipMat_0.mulToOut_xjacks$(world, world);
    }};
  OBBViewportTransform.prototype.getWorldVectorToScreen_xjacks$ = function (world, screen) {
    this.box_0.R.mulToOut_xjacks$(world, screen);
    if (this.isYFlip) {
      this.yFlipMat_0.mulToOut_xjacks$(screen, screen);
    }};
  OBBViewportTransform.prototype.getWorldToScreen_xjacks$ = function (world, screen) {
    screen.x = world.x - this.box_0.center.x;
    screen.y = world.y - this.box_0.center.y;
    this.box_0.R.mulToOut_xjacks$(screen, screen);
    if (this.isYFlip) {
      this.yFlipMat_0.mulToOut_xjacks$(screen, screen);
    }screen.x = screen.x + this.box_0.extents.x;
    screen.y = screen.y + this.box_0.extents.y;
  };
  OBBViewportTransform.prototype.getScreenToWorld_xjacks$ = function (screen, world) {
    world.x = screen.x - this.box_0.extents.x;
    world.y = screen.y - this.box_0.extents.y;
    if (this.isYFlip) {
      this.yFlipMat_0.mulToOut_xjacks$(world, world);
    }this.box_0.R.invertToOut_krympa$(this.inv2_0);
    this.inv2_0.mulToOut_xjacks$(world, world);
    world.x = world.x + this.box_0.center.x;
    world.y = world.y + this.box_0.center.y;
  };
  OBBViewportTransform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OBBViewportTransform',
    interfaces: [IViewportTransform]
  };
  function PlatformMathUtils() {
    PlatformMathUtils$Companion_getInstance();
  }
  function PlatformMathUtils$Companion() {
    PlatformMathUtils$Companion_instance = this;
    this.SHIFT23_0 = 8388608;
    this.INV_SHIFT23_0 = 1.0 / this.SHIFT23_0;
  }
  PlatformMathUtils$Companion.prototype.fastPow_dleff0$ = function (a, b) {
    var b_0 = b;
    var x = toRawBits(a);
    x *= this.INV_SHIFT23_0;
    x -= 127.0;
    var y = x - (x >= 0 ? numberToInt(x) : numberToInt(x) - 1 | 0);
    b_0 *= x + (y - y * y) * 0.346607;
    y = b_0 - (b_0 >= 0 ? numberToInt(b_0) : numberToInt(b_0) - 1 | 0);
    y = (y - y * y) * 0.33971;
    var bits = numberToInt((b_0 + 127 - y) * this.SHIFT23_0);
    return Kotlin.floatFromBits(bits);
  };
  PlatformMathUtils$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PlatformMathUtils$Companion_instance = null;
  function PlatformMathUtils$Companion_getInstance() {
    if (PlatformMathUtils$Companion_instance === null) {
      new PlatformMathUtils$Companion();
    }return PlatformMathUtils$Companion_instance;
  }
  PlatformMathUtils.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlatformMathUtils',
    interfaces: []
  };
  function RaycastResult() {
    this.lambda = 0.0;
    this.normal = new Vec2();
  }
  RaycastResult.prototype.set_fe047g$ = function (argOther) {
    this.lambda = argOther.lambda;
    this.normal.set_z1lo5s$(argOther.normal);
    return this;
  };
  RaycastResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RaycastResult',
    interfaces: []
  };
  function Rot() {
    Rot$Companion_getInstance();
    this.s = 0;
    this.c = 0;
  }
  Object.defineProperty(Rot.prototype, 'angle', {
    get: function () {
      return MathUtils$Companion_getInstance().atan2_dleff0$(this.s, this.c);
    }
  });
  Rot.prototype.toString = function () {
    return 'Rot(s:' + this.s + ', c:' + this.c + ')';
  };
  Rot.prototype.set_mx4ult$ = function (angle) {
    this.s = MathUtils$Companion_getInstance().sin_mx4ult$(angle);
    this.c = MathUtils$Companion_getInstance().cos_mx4ult$(angle);
    return this;
  };
  Rot.prototype.set_8196u3$ = function (other) {
    this.s = other.s;
    this.c = other.c;
    return this;
  };
  Rot.prototype.setIdentity = function () {
    this.s = 0.0;
    this.c = 1.0;
    return this;
  };
  Rot.prototype.getXAxis_z1lo5s$ = function (xAxis) {
    xAxis.set_dleff0$(this.c, this.s);
  };
  Rot.prototype.getYAxis_z1lo5s$ = function (yAxis) {
    yAxis.set_dleff0$(-this.s, this.c);
  };
  Rot.prototype.clone = function () {
    var copy = Rot_init();
    copy.s = this.s;
    copy.c = this.c;
    return copy;
  };
  function Rot$Companion() {
    Rot$Companion_instance = this;
  }
  Rot$Companion.prototype.mul_6zathz$ = function (q, r, out) {
    var tempc = q.c * r.c - q.s * r.s;
    out.s = q.s * r.c + q.c * r.s;
    out.c = tempc;
  };
  Rot$Companion.prototype.mulUnsafe_6zathz$ = function (q, r, out) {
    if (!(r !== out)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(q !== out)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }out.s = q.s * r.c + q.c * r.s;
    out.c = q.c * r.c - q.s * r.s;
  };
  Rot$Companion.prototype.mulTrans_6zathz$ = function (q, r, out) {
    var tempc = q.c * r.c + q.s * r.s;
    out.s = q.c * r.s - q.s * r.c;
    out.c = tempc;
  };
  Rot$Companion.prototype.mulTransUnsafe_6zathz$ = function (q, r, out) {
    out.s = q.c * r.s - q.s * r.c;
    out.c = q.c * r.c + q.s * r.s;
  };
  Rot$Companion.prototype.mulToOut_ok1ihx$ = function (q, v, out) {
    var tempy = q.s * v.x + q.c * v.y;
    out.x = q.c * v.x - q.s * v.y;
    out.y = tempy;
  };
  Rot$Companion.prototype.mulToOutUnsafe_ok1ihx$ = function (q, v, out) {
    out.x = q.c * v.x - q.s * v.y;
    out.y = q.s * v.x + q.c * v.y;
  };
  Rot$Companion.prototype.mulTrans_ok1ihx$ = function (q, v, out) {
    var tempy = -q.s * v.x + q.c * v.y;
    out.x = q.c * v.x + q.s * v.y;
    out.y = tempy;
  };
  Rot$Companion.prototype.mulTransUnsafe_ok1ihx$ = function (q, v, out) {
    out.x = q.c * v.x + q.s * v.y;
    out.y = -q.s * v.x + q.c * v.y;
  };
  Rot$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Rot$Companion_instance = null;
  function Rot$Companion_getInstance() {
    if (Rot$Companion_instance === null) {
      new Rot$Companion();
    }return Rot$Companion_instance;
  }
  Rot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rot',
    interfaces: []
  };
  function Rot_init($this) {
    $this = $this || Object.create(Rot.prototype);
    Rot.call($this);
    $this.setIdentity();
    return $this;
  }
  function Rot_init_0(angle, $this) {
    $this = $this || Object.create(Rot.prototype);
    Rot.call($this);
    $this.set_mx4ult$(angle);
    return $this;
  }
  function Settings() {
    Settings_instance = this;
    this.EPSILON = 1.1920929E-7;
    this.PI = math.PI;
    this.FAST_ABS = true;
    this.FAST_FLOOR = true;
    this.FAST_CEIL = true;
    this.FAST_ROUND = false;
    this.FAST_ATAN2 = true;
    this.FAST_POW = true;
    this.CONTACT_STACK_INIT_SIZE = 10;
    this.SINCOS_LUT_ENABLED = true;
    this.SINCOS_LUT_PRECISION = 1.1E-4;
    var x = math.PI * 2 / this.SINCOS_LUT_PRECISION;
    this.SINCOS_LUT_LENGTH = numberToInt(Math_0.ceil(x));
    this.SINCOS_LUT_LERP = false;
    this.maxManifoldPoints = 2;
    this.maxPolygonVertices = 8;
    this.aabbExtension = 0.1;
    this.aabbMultiplier = 2.0;
    this.linearSlop = 0.005;
    this.angularSlop = 2.0 / 180.0 * this.PI;
    this.polygonRadius = 2.0 * this.linearSlop;
    this.maxSubSteps = 8;
    this.maxTOIContacts = 32;
    this.velocityThreshold = 1.0;
    this.maxLinearCorrection = 0.2;
    this.maxAngularCorrection = 8.0 / 180.0 * this.PI;
    this.maxTranslation = 2.0;
    this.maxTranslationSquared = this.maxTranslation * this.maxTranslation;
    this.maxRotation = 0.5 * this.PI;
    this.maxRotationSquared = this.maxRotation * this.maxRotation;
    this.baumgarte = 0.2;
    this.toiBaugarte = 0.75;
    this.timeToSleep = 0.5;
    this.linearSleepTolerance = 0.01;
    this.angularSleepTolerance = 2.0 / 180.0 * this.PI;
    this.invalidParticleIndex = -1;
    this.particleStride = 0.75;
    this.minParticleWeight = 1.0;
    this.maxParticleWeight = 5.0;
    this.maxTriadDistance = 2;
    this.maxTriadDistanceSquared = Kotlin.imul(this.maxTriadDistance, this.maxTriadDistance);
    this.minParticleBufferCapacity = 256;
  }
  Settings.prototype.mixFriction_dleff0$ = function (friction1, friction2) {
    return MathUtils$Companion_getInstance().sqrt_mx4ult$(friction1 * friction2);
  };
  Settings.prototype.mixRestitution_dleff0$ = function (restitution1, restitution2) {
    return restitution1 > restitution2 ? restitution1 : restitution2;
  };
  Settings.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Settings',
    interfaces: []
  };
  var Settings_instance = null;
  function Settings_getInstance() {
    if (Settings_instance === null) {
      new Settings();
    }return Settings_instance;
  }
  function Sweep() {
    this.localCenter = new Vec2();
    this.c0 = new Vec2();
    this.c = new Vec2();
    this.a0 = 0;
    this.a = 0;
    this.alpha0 = 0;
  }
  Sweep.prototype.toString = function () {
    var s = 'Sweep:' + '\n' + 'localCenter: ' + this.localCenter + '\n';
    s += 'c0: ' + this.c0 + ', c: ' + this.c + '\n';
    s += 'a0: ' + this.a0 + ', a: ' + this.a + '\n';
    s += 'alpha0: ' + this.alpha0;
    return s;
  };
  Sweep.prototype.normalize = function () {
    var d = MathUtils$Companion_getInstance().TWOPI * MathUtils$Companion_getInstance().floor_mx4ult$(this.a0 / MathUtils$Companion_getInstance().TWOPI);
    this.a0 -= d;
    this.a -= d;
  };
  Sweep.prototype.set_kvn64a$ = function (other) {
    this.localCenter.set_z1lo5s$(other.localCenter);
    this.c0.set_z1lo5s$(other.c0);
    this.c.set_z1lo5s$(other.c);
    this.a0 = other.a0;
    this.a = other.a;
    this.alpha0 = other.alpha0;
    return this;
  };
  Sweep.prototype.getTransform_pwshmp$ = function (xf, beta) {
    if (!(xf != null)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }xf.p.x = (1.0 - beta) * this.c0.x + beta * this.c.x;
    xf.p.y = (1.0 - beta) * this.c0.y + beta * this.c.y;
    var angle = (1.0 - beta) * this.a0 + beta * this.a;
    xf.q.set_mx4ult$(angle);
    var q = xf.q;
    xf.p.x = xf.p.x - (q.c * this.localCenter.x - q.s * this.localCenter.y);
    xf.p.y = xf.p.y - (q.s * this.localCenter.x + q.c * this.localCenter.y);
  };
  Sweep.prototype.advance_mx4ult$ = function (alpha) {
    if (!(this.alpha0 < 1.0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var beta = (alpha - this.alpha0) / (1.0 - this.alpha0);
    this.c0.x = this.c0.x + beta * (this.c.x - this.c0.x);
    this.c0.y = this.c0.y + beta * (this.c.y - this.c0.y);
    this.a0 += beta * (this.a - this.a0);
    this.alpha0 = alpha;
  };
  Sweep.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sweep',
    interfaces: []
  };
  function Timer() {
    this.resetNanos_0 = L0;
    this.reset();
  }
  Object.defineProperty(Timer.prototype, 'milliseconds', {
    get: function () {
      return System_nanoTime().subtract(this.resetNanos_0).div(Kotlin.Long.fromInt(1000)).toNumber() * 1.0 / 1000;
    }
  });
  Timer.prototype.reset = function () {
    this.resetNanos_0 = System_nanoTime();
  };
  Timer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Timer',
    interfaces: []
  };
  function Transform() {
    Transform$Companion_getInstance();
    this.p = null;
    this.q = null;
  }
  Transform.prototype.set_m97ft2$ = function (xf) {
    this.p.set_z1lo5s$(xf.p);
    this.q.set_8196u3$(xf.q);
    return this;
  };
  Transform.prototype.set_mmv06j$ = function (p, angle) {
    this.p.set_z1lo5s$(p);
    this.q.set_mx4ult$(angle);
  };
  Transform.prototype.setIdentity = function () {
    this.p.setZero();
    this.q.setIdentity();
  };
  Transform.prototype.toString = function () {
    var s = 'XForm:\n';
    s += 'Position: ' + this.p + '\n';
    s += 'R: ' + '\n' + this.q + '\n';
    return s;
  };
  function Transform$Companion() {
    Transform$Companion_instance = this;
  }
  Transform$Companion.prototype.mul_v1llj6$ = function (T, v) {
    return new Vec2(T.q.c * v.x - T.q.s * v.y + T.p.x, T.q.s * v.x + T.q.c * v.y + T.p.y);
  };
  Transform$Companion.prototype.mulToOut_r18ri2$ = function (T, v, out) {
    var tempy = T.q.s * v.x + T.q.c * v.y + T.p.y;
    out.x = T.q.c * v.x - T.q.s * v.y + T.p.x;
    out.y = tempy;
  };
  Transform$Companion.prototype.mulToOutUnsafe_r18ri2$ = function (T, v, out) {
    if (!(v !== out)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }out.x = T.q.c * v.x - T.q.s * v.y + T.p.x;
    out.y = T.q.s * v.x + T.q.c * v.y + T.p.y;
  };
  Transform$Companion.prototype.mulTrans_v1llj6$ = function (T, v) {
    var px = v.x - T.p.x;
    var py = v.y - T.p.y;
    return new Vec2(T.q.c * px + T.q.s * py, -T.q.s * px + T.q.c * py);
  };
  Transform$Companion.prototype.mulTransToOut_r18ri2$ = function (T, v, out) {
    var px = v.x - T.p.x;
    var py = v.y - T.p.y;
    var tempy = -T.q.s * px + T.q.c * py;
    out.x = T.q.c * px + T.q.s * py;
    out.y = tempy;
  };
  Transform$Companion.prototype.mulTransToOutUnsafe_r18ri2$ = function (T, v, out) {
    if (!(v !== out)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var px = v.x - T.p.x;
    var py = v.y - T.p.y;
    out.x = T.q.c * px + T.q.s * py;
    out.y = -T.q.s * px + T.q.c * py;
  };
  Transform$Companion.prototype.mul_9flkxk$ = function (A, B) {
    var C = Transform_init();
    Rot$Companion_getInstance().mulUnsafe_6zathz$(A.q, B.q, C.q);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(A.q, B.p, C.p);
    C.p.addLocal_z1lo5s$(A.p);
    return C;
  };
  Transform$Companion.prototype.mulToOut_9xhzu2$ = function (A, B, out) {
    if (!(out !== A)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }Rot$Companion_getInstance().mul_6zathz$(A.q, B.q, out.q);
    Rot$Companion_getInstance().mulToOut_ok1ihx$(A.q, B.p, out.p);
    out.p.addLocal_z1lo5s$(A.p);
  };
  Transform$Companion.prototype.mulToOutUnsafe_9xhzu2$ = function (A, B, out) {
    if (!(out !== B)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(out !== A)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }Rot$Companion_getInstance().mulUnsafe_6zathz$(A.q, B.q, out.q);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(A.q, B.p, out.p);
    out.p.addLocal_z1lo5s$(A.p);
  };
  Transform$Companion.prototype.mulTrans_d1ead0$ = function (A, B, pool) {
    if (pool === void 0)
      pool = new Vec2();
    var C = Transform_init();
    Rot$Companion_getInstance().mulTransUnsafe_6zathz$(A.q, B.q, C.q);
    pool.set_z1lo5s$(B.p).subLocal_z1lo5s$(A.p);
    Rot$Companion_getInstance().mulTransUnsafe_ok1ihx$(A.q, pool, C.p);
    return C;
  };
  Transform$Companion.prototype.mulTransToOut_bn1rqe$ = function (A, B, out, pool) {
    if (pool === void 0)
      pool = new Vec2();
    if (!(out !== A)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }Rot$Companion_getInstance().mulTrans_6zathz$(A.q, B.q, out.q);
    pool.set_z1lo5s$(B.p).subLocal_z1lo5s$(A.p);
    Rot$Companion_getInstance().mulTrans_ok1ihx$(A.q, pool, out.p);
  };
  Transform$Companion.prototype.mulTransToOutUnsafe_bn1rqe$ = function (A, B, out, pool) {
    if (pool === void 0)
      pool = new Vec2();
    if (!(out !== A)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(out !== B)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }Rot$Companion_getInstance().mulTransUnsafe_6zathz$(A.q, B.q, out.q);
    pool.set_z1lo5s$(B.p).subLocal_z1lo5s$(A.p);
    Rot$Companion_getInstance().mulTransUnsafe_ok1ihx$(A.q, pool, out.p);
  };
  Transform$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Transform$Companion_instance = null;
  function Transform$Companion_getInstance() {
    if (Transform$Companion_instance === null) {
      new Transform$Companion();
    }return Transform$Companion_instance;
  }
  Transform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transform',
    interfaces: []
  };
  function Transform_init($this) {
    $this = $this || Object.create(Transform.prototype);
    Transform.call($this);
    $this.p = new Vec2();
    $this.q = Rot_init();
    return $this;
  }
  function Transform_init_0(xf, $this) {
    $this = $this || Object.create(Transform.prototype);
    Transform.call($this);
    $this.p = xf.p.clone();
    $this.q = xf.q.clone();
    return $this;
  }
  function Transform_init_1(_position, _R, $this) {
    $this = $this || Object.create(Transform.prototype);
    Transform.call($this);
    $this.p = _position.clone();
    $this.q = _R.clone();
    return $this;
  }
  function Vec2(x, y) {
    Vec2$Companion_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    this.x = x;
    this.y = y;
  }
  Object.defineProperty(Vec2.prototype, 'isValid', {
    get: function () {
      return !isNaN_0(this.x) && !isInfinite(this.x) && !isNaN_0(this.y) && !isInfinite(this.y);
    }
  });
  Vec2.prototype.setZero = function () {
    this.x = 0.0;
    this.y = 0.0;
  };
  Vec2.prototype.set_dleff0$ = function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  };
  Vec2.prototype.set_z8e4lc$ = defineInlineFunction('kbox2d-root-kbox2d.org.jbox2d.common.Vec2.set_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y) {
      return this.set_dleff0$(numberToDouble(x), numberToDouble(y));
    };
  }));
  Vec2.prototype.set_z1lo5s$ = function (v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  };
  Vec2.prototype.add_z1lo5s$ = function (v) {
    return new Vec2(this.x + v.x, this.y + v.y);
  };
  Vec2.prototype.sub_z1lo5s$ = function (v) {
    return new Vec2(this.x - v.x, this.y - v.y);
  };
  Vec2.prototype.mul_mx4ult$ = function (a) {
    return new Vec2(this.x * a, this.y * a);
  };
  Vec2.prototype.negate = function () {
    return new Vec2(-this.x, -this.y);
  };
  Vec2.prototype.negateLocal = function () {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  };
  Vec2.prototype.addLocal_z1lo5s$ = function (v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  };
  Vec2.prototype.addLocal_dleff0$ = function (x, y) {
    this.x = this.x + x;
    this.y = this.y + y;
    return this;
  };
  Vec2.prototype.addLocal_z8e4lc$ = defineInlineFunction('kbox2d-root-kbox2d.org.jbox2d.common.Vec2.addLocal_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y) {
      return this.addLocal_dleff0$(numberToDouble(x), numberToDouble(y));
    };
  }));
  Vec2.prototype.subLocal_z1lo5s$ = function (v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  };
  Vec2.prototype.mulLocal_mx4ult$ = function (a) {
    this.x *= a;
    this.y *= a;
    return this;
  };
  Vec2.prototype.skew = function () {
    return new Vec2(-this.y, this.x);
  };
  Vec2.prototype.skew_z1lo5s$ = function (out) {
    out.x = -this.y;
    out.y = this.x;
  };
  Vec2.prototype.length = function () {
    return MathUtils$Companion_getInstance().sqrt_mx4ult$(this.x * this.x + this.y * this.y);
  };
  Vec2.prototype.lengthSquared = function () {
    return this.x * this.x + this.y * this.y;
  };
  Vec2.prototype.normalize = function () {
    var length = this.length();
    if (length < Settings_getInstance().EPSILON) {
      return 0.0;
    }var invLength = 1.0 / length;
    this.x *= invLength;
    this.y *= invLength;
    return length;
  };
  Vec2.prototype.abs = function () {
    return new Vec2(MathUtils$Companion_getInstance().abs_mx4ult$(this.x), MathUtils$Companion_getInstance().abs_mx4ult$(this.y));
  };
  Vec2.prototype.absLocal = function () {
    this.x = MathUtils$Companion_getInstance().abs_mx4ult$(this.x);
    this.y = MathUtils$Companion_getInstance().abs_mx4ult$(this.y);
  };
  Vec2.prototype.clone = function () {
    return new Vec2(this.x, this.y);
  };
  Vec2.prototype.toString = function () {
    return '(' + this.x + ',' + this.y + ')';
  };
  function Vec2$Companion() {
    Vec2$Companion_instance = this;
    this.dummy_8be2vx$ = new Vec2();
  }
  Vec2$Companion.prototype.abs_z1lo5s$ = function (a) {
    return new Vec2(MathUtils$Companion_getInstance().abs_mx4ult$(a.x), MathUtils$Companion_getInstance().abs_mx4ult$(a.y));
  };
  Vec2$Companion.prototype.absToOut_xjacks$ = function (a, out) {
    out.x = MathUtils$Companion_getInstance().abs_mx4ult$(a.x);
    out.y = MathUtils$Companion_getInstance().abs_mx4ult$(a.y);
  };
  Vec2$Companion.prototype.dot_xjacks$ = function (a, b) {
    return a.x * b.x + a.y * b.y;
  };
  Vec2$Companion.prototype.cross_xjacks$ = function (a, b) {
    return a.x * b.y - a.y * b.x;
  };
  Vec2$Companion.prototype.cross_mmv06j$ = function (a, s) {
    return new Vec2(s * a.y, -s * a.x);
  };
  Vec2$Companion.prototype.crossToOut_ixbvwv$ = function (a, s, out) {
    var tempy = -s * a.x;
    out.x = s * a.y;
    out.y = tempy;
  };
  Vec2$Companion.prototype.crossToOutUnsafe_ixbvwv$ = function (a, s, out) {
    if (!(out !== a)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }out.x = s * a.y;
    out.y = -s * a.x;
  };
  Vec2$Companion.prototype.cross_rrlx6b$ = function (s, a) {
    return new Vec2(-s * a.y, s * a.x);
  };
  Vec2$Companion.prototype.crossToOut_yrhwoh$ = function (s, a, out) {
    var tempY = s * a.x;
    out.x = -s * a.y;
    out.y = tempY;
  };
  Vec2$Companion.prototype.crossToOutUnsafe_yrhwoh$ = function (s, a, out) {
    if (!(out !== a)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }out.x = -s * a.y;
    out.y = s * a.x;
  };
  Vec2$Companion.prototype.negateToOut_xjacks$ = function (a, out) {
    out.x = -a.x;
    out.y = -a.y;
  };
  Vec2$Companion.prototype.min_xjacks$ = function (a, b) {
    return new Vec2(a.x < b.x ? a.x : b.x, a.y < b.y ? a.y : b.y);
  };
  Vec2$Companion.prototype.max_xjacks$ = function (a, b) {
    return new Vec2(a.x > b.x ? a.x : b.x, a.y > b.y ? a.y : b.y);
  };
  Vec2$Companion.prototype.minToOut_9ymoeo$ = function (a, b, out) {
    out.x = a.x < b.x ? a.x : b.x;
    out.y = a.y < b.y ? a.y : b.y;
  };
  Vec2$Companion.prototype.maxToOut_9ymoeo$ = function (a, b, out) {
    out.x = a.x > b.x ? a.x : b.x;
    out.y = a.y > b.y ? a.y : b.y;
  };
  Vec2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vec2$Companion_instance = null;
  function Vec2$Companion_getInstance() {
    if (Vec2$Companion_instance === null) {
      new Vec2$Companion();
    }return Vec2$Companion_instance;
  }
  Vec2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vec2',
    interfaces: []
  };
  function Vec2_init(toCopy, $this) {
    $this = $this || Object.create(Vec2.prototype);
    Vec2.call($this, toCopy.x, toCopy.y);
    return $this;
  }
  Vec2.prototype.component1 = function () {
    return this.x;
  };
  Vec2.prototype.component2 = function () {
    return this.y;
  };
  Vec2.prototype.copy_dleff0$ = function (x, y) {
    return new Vec2(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Vec2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Vec2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function Vec3(x, y, z) {
    Vec3$Companion_getInstance();
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (z === void 0)
      z = 0;
    this.x = x;
    this.y = y;
    this.z = z;
  }
  Vec3.prototype.set_z1lo5t$ = function (vec) {
    this.x = vec.x;
    this.y = vec.y;
    this.z = vec.z;
    return this;
  };
  Vec3.prototype.set_y2kzbl$ = function (argX, argY, argZ) {
    this.x = argX;
    this.y = argY;
    this.z = argZ;
    return this;
  };
  Vec3.prototype.addLocal_z1lo5t$ = function (argVec) {
    this.x += argVec.x;
    this.y += argVec.y;
    this.z += argVec.z;
    return this;
  };
  Vec3.prototype.add_z1lo5t$ = function (argVec) {
    return new Vec3(this.x + argVec.x, this.y + argVec.y, this.z + argVec.z);
  };
  Vec3.prototype.subLocal_z1lo5t$ = function (argVec) {
    this.x -= argVec.x;
    this.y -= argVec.y;
    this.z -= argVec.z;
    return this;
  };
  Vec3.prototype.sub_z1lo5t$ = function (argVec) {
    return new Vec3(this.x - argVec.x, this.y - argVec.y, this.z - argVec.z);
  };
  Vec3.prototype.mulLocal_mx4ult$ = function (argScalar) {
    this.x *= argScalar;
    this.y *= argScalar;
    this.z *= argScalar;
    return this;
  };
  Vec3.prototype.mul_mx4ult$ = function (argScalar) {
    return new Vec3(this.x * argScalar, this.y * argScalar, this.z * argScalar);
  };
  Vec3.prototype.negate = function () {
    return new Vec3(-this.x, -this.y, -this.z);
  };
  Vec3.prototype.negateLocal = function () {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  };
  Vec3.prototype.setZero = function () {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
  };
  Vec3.prototype.clone = function () {
    return Vec3_init(this);
  };
  Vec3.prototype.toString = function () {
    return '(' + this.x + ',' + this.y + ',' + this.z + ')';
  };
  function Vec3$Companion() {
    Vec3$Companion_instance = this;
  }
  Vec3$Companion.prototype.dot_wfe5u4$ = function (a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  };
  Vec3$Companion.prototype.cross_wfe5u4$ = function (a, b) {
    return new Vec3(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x);
  };
  Vec3$Companion.prototype.crossToOut_tkxhov$ = function (a, b, out) {
    var tempy = a.z * b.x - a.x * b.z;
    var tempz = a.x * b.y - a.y * b.x;
    out.x = a.y * b.z - a.z * b.y;
    out.y = tempy;
    out.z = tempz;
  };
  Vec3$Companion.prototype.crossToOutUnsafe_tkxhov$ = function (a, b, out) {
    if (!(out !== b)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(out !== a)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }out.x = a.y * b.z - a.z * b.y;
    out.y = a.z * b.x - a.x * b.z;
    out.z = a.x * b.y - a.y * b.x;
  };
  Vec3$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vec3$Companion_instance = null;
  function Vec3$Companion_getInstance() {
    if (Vec3$Companion_instance === null) {
      new Vec3$Companion();
    }return Vec3$Companion_instance;
  }
  Vec3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vec3',
    interfaces: []
  };
  function Vec3_init(copy, $this) {
    $this = $this || Object.create(Vec3.prototype);
    Vec3.call($this, copy.x, copy.y, copy.z);
    return $this;
  }
  Vec3.prototype.component1 = function () {
    return this.x;
  };
  Vec3.prototype.component2 = function () {
    return this.y;
  };
  Vec3.prototype.component3 = function () {
    return this.z;
  };
  Vec3.prototype.copy_y2kzbl$ = function (x, y, z) {
    return new Vec3(x === void 0 ? this.x : x, y === void 0 ? this.y : y, z === void 0 ? this.z : z);
  };
  Vec3.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.z) | 0;
    return result;
  };
  Vec3.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.z, other.z)))));
  };
  function Body(bd, world) {
    Body$Companion_getInstance();
    this.world = world;
    this.$delegate_v1loln$_0 = new Box2dTypedUserData$Mixin();
    this.m_type = null;
    this.m_flags = 0;
    this.m_islandIndex = 0;
    this.m_xf = Transform_init();
    this.m_xf0 = Transform_init();
    this.m_sweep = new Sweep();
    this.m_linearVelocity = new Vec2();
    this.m_angularVelocity = 0.0;
    this.m_force = new Vec2();
    this.m_torque = 0.0;
    this.m_prev = null;
    this.m_next = null;
    this.m_fixtureList = null;
    this.m_fixtureCount = 0;
    this.m_jointList = null;
    this.m_contactList = null;
    this.m_mass = 0;
    this.m_invMass = 0;
    this.m_I = 0;
    this.m_invI = 0;
    this.m_linearDamping = 0;
    this.m_angularDamping = 0;
    this.m_gravityScale = 0;
    this.m_sleepTime = 0;
    this.userData = null;
    this.fixDef_0 = new FixtureDef();
    this.pmd_0 = MassData_init();
    this.pxf_0 = Transform_init();
    if (!bd.position.isValid) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!bd.linearVelocity.isValid) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }if (!(bd.gravityScale >= 0.0)) {
      var message_1 = 'Check failed.';
      throw IllegalStateException_init(message_1.toString());
    }if (!(bd.angularDamping >= 0.0)) {
      var message_2 = 'Check failed.';
      throw IllegalStateException_init(message_2.toString());
    }if (!(bd.linearDamping >= 0.0)) {
      var message_3 = 'Check failed.';
      throw IllegalStateException_init(message_3.toString());
    }this.m_flags = 0;
    if (bd.bullet) {
      this.m_flags = this.m_flags | Body$Companion_getInstance().e_bulletFlag;
    }if (bd.fixedRotation) {
      this.m_flags = this.m_flags | Body$Companion_getInstance().e_fixedRotationFlag;
    }if (bd.allowSleep) {
      this.m_flags = this.m_flags | Body$Companion_getInstance().e_autoSleepFlag;
    }if (bd.awake) {
      this.m_flags = this.m_flags | Body$Companion_getInstance().e_awakeFlag;
    }if (bd.active) {
      this.m_flags = this.m_flags | Body$Companion_getInstance().e_activeFlag;
    }this.m_xf.p.set_z1lo5s$(bd.position);
    this.m_xf.q.set_mx4ult$(bd.angle);
    this.m_sweep.localCenter.setZero();
    this.m_sweep.c0.set_z1lo5s$(this.m_xf.p);
    this.m_sweep.c.set_z1lo5s$(this.m_xf.p);
    this.m_sweep.a0 = bd.angle;
    this.m_sweep.a = bd.angle;
    this.m_sweep.alpha0 = 0.0;
    this.m_jointList = null;
    this.m_contactList = null;
    this.m_prev = null;
    this.m_next = null;
    this.m_linearVelocity.set_z1lo5s$(bd.linearVelocity);
    this.m_angularVelocity = bd.angularVelocity;
    this.m_linearDamping = bd.linearDamping;
    this.m_angularDamping = bd.angularDamping;
    this.m_gravityScale = bd.gravityScale;
    this.m_force.setZero();
    this.m_torque = 0.0;
    this.m_sleepTime = 0.0;
    this.m_type = bd.type;
    if (this.m_type === BodyType$DYNAMIC_getInstance()) {
      this.m_mass = 1.0;
      this.m_invMass = 1.0;
    } else {
      this.m_mass = 0.0;
      this.m_invMass = 0.0;
    }
    this.m_I = 0.0;
    this.m_invI = 0.0;
    this.userData = bd.userData;
    this.m_fixtureList = null;
    this.m_fixtureCount = 0;
  }
  Body.prototype.getTransform = function () {
    return this.m_xf;
  };
  Body.prototype.getNext = function () {
    return this.m_next;
  };
  Body.prototype.getFixtureList = function () {
    return this.m_fixtureList;
  };
  Body.prototype.getContactList = function () {
    return this.m_contactList;
  };
  Body.prototype.getMass = function () {
    return this.m_mass;
  };
  Object.defineProperty(Body.prototype, 'position', {
    get: function () {
      return this.m_xf.p;
    }
  });
  Object.defineProperty(Body.prototype, 'angle', {
    get: function () {
      return this.m_sweep.a;
    }
  });
  Object.defineProperty(Body.prototype, 'worldCenter', {
    get: function () {
      return this.m_sweep.c;
    }
  });
  Object.defineProperty(Body.prototype, 'localCenter', {
    get: function () {
      return this.m_sweep.localCenter;
    }
  });
  Object.defineProperty(Body.prototype, 'linearVelocity', {
    get: function () {
      return this.m_linearVelocity;
    },
    set: function (v) {
      if (this.m_type === BodyType$STATIC_getInstance()) {
        return;
      }if (Vec2$Companion_getInstance().dot_xjacks$(v, v) > 0.0) {
        this.isAwake = true;
      }this.m_linearVelocity.set_z1lo5s$(v);
    }
  });
  Object.defineProperty(Body.prototype, 'angularVelocity', {
    get: function () {
      return this.m_angularVelocity;
    },
    set: function (w) {
      if (this.m_type === BodyType$STATIC_getInstance()) {
        return;
      }if (w * w > 0.0) {
        this.isAwake = true;
      }this.m_angularVelocity = w;
    }
  });
  Object.defineProperty(Body.prototype, 'inertia', {
    get: function () {
      return this.m_I + this.m_mass * (this.m_sweep.localCenter.x * this.m_sweep.localCenter.x + this.m_sweep.localCenter.y * this.m_sweep.localCenter.y);
    }
  });
  Object.defineProperty(Body.prototype, 'type', {
    get: function () {
      return this.m_type;
    },
    set: function (type) {
      if (!(this.world.isLocked === false)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }if (this.world.isLocked === true) {
        return;
      }if (this.m_type === type) {
        return;
      }this.m_type = type;
      this.resetMassData();
      if (this.m_type === BodyType$STATIC_getInstance()) {
        this.m_linearVelocity.setZero();
        this.m_angularVelocity = 0.0;
        this.m_sweep.a0 = this.m_sweep.a;
        this.m_sweep.c0.set_z1lo5s$(this.m_sweep.c);
        this.synchronizeFixtures();
      }this.isAwake = true;
      this.m_force.setZero();
      this.m_torque = 0.0;
      var ce = this.m_contactList;
      while (ce != null) {
        var ce0 = ce;
        ce = ce.next;
        this.world.m_contactManager.destroy_6p61aq$(ensureNotNull(ce0.contact));
      }
      this.m_contactList = null;
      var broadPhase = this.world.m_contactManager.m_broadPhase;
      var f = this.m_fixtureList;
      while (f != null) {
        var proxyCount = f.m_proxyCount;
        for (var i = 0; i < proxyCount; i++) {
          broadPhase.touchProxy_za3lpa$(ensureNotNull(f.m_proxies)[i].proxyId_8be2vx$);
        }
        f = f.m_next;
      }
    }
  });
  Object.defineProperty(Body.prototype, 'isBullet', {
    get: function () {
      return (this.m_flags & Body$Companion_getInstance().e_bulletFlag) === Body$Companion_getInstance().e_bulletFlag;
    },
    set: function (flag) {
      if (flag) {
        this.m_flags = this.m_flags | Body$Companion_getInstance().e_bulletFlag;
      } else {
        this.m_flags = this.m_flags & ~Body$Companion_getInstance().e_bulletFlag;
      }
    }
  });
  Object.defineProperty(Body.prototype, 'isSleepingAllowed', {
    get: function () {
      return (this.m_flags & Body$Companion_getInstance().e_autoSleepFlag) === Body$Companion_getInstance().e_autoSleepFlag;
    },
    set: function (flag) {
      if (flag) {
        this.m_flags = this.m_flags | Body$Companion_getInstance().e_autoSleepFlag;
      } else {
        this.m_flags = this.m_flags & ~Body$Companion_getInstance().e_autoSleepFlag;
        this.isAwake = true;
      }
    }
  });
  Object.defineProperty(Body.prototype, 'isAwake', {
    get: function () {
      return (this.m_flags & Body$Companion_getInstance().e_awakeFlag) === Body$Companion_getInstance().e_awakeFlag;
    },
    set: function (flag) {
      if (flag) {
        if ((this.m_flags & Body$Companion_getInstance().e_awakeFlag) === 0) {
          this.m_flags = this.m_flags | Body$Companion_getInstance().e_awakeFlag;
          this.m_sleepTime = 0.0;
        }} else {
        this.m_flags = this.m_flags & ~Body$Companion_getInstance().e_awakeFlag;
        this.m_sleepTime = 0.0;
        this.m_linearVelocity.setZero();
        this.m_angularVelocity = 0.0;
        this.m_force.setZero();
        this.m_torque = 0.0;
      }
    }
  });
  Object.defineProperty(Body.prototype, 'isActive', {
    get: function () {
      return (this.m_flags & Body$Companion_getInstance().e_activeFlag) === Body$Companion_getInstance().e_activeFlag;
    },
    set: function (flag) {
      if (!(this.world.isLocked === false)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }if (flag === this.isActive) {
        return;
      }if (flag) {
        this.m_flags = this.m_flags | Body$Companion_getInstance().e_activeFlag;
        var broadPhase = this.world.m_contactManager.m_broadPhase;
        var f = this.m_fixtureList;
        while (f != null) {
          f.createProxies_qk064v$(broadPhase, this.m_xf);
          f = f.m_next;
        }
      } else {
        this.m_flags = this.m_flags & ~Body$Companion_getInstance().e_activeFlag;
        var broadPhase_0 = this.world.m_contactManager.m_broadPhase;
        var f_0 = this.m_fixtureList;
        while (f_0 != null) {
          f_0.destroyProxies_75q5tr$(broadPhase_0);
          f_0 = f_0.m_next;
        }
        var ce = this.m_contactList;
        while (ce != null) {
          var ce0 = ce;
          ce = ce.next;
          this.world.m_contactManager.destroy_6p61aq$(ensureNotNull(ce0.contact));
        }
        this.m_contactList = null;
      }
    }
  });
  Object.defineProperty(Body.prototype, 'isFixedRotation', {
    get: function () {
      return (this.m_flags & Body$Companion_getInstance().e_fixedRotationFlag) === Body$Companion_getInstance().e_fixedRotationFlag;
    },
    set: function (flag) {
      if (flag) {
        this.m_flags = this.m_flags | Body$Companion_getInstance().e_fixedRotationFlag;
      } else {
        this.m_flags = this.m_flags & ~Body$Companion_getInstance().e_fixedRotationFlag;
      }
      this.resetMassData();
    }
  });
  Body.prototype.createFixture_60iouz$ = function (def) {
    if (!(this.world.isLocked === false)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (this.world.isLocked === true) {
      return null;
    }var fixture = new Fixture();
    fixture.create_498t5y$(this, def);
    if ((this.m_flags & Body$Companion_getInstance().e_activeFlag) === Body$Companion_getInstance().e_activeFlag) {
      var broadPhase = this.world.m_contactManager.m_broadPhase;
      fixture.createProxies_qk064v$(broadPhase, this.m_xf);
    }fixture.m_next = this.m_fixtureList;
    this.m_fixtureList = fixture;
    this.m_fixtureCount = this.m_fixtureCount + 1 | 0;
    fixture.m_body = this;
    if (fixture.m_density > 0.0) {
      this.resetMassData();
    }this.world.m_flags = this.world.m_flags | World$Companion_getInstance().NEW_FIXTURE;
    return fixture;
  };
  Body.prototype.createFixture_apdf0p$ = function (shape, density) {
    this.fixDef_0.shape = shape;
    this.fixDef_0.density = density;
    return this.createFixture_60iouz$(this.fixDef_0);
  };
  Body.prototype.destroyFixture_gmh2pr$ = function (fixture) {
    var fixture_0 = fixture;
    if (!(this.world.isLocked === false)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (this.world.isLocked === true) {
      return;
    }if (!(ensureNotNull(fixture_0).m_body === this)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }if (!(this.m_fixtureCount > 0)) {
      var message_1 = 'Check failed.';
      throw IllegalStateException_init(message_1.toString());
    }var node = this.m_fixtureList;
    var last = null;
    var found = false;
    while (node != null) {
      if (node === fixture_0) {
        node = fixture_0.m_next;
        found = true;
        break;
      }last = node;
      node = node.m_next;
    }
    if (!found) {
      var message_2 = 'Check failed.';
      throw IllegalStateException_init(message_2.toString());
    }if (last == null) {
      this.m_fixtureList = ensureNotNull(fixture_0).m_next;
    } else {
      last.m_next = ensureNotNull(fixture_0).m_next;
    }
    var edge = this.m_contactList;
    while (edge != null) {
      var c = edge.contact;
      edge = edge.next;
      var fixtureA = ensureNotNull(c).getFixtureA();
      var fixtureB = c.getFixtureB();
      if (fixture_0 === fixtureA || fixture_0 === fixtureB) {
        this.world.m_contactManager.destroy_6p61aq$(c);
      }}
    if ((this.m_flags & Body$Companion_getInstance().e_activeFlag) === Body$Companion_getInstance().e_activeFlag) {
      var broadPhase = this.world.m_contactManager.m_broadPhase;
      fixture_0.destroyProxies_75q5tr$(broadPhase);
    }fixture_0.destroy();
    fixture_0.m_body = null;
    fixture_0.m_next = null;
    fixture_0 = null;
    this.m_fixtureCount = this.m_fixtureCount - 1 | 0;
    this.resetMassData();
  };
  Body.prototype.setTransform_mmv06j$ = function (position, angle) {
    if (!(this.world.isLocked === false)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (this.world.isLocked === true) {
      return;
    }this.m_xf.q.set_mx4ult$(angle);
    this.m_xf.p.set_z1lo5s$(position);
    Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c);
    this.m_sweep.a = angle;
    this.m_sweep.c0.set_z1lo5s$(this.m_sweep.c);
    this.m_sweep.a0 = this.m_sweep.a;
    var broadPhase = this.world.m_contactManager.m_broadPhase;
    var f = this.m_fixtureList;
    while (f != null) {
      f.synchronize_n9cqhp$(broadPhase, this.m_xf, this.m_xf);
      f = f.m_next;
    }
  };
  Body.prototype.applyForce_xjacks$ = function (force, point) {
    if (this.m_type !== BodyType$DYNAMIC_getInstance()) {
      return;
    }if (this.isAwake === false) {
      this.isAwake = true;
    }this.m_force.x = this.m_force.x + force.x;
    this.m_force.y = this.m_force.y + force.y;
    this.m_torque += (point.x - this.m_sweep.c.x) * force.y - (point.y - this.m_sweep.c.y) * force.x;
  };
  Body.prototype.applyForceToCenter_z1lo5s$ = function (force) {
    if (this.m_type !== BodyType$DYNAMIC_getInstance()) {
      return;
    }if (this.isAwake === false) {
      this.isAwake = true;
    }this.m_force.x = this.m_force.x + force.x;
    this.m_force.y = this.m_force.y + force.y;
  };
  Body.prototype.applyTorque_mx4ult$ = function (torque) {
    if (this.m_type !== BodyType$DYNAMIC_getInstance()) {
      return;
    }if (this.isAwake === false) {
      this.isAwake = true;
    }this.m_torque += torque;
  };
  Body.prototype.applyLinearImpulse_34eqaj$ = function (impulse, point, wake) {
    if (this.m_type !== BodyType$DYNAMIC_getInstance()) {
      return;
    }if (!this.isAwake) {
      if (wake) {
        this.isAwake = true;
      } else {
        return;
      }
    }this.m_linearVelocity.x = this.m_linearVelocity.x + impulse.x * this.m_invMass;
    this.m_linearVelocity.y = this.m_linearVelocity.y + impulse.y * this.m_invMass;
    this.m_angularVelocity += this.m_invI * ((point.x - this.m_sweep.c.x) * impulse.y - (point.y - this.m_sweep.c.y) * impulse.x);
  };
  Body.prototype.applyAngularImpulse_mx4ult$ = function (impulse) {
    if (this.m_type !== BodyType$DYNAMIC_getInstance()) {
      return;
    }if (this.isAwake === false) {
      this.isAwake = true;
    }this.m_angularVelocity += this.m_invI * impulse;
  };
  Body.prototype.getMassData_jo33oz$ = function (data) {
    data.mass = this.m_mass;
    data.I = this.m_I + this.m_mass * (this.m_sweep.localCenter.x * this.m_sweep.localCenter.x + this.m_sweep.localCenter.y * this.m_sweep.localCenter.y);
    data.center.x = this.m_sweep.localCenter.x;
    data.center.y = this.m_sweep.localCenter.y;
  };
  Body.prototype.setMassData_jo33oz$ = function (massData) {
    if (!(this.world.isLocked === false)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (this.world.isLocked === true) {
      return;
    }if (this.m_type !== BodyType$DYNAMIC_getInstance()) {
      return;
    }this.m_invMass = 0.0;
    this.m_I = 0.0;
    this.m_invI = 0.0;
    this.m_mass = massData.mass;
    if (this.m_mass <= 0.0) {
      this.m_mass = 1.0;
    }this.m_invMass = 1.0 / this.m_mass;
    if (massData.I > 0.0 && (this.m_flags & Body$Companion_getInstance().e_fixedRotationFlag) === 0) {
      this.m_I = massData.I - this.m_mass * Vec2$Companion_getInstance().dot_xjacks$(massData.center, massData.center);
      if (!(this.m_I > 0.0)) {
        var message_0 = 'Check failed.';
        throw IllegalStateException_init(message_0.toString());
      }this.m_invI = 1.0 / this.m_I;
    }var oldCenter = this.world.pool.popVec2();
    oldCenter.set_z1lo5s$(this.m_sweep.c);
    this.m_sweep.localCenter.set_z1lo5s$(massData.center);
    Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c0);
    this.m_sweep.c.set_z1lo5s$(this.m_sweep.c0);
    var temp = this.world.pool.popVec2();
    temp.set_z1lo5s$(this.m_sweep.c).subLocal_z1lo5s$(oldCenter);
    Vec2$Companion_getInstance().crossToOut_yrhwoh$(this.m_angularVelocity, temp, temp);
    this.m_linearVelocity.addLocal_z1lo5s$(temp);
    this.world.pool.pushVec2_za3lpa$(2);
  };
  Body.prototype.resetMassData = function () {
    this.m_mass = 0.0;
    this.m_invMass = 0.0;
    this.m_I = 0.0;
    this.m_invI = 0.0;
    this.m_sweep.localCenter.setZero();
    if (this.m_type === BodyType$STATIC_getInstance() || this.m_type === BodyType$KINEMATIC_getInstance()) {
      this.m_sweep.c0.set_z1lo5s$(this.m_xf.p);
      this.m_sweep.c.set_z1lo5s$(this.m_xf.p);
      this.m_sweep.a0 = this.m_sweep.a;
      return;
    }if (!(this.m_type === BodyType$DYNAMIC_getInstance())) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var localCenter = this.world.pool.popVec2();
    localCenter.setZero();
    var temp = this.world.pool.popVec2();
    var massData = this.pmd_0;
    var f = this.m_fixtureList;
    while (f != null) {
      if (f.m_density === 0.0) {
        f = f.m_next;
        continue;
      }f.getMassData_jo33oz$(massData);
      this.m_mass += massData.mass;
      temp.set_z1lo5s$(massData.center).mulLocal_mx4ult$(massData.mass);
      localCenter.addLocal_z1lo5s$(temp);
      this.m_I += massData.I;
      f = f.m_next;
    }
    if (this.m_mass > 0.0) {
      this.m_invMass = 1.0 / this.m_mass;
      localCenter.mulLocal_mx4ult$(this.m_invMass);
    } else {
      this.m_mass = 1.0;
      this.m_invMass = 1.0;
    }
    if (this.m_I > 0.0 && (this.m_flags & Body$Companion_getInstance().e_fixedRotationFlag) === 0) {
      this.m_I -= this.m_mass * Vec2$Companion_getInstance().dot_xjacks$(localCenter, localCenter);
      if (!(this.m_I > 0.0)) {
        var message_0 = 'Check failed.';
        throw IllegalStateException_init(message_0.toString());
      }this.m_invI = 1.0 / this.m_I;
    } else {
      this.m_I = 0.0;
      this.m_invI = 0.0;
    }
    var oldCenter = this.world.pool.popVec2();
    oldCenter.set_z1lo5s$(this.m_sweep.c);
    this.m_sweep.localCenter.set_z1lo5s$(localCenter);
    Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(this.m_xf, this.m_sweep.localCenter, this.m_sweep.c0);
    this.m_sweep.c.set_z1lo5s$(this.m_sweep.c0);
    temp.set_z1lo5s$(this.m_sweep.c).subLocal_z1lo5s$(oldCenter);
    var temp2 = oldCenter;
    Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(this.m_angularVelocity, temp, temp2);
    this.m_linearVelocity.addLocal_z1lo5s$(temp2);
    this.world.pool.pushVec2_za3lpa$(3);
  };
  Body.prototype.getWorldPoint_z1lo5s$ = function (localPoint) {
    var v = new Vec2();
    this.getWorldPointToOut_xjacks$(localPoint, v);
    return v;
  };
  Body.prototype.getWorldPointToOut_xjacks$ = function (localPoint, out) {
    Transform$Companion_getInstance().mulToOut_r18ri2$(this.m_xf, localPoint, out);
  };
  Body.prototype.getWorldVector_z1lo5s$ = function (localVector) {
    var out = new Vec2();
    this.getWorldVectorToOut_xjacks$(localVector, out);
    return out;
  };
  Body.prototype.getWorldVectorToOut_xjacks$ = function (localVector, out) {
    Rot$Companion_getInstance().mulToOut_ok1ihx$(this.m_xf.q, localVector, out);
  };
  Body.prototype.getWorldVectorToOutUnsafe_xjacks$ = function (localVector, out) {
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(this.m_xf.q, localVector, out);
  };
  Body.prototype.getLocalPoint_z1lo5s$ = function (worldPoint) {
    var out = new Vec2();
    this.getLocalPointToOut_xjacks$(worldPoint, out);
    return out;
  };
  Body.prototype.getLocalPointToOut_xjacks$ = function (worldPoint, out) {
    Transform$Companion_getInstance().mulTransToOut_r18ri2$(this.m_xf, worldPoint, out);
  };
  Body.prototype.getLocalVector_z1lo5s$ = function (worldVector) {
    var out = new Vec2();
    this.getLocalVectorToOut_xjacks$(worldVector, out);
    return out;
  };
  Body.prototype.getLocalVectorToOut_xjacks$ = function (worldVector, out) {
    Rot$Companion_getInstance().mulTrans_ok1ihx$(this.m_xf.q, worldVector, out);
  };
  Body.prototype.getLocalVectorToOutUnsafe_xjacks$ = function (worldVector, out) {
    Rot$Companion_getInstance().mulTransUnsafe_ok1ihx$(this.m_xf.q, worldVector, out);
  };
  Body.prototype.getLinearVelocityFromWorldPoint_z1lo5s$ = function (worldPoint) {
    var out = new Vec2();
    this.getLinearVelocityFromWorldPointToOut_xjacks$(worldPoint, out);
    return out;
  };
  Body.prototype.getLinearVelocityFromWorldPointToOut_xjacks$ = function (worldPoint, out) {
    var tempX = worldPoint.x - this.m_sweep.c.x;
    var tempY = worldPoint.y - this.m_sweep.c.y;
    out.x = -this.m_angularVelocity * tempY + this.m_linearVelocity.x;
    out.y = this.m_angularVelocity * tempX + this.m_linearVelocity.y;
  };
  Body.prototype.getLinearVelocityFromLocalPoint_z1lo5s$ = function (localPoint) {
    var out = new Vec2();
    this.getLinearVelocityFromLocalPointToOut_xjacks$(localPoint, out);
    return out;
  };
  Body.prototype.getLinearVelocityFromLocalPointToOut_xjacks$ = function (localPoint, out) {
    this.getWorldPointToOut_xjacks$(localPoint, out);
    this.getLinearVelocityFromWorldPointToOut_xjacks$(out, out);
  };
  Body.prototype.synchronizeFixtures = function () {
    var xf1 = this.pxf_0;
    xf1.q.s = MathUtils$Companion_getInstance().sin_mx4ult$(this.m_sweep.a0);
    xf1.q.c = MathUtils$Companion_getInstance().cos_mx4ult$(this.m_sweep.a0);
    xf1.p.x = this.m_sweep.c0.x - xf1.q.c * this.m_sweep.localCenter.x + xf1.q.s * this.m_sweep.localCenter.y;
    xf1.p.y = this.m_sweep.c0.y - xf1.q.s * this.m_sweep.localCenter.x - xf1.q.c * this.m_sweep.localCenter.y;
    var f = this.m_fixtureList;
    while (f != null) {
      f.synchronize_n9cqhp$(this.world.m_contactManager.m_broadPhase, xf1, this.m_xf);
      f = f.m_next;
    }
  };
  Body.prototype.synchronizeTransform = function () {
    this.m_xf.q.s = MathUtils$Companion_getInstance().sin_mx4ult$(this.m_sweep.a);
    this.m_xf.q.c = MathUtils$Companion_getInstance().cos_mx4ult$(this.m_sweep.a);
    var q = this.m_xf.q;
    var v = this.m_sweep.localCenter;
    this.m_xf.p.x = this.m_sweep.c.x - q.c * v.x + q.s * v.y;
    this.m_xf.p.y = this.m_sweep.c.y - q.s * v.x - q.c * v.y;
  };
  Body.prototype.shouldCollide_v1loln$ = function (other) {
    if (this.m_type !== BodyType$DYNAMIC_getInstance() && other.m_type !== BodyType$DYNAMIC_getInstance()) {
      return false;
    }var jn = this.m_jointList;
    while (jn != null) {
      if (jn.other === other) {
        if (ensureNotNull(jn.joint).getCollideConnected() === false) {
          return false;
        }}jn = jn.next;
    }
    return true;
  };
  Body.prototype.advance_mx4ult$ = function (t) {
    this.m_sweep.advance_mx4ult$(t);
    this.m_sweep.c.set_z1lo5s$(this.m_sweep.c0);
    this.m_sweep.a = this.m_sweep.a0;
    this.m_xf.q.set_mx4ult$(this.m_sweep.a);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(this.m_xf.q, this.m_sweep.localCenter, this.m_xf.p);
    this.m_xf.p.mulLocal_mx4ult$(-1.0).addLocal_z1lo5s$(this.m_sweep.c);
  };
  function Body$Companion() {
    Body$Companion_instance = this;
    this.e_islandFlag = 1;
    this.e_awakeFlag = 2;
    this.e_autoSleepFlag = 4;
    this.e_bulletFlag = 8;
    this.e_fixedRotationFlag = 16;
    this.e_activeFlag = 32;
    this.e_toiFlag = 64;
  }
  Body$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Body$Companion_instance = null;
  function Body$Companion_getInstance() {
    if (Body$Companion_instance === null) {
      new Body$Companion();
    }return Body$Companion_instance;
  }
  Body.prototype.contains_d2xgsj$ = function (key) {
    return this.$delegate_v1loln$_0.contains_d2xgsj$(key);
  };
  Body.prototype.get_d2xgsj$ = function (key) {
    return this.$delegate_v1loln$_0.get_d2xgsj$(key);
  };
  Body.prototype.set_kj97s6$ = function (key, value) {
    return this.$delegate_v1loln$_0.set_kj97s6$(key, value);
  };
  Body.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Body',
    interfaces: [Box2dTypedUserData]
  };
  function BodyDef(type, userData, position, angle, linearVelocity, angularVelocity, linearDamping, angularDamping, allowSleep, awake, fixedRotation, bullet, active, gravityScale) {
    if (type === void 0)
      type = BodyType$STATIC_getInstance();
    if (userData === void 0)
      userData = null;
    if (position === void 0)
      position = new Vec2();
    if (angle === void 0)
      angle = 0.0;
    if (linearVelocity === void 0)
      linearVelocity = new Vec2();
    if (angularVelocity === void 0)
      angularVelocity = 0.0;
    if (linearDamping === void 0)
      linearDamping = 0.0;
    if (angularDamping === void 0)
      angularDamping = 0.0;
    if (allowSleep === void 0)
      allowSleep = true;
    if (awake === void 0)
      awake = true;
    if (fixedRotation === void 0)
      fixedRotation = false;
    if (bullet === void 0)
      bullet = false;
    if (active === void 0)
      active = true;
    if (gravityScale === void 0)
      gravityScale = 1.0;
    this.type = type;
    this.userData = userData;
    this.position = position;
    this.angle = angle;
    this.linearVelocity = linearVelocity;
    this.angularVelocity = angularVelocity;
    this.linearDamping = linearDamping;
    this.angularDamping = angularDamping;
    this.allowSleep = allowSleep;
    this.awake = awake;
    this.fixedRotation = fixedRotation;
    this.bullet = bullet;
    this.active = active;
    this.gravityScale = gravityScale;
    this.$delegate_ok456i$_0 = new Box2dTypedUserData$Mixin();
  }
  BodyDef.prototype.contains_d2xgsj$ = function (key) {
    return this.$delegate_ok456i$_0.contains_d2xgsj$(key);
  };
  BodyDef.prototype.get_d2xgsj$ = function (key) {
    return this.$delegate_ok456i$_0.get_d2xgsj$(key);
  };
  BodyDef.prototype.set_kj97s6$ = function (key, value) {
    return this.$delegate_ok456i$_0.set_kj97s6$(key, value);
  };
  BodyDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BodyDef',
    interfaces: [Box2dTypedUserData]
  };
  BodyDef.prototype.component1 = function () {
    return this.type;
  };
  BodyDef.prototype.component2 = function () {
    return this.userData;
  };
  BodyDef.prototype.component3 = function () {
    return this.position;
  };
  BodyDef.prototype.component4 = function () {
    return this.angle;
  };
  BodyDef.prototype.component5 = function () {
    return this.linearVelocity;
  };
  BodyDef.prototype.component6 = function () {
    return this.angularVelocity;
  };
  BodyDef.prototype.component7 = function () {
    return this.linearDamping;
  };
  BodyDef.prototype.component8 = function () {
    return this.angularDamping;
  };
  BodyDef.prototype.component9 = function () {
    return this.allowSleep;
  };
  BodyDef.prototype.component10 = function () {
    return this.awake;
  };
  BodyDef.prototype.component11 = function () {
    return this.fixedRotation;
  };
  BodyDef.prototype.component12 = function () {
    return this.bullet;
  };
  BodyDef.prototype.component13 = function () {
    return this.active;
  };
  BodyDef.prototype.component14 = function () {
    return this.gravityScale;
  };
  BodyDef.prototype.copy_fuoid$ = function (type, userData, position, angle, linearVelocity, angularVelocity, linearDamping, angularDamping, allowSleep, awake, fixedRotation, bullet, active, gravityScale) {
    return new BodyDef(type === void 0 ? this.type : type, userData === void 0 ? this.userData : userData, position === void 0 ? this.position : position, angle === void 0 ? this.angle : angle, linearVelocity === void 0 ? this.linearVelocity : linearVelocity, angularVelocity === void 0 ? this.angularVelocity : angularVelocity, linearDamping === void 0 ? this.linearDamping : linearDamping, angularDamping === void 0 ? this.angularDamping : angularDamping, allowSleep === void 0 ? this.allowSleep : allowSleep, awake === void 0 ? this.awake : awake, fixedRotation === void 0 ? this.fixedRotation : fixedRotation, bullet === void 0 ? this.bullet : bullet, active === void 0 ? this.active : active, gravityScale === void 0 ? this.gravityScale : gravityScale);
  };
  BodyDef.prototype.toString = function () {
    return 'BodyDef(type=' + Kotlin.toString(this.type) + (', userData=' + Kotlin.toString(this.userData)) + (', position=' + Kotlin.toString(this.position)) + (', angle=' + Kotlin.toString(this.angle)) + (', linearVelocity=' + Kotlin.toString(this.linearVelocity)) + (', angularVelocity=' + Kotlin.toString(this.angularVelocity)) + (', linearDamping=' + Kotlin.toString(this.linearDamping)) + (', angularDamping=' + Kotlin.toString(this.angularDamping)) + (', allowSleep=' + Kotlin.toString(this.allowSleep)) + (', awake=' + Kotlin.toString(this.awake)) + (', fixedRotation=' + Kotlin.toString(this.fixedRotation)) + (', bullet=' + Kotlin.toString(this.bullet)) + (', active=' + Kotlin.toString(this.active)) + (', gravityScale=' + Kotlin.toString(this.gravityScale)) + ')';
  };
  BodyDef.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.userData) | 0;
    result = result * 31 + Kotlin.hashCode(this.position) | 0;
    result = result * 31 + Kotlin.hashCode(this.angle) | 0;
    result = result * 31 + Kotlin.hashCode(this.linearVelocity) | 0;
    result = result * 31 + Kotlin.hashCode(this.angularVelocity) | 0;
    result = result * 31 + Kotlin.hashCode(this.linearDamping) | 0;
    result = result * 31 + Kotlin.hashCode(this.angularDamping) | 0;
    result = result * 31 + Kotlin.hashCode(this.allowSleep) | 0;
    result = result * 31 + Kotlin.hashCode(this.awake) | 0;
    result = result * 31 + Kotlin.hashCode(this.fixedRotation) | 0;
    result = result * 31 + Kotlin.hashCode(this.bullet) | 0;
    result = result * 31 + Kotlin.hashCode(this.active) | 0;
    result = result * 31 + Kotlin.hashCode(this.gravityScale) | 0;
    return result;
  };
  BodyDef.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.userData, other.userData) && Kotlin.equals(this.position, other.position) && Kotlin.equals(this.angle, other.angle) && Kotlin.equals(this.linearVelocity, other.linearVelocity) && Kotlin.equals(this.angularVelocity, other.angularVelocity) && Kotlin.equals(this.linearDamping, other.linearDamping) && Kotlin.equals(this.angularDamping, other.angularDamping) && Kotlin.equals(this.allowSleep, other.allowSleep) && Kotlin.equals(this.awake, other.awake) && Kotlin.equals(this.fixedRotation, other.fixedRotation) && Kotlin.equals(this.bullet, other.bullet) && Kotlin.equals(this.active, other.active) && Kotlin.equals(this.gravityScale, other.gravityScale)))));
  };
  var forEachFixture = defineInlineFunction('kbox2d-root-kbox2d.org.jbox2d.dynamics.forEachFixture_t7c22d$', function ($receiver, callback) {
    var node = $receiver.m_fixtureList;
    while (node != null) {
      callback(node);
      node = node.m_next;
    }
  });
  function BodyType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BodyType_initFields() {
    BodyType_initFields = function () {
    };
    BodyType$STATIC_instance = new BodyType('STATIC', 0);
    BodyType$KINEMATIC_instance = new BodyType('KINEMATIC', 1);
    BodyType$DYNAMIC_instance = new BodyType('DYNAMIC', 2);
  }
  var BodyType$STATIC_instance;
  function BodyType$STATIC_getInstance() {
    BodyType_initFields();
    return BodyType$STATIC_instance;
  }
  var BodyType$KINEMATIC_instance;
  function BodyType$KINEMATIC_getInstance() {
    BodyType_initFields();
    return BodyType$KINEMATIC_instance;
  }
  var BodyType$DYNAMIC_instance;
  function BodyType$DYNAMIC_getInstance() {
    BodyType_initFields();
    return BodyType$DYNAMIC_instance;
  }
  BodyType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BodyType',
    interfaces: [Enum]
  };
  function BodyType$values() {
    return [BodyType$STATIC_getInstance(), BodyType$KINEMATIC_getInstance(), BodyType$DYNAMIC_getInstance()];
  }
  BodyType.values = BodyType$values;
  function BodyType$valueOf(name) {
    switch (name) {
      case 'STATIC':
        return BodyType$STATIC_getInstance();
      case 'KINEMATIC':
        return BodyType$KINEMATIC_getInstance();
      case 'DYNAMIC':
        return BodyType$DYNAMIC_getInstance();
      default:throwISE('No enum constant org.jbox2d.dynamics.BodyType.' + name);
    }
  }
  BodyType.valueOf_61zpoe$ = BodyType$valueOf;
  function ContactManager(pool, m_broadPhase) {
    this.pool_0 = pool;
    this.m_broadPhase = m_broadPhase;
    this.m_contactList = null;
    this.m_contactCount = 0;
    this.m_contactFilter = new ContactFilter();
    this.m_contactListener = null;
  }
  ContactManager.prototype.addPair_oaftn8$ = function (proxyUserDataA, proxyUserDataB) {
    var tmp$, tmp$_0, tmp$_1;
    var proxyA = (tmp$ = proxyUserDataA) == null || Kotlin.isType(tmp$, FixtureProxy) ? tmp$ : throwCCE();
    var proxyB = (tmp$_0 = proxyUserDataB) == null || Kotlin.isType(tmp$_0, FixtureProxy) ? tmp$_0 : throwCCE();
    var fixtureA = ensureNotNull(proxyA).fixture_8be2vx$;
    var fixtureB = ensureNotNull(proxyB).fixture_8be2vx$;
    var indexA = proxyA.childIndex_8be2vx$;
    var indexB = proxyB.childIndex_8be2vx$;
    var bodyA = ensureNotNull(fixtureA).getBody();
    var bodyB = ensureNotNull(fixtureB).getBody();
    if (equals(bodyA, bodyB)) {
      return;
    }var edge = ensureNotNull(bodyB).getContactList();
    while (edge != null) {
      if (equals(edge.other, bodyA)) {
        var fA = ensureNotNull(edge.contact).getFixtureA();
        var fB = ensureNotNull(edge.contact).getFixtureB();
        var iA = ensureNotNull(edge.contact).getChildIndexA();
        var iB = ensureNotNull(edge.contact).getChildIndexB();
        if (equals(fA, fixtureA) && iA === indexA && equals(fB, fixtureB) && iB === indexB) {
          return;
        }if (equals(fA, fixtureB) && iA === indexB && equals(fB, fixtureA) && iB === indexA) {
          return;
        }}edge = edge.next;
    }
    if (bodyB.shouldCollide_v1loln$(ensureNotNull(bodyA)) === false) {
      return;
    }if (this.m_contactFilter != null && ensureNotNull(this.m_contactFilter).shouldCollide_tw86jw$(fixtureA, fixtureB) === false) {
      return;
    }tmp$_1 = this.pool_0.popContact_smbpn8$(fixtureA, indexA, fixtureB, indexB);
    if (tmp$_1 == null) {
      return;
    }var c = tmp$_1;
    fixtureA = c.getFixtureA();
    fixtureB = c.getFixtureB();
    indexA = c.getChildIndexA();
    indexB = c.getChildIndexB();
    bodyA = ensureNotNull(fixtureA).getBody();
    bodyB = ensureNotNull(fixtureB).getBody();
    c.m_prev = null;
    c.m_next = this.m_contactList;
    if (this.m_contactList != null) {
      ensureNotNull(this.m_contactList).m_prev = c;
    }this.m_contactList = c;
    c.m_nodeA.contact = c;
    c.m_nodeA.other = bodyB;
    c.m_nodeA.prev = null;
    c.m_nodeA.next = ensureNotNull(bodyA).m_contactList;
    if (bodyA.m_contactList != null) {
      ensureNotNull(bodyA.m_contactList).prev = c.m_nodeA;
    }bodyA.m_contactList = c.m_nodeA;
    c.m_nodeB.contact = c;
    c.m_nodeB.other = bodyA;
    c.m_nodeB.prev = null;
    c.m_nodeB.next = ensureNotNull(bodyB).m_contactList;
    if (bodyB.m_contactList != null) {
      ensureNotNull(bodyB.m_contactList).prev = c.m_nodeB;
    }bodyB.m_contactList = c.m_nodeB;
    if (!fixtureA.isSensor && !fixtureB.isSensor) {
      bodyA.isAwake = true;
      bodyB.isAwake = true;
    }this.m_contactCount = this.m_contactCount + 1 | 0;
  };
  ContactManager.prototype.findNewContacts = function () {
    this.m_broadPhase.updatePairs_uo1ez4$(this);
  };
  ContactManager.prototype.destroy_6p61aq$ = function (c) {
    var fixtureA = c.getFixtureA();
    var fixtureB = c.getFixtureB();
    var bodyA = ensureNotNull(fixtureA).getBody();
    var bodyB = ensureNotNull(fixtureB).getBody();
    if (this.m_contactListener != null && c.isTouching) {
      ensureNotNull(this.m_contactListener).endContact_6p61aq$(c);
    }if (c.m_prev != null) {
      ensureNotNull(c.m_prev).m_next = c.m_next;
    }if (c.m_next != null) {
      ensureNotNull(c.m_next).m_prev = c.m_prev;
    }if (c === this.m_contactList) {
      this.m_contactList = c.m_next;
    }if (c.m_nodeA.prev != null) {
      ensureNotNull(c.m_nodeA.prev).next = c.m_nodeA.next;
    }if (c.m_nodeA.next != null) {
      ensureNotNull(c.m_nodeA.next).prev = c.m_nodeA.prev;
    }if (equals(c.m_nodeA, ensureNotNull(bodyA).m_contactList)) {
      bodyA.m_contactList = c.m_nodeA.next;
    }if (c.m_nodeB.prev != null) {
      ensureNotNull(c.m_nodeB.prev).next = c.m_nodeB.next;
    }if (c.m_nodeB.next != null) {
      ensureNotNull(c.m_nodeB.next).prev = c.m_nodeB.prev;
    }if (equals(c.m_nodeB, ensureNotNull(bodyB).m_contactList)) {
      bodyB.m_contactList = c.m_nodeB.next;
    }this.pool_0.pushContact_6p61aq$(c);
    this.m_contactCount = this.m_contactCount - 1 | 0;
  };
  ContactManager.prototype.collide = function () {
    var c = this.m_contactList;
    while (c != null) {
      var fixtureA = c.getFixtureA();
      var fixtureB = c.getFixtureB();
      var indexA = c.getChildIndexA();
      var indexB = c.getChildIndexB();
      var bodyA = ensureNotNull(fixtureA).getBody();
      var bodyB = ensureNotNull(fixtureB).getBody();
      if ((c.m_flags & Contact$Companion_getInstance().FILTER_FLAG) === Contact$Companion_getInstance().FILTER_FLAG) {
        if (ensureNotNull(bodyB).shouldCollide_v1loln$(ensureNotNull(bodyA)) === false) {
          var cNuke = c;
          c = cNuke.getNext();
          this.destroy_6p61aq$(cNuke);
          continue;
        }if (this.m_contactFilter != null && ensureNotNull(this.m_contactFilter).shouldCollide_tw86jw$(fixtureA, fixtureB) === false) {
          var cNuke_0 = c;
          c = cNuke_0.getNext();
          this.destroy_6p61aq$(cNuke_0);
          continue;
        }c.m_flags = c.m_flags & ~Contact$Companion_getInstance().FILTER_FLAG;
      }var activeA = ensureNotNull(bodyA).isAwake && bodyA.m_type !== BodyType$STATIC_getInstance();
      var activeB = ensureNotNull(bodyB).isAwake && bodyB.m_type !== BodyType$STATIC_getInstance();
      if (activeA === false && activeB === false) {
        c = c.getNext();
        continue;
      }var proxyIdA = ensureNotNull(fixtureA.m_proxies)[indexA].proxyId_8be2vx$;
      var proxyIdB = ensureNotNull(fixtureB.m_proxies)[indexB].proxyId_8be2vx$;
      var overlap = this.m_broadPhase.testOverlap_vux9f0$(proxyIdA, proxyIdB);
      if (overlap === false) {
        var cNuke_1 = c;
        c = cNuke_1.getNext();
        this.destroy_6p61aq$(cNuke_1);
        continue;
      }c.update_ge5gqk$(this.m_contactListener);
      c = c.getNext();
    }
  };
  ContactManager.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactManager',
    interfaces: [PairCallback]
  };
  function Filter() {
    this.categoryBits = 1;
    this.maskBits = 65535;
    this.groupIndex = 0;
  }
  Filter.prototype.set_2ljgpt$ = function (argOther) {
    this.categoryBits = argOther.categoryBits;
    this.maskBits = argOther.maskBits;
    this.groupIndex = argOther.groupIndex;
  };
  Filter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Filter',
    interfaces: []
  };
  var arraycopy$lambda_5 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function Fixture() {
    this.$delegate_9p97b4$_0 = new Box2dTypedUserData$Mixin();
    this.m_density = 0;
    this.m_next = null;
    this.m_body = null;
    this.m_shape = null;
    this.m_friction = 0;
    this.m_restitution = 0;
    this.m_proxies = null;
    this.m_proxyCount = 0;
    this.m_filter = new Filter();
    this.m_isSensor = false;
    this.userData = null;
    this.pool1_0 = AABB_init();
    this.pool2_0 = AABB_init();
    this.displacement_0 = new Vec2();
  }
  Fixture.prototype.getNext = function () {
    return this.m_next;
  };
  Fixture.prototype.getBody = function () {
    return this.m_body;
  };
  Fixture.prototype.getShape = function () {
    return this.m_shape;
  };
  Object.defineProperty(Fixture.prototype, 'type', {
    get: function () {
      return ensureNotNull(this.m_shape).getType();
    }
  });
  Object.defineProperty(Fixture.prototype, 'isSensor', {
    get: function () {
      return this.m_isSensor;
    },
    set: function (sensor) {
      if (sensor !== this.m_isSensor) {
        ensureNotNull(this.m_body).isAwake = true;
        this.m_isSensor = sensor;
      }}
  });
  Object.defineProperty(Fixture.prototype, 'filterData', {
    get: function () {
      return this.m_filter;
    },
    set: function (filter) {
      this.m_filter.set_2ljgpt$(filter);
      this.refilter();
    }
  });
  Object.defineProperty(Fixture.prototype, 'density', {
    get: function () {
      return this.m_density;
    },
    set: function (density) {
      if (!(density >= 0.0)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }this.m_density = density;
    }
  });
  Fixture.prototype.refilter = function () {
    var tmp$, tmp$_0;
    if (this.m_body == null) {
      return;
    }var edge = ensureNotNull(this.m_body).getContactList();
    while (edge != null) {
      var contact = edge.contact;
      var fixtureA = ensureNotNull(contact).getFixtureA();
      var fixtureB = contact.getFixtureB();
      if (fixtureA === this || fixtureB === this) {
        contact.flagForFiltering();
      }edge = edge.next;
    }
    tmp$ = ensureNotNull(this.m_body).world;
    if (tmp$ == null) {
      return;
    }var world = tmp$;
    var broadPhase = world.m_contactManager.m_broadPhase;
    tmp$_0 = this.m_proxyCount;
    for (var i = 0; i < tmp$_0; i++) {
      broadPhase.touchProxy_za3lpa$(ensureNotNull(this.m_proxies)[i].proxyId_8be2vx$);
    }
  };
  Fixture.prototype.testPoint_z1lo5s$ = function (p) {
    return ensureNotNull(this.m_shape).testPoint_v1llj6$(ensureNotNull(this.m_body).m_xf, p);
  };
  Fixture.prototype.raycast_rawvn5$ = function (output, input, childIndex) {
    return ensureNotNull(this.m_shape).raycast_epey9r$(output, input, ensureNotNull(this.m_body).m_xf, childIndex);
  };
  Fixture.prototype.getMassData_jo33oz$ = function (massData) {
    ensureNotNull(this.m_shape).computeMass_8lm4zy$(massData, this.m_density);
  };
  Fixture.prototype.getAABB_za3lpa$ = function (childIndex) {
    if (!(childIndex >= 0 && childIndex < this.m_proxyCount)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }return ensureNotNull(this.m_proxies)[childIndex].aabb_8be2vx$;
  };
  Fixture.prototype.computeDistance_evt532$ = function (p, childIndex, normalOut) {
    return ensureNotNull(this.m_shape).computeDistanceToOut_j3owg$(ensureNotNull(this.m_body).getTransform(), p, childIndex, normalOut);
  };
  Fixture.prototype.create_498t5y$ = function (body, def) {
    var tmp$;
    this.userData = def.userData;
    this.m_friction = def.friction;
    this.m_restitution = def.restitution;
    this.m_body = body;
    this.m_next = null;
    this.m_filter.set_2ljgpt$(def.filter);
    this.m_isSensor = def.isSensor;
    this.m_shape = ensureNotNull(def.shape).clone();
    var childCount = ensureNotNull(this.m_shape).getChildCount();
    if (this.m_proxies == null) {
      var array = Array_0(childCount);
      var tmp$_0;
      tmp$_0 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_0; i++) {
        array[i] = new FixtureProxy();
      }
      this.m_proxies = array;
      for (var i_0 = 0; i_0 < childCount; i_0++) {
        ensureNotNull(this.m_proxies)[i_0].fixture_8be2vx$ = null;
        ensureNotNull(this.m_proxies)[i_0].proxyId_8be2vx$ = BroadPhase$Companion_getInstance().NULL_PROXY;
      }
    }if (ensureNotNull(this.m_proxies).length < childCount) {
      var old = this.m_proxies;
      var newLen = MathUtils$Companion_getInstance().max_vux9f0$(ensureNotNull(old).length * 2 | 0, childCount);
      this.m_proxies = Kotlin.isArray(tmp$ = Kotlin.newArray(newLen, null)) ? tmp$ : throwCCE();
      arrayCopy(old, ensureNotNull(this.m_proxies), 0, 0, 0 + old.length | 0);
      for (var i_1 = 0; i_1 < newLen; i_1++) {
        if (i_1 >= old.length) {
          ensureNotNull(this.m_proxies)[i_1] = new FixtureProxy();
        }ensureNotNull(this.m_proxies)[i_1].fixture_8be2vx$ = null;
        ensureNotNull(this.m_proxies)[i_1].proxyId_8be2vx$ = BroadPhase$Companion_getInstance().NULL_PROXY;
      }
    }this.m_proxyCount = 0;
    this.m_density = def.density;
  };
  Fixture.prototype.destroy = function () {
    if (!(this.m_proxyCount === 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }this.m_shape = null;
    this.m_proxies = null;
    this.m_next = null;
  };
  Fixture.prototype.createProxies_qk064v$ = function (broadPhase, xf) {
    var tmp$;
    if (!(this.m_proxyCount === 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }this.m_proxyCount = ensureNotNull(this.m_shape).getChildCount();
    tmp$ = this.m_proxyCount;
    for (var i = 0; i < tmp$; i++) {
      var proxy = ensureNotNull(this.m_proxies)[i];
      ensureNotNull(this.m_shape).computeAABB_wue7ir$(proxy.aabb_8be2vx$, xf, i);
      proxy.proxyId_8be2vx$ = broadPhase.createProxy_rngc4e$(proxy.aabb_8be2vx$, proxy);
      proxy.fixture_8be2vx$ = this;
      proxy.childIndex_8be2vx$ = i;
    }
  };
  Fixture.prototype.destroyProxies_75q5tr$ = function (broadPhase) {
    var tmp$;
    tmp$ = this.m_proxyCount;
    for (var i = 0; i < tmp$; i++) {
      var proxy = ensureNotNull(this.m_proxies)[i];
      broadPhase.destroyProxy_za3lpa$(proxy.proxyId_8be2vx$);
      proxy.proxyId_8be2vx$ = BroadPhase$Companion_getInstance().NULL_PROXY;
    }
    this.m_proxyCount = 0;
  };
  Fixture.prototype.synchronize_n9cqhp$ = function (broadPhase, transform1, transform2) {
    var tmp$;
    if (this.m_proxyCount === 0) {
      return;
    }tmp$ = this.m_proxyCount;
    for (var i = 0; i < tmp$; i++) {
      var proxy = ensureNotNull(this.m_proxies)[i];
      var aabb1 = this.pool1_0;
      var aab = this.pool2_0;
      ensureNotNull(this.m_shape).computeAABB_wue7ir$(aabb1, transform1, proxy.childIndex_8be2vx$);
      ensureNotNull(this.m_shape).computeAABB_wue7ir$(aab, transform2, proxy.childIndex_8be2vx$);
      proxy.aabb_8be2vx$.lowerBound.x = aabb1.lowerBound.x < aab.lowerBound.x ? aabb1.lowerBound.x : aab.lowerBound.x;
      proxy.aabb_8be2vx$.lowerBound.y = aabb1.lowerBound.y < aab.lowerBound.y ? aabb1.lowerBound.y : aab.lowerBound.y;
      proxy.aabb_8be2vx$.upperBound.x = aabb1.upperBound.x > aab.upperBound.x ? aabb1.upperBound.x : aab.upperBound.x;
      proxy.aabb_8be2vx$.upperBound.y = aabb1.upperBound.y > aab.upperBound.y ? aabb1.upperBound.y : aab.upperBound.y;
      this.displacement_0.x = transform2.p.x - transform1.p.x;
      this.displacement_0.y = transform2.p.y - transform1.p.y;
      broadPhase.moveProxy_jf99nd$(proxy.proxyId_8be2vx$, proxy.aabb_8be2vx$, this.displacement_0);
    }
  };
  Fixture.prototype.contains_d2xgsj$ = function (key) {
    return this.$delegate_9p97b4$_0.contains_d2xgsj$(key);
  };
  Fixture.prototype.get_d2xgsj$ = function (key) {
    return this.$delegate_9p97b4$_0.get_d2xgsj$(key);
  };
  Fixture.prototype.set_kj97s6$ = function (key, value) {
    return this.$delegate_9p97b4$_0.set_kj97s6$(key, value);
  };
  Fixture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fixture',
    interfaces: [Box2dTypedUserData]
  };
  function FixtureDef(shape, userData, friction, restitution, density, isSensor, filter) {
    if (shape === void 0)
      shape = null;
    if (userData === void 0)
      userData = null;
    if (friction === void 0)
      friction = 0.2;
    if (restitution === void 0)
      restitution = 0.0;
    if (density === void 0)
      density = 0.0;
    if (isSensor === void 0)
      isSensor = false;
    if (filter === void 0)
      filter = new Filter();
    this.shape = shape;
    this.userData = userData;
    this.friction = friction;
    this.restitution = restitution;
    this.density = density;
    this.isSensor = isSensor;
    this.filter = filter;
    this.$delegate_60iouz$_0 = new Box2dTypedUserData$Mixin();
  }
  FixtureDef.prototype.contains_d2xgsj$ = function (key) {
    return this.$delegate_60iouz$_0.contains_d2xgsj$(key);
  };
  FixtureDef.prototype.get_d2xgsj$ = function (key) {
    return this.$delegate_60iouz$_0.get_d2xgsj$(key);
  };
  FixtureDef.prototype.set_kj97s6$ = function (key, value) {
    return this.$delegate_60iouz$_0.set_kj97s6$(key, value);
  };
  FixtureDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FixtureDef',
    interfaces: [Box2dTypedUserData]
  };
  FixtureDef.prototype.component1 = function () {
    return this.shape;
  };
  FixtureDef.prototype.component2 = function () {
    return this.userData;
  };
  FixtureDef.prototype.component3 = function () {
    return this.friction;
  };
  FixtureDef.prototype.component4 = function () {
    return this.restitution;
  };
  FixtureDef.prototype.component5 = function () {
    return this.density;
  };
  FixtureDef.prototype.component6 = function () {
    return this.isSensor;
  };
  FixtureDef.prototype.component7 = function () {
    return this.filter;
  };
  FixtureDef.prototype.copy_mmm0u8$ = function (shape, userData, friction, restitution, density, isSensor, filter) {
    return new FixtureDef(shape === void 0 ? this.shape : shape, userData === void 0 ? this.userData : userData, friction === void 0 ? this.friction : friction, restitution === void 0 ? this.restitution : restitution, density === void 0 ? this.density : density, isSensor === void 0 ? this.isSensor : isSensor, filter === void 0 ? this.filter : filter);
  };
  FixtureDef.prototype.toString = function () {
    return 'FixtureDef(shape=' + Kotlin.toString(this.shape) + (', userData=' + Kotlin.toString(this.userData)) + (', friction=' + Kotlin.toString(this.friction)) + (', restitution=' + Kotlin.toString(this.restitution)) + (', density=' + Kotlin.toString(this.density)) + (', isSensor=' + Kotlin.toString(this.isSensor)) + (', filter=' + Kotlin.toString(this.filter)) + ')';
  };
  FixtureDef.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.shape) | 0;
    result = result * 31 + Kotlin.hashCode(this.userData) | 0;
    result = result * 31 + Kotlin.hashCode(this.friction) | 0;
    result = result * 31 + Kotlin.hashCode(this.restitution) | 0;
    result = result * 31 + Kotlin.hashCode(this.density) | 0;
    result = result * 31 + Kotlin.hashCode(this.isSensor) | 0;
    result = result * 31 + Kotlin.hashCode(this.filter) | 0;
    return result;
  };
  FixtureDef.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.shape, other.shape) && Kotlin.equals(this.userData, other.userData) && Kotlin.equals(this.friction, other.friction) && Kotlin.equals(this.restitution, other.restitution) && Kotlin.equals(this.density, other.density) && Kotlin.equals(this.isSensor, other.isSensor) && Kotlin.equals(this.filter, other.filter)))));
  };
  function FixtureProxy() {
    this.aabb_8be2vx$ = AABB_init();
    this.fixture_8be2vx$ = null;
    this.childIndex_8be2vx$ = 0;
    this.proxyId_8be2vx$ = 0;
  }
  FixtureProxy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FixtureProxy',
    interfaces: []
  };
  var arraycopy$lambda_6 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function Island() {
    this.m_listener = null;
    this.m_bodies = null;
    this.m_contacts = null;
    this.m_joints = null;
    this.m_positions = null;
    this.m_velocities = null;
    this.m_bodyCount = 0;
    this.m_jointCount = 0;
    this.m_contactCount = 0;
    this.m_bodyCapacity = 0;
    this.m_contactCapacity = 0;
    this.m_jointCapacity = 0;
    this.contactSolver_0 = new ContactSolver();
    this.timer_0 = new Timer();
    this.solverData_0 = new SolverData();
    this.solverDef_0 = new ContactSolver$ContactSolverDef();
    this.toiContactSolver_0 = new ContactSolver();
    this.toiSolverDef_0 = new ContactSolver$ContactSolverDef();
    this.impulse_0 = new ContactImpulse();
  }
  Island.prototype.init_h2fua6$ = function (bodyCapacity, contactCapacity, jointCapacity, listener) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    this.m_bodyCapacity = bodyCapacity;
    this.m_contactCapacity = contactCapacity;
    this.m_jointCapacity = jointCapacity;
    this.m_bodyCount = 0;
    this.m_contactCount = 0;
    this.m_jointCount = 0;
    this.m_listener = listener;
    if (this.m_bodies == null || this.m_bodyCapacity > ensureNotNull(this.m_bodies).length) {
      this.m_bodies = Kotlin.isArray(tmp$ = Kotlin.newArray(this.m_bodyCapacity, null)) ? tmp$ : throwCCE();
    }if (this.m_joints == null || this.m_jointCapacity > ensureNotNull(this.m_joints).length) {
      this.m_joints = Kotlin.isArray(tmp$_0 = Kotlin.newArray(this.m_jointCapacity, null)) ? tmp$_0 : throwCCE();
    }if (this.m_contacts == null || this.m_contactCapacity > ensureNotNull(this.m_contacts).length) {
      this.m_contacts = Kotlin.isArray(tmp$_1 = Kotlin.newArray(this.m_contactCapacity, null)) ? tmp$_1 : throwCCE();
    }if (this.m_velocities == null || this.m_bodyCapacity > ensureNotNull(this.m_velocities).length) {
      var old = this.m_velocities == null ? [] : this.m_velocities;
      this.m_velocities = Kotlin.isArray(tmp$_2 = Kotlin.newArray(this.m_bodyCapacity, null)) ? tmp$_2 : throwCCE();
      arrayCopy(ensureNotNull(old), ensureNotNull(this.m_velocities), 0, 0, 0 + ensureNotNull(old).length | 0);
      tmp$_3 = ensureNotNull(old).length;
      tmp$_4 = ensureNotNull(this.m_velocities).length;
      for (var i = tmp$_3; i < tmp$_4; i++) {
        ensureNotNull(this.m_velocities)[i] = new Velocity();
      }
    }if (this.m_positions == null || this.m_bodyCapacity > ensureNotNull(this.m_positions).length) {
      var old_0 = this.m_positions == null ? [] : this.m_positions;
      this.m_positions = Kotlin.isArray(tmp$_5 = Kotlin.newArray(this.m_bodyCapacity, null)) ? tmp$_5 : throwCCE();
      arrayCopy(ensureNotNull(old_0), ensureNotNull(this.m_positions), 0, 0, 0 + ensureNotNull(old_0).length | 0);
      tmp$_6 = ensureNotNull(old_0).length;
      tmp$_7 = ensureNotNull(this.m_positions).length;
      for (var i_0 = tmp$_6; i_0 < tmp$_7; i_0++) {
        ensureNotNull(this.m_positions)[i_0] = new Position();
      }
    }};
  Island.prototype.clear = function () {
    this.m_bodyCount = 0;
    this.m_contactCount = 0;
    this.m_jointCount = 0;
  };
  Island.prototype.solve_yqfh3b$ = function (profile, step, gravity, allowSleep) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    var h = step.dt;
    tmp$ = this.m_bodyCount;
    for (var i = 0; i < tmp$; i++) {
      var b = ensureNotNull(this.m_bodies)[i];
      var bm_sweep = b.m_sweep;
      var c = bm_sweep.c;
      var a = bm_sweep.a;
      var v = b.m_linearVelocity;
      var w = b.m_angularVelocity;
      bm_sweep.c0.set_z1lo5s$(bm_sweep.c);
      bm_sweep.a0 = bm_sweep.a;
      if (b.m_type === BodyType$DYNAMIC_getInstance()) {
        v.x = v.x + h * (b.m_gravityScale * gravity.x + b.m_invMass * b.m_force.x);
        v.y = v.y + h * (b.m_gravityScale * gravity.y + b.m_invMass * b.m_force.y);
        w += h * b.m_invI * b.m_torque;
        v.x = v.x * (1.0 / (1.0 + h * b.m_linearDamping));
        v.y = v.y * (1.0 / (1.0 + h * b.m_linearDamping));
        w *= 1.0 / (1.0 + h * b.m_angularDamping);
      }ensureNotNull(this.m_positions)[i].c.x = c.x;
      ensureNotNull(this.m_positions)[i].c.y = c.y;
      ensureNotNull(this.m_positions)[i].a = a;
      ensureNotNull(this.m_velocities)[i].v.x = v.x;
      ensureNotNull(this.m_velocities)[i].v.y = v.y;
      ensureNotNull(this.m_velocities)[i].w = w;
    }
    this.timer_0.reset();
    this.solverData_0.step = step;
    this.solverData_0.positions = this.m_positions;
    this.solverData_0.velocities = this.m_velocities;
    this.solverDef_0.step = step;
    this.solverDef_0.contacts = this.m_contacts;
    this.solverDef_0.count = this.m_contactCount;
    this.solverDef_0.positions = this.m_positions;
    this.solverDef_0.velocities = this.m_velocities;
    this.contactSolver_0.init_8xgpz3$(this.solverDef_0);
    this.contactSolver_0.initializeVelocityConstraints();
    if (step.warmStarting) {
      this.contactSolver_0.warmStart();
    }tmp$_0 = this.m_jointCount;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
      ensureNotNull(this.m_joints)[i_0].initVelocityConstraints_giqime$(this.solverData_0);
    }
    profile.solveInit.accum_mx4ult$(this.timer_0.milliseconds);
    this.timer_0.reset();
    tmp$_1 = step.velocityIterations;
    for (var i_1 = 0; i_1 < tmp$_1; i_1++) {
      tmp$_2 = this.m_jointCount;
      for (var j = 0; j < tmp$_2; j++) {
        ensureNotNull(this.m_joints)[j].solveVelocityConstraints_giqime$(this.solverData_0);
      }
      this.contactSolver_0.solveVelocityConstraints();
    }
    this.contactSolver_0.storeImpulses();
    profile.solveVelocity.accum_mx4ult$(this.timer_0.milliseconds);
    tmp$_3 = this.m_bodyCount;
    for (var i_2 = 0; i_2 < tmp$_3; i_2++) {
      var c_0 = ensureNotNull(this.m_positions)[i_2].c;
      var a_0 = ensureNotNull(this.m_positions)[i_2].a;
      var v_0 = ensureNotNull(this.m_velocities)[i_2].v;
      var w_0 = ensureNotNull(this.m_velocities)[i_2].w;
      var translationx = v_0.x * h;
      var translationy = v_0.y * h;
      if (translationx * translationx + translationy * translationy > Settings_getInstance().maxTranslationSquared) {
        var ratio = Settings_getInstance().maxTranslation / MathUtils$Companion_getInstance().sqrt_mx4ult$(translationx * translationx + translationy * translationy);
        v_0.x = v_0.x * ratio;
        v_0.y = v_0.y * ratio;
      }var rotation = h * w_0;
      if (rotation * rotation > Settings_getInstance().maxRotationSquared) {
        var ratio_0 = Settings_getInstance().maxRotation / MathUtils$Companion_getInstance().abs_mx4ult$(rotation);
        w_0 *= ratio_0;
      }c_0.x = c_0.x + h * v_0.x;
      c_0.y = c_0.y + h * v_0.y;
      a_0 += h * w_0;
      ensureNotNull(this.m_positions)[i_2].a = a_0;
      ensureNotNull(this.m_velocities)[i_2].w = w_0;
    }
    this.timer_0.reset();
    var positionSolved = false;
    tmp$_4 = step.positionIterations;
    for (var i_3 = 0; i_3 < tmp$_4; i_3++) {
      var contactsOkay = this.contactSolver_0.solvePositionConstraints();
      var jointsOkay = true;
      tmp$_5 = this.m_jointCount;
      for (var j_0 = 0; j_0 < tmp$_5; j_0++) {
        var jointOkay = ensureNotNull(this.m_joints)[j_0].solvePositionConstraints_giqime$(this.solverData_0);
        jointsOkay = (jointsOkay && jointOkay);
      }
      if (contactsOkay && jointsOkay) {
        positionSolved = true;
        break;
      }}
    tmp$_6 = this.m_bodyCount;
    for (var i_4 = 0; i_4 < tmp$_6; i_4++) {
      var body = ensureNotNull(this.m_bodies)[i_4];
      body.m_sweep.c.x = ensureNotNull(this.m_positions)[i_4].c.x;
      body.m_sweep.c.y = ensureNotNull(this.m_positions)[i_4].c.y;
      body.m_sweep.a = ensureNotNull(this.m_positions)[i_4].a;
      body.m_linearVelocity.x = ensureNotNull(this.m_velocities)[i_4].v.x;
      body.m_linearVelocity.y = ensureNotNull(this.m_velocities)[i_4].v.y;
      body.m_angularVelocity = ensureNotNull(this.m_velocities)[i_4].w;
      body.synchronizeTransform();
    }
    profile.solvePosition.accum_mx4ult$(this.timer_0.milliseconds);
    this.report_bjmbfq$(this.contactSolver_0.m_velocityConstraints);
    if (allowSleep) {
      var minSleepTime = kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
      var linTolSqr = Settings_getInstance().linearSleepTolerance * Settings_getInstance().linearSleepTolerance;
      var angTolSqr = Settings_getInstance().angularSleepTolerance * Settings_getInstance().angularSleepTolerance;
      tmp$_7 = this.m_bodyCount;
      for (var i_5 = 0; i_5 < tmp$_7; i_5++) {
        var b_0 = ensureNotNull(this.m_bodies)[i_5];
        if (b_0.type === BodyType$STATIC_getInstance()) {
          continue;
        }if ((b_0.m_flags & Body$Companion_getInstance().e_autoSleepFlag) === 0 || b_0.m_angularVelocity * b_0.m_angularVelocity > angTolSqr || Vec2$Companion_getInstance().dot_xjacks$(b_0.m_linearVelocity, b_0.m_linearVelocity) > linTolSqr) {
          b_0.m_sleepTime = 0.0;
          minSleepTime = 0.0;
        } else {
          b_0.m_sleepTime = b_0.m_sleepTime + h;
          minSleepTime = MathUtils$Companion_getInstance().min_dleff0$(minSleepTime, b_0.m_sleepTime);
        }
      }
      if (minSleepTime >= Settings_getInstance().timeToSleep && positionSolved) {
        tmp$_8 = this.m_bodyCount;
        for (var i_6 = 0; i_6 < tmp$_8; i_6++) {
          var b_1 = ensureNotNull(this.m_bodies)[i_6];
          b_1.isAwake = false;
        }
      }}};
  Island.prototype.solveTOI_n2g0gu$ = function (subStep, toiIndexA, toiIndexB) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (!(toiIndexA < this.m_bodyCount)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(toiIndexB < this.m_bodyCount)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }tmp$ = this.m_bodyCount;
    for (var i = 0; i < tmp$; i++) {
      ensureNotNull(this.m_positions)[i].c.x = ensureNotNull(this.m_bodies)[i].m_sweep.c.x;
      ensureNotNull(this.m_positions)[i].c.y = ensureNotNull(this.m_bodies)[i].m_sweep.c.y;
      ensureNotNull(this.m_positions)[i].a = ensureNotNull(this.m_bodies)[i].m_sweep.a;
      ensureNotNull(this.m_velocities)[i].v.x = ensureNotNull(this.m_bodies)[i].m_linearVelocity.x;
      ensureNotNull(this.m_velocities)[i].v.y = ensureNotNull(this.m_bodies)[i].m_linearVelocity.y;
      ensureNotNull(this.m_velocities)[i].w = ensureNotNull(this.m_bodies)[i].m_angularVelocity;
    }
    this.toiSolverDef_0.contacts = this.m_contacts;
    this.toiSolverDef_0.count = this.m_contactCount;
    this.toiSolverDef_0.step = subStep;
    this.toiSolverDef_0.positions = this.m_positions;
    this.toiSolverDef_0.velocities = this.m_velocities;
    this.toiContactSolver_0.init_8xgpz3$(this.toiSolverDef_0);
    tmp$_0 = subStep.positionIterations;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
      var contactsOkay = this.toiContactSolver_0.solveTOIPositionConstraints_vux9f0$(toiIndexA, toiIndexB);
      if (contactsOkay) {
        break;
      }}
    ensureNotNull(this.m_bodies)[toiIndexA].m_sweep.c0.x = ensureNotNull(this.m_positions)[toiIndexA].c.x;
    ensureNotNull(this.m_bodies)[toiIndexA].m_sweep.c0.y = ensureNotNull(this.m_positions)[toiIndexA].c.y;
    ensureNotNull(this.m_bodies)[toiIndexA].m_sweep.a0 = ensureNotNull(this.m_positions)[toiIndexA].a;
    ensureNotNull(this.m_bodies)[toiIndexB].m_sweep.c0.set_z1lo5s$(ensureNotNull(this.m_positions)[toiIndexB].c);
    ensureNotNull(this.m_bodies)[toiIndexB].m_sweep.a0 = ensureNotNull(this.m_positions)[toiIndexB].a;
    this.toiContactSolver_0.initializeVelocityConstraints();
    tmp$_1 = subStep.velocityIterations;
    for (var i_1 = 0; i_1 < tmp$_1; i_1++) {
      this.toiContactSolver_0.solveVelocityConstraints();
    }
    var h = subStep.dt;
    tmp$_2 = this.m_bodyCount;
    for (var i_2 = 0; i_2 < tmp$_2; i_2++) {
      var c = ensureNotNull(this.m_positions)[i_2].c;
      var a = ensureNotNull(this.m_positions)[i_2].a;
      var v = ensureNotNull(this.m_velocities)[i_2].v;
      var w = ensureNotNull(this.m_velocities)[i_2].w;
      var translationx = v.x * h;
      var translationy = v.y * h;
      if (translationx * translationx + translationy * translationy > Settings_getInstance().maxTranslationSquared) {
        var ratio = Settings_getInstance().maxTranslation / MathUtils$Companion_getInstance().sqrt_mx4ult$(translationx * translationx + translationy * translationy);
        v.mulLocal_mx4ult$(ratio);
      }var rotation = h * w;
      if (rotation * rotation > Settings_getInstance().maxRotationSquared) {
        var ratio_0 = Settings_getInstance().maxRotation / MathUtils$Companion_getInstance().abs_mx4ult$(rotation);
        w *= ratio_0;
      }c.x = c.x + v.x * h;
      c.y = c.y + v.y * h;
      a += h * w;
      ensureNotNull(this.m_positions)[i_2].c.x = c.x;
      ensureNotNull(this.m_positions)[i_2].c.y = c.y;
      ensureNotNull(this.m_positions)[i_2].a = a;
      ensureNotNull(this.m_velocities)[i_2].v.x = v.x;
      ensureNotNull(this.m_velocities)[i_2].v.y = v.y;
      ensureNotNull(this.m_velocities)[i_2].w = w;
      var body = ensureNotNull(this.m_bodies)[i_2];
      body.m_sweep.c.x = c.x;
      body.m_sweep.c.y = c.y;
      body.m_sweep.a = a;
      body.m_linearVelocity.x = v.x;
      body.m_linearVelocity.y = v.y;
      body.m_angularVelocity = w;
      body.synchronizeTransform();
    }
    this.report_bjmbfq$(this.toiContactSolver_0.m_velocityConstraints);
  };
  Island.prototype.add_v1loln$ = function (body) {
    if (!(this.m_bodyCount < this.m_bodyCapacity)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }body.m_islandIndex = this.m_bodyCount;
    ensureNotNull(this.m_bodies)[this.m_bodyCount] = body;
    this.m_bodyCount = this.m_bodyCount + 1 | 0;
  };
  Island.prototype.add_6p61aq$ = function (contact) {
    var tmp$;
    if (!(this.m_contactCount < this.m_contactCapacity)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }ensureNotNull(this.m_contacts)[tmp$ = this.m_contactCount, this.m_contactCount = tmp$ + 1 | 0, tmp$] = contact;
  };
  Island.prototype.add_atyahe$ = function (joint) {
    var tmp$;
    if (!(this.m_jointCount < this.m_jointCapacity)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }ensureNotNull(this.m_joints)[tmp$ = this.m_jointCount, this.m_jointCount = tmp$ + 1 | 0, tmp$] = joint;
  };
  Island.prototype.report_bjmbfq$ = function (constraints) {
    var tmp$, tmp$_0;
    if (this.m_listener == null) {
      return;
    }tmp$ = this.m_contactCount;
    for (var i = 0; i < tmp$; i++) {
      var c = ensureNotNull(this.m_contacts)[i];
      var vc = constraints[i];
      this.impulse_0.count = vc.pointCount;
      tmp$_0 = vc.pointCount;
      for (var j = 0; j < tmp$_0; j++) {
        this.impulse_0.normalImpulses[j] = vc.points[j].normalImpulse;
        this.impulse_0.tangentImpulses[j] = vc.points[j].tangentImpulse;
      }
      ensureNotNull(this.m_listener).postSolve_j6rgk8$(c, this.impulse_0);
    }
  };
  Island.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Island',
    interfaces: []
  };
  function Profile() {
    Profile$Companion_getInstance();
    this.step = new Profile$ProfileEntry();
    this.stepInit = new Profile$ProfileEntry();
    this.collide = new Profile$ProfileEntry();
    this.solveParticleSystem = new Profile$ProfileEntry();
    this.solve = new Profile$ProfileEntry();
    this.solveInit = new Profile$ProfileEntry();
    this.solveVelocity = new Profile$ProfileEntry();
    this.solvePosition = new Profile$ProfileEntry();
    this.broadphase = new Profile$ProfileEntry();
    this.solveTOI = new Profile$ProfileEntry();
  }
  function Profile$ProfileEntry() {
    this.longAvg_8be2vx$ = 0;
    this.shortAvg_8be2vx$ = 0;
    this.min_8be2vx$ = 0;
    this.max_8be2vx$ = 0;
    this.accum_8be2vx$ = 0;
    this.min_8be2vx$ = kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    this.max_8be2vx$ = -kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
  }
  Profile$ProfileEntry.prototype.record_mx4ult$ = function (value) {
    this.longAvg_8be2vx$ = this.longAvg_8be2vx$ * (1 - Profile$Companion_getInstance().LONG_FRACTION_0) + value * Profile$Companion_getInstance().LONG_FRACTION_0;
    this.shortAvg_8be2vx$ = this.shortAvg_8be2vx$ * (1 - Profile$Companion_getInstance().SHORT_FRACTION_0) + value * Profile$Companion_getInstance().SHORT_FRACTION_0;
    this.min_8be2vx$ = MathUtils$Companion_getInstance().min_dleff0$(value, this.min_8be2vx$);
    this.max_8be2vx$ = MathUtils$Companion_getInstance().max_dleff0$(value, this.max_8be2vx$);
  };
  Profile$ProfileEntry.prototype.startAccum = function () {
    this.accum_8be2vx$ = 0.0;
  };
  Profile$ProfileEntry.prototype.accum_mx4ult$ = function (value) {
    this.accum_8be2vx$ += value;
  };
  Profile$ProfileEntry.prototype.endAccum = function () {
    this.record_mx4ult$(this.accum_8be2vx$);
  };
  Profile$ProfileEntry.prototype.toString = function () {
    return this.shortAvg_8be2vx$.toString() + ' (' + this.longAvg_8be2vx$ + ') [' + this.min_8be2vx$ + ',' + this.max_8be2vx$ + ']';
  };
  Profile$ProfileEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProfileEntry',
    interfaces: []
  };
  Profile.prototype.toDebugStrings_a0weo2$ = function (strings) {
    strings.add_11rb$('Profile:');
    strings.add_11rb$(' step: ' + this.step);
    strings.add_11rb$('  init: ' + this.stepInit);
    strings.add_11rb$('  collide: ' + this.collide);
    strings.add_11rb$('  particles: ' + this.solveParticleSystem);
    strings.add_11rb$('  solve: ' + this.solve);
    strings.add_11rb$('   solveInit: ' + this.solveInit);
    strings.add_11rb$('   solveVelocity: ' + this.solveVelocity);
    strings.add_11rb$('   solvePosition: ' + this.solvePosition);
    strings.add_11rb$('   broadphase: ' + this.broadphase);
    strings.add_11rb$('  solveTOI: ' + this.solveTOI);
  };
  function Profile$Companion() {
    Profile$Companion_instance = this;
    this.LONG_AVG_NUMS_0 = 20;
    this.LONG_FRACTION_0 = 1.0 / this.LONG_AVG_NUMS_0;
    this.SHORT_AVG_NUMS_0 = 5;
    this.SHORT_FRACTION_0 = 1.0 / this.SHORT_AVG_NUMS_0;
  }
  Profile$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Profile$Companion_instance = null;
  function Profile$Companion_getInstance() {
    if (Profile$Companion_instance === null) {
      new Profile$Companion();
    }return Profile$Companion_instance;
  }
  Profile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Profile',
    interfaces: []
  };
  function SolverData() {
    this.step = null;
    this.positions = null;
    this.velocities = null;
  }
  SolverData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SolverData',
    interfaces: []
  };
  function TimeStep() {
    this.dt = 0;
    this.inv_dt = 0;
    this.dtRatio = 0;
    this.velocityIterations = 0;
    this.positionIterations = 0;
    this.warmStarting = false;
  }
  TimeStep.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeStep',
    interfaces: []
  };
  function World(gravity, pool, broadPhase) {
    World$Companion_getInstance();
    this.pool = pool;
    this.$delegate_vqcmev$_0 = new Box2dTypedUserData$Mixin();
    this.activeContacts = 0;
    this.contactPoolCount = 0;
    this.userData = null;
    this.m_flags = World$Companion_getInstance().CLEAR_FORCES;
    this.m_contactManager_ds0k96$_0 = new ContactManager(this, broadPhase);
    this.bodyList_ttlzn9$_0 = null;
    this.jointList_nr30qx$_0 = null;
    this.bodyCount_32lnou$_0 = 0;
    this.jointCount_u6jqgg$_0 = 0;
    this.gravity_9e8tjj$_0 = new Vec2();
    this.isSleepingAllowed = true;
    this.destructionListener = null;
    this.particleDestructionListener = null;
    this.m_debugDraw_sygame$_0 = null;
    this.m_inv_dt0_jth7wf$_0 = 0.0;
    this.isWarmStarting = true;
    this.isContinuousPhysics = true;
    this.isSubStepping = false;
    this.m_stepComplete_gb8vsu$_0 = true;
    this.profile = new Profile();
    this.m_particleSystem_m9xxte$_0 = new ParticleSystem(this);
    var array = Array_0(ShapeType$values().length);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var tmp$_0;
      array[i] = Kotlin.isArray(tmp$_0 = Kotlin.newArray(ShapeType$values().length, null)) ? tmp$_0 : throwCCE();
    }
    this.contactStacks_orjjp0$_0 = array;
    this.step_llf8ll$_0 = new TimeStep();
    this.stepTimer_izbjlm$_0 = new Timer();
    this.tempTimer_hgc45q$_0 = new Timer();
    this.color_mirh30$_0 = Color3f_init();
    this.xf_gy5kiv$_0 = Transform_init();
    this.cA_gy542f$_0 = new Vec2();
    this.cB_gy543a$_0 = new Vec2();
    this.avs_s6lyzl$_0 = new Vec2ArrayPool();
    this.wqwrapper_r5h6e2$_0 = new WorldQueryWrapper();
    this.wrcwrapper_2neh9y$_0 = new WorldRayCastWrapper();
    this.input_pck3at$_0 = new RayCastInput();
    this.island_6rqb1c$_0 = new Island();
    this.stack_u614fr$_0 = Kotlin.newArray(10, null);
    this.broadphaseTimer_2jjd9v$_0 = new Timer();
    this.toiIsland_v2g6hw$_0 = new Island();
    this.toiInput_uv2zyf$_0 = new TimeOfImpact$TOIInput();
    this.toiOutput_cyf780$_0 = new TimeOfImpact$TOIOutput();
    this.subStep_pauz4j$_0 = new TimeStep();
    this.tempBodies_4jru8v$_0 = Kotlin.newArray(2, null);
    this.backup1_nxtcmo$_0 = new Sweep();
    this.backup2_nxtcnj$_0 = new Sweep();
    this.liquidLength_pa5bwz$_0 = 0.12;
    this.averageLinearVel_ju8g62$_0 = -1.0;
    this.liquidOffset_1cx8qi$_0 = new Vec2();
    this.circCenterMoved_unsxd4$_0 = new Vec2();
    this.liquidColor_agch5k$_0 = Color3f_init_0(0.4, 0.4, 1.0);
    this.center_guqi8w$_0 = new Vec2();
    this.axis_lblkwk$_0 = new Vec2();
    this.v1_gy5hru$_0 = new Vec2();
    this.v2_gy5hsp$_0 = new Vec2();
    this.tlvertices_mk5t6s$_0 = new Vec2ArrayPool();
    this.gravity.set_z1lo5s$(gravity);
    this.initializeRegisters_mgs16p$_0();
  }
  Object.defineProperty(World.prototype, 'world', {
    get: function () {
      return this;
    }
  });
  Object.defineProperty(World.prototype, 'm_contactManager', {
    get: function () {
      return this.m_contactManager_ds0k96$_0;
    },
    set: function (m_contactManager) {
      this.m_contactManager_ds0k96$_0 = m_contactManager;
    }
  });
  Object.defineProperty(World.prototype, 'bodyList', {
    get: function () {
      return this.bodyList_ttlzn9$_0;
    },
    set: function (bodyList) {
      this.bodyList_ttlzn9$_0 = bodyList;
    }
  });
  Object.defineProperty(World.prototype, 'jointList', {
    get: function () {
      return this.jointList_nr30qx$_0;
    },
    set: function (jointList) {
      this.jointList_nr30qx$_0 = jointList;
    }
  });
  Object.defineProperty(World.prototype, 'bodyCount', {
    get: function () {
      return this.bodyCount_32lnou$_0;
    },
    set: function (bodyCount) {
      this.bodyCount_32lnou$_0 = bodyCount;
    }
  });
  Object.defineProperty(World.prototype, 'jointCount', {
    get: function () {
      return this.jointCount_u6jqgg$_0;
    },
    set: function (jointCount) {
      this.jointCount_u6jqgg$_0 = jointCount;
    }
  });
  Object.defineProperty(World.prototype, 'gravity', {
    get: function () {
      return this.gravity_9e8tjj$_0;
    },
    set: function (gravity) {
      this.gravity.set_z1lo5s$(gravity);
    }
  });
  Object.defineProperty(World.prototype, 'isAllowSleep', {
    get: function () {
      return this.isSleepingAllowed;
    },
    set: function (flag) {
      if (flag === this.isSleepingAllowed) {
        return;
      }this.isSleepingAllowed = flag;
      if (this.isSleepingAllowed === false) {
        var b = this.bodyList;
        while (b != null) {
          b.isAwake = true;
          b = b.m_next;
        }
      }}
  });
  Object.defineProperty(World.prototype, 'contactList', {
    get: function () {
      return ensureNotNull(ensureNotNull(this.m_contactManager).m_contactList);
    }
  });
  Object.defineProperty(World.prototype, 'proxyCount', {
    get: function () {
      return this.m_contactManager.m_broadPhase.proxyCount;
    }
  });
  Object.defineProperty(World.prototype, 'contactCount', {
    get: function () {
      return this.m_contactManager.m_contactCount;
    }
  });
  Object.defineProperty(World.prototype, 'treeHeight', {
    get: function () {
      return this.m_contactManager.m_broadPhase.treeHeight;
    }
  });
  Object.defineProperty(World.prototype, 'treeBalance', {
    get: function () {
      return this.m_contactManager.m_broadPhase.treeBalance;
    }
  });
  Object.defineProperty(World.prototype, 'treeQuality', {
    get: function () {
      return this.m_contactManager.m_broadPhase.treeQuality;
    }
  });
  Object.defineProperty(World.prototype, 'isLocked', {
    get: function () {
      return (this.m_flags & World$Companion_getInstance().LOCKED) === World$Companion_getInstance().LOCKED;
    }
  });
  Object.defineProperty(World.prototype, 'autoClearForces', {
    get: function () {
      return (this.m_flags & World$Companion_getInstance().CLEAR_FORCES) === World$Companion_getInstance().CLEAR_FORCES;
    },
    set: function (flag) {
      if (flag) {
        this.m_flags = this.m_flags | World$Companion_getInstance().CLEAR_FORCES;
      } else {
        this.m_flags = this.m_flags & ~World$Companion_getInstance().CLEAR_FORCES;
      }
    }
  });
  Object.defineProperty(World.prototype, 'particleGroupList', {
    get: function () {
      return ensureNotNull(this.m_particleSystem_m9xxte$_0.getParticleGroupList());
    }
  });
  Object.defineProperty(World.prototype, 'particleGroupCount', {
    get: function () {
      return this.m_particleSystem_m9xxte$_0.particleGroupCount;
    }
  });
  Object.defineProperty(World.prototype, 'particleCount', {
    get: function () {
      return this.m_particleSystem_m9xxte$_0.particleCount;
    }
  });
  Object.defineProperty(World.prototype, 'particleMaxCount', {
    get: function () {
      return this.m_particleSystem_m9xxte$_0.particleMaxCount;
    },
    set: function (count) {
      this.m_particleSystem_m9xxte$_0.particleMaxCount = count;
    }
  });
  Object.defineProperty(World.prototype, 'particleDensity', {
    get: function () {
      return this.m_particleSystem_m9xxte$_0.particleDensity;
    },
    set: function (density) {
      this.m_particleSystem_m9xxte$_0.particleDensity = density;
    }
  });
  Object.defineProperty(World.prototype, 'particleGravityScale', {
    get: function () {
      return this.m_particleSystem_m9xxte$_0.particleGravityScale;
    },
    set: function (gravityScale) {
      this.m_particleSystem_m9xxte$_0.particleGravityScale = gravityScale;
    }
  });
  Object.defineProperty(World.prototype, 'particleDamping', {
    get: function () {
      return this.m_particleSystem_m9xxte$_0.particleDamping;
    },
    set: function (damping) {
      this.m_particleSystem_m9xxte$_0.particleDamping = damping;
    }
  });
  Object.defineProperty(World.prototype, 'particleRadius', {
    get: function () {
      return this.m_particleSystem_m9xxte$_0.particleRadius;
    },
    set: function (radius) {
      this.m_particleSystem_m9xxte$_0.particleRadius = radius;
    }
  });
  Object.defineProperty(World.prototype, 'particleFlagsBuffer', {
    get: function () {
      return ensureNotNull(ensureNotNull(this.m_particleSystem_m9xxte$_0).particleFlagsBuffer);
    }
  });
  Object.defineProperty(World.prototype, 'particlePositionBuffer', {
    get: function () {
      return ensureNotNull(ensureNotNull(this.m_particleSystem_m9xxte$_0).particlePositionBuffer);
    }
  });
  Object.defineProperty(World.prototype, 'particleVelocityBuffer', {
    get: function () {
      return ensureNotNull(this.m_particleSystem_m9xxte$_0.particleVelocityBuffer);
    }
  });
  Object.defineProperty(World.prototype, 'particleColorBuffer', {
    get: function () {
      return ensureNotNull(this.m_particleSystem_m9xxte$_0.particleColorBuffer);
    }
  });
  Object.defineProperty(World.prototype, 'particleGroupBuffer', {
    get: function () {
      return ensureNotNull(this.m_particleSystem_m9xxte$_0.particleGroupBuffer);
    }
  });
  Object.defineProperty(World.prototype, 'particleUserDataBuffer', {
    get: function () {
      return ensureNotNull(this.m_particleSystem_m9xxte$_0.particleUserDataBuffer);
    }
  });
  Object.defineProperty(World.prototype, 'particleContacts', {
    get: function () {
      return this.m_particleSystem_m9xxte$_0.m_contactBuffer;
    }
  });
  Object.defineProperty(World.prototype, 'particleContactCount', {
    get: function () {
      return this.m_particleSystem_m9xxte$_0.m_contactCount;
    }
  });
  Object.defineProperty(World.prototype, 'particleBodyContacts', {
    get: function () {
      return this.m_particleSystem_m9xxte$_0.m_bodyContactBuffer;
    }
  });
  Object.defineProperty(World.prototype, 'particleBodyContactCount', {
    get: function () {
      return this.m_particleSystem_m9xxte$_0.m_bodyContactCount;
    }
  });
  World.prototype.addType_a77rap$_0 = function (creator, type1, type2) {
    var register = new ContactRegister();
    register.creator = creator;
    register.primary = true;
    this.contactStacks_orjjp0$_0[type1.ordinal][type2.ordinal] = register;
    if (type1 !== type2) {
      var register2 = new ContactRegister();
      register2.creator = creator;
      register2.primary = false;
      this.contactStacks_orjjp0$_0[type2.ordinal][type1.ordinal] = register2;
    }};
  World.prototype.initializeRegisters_mgs16p$_0 = function () {
    this.addType_a77rap$_0(this.pool.circleContactStack, ShapeType$CIRCLE_getInstance(), ShapeType$CIRCLE_getInstance());
    this.addType_a77rap$_0(this.pool.polyCircleContactStack, ShapeType$POLYGON_getInstance(), ShapeType$CIRCLE_getInstance());
    this.addType_a77rap$_0(this.pool.polyContactStack, ShapeType$POLYGON_getInstance(), ShapeType$POLYGON_getInstance());
    this.addType_a77rap$_0(this.pool.edgeCircleContactStack, ShapeType$EDGE_getInstance(), ShapeType$CIRCLE_getInstance());
    this.addType_a77rap$_0(this.pool.edgePolyContactStack, ShapeType$EDGE_getInstance(), ShapeType$POLYGON_getInstance());
    this.addType_a77rap$_0(this.pool.chainCircleContactStack, ShapeType$CHAIN_getInstance(), ShapeType$CIRCLE_getInstance());
    this.addType_a77rap$_0(this.pool.chainPolyContactStack, ShapeType$CHAIN_getInstance(), ShapeType$POLYGON_getInstance());
  };
  World.prototype.popContact_smbpn8$ = function (fixtureA, indexA, fixtureB, indexB) {
    var type1 = fixtureA.type;
    var type2 = fixtureB.type;
    var reg = this.contactStacks_orjjp0$_0[type1.ordinal][type2.ordinal];
    if (reg != null) {
      if (reg.primary) {
        var c = ensureNotNull(reg.creator).pop();
        c.init_smbpn8$(fixtureA, indexA, fixtureB, indexB);
        return c;
      } else {
        var c_0 = ensureNotNull(reg.creator).pop();
        c_0.init_smbpn8$(fixtureB, indexB, fixtureA, indexA);
        return c_0;
      }
    } else {
      return null;
    }
  };
  World.prototype.pushContact_6p61aq$ = function (contact) {
    var fixtureA = contact.getFixtureA();
    var fixtureB = contact.getFixtureB();
    if (contact.m_manifold.pointCount > 0 && !ensureNotNull(fixtureA).isSensor && !ensureNotNull(fixtureB).isSensor) {
      ensureNotNull(fixtureA.getBody()).isAwake = true;
      ensureNotNull(fixtureB.getBody()).isAwake = true;
    }var type1 = ensureNotNull(fixtureA).type;
    var type2 = ensureNotNull(fixtureB).type;
    var creator = this.contactStacks_orjjp0$_0[type1.ordinal][type2.ordinal].creator;
    ensureNotNull(creator).push_11rb$(contact);
  };
  World.prototype.setContactFilter_ndjxgn$ = function (filter) {
    this.m_contactManager.m_contactFilter = filter;
  };
  World.prototype.setContactListener_hsv2al$ = function (listener) {
    this.m_contactManager.m_contactListener = listener;
  };
  World.prototype.setDebugDraw_38pq6y$ = function (debugDraw) {
    this.m_debugDraw_sygame$_0 = debugDraw;
  };
  World.prototype.createBody_ok456i$ = function (def) {
    if (!(this.isLocked === false)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (this.isLocked) {
      throw IllegalStateException_init('World is locked'.toString());
    }var b = new Body(def, this);
    b.m_prev = null;
    b.m_next = this.bodyList;
    if (this.bodyList != null) {
      ensureNotNull(this.bodyList).m_prev = b;
    }this.bodyList = b;
    this.bodyCount = this.bodyCount + 1 | 0;
    return b;
  };
  World.prototype.destroyBody_v1loln$ = function (body) {
    if (!(this.bodyCount > 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(this.isLocked === false)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }if (this.isLocked) {
      return;
    }var je = body.m_jointList;
    while (je != null) {
      var je0 = je;
      je = je.next;
      if (this.destructionListener != null) {
        ensureNotNull(this.destructionListener).sayGoodbye_atyahe$(ensureNotNull(je0.joint));
      }this.destroyJoint_jd18y9$(je0.joint);
      body.m_jointList = je;
    }
    body.m_jointList = null;
    var ce = body.m_contactList;
    while (ce != null) {
      var ce0 = ce;
      ce = ce.next;
      this.m_contactManager.destroy_6p61aq$(ensureNotNull(ce0.contact));
    }
    body.m_contactList = null;
    var f = body.m_fixtureList;
    while (f != null) {
      var f0 = f;
      f = f.m_next;
      if (this.destructionListener != null) {
        ensureNotNull(this.destructionListener).sayGoodbye_9p97b4$(f0);
      }f0.destroyProxies_75q5tr$(this.m_contactManager.m_broadPhase);
      f0.destroy();
      body.m_fixtureList = f;
      body.m_fixtureCount = body.m_fixtureCount - 1 | 0;
    }
    body.m_fixtureList = null;
    body.m_fixtureCount = 0;
    if (body.m_prev != null) {
      ensureNotNull(body.m_prev).m_next = body.m_next;
    }if (body.m_next != null) {
      ensureNotNull(body.m_next).m_prev = body.m_prev;
    }if (equals(body, this.bodyList)) {
      this.bodyList = body.m_next;
    }this.bodyCount = this.bodyCount - 1 | 0;
  };
  World.prototype.createJoint_35691l$ = function (def) {
    if (!(this.isLocked === false)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (this.isLocked) {
      return null;
    }var j = Joint$Companion_getInstance().create_ihqup8$(this, def);
    ensureNotNull(j).m_prev = null;
    j.m_next = this.jointList;
    if (this.jointList != null) {
      ensureNotNull(this.jointList).m_prev = j;
    }this.jointList = j;
    this.jointCount = this.jointCount + 1 | 0;
    j.m_edgeA.joint = j;
    j.m_edgeA.other = j.getBodyB();
    j.m_edgeA.prev = null;
    j.m_edgeA.next = ensureNotNull(j.getBodyA()).m_jointList;
    if (ensureNotNull(j.getBodyA()).m_jointList != null) {
      ensureNotNull(ensureNotNull(j.getBodyA()).m_jointList).prev = j.m_edgeA;
    }ensureNotNull(j.getBodyA()).m_jointList = j.m_edgeA;
    j.m_edgeB.joint = j;
    j.m_edgeB.other = j.getBodyA();
    j.m_edgeB.prev = null;
    j.m_edgeB.next = ensureNotNull(j.getBodyB()).m_jointList;
    if (ensureNotNull(j.getBodyB()).m_jointList != null) {
      ensureNotNull(ensureNotNull(j.getBodyB()).m_jointList).prev = j.m_edgeB;
    }ensureNotNull(j.getBodyB()).m_jointList = j.m_edgeB;
    var bodyA = def.bodyA;
    var bodyB = def.bodyB;
    if (def.collideConnected === false) {
      var edge = ensureNotNull(bodyB).getContactList();
      while (edge != null) {
        if (equals(edge.other, bodyA)) {
          ensureNotNull(edge.contact).flagForFiltering();
        }edge = edge.next;
      }
    }return j;
  };
  World.prototype.destroyJoint_jd18y9$ = function (j) {
    if (!(this.isLocked === false)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (this.isLocked) {
      return;
    }var collideConnected = ensureNotNull(j).getCollideConnected();
    if (j.m_prev != null) {
      ensureNotNull(j.m_prev).m_next = j.m_next;
    }if (j.m_next != null) {
      ensureNotNull(j.m_next).m_prev = j.m_prev;
    }if (j === this.jointList) {
      this.jointList = j.m_next;
    }var bodyA = j.getBodyA();
    var bodyB = j.getBodyB();
    ensureNotNull(bodyA).isAwake = true;
    ensureNotNull(bodyB).isAwake = true;
    if (j.m_edgeA.prev != null) {
      ensureNotNull(j.m_edgeA.prev).next = j.m_edgeA.next;
    }if (j.m_edgeA.next != null) {
      ensureNotNull(j.m_edgeA.next).prev = j.m_edgeA.prev;
    }if (equals(j.m_edgeA, bodyA.m_jointList)) {
      bodyA.m_jointList = j.m_edgeA.next;
    }j.m_edgeA.prev = null;
    j.m_edgeA.next = null;
    if (j.m_edgeB.prev != null) {
      ensureNotNull(j.m_edgeB.prev).next = j.m_edgeB.next;
    }if (j.m_edgeB.next != null) {
      ensureNotNull(j.m_edgeB.next).prev = j.m_edgeB.prev;
    }if (equals(j.m_edgeB, bodyB.m_jointList)) {
      bodyB.m_jointList = j.m_edgeB.next;
    }j.m_edgeB.prev = null;
    j.m_edgeB.next = null;
    Joint$Companion_getInstance().destroy_atyahe$(j);
    if (!(this.jointCount > 0)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }this.jointCount = this.jointCount - 1 | 0;
    if (collideConnected === false) {
      var edge = bodyB.getContactList();
      while (edge != null) {
        if (equals(edge.other, bodyA)) {
          ensureNotNull(edge.contact).flagForFiltering();
        }edge = edge.next;
      }
    }};
  World.prototype.step_rjhsen$ = function (dt, velocityIterations, positionIterations) {
    this.stepTimer_izbjlm$_0.reset();
    this.tempTimer_hgc45q$_0.reset();
    if ((this.m_flags & World$Companion_getInstance().NEW_FIXTURE) === World$Companion_getInstance().NEW_FIXTURE) {
      this.m_contactManager.findNewContacts();
      this.m_flags = this.m_flags & ~World$Companion_getInstance().NEW_FIXTURE;
    }this.m_flags = this.m_flags | World$Companion_getInstance().LOCKED;
    this.step_llf8ll$_0.dt = dt;
    this.step_llf8ll$_0.velocityIterations = velocityIterations;
    this.step_llf8ll$_0.positionIterations = positionIterations;
    if (dt > 0.0) {
      this.step_llf8ll$_0.inv_dt = 1.0 / dt;
    } else {
      this.step_llf8ll$_0.inv_dt = 0.0;
    }
    this.step_llf8ll$_0.dtRatio = this.m_inv_dt0_jth7wf$_0 * dt;
    this.step_llf8ll$_0.warmStarting = this.isWarmStarting;
    this.profile.stepInit.record_mx4ult$(this.tempTimer_hgc45q$_0.milliseconds);
    this.tempTimer_hgc45q$_0.reset();
    this.m_contactManager.collide();
    this.profile.collide.record_mx4ult$(this.tempTimer_hgc45q$_0.milliseconds);
    if (this.m_stepComplete_gb8vsu$_0 && this.step_llf8ll$_0.dt > 0.0) {
      this.tempTimer_hgc45q$_0.reset();
      this.m_particleSystem_m9xxte$_0.solve_bht1jy$(this.step_llf8ll$_0);
      this.profile.solveParticleSystem.record_mx4ult$(this.tempTimer_hgc45q$_0.milliseconds);
      this.tempTimer_hgc45q$_0.reset();
      this.solve_7oozlq$_0(this.step_llf8ll$_0);
      this.profile.solve.record_mx4ult$(this.tempTimer_hgc45q$_0.milliseconds);
    }if (this.isContinuousPhysics && this.step_llf8ll$_0.dt > 0.0) {
      this.tempTimer_hgc45q$_0.reset();
      this.solveTOI_50h93c$_0(this.step_llf8ll$_0);
      this.profile.solveTOI.record_mx4ult$(this.tempTimer_hgc45q$_0.milliseconds);
    }if (this.step_llf8ll$_0.dt > 0.0) {
      this.m_inv_dt0_jth7wf$_0 = this.step_llf8ll$_0.inv_dt;
    }if ((this.m_flags & World$Companion_getInstance().CLEAR_FORCES) === World$Companion_getInstance().CLEAR_FORCES) {
      this.clearForces();
    }this.m_flags = this.m_flags & ~World$Companion_getInstance().LOCKED;
    this.profile.step.record_mx4ult$(this.stepTimer_izbjlm$_0.milliseconds);
  };
  World.prototype.clearForces = function () {
    var body = this.bodyList;
    while (body != null) {
      body.m_force.setZero();
      body.m_torque = 0.0;
      body = body.getNext();
    }
  };
  World.prototype.drawDebugData = function () {
    var tmp$;
    if (this.m_debugDraw_sygame$_0 == null) {
      return;
    }var flags = ensureNotNull(this.m_debugDraw_sygame$_0).flags;
    var wireframe = (flags & DebugDraw$Companion_getInstance().e_wireframeDrawingBit) !== 0;
    if ((flags & DebugDraw$Companion_getInstance().e_shapeBit) !== 0) {
      var b = this.bodyList;
      while (b != null) {
        this.xf_gy5kiv$_0.set_m97ft2$(b.getTransform());
        var f = b.getFixtureList();
        while (f != null) {
          if (b.isActive === false) {
            this.color_mirh30$_0.set_y2kzbl$(0.5, 0.5, 0.3);
            this.drawShape_4ycsu5$_0(f, this.xf_gy5kiv$_0, this.color_mirh30$_0, wireframe);
          } else if (b.type === BodyType$STATIC_getInstance()) {
            this.color_mirh30$_0.set_y2kzbl$(0.5, 0.9, 0.3);
            this.drawShape_4ycsu5$_0(f, this.xf_gy5kiv$_0, this.color_mirh30$_0, wireframe);
          } else if (b.type === BodyType$KINEMATIC_getInstance()) {
            this.color_mirh30$_0.set_y2kzbl$(0.5, 0.5, 0.9);
            this.drawShape_4ycsu5$_0(f, this.xf_gy5kiv$_0, this.color_mirh30$_0, wireframe);
          } else if (b.isAwake === false) {
            this.color_mirh30$_0.set_y2kzbl$(0.5, 0.5, 0.5);
            this.drawShape_4ycsu5$_0(f, this.xf_gy5kiv$_0, this.color_mirh30$_0, wireframe);
          } else {
            this.color_mirh30$_0.set_y2kzbl$(0.9, 0.7, 0.7);
            this.drawShape_4ycsu5$_0(f, this.xf_gy5kiv$_0, this.color_mirh30$_0, wireframe);
          }
          f = f.getNext();
        }
        b = b.getNext();
      }
      this.drawParticleSystem_d5aw8o$_0(this.m_particleSystem_m9xxte$_0);
    }if ((flags & DebugDraw$Companion_getInstance().e_jointBit) !== 0) {
      var j = this.jointList;
      while (j != null) {
        this.drawJoint_pwmslj$_0(j);
        j = j.getNext();
      }
    }if ((flags & DebugDraw$Companion_getInstance().e_pairBit) !== 0) {
      this.color_mirh30$_0.set_y2kzbl$(0.3, 0.9, 0.9);
      var c = this.m_contactManager.m_contactList;
      while (c != null) {
        var fixtureA = c.getFixtureA();
        var fixtureB = c.getFixtureB();
        ensureNotNull(fixtureA).getAABB_za3lpa$(c.getChildIndexA()).getCenterToOut_z1lo5s$(this.cA_gy542f$_0);
        ensureNotNull(fixtureB).getAABB_za3lpa$(c.getChildIndexB()).getCenterToOut_z1lo5s$(this.cB_gy543a$_0);
        ensureNotNull(this.m_debugDraw_sygame$_0).drawSegment_j9j37o$(this.cA_gy542f$_0, this.cB_gy543a$_0, this.color_mirh30$_0);
        c = c.getNext();
      }
    }if ((flags & DebugDraw$Companion_getInstance().e_aabbBit) !== 0) {
      this.color_mirh30$_0.set_y2kzbl$(0.9, 0.3, 0.9);
      var b_0 = this.bodyList;
      while (b_0 != null) {
        if (b_0.isActive === false) {
          b_0 = b_0.getNext();
          continue;
        }var f_0 = b_0.getFixtureList();
        while (f_0 != null) {
          tmp$ = f_0.m_proxyCount;
          for (var i = 0; i < tmp$; i++) {
            var proxy = ensureNotNull(f_0.m_proxies)[i];
            var aabb = this.m_contactManager.m_broadPhase.getFatAABB_za3lpa$(proxy.proxyId_8be2vx$);
            if (aabb != null) {
              var vs = this.avs_s6lyzl$_0.get_za3lpa$(4);
              vs[0].set_dleff0$(aabb.lowerBound.x, aabb.lowerBound.y);
              vs[1].set_dleff0$(aabb.upperBound.x, aabb.lowerBound.y);
              vs[2].set_dleff0$(aabb.upperBound.x, aabb.upperBound.y);
              vs[3].set_dleff0$(aabb.lowerBound.x, aabb.upperBound.y);
              ensureNotNull(this.m_debugDraw_sygame$_0).drawPolygon_om3j2w$(vs, 4, this.color_mirh30$_0);
            }}
          f_0 = f_0.getNext();
        }
        b_0 = b_0.getNext();
      }
    }if ((flags & DebugDraw$Companion_getInstance().e_centerOfMassBit) !== 0) {
      var b_1 = this.bodyList;
      while (b_1 != null) {
        this.xf_gy5kiv$_0.set_m97ft2$(b_1.getTransform());
        this.xf_gy5kiv$_0.p.set_z1lo5s$(b_1.worldCenter);
        ensureNotNull(this.m_debugDraw_sygame$_0).drawTransform_m97ft2$(this.xf_gy5kiv$_0);
        b_1 = b_1.getNext();
      }
    }if ((flags & DebugDraw$Companion_getInstance().e_dynamicTreeBit) !== 0) {
      this.m_contactManager.m_broadPhase.drawTree_38pq6y$(ensureNotNull(this.m_debugDraw_sygame$_0));
    }ensureNotNull(this.m_debugDraw_sygame$_0).flush();
  };
  World.prototype.queryAABB_ujan7h$ = function (callback, aabb) {
    this.wqwrapper_r5h6e2$_0.broadPhase = this.m_contactManager.m_broadPhase;
    this.wqwrapper_r5h6e2$_0.callback = callback;
    this.m_contactManager.m_broadPhase.query_yc3l05$(this.wqwrapper_r5h6e2$_0, aabb);
  };
  World.prototype.queryAABB_pdrh3t$ = function (callback, particleCallback, aabb) {
    this.wqwrapper_r5h6e2$_0.broadPhase = this.m_contactManager.m_broadPhase;
    this.wqwrapper_r5h6e2$_0.callback = callback;
    this.m_contactManager.m_broadPhase.query_yc3l05$(this.wqwrapper_r5h6e2$_0, aabb);
    this.m_particleSystem_m9xxte$_0.queryAABB_gvhqw9$(particleCallback, aabb);
  };
  World.prototype.queryAABB_gvhqw9$ = function (particleCallback, aabb) {
    this.m_particleSystem_m9xxte$_0.queryAABB_gvhqw9$(particleCallback, aabb);
  };
  World.prototype.raycast_fjqeg3$ = function (callback, point1, point2) {
    this.wrcwrapper_2neh9y$_0.broadPhase = this.m_contactManager.m_broadPhase;
    this.wrcwrapper_2neh9y$_0.callback = callback;
    this.input_pck3at$_0.maxFraction = 1.0;
    this.input_pck3at$_0.p1.set_z1lo5s$(point1);
    this.input_pck3at$_0.p2.set_z1lo5s$(point2);
    this.m_contactManager.m_broadPhase.raycast_j5vfpb$(this.wrcwrapper_2neh9y$_0, this.input_pck3at$_0);
  };
  World.prototype.raycast_f94v22$ = function (callback, particleCallback, point1, point2) {
    this.wrcwrapper_2neh9y$_0.broadPhase = this.m_contactManager.m_broadPhase;
    this.wrcwrapper_2neh9y$_0.callback = callback;
    this.input_pck3at$_0.maxFraction = 1.0;
    this.input_pck3at$_0.p1.set_z1lo5s$(point1);
    this.input_pck3at$_0.p2.set_z1lo5s$(point2);
    this.m_contactManager.m_broadPhase.raycast_j5vfpb$(this.wrcwrapper_2neh9y$_0, this.input_pck3at$_0);
    this.m_particleSystem_m9xxte$_0.raycast_1xblih$(particleCallback, point1, point2);
  };
  World.prototype.raycast_1xblih$ = function (particleCallback, point1, point2) {
    this.m_particleSystem_m9xxte$_0.raycast_1xblih$(particleCallback, point1, point2);
  };
  World.prototype.solve_7oozlq$_0 = function (step) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.profile.solveInit.startAccum();
    this.profile.solveVelocity.startAccum();
    this.profile.solvePosition.startAccum();
    var b = this.bodyList;
    while (b != null) {
      ensureNotNull(b).m_xf0.set_m97ft2$(ensureNotNull(b).m_xf);
      b = ensureNotNull(b).m_next;
    }
    this.island_6rqb1c$_0.init_h2fua6$(this.bodyCount, this.m_contactManager.m_contactCount, this.jointCount, this.m_contactManager.m_contactListener);
    var b_0 = this.bodyList;
    while (b_0 != null) {
      ensureNotNull(b_0).m_flags = ensureNotNull(b_0).m_flags & ~Body$Companion_getInstance().e_islandFlag;
      b_0 = ensureNotNull(b_0).m_next;
    }
    var c = this.m_contactManager.m_contactList;
    while (c != null) {
      c.m_flags = c.m_flags & ~Contact$Companion_getInstance().ISLAND_FLAG;
      c = c.m_next;
    }
    var j = this.jointList;
    while (j != null) {
      j.m_islandFlag = false;
      j = j.m_next;
    }
    var stackSize = this.bodyCount;
    if (this.stack_u614fr$_0.length < stackSize) {
      this.stack_u614fr$_0 = Kotlin.newArray(stackSize, null);
    }var seed = this.bodyList;
    while (seed != null) {
      if ((seed.m_flags & Body$Companion_getInstance().e_islandFlag) === Body$Companion_getInstance().e_islandFlag) {
        seed = seed.m_next;
        continue;
      }if (seed.isAwake === false || seed.isActive === false) {
        seed = seed.m_next;
        continue;
      }if (seed.type === BodyType$STATIC_getInstance()) {
        seed = seed.m_next;
        continue;
      }this.island_6rqb1c$_0.clear();
      var stackCount = 0;
      this.stack_u614fr$_0[tmp$ = stackCount, stackCount = tmp$ + 1 | 0, tmp$] = seed;
      seed.m_flags = seed.m_flags | Body$Companion_getInstance().e_islandFlag;
      while (stackCount > 0) {
        var b_1 = ensureNotNull(this.stack_u614fr$_0[stackCount = stackCount - 1 | 0, stackCount]);
        if (!(b_1.isActive === true)) {
          var message = 'Check failed.';
          throw IllegalStateException_init(message.toString());
        }this.island_6rqb1c$_0.add_v1loln$(b_1);
        b_1.isAwake = true;
        if (b_1.type === BodyType$STATIC_getInstance()) {
          continue;
        }var ce = b_1.m_contactList;
        while (ce != null) {
          var contact = ce.contact;
          if ((ensureNotNull(contact).m_flags & Contact$Companion_getInstance().ISLAND_FLAG) === Contact$Companion_getInstance().ISLAND_FLAG) {
            ce = ce.next;
            continue;
          }if (contact.isEnabled === false || contact.isTouching === false) {
            ce = ce.next;
            continue;
          }var sensorA = ensureNotNull(contact.m_fixtureA).m_isSensor;
          var sensorB = ensureNotNull(contact.m_fixtureB).m_isSensor;
          if (sensorA || sensorB) {
            ce = ce.next;
            continue;
          }this.island_6rqb1c$_0.add_6p61aq$(contact);
          contact.m_flags = contact.m_flags | Contact$Companion_getInstance().ISLAND_FLAG;
          var other = ce.other;
          if ((ensureNotNull(other).m_flags & Body$Companion_getInstance().e_islandFlag) === Body$Companion_getInstance().e_islandFlag) {
            ce = ce.next;
            continue;
          }if (!(stackCount < stackSize)) {
            var message_0 = 'Check failed.';
            throw IllegalStateException_init(message_0.toString());
          }this.stack_u614fr$_0[tmp$_0 = stackCount, stackCount = tmp$_0 + 1 | 0, tmp$_0] = other;
          other.m_flags = other.m_flags | Body$Companion_getInstance().e_islandFlag;
          ce = ce.next;
        }
        var je = b_1.m_jointList;
        while (je != null) {
          if (ensureNotNull(je.joint).m_islandFlag === true) {
            je = je.next;
            continue;
          }var other_0 = je.other;
          if (ensureNotNull(other_0).isActive === false) {
            je = je.next;
            continue;
          }this.island_6rqb1c$_0.add_atyahe$(ensureNotNull(je.joint));
          ensureNotNull(je.joint).m_islandFlag = true;
          if ((other_0.m_flags & Body$Companion_getInstance().e_islandFlag) === Body$Companion_getInstance().e_islandFlag) {
            je = je.next;
            continue;
          }if (!(stackCount < stackSize)) {
            var message_1 = 'Check failed.';
            throw IllegalStateException_init(message_1.toString());
          }this.stack_u614fr$_0[tmp$_1 = stackCount, stackCount = tmp$_1 + 1 | 0, tmp$_1] = other_0;
          other_0.m_flags = other_0.m_flags | Body$Companion_getInstance().e_islandFlag;
          je = je.next;
        }
      }
      this.island_6rqb1c$_0.solve_yqfh3b$(this.profile, step, this.gravity, this.isSleepingAllowed);
      tmp$_2 = this.island_6rqb1c$_0.m_bodyCount;
      for (var i = 0; i < tmp$_2; i++) {
        var b_2 = ensureNotNull(this.island_6rqb1c$_0.m_bodies)[i];
        if (b_2.type === BodyType$STATIC_getInstance()) {
          b_2.m_flags = b_2.m_flags & ~Body$Companion_getInstance().e_islandFlag;
        }}
      seed = seed.m_next;
    }
    this.profile.solveInit.endAccum();
    this.profile.solveVelocity.endAccum();
    this.profile.solvePosition.endAccum();
    this.broadphaseTimer_2jjd9v$_0.reset();
    var b_3 = this.bodyList;
    while (b_3 != null) {
      if ((ensureNotNull(b_3).m_flags & Body$Companion_getInstance().e_islandFlag) === 0) {
        b_3 = ensureNotNull(b_3).getNext();
        continue;
      }if (ensureNotNull(b_3).type === BodyType$STATIC_getInstance()) {
        b_3 = ensureNotNull(b_3).getNext();
        continue;
      }ensureNotNull(b_3).synchronizeFixtures();
      b_3 = ensureNotNull(b_3).getNext();
    }
    this.m_contactManager.findNewContacts();
    this.profile.broadphase.record_mx4ult$(this.broadphaseTimer_2jjd9v$_0.milliseconds);
  };
  World.prototype.solveTOI_50h93c$_0 = function (step) {
    var tmp$;
    var island = this.toiIsland_v2g6hw$_0;
    island.init_h2fua6$(2 * Settings_getInstance().maxTOIContacts | 0, Settings_getInstance().maxTOIContacts, 0, this.m_contactManager.m_contactListener);
    if (this.m_stepComplete_gb8vsu$_0) {
      var b = this.bodyList;
      while (b != null) {
        b.m_flags = b.m_flags & ~Body$Companion_getInstance().e_islandFlag;
        b.m_sweep.alpha0 = 0.0;
        b = b.m_next;
      }
      var c = this.m_contactManager.m_contactList;
      while (c != null) {
        c.m_flags = c.m_flags & ~(Contact$Companion_getInstance().TOI_FLAG | Contact$Companion_getInstance().ISLAND_FLAG);
        c.m_toiCount = 0.0;
        c.m_toi = 1.0;
        c = c.m_next;
      }
    }while (true) {
      var minContact = null;
      var minAlpha = 1.0;
      var c_0 = this.m_contactManager.m_contactList;
      while (c_0 != null) {
        if (c_0.isEnabled === false) {
          c_0 = c_0.m_next;
          continue;
        }if (c_0.m_toiCount > Settings_getInstance().maxSubSteps) {
          c_0 = c_0.m_next;
          continue;
        }var alpha = 1.0;
        if ((c_0.m_flags & Contact$Companion_getInstance().TOI_FLAG) !== 0) {
          alpha = c_0.m_toi;
        } else {
          var fA = c_0.getFixtureA();
          var fB = c_0.getFixtureB();
          if (ensureNotNull(fA).isSensor || ensureNotNull(fB).isSensor) {
            c_0 = c_0.m_next;
            continue;
          }var bA = fA.getBody();
          var bB = fB.getBody();
          var typeA = ensureNotNull(bA).m_type;
          var typeB = ensureNotNull(bB).m_type;
          if (!(typeA === BodyType$DYNAMIC_getInstance() || typeB === BodyType$DYNAMIC_getInstance())) {
            var message = 'Check failed.';
            throw IllegalStateException_init(message.toString());
          }var activeA = bA.isAwake && typeA !== BodyType$STATIC_getInstance();
          var activeB = bB.isAwake && typeB !== BodyType$STATIC_getInstance();
          if (activeA === false && activeB === false) {
            c_0 = c_0.m_next;
            continue;
          }var collideA = bA.isBullet || typeA !== BodyType$DYNAMIC_getInstance();
          var collideB = bB.isBullet || typeB !== BodyType$DYNAMIC_getInstance();
          if (collideA === false && collideB === false) {
            c_0 = c_0.m_next;
            continue;
          }var alpha0 = bA.m_sweep.alpha0;
          if (bA.m_sweep.alpha0 < bB.m_sweep.alpha0) {
            alpha0 = bB.m_sweep.alpha0;
            bA.m_sweep.advance_mx4ult$(alpha0);
          } else if (bB.m_sweep.alpha0 < bA.m_sweep.alpha0) {
            alpha0 = bA.m_sweep.alpha0;
            bB.m_sweep.advance_mx4ult$(alpha0);
          }if (!(alpha0 < 1.0)) {
            var message_0 = 'Check failed.';
            throw IllegalStateException_init(message_0.toString());
          }var indexA = c_0.getChildIndexA();
          var indexB = c_0.getChildIndexB();
          var input = this.toiInput_uv2zyf$_0;
          input.proxyA.set_f381zw$(ensureNotNull(fA.getShape()), indexA);
          input.proxyB.set_f381zw$(ensureNotNull(fB.getShape()), indexB);
          input.sweepA.set_kvn64a$(bA.m_sweep);
          input.sweepB.set_kvn64a$(bB.m_sweep);
          input.tMax = 1.0;
          this.pool.timeOfImpact.timeOfImpact_8iqk61$(this.toiOutput_cyf780$_0, input);
          var beta = this.toiOutput_cyf780$_0.t;
          if (this.toiOutput_cyf780$_0.state === TimeOfImpact$TOIOutputState$TOUCHING_getInstance()) {
            alpha = MathUtils$Companion_getInstance().min_dleff0$(alpha0 + (1.0 - alpha0) * beta, 1.0);
          } else {
            alpha = 1.0;
          }
          c_0.m_toi = alpha;
          c_0.m_flags = c_0.m_flags | Contact$Companion_getInstance().TOI_FLAG;
        }
        if (alpha < minAlpha) {
          minContact = c_0;
          minAlpha = alpha;
        }c_0 = c_0.m_next;
      }
      if (minContact == null || 1.0 - 10.0 * Settings_getInstance().EPSILON < minAlpha) {
        this.m_stepComplete_gb8vsu$_0 = true;
        break;
      }var fA_0 = minContact.getFixtureA();
      var fB_0 = minContact.getFixtureB();
      var bA_0 = ensureNotNull(fA_0).getBody();
      var bB_0 = ensureNotNull(fB_0).getBody();
      this.backup1_nxtcmo$_0.set_kvn64a$(ensureNotNull(bA_0).m_sweep);
      this.backup2_nxtcnj$_0.set_kvn64a$(ensureNotNull(bB_0).m_sweep);
      bA_0.advance_mx4ult$(minAlpha);
      bB_0.advance_mx4ult$(minAlpha);
      minContact.update_ge5gqk$(this.m_contactManager.m_contactListener);
      minContact.m_flags = minContact.m_flags & ~Contact$Companion_getInstance().TOI_FLAG;
      minContact.m_toiCount = minContact.m_toiCount + 1;
      if (minContact.isEnabled === false || minContact.isTouching === false) {
        minContact.isEnabled = false;
        bA_0.m_sweep.set_kvn64a$(this.backup1_nxtcmo$_0);
        bB_0.m_sweep.set_kvn64a$(this.backup2_nxtcnj$_0);
        bA_0.synchronizeTransform();
        bB_0.synchronizeTransform();
        continue;
      }bA_0.isAwake = true;
      bB_0.isAwake = true;
      island.clear();
      island.add_v1loln$(bA_0);
      island.add_v1loln$(bB_0);
      island.add_6p61aq$(minContact);
      bA_0.m_flags = bA_0.m_flags | Body$Companion_getInstance().e_islandFlag;
      bB_0.m_flags = bB_0.m_flags | Body$Companion_getInstance().e_islandFlag;
      minContact.m_flags = minContact.m_flags | Contact$Companion_getInstance().ISLAND_FLAG;
      this.tempBodies_4jru8v$_0[0] = bA_0;
      this.tempBodies_4jru8v$_0[1] = bB_0;
      for (var i = 0; i <= 1; i++) {
        var body = ensureNotNull(this.tempBodies_4jru8v$_0[i]);
        if (body.m_type === BodyType$DYNAMIC_getInstance()) {
          var ce = body.m_contactList;
          while (ce != null && island.m_bodyCount !== island.m_bodyCapacity && island.m_contactCount !== island.m_contactCapacity) {
            var contact = ce.contact;
            if ((ensureNotNull(contact).m_flags & Contact$Companion_getInstance().ISLAND_FLAG) !== 0) {
              ce = ce.next;
              continue;
            }var other = ce.other;
            if (ensureNotNull(other).m_type === BodyType$DYNAMIC_getInstance() && body.isBullet === false && ensureNotNull(other).isBullet === false) {
              ce = ce.next;
              continue;
            }var sensorA = ensureNotNull(contact.m_fixtureA).m_isSensor;
            var sensorB = ensureNotNull(contact.m_fixtureB).m_isSensor;
            if (sensorA || sensorB) {
              ce = ce.next;
              continue;
            }this.backup1_nxtcmo$_0.set_kvn64a$(ensureNotNull(other).m_sweep);
            if ((other.m_flags & Body$Companion_getInstance().e_islandFlag) === 0) {
              other.advance_mx4ult$(minAlpha);
            }contact.update_ge5gqk$(this.m_contactManager.m_contactListener);
            if (contact.isEnabled === false) {
              other.m_sweep.set_kvn64a$(this.backup1_nxtcmo$_0);
              other.synchronizeTransform();
              ce = ce.next;
              continue;
            }if (contact.isTouching === false) {
              other.m_sweep.set_kvn64a$(this.backup1_nxtcmo$_0);
              other.synchronizeTransform();
              ce = ce.next;
              continue;
            }contact.m_flags = contact.m_flags | Contact$Companion_getInstance().ISLAND_FLAG;
            island.add_6p61aq$(contact);
            if ((other.m_flags & Body$Companion_getInstance().e_islandFlag) !== 0) {
              ce = ce.next;
              continue;
            }other.m_flags = other.m_flags | Body$Companion_getInstance().e_islandFlag;
            if (other.m_type !== BodyType$STATIC_getInstance()) {
              other.isAwake = true;
            }island.add_v1loln$(other);
            ce = ce.next;
          }
        }}
      this.subStep_pauz4j$_0.dt = (1.0 - minAlpha) * step.dt;
      this.subStep_pauz4j$_0.inv_dt = 1.0 / this.subStep_pauz4j$_0.dt;
      this.subStep_pauz4j$_0.dtRatio = 1.0;
      this.subStep_pauz4j$_0.positionIterations = 20;
      this.subStep_pauz4j$_0.velocityIterations = step.velocityIterations;
      this.subStep_pauz4j$_0.warmStarting = false;
      island.solveTOI_n2g0gu$(this.subStep_pauz4j$_0, bA_0.m_islandIndex, bB_0.m_islandIndex);
      tmp$ = island.m_bodyCount;
      for (var i_0 = 0; i_0 < tmp$; i_0++) {
        var body_0 = ensureNotNull(island.m_bodies)[i_0];
        body_0.m_flags = body_0.m_flags & ~Body$Companion_getInstance().e_islandFlag;
        if (body_0.m_type !== BodyType$DYNAMIC_getInstance()) {
          continue;
        }body_0.synchronizeFixtures();
        var ce_0 = body_0.m_contactList;
        while (ce_0 != null) {
          ensureNotNull(ce_0.contact).m_flags = ensureNotNull(ce_0.contact).m_flags & ~(Contact$Companion_getInstance().TOI_FLAG | Contact$Companion_getInstance().ISLAND_FLAG);
          ce_0 = ce_0.next;
        }
      }
      this.m_contactManager.findNewContacts();
      if (this.isSubStepping) {
        this.m_stepComplete_gb8vsu$_0 = false;
        break;
      }}
  };
  World.prototype.drawJoint_pwmslj$_0 = function (joint) {
    var tmp$;
    var bodyA = joint.getBodyA();
    var bodyB = joint.getBodyB();
    var xf1 = ensureNotNull(bodyA).getTransform();
    var xf2 = ensureNotNull(bodyB).getTransform();
    var x1 = xf1.p;
    var x2 = xf2.p;
    var p1 = this.pool.popVec2();
    var p2 = this.pool.popVec2();
    joint.getAnchorA_z1lo5s$(p1);
    joint.getAnchorB_z1lo5s$(p2);
    this.color_mirh30$_0.set_y2kzbl$(0.5, 0.8, 0.8);
    switch (joint.getType().name) {
      case 'DISTANCE':
        ensureNotNull(this.m_debugDraw_sygame$_0).drawSegment_j9j37o$(p1, p2, this.color_mirh30$_0);
        break;
      case 'PULLEY':
        var pulley = Kotlin.isType(tmp$ = joint, PulleyJoint) ? tmp$ : throwCCE();
        var s1 = pulley.getGroundAnchorA();
        var s2 = pulley.getGroundAnchorB();
        ensureNotNull(this.m_debugDraw_sygame$_0).drawSegment_j9j37o$(s1, p1, this.color_mirh30$_0);
        ensureNotNull(this.m_debugDraw_sygame$_0).drawSegment_j9j37o$(s2, p2, this.color_mirh30$_0);
        ensureNotNull(this.m_debugDraw_sygame$_0).drawSegment_j9j37o$(s1, s2, this.color_mirh30$_0);
        break;
      case 'CONSTANT_VOLUME':
      case 'MOUSE':
        break;
      default:ensureNotNull(this.m_debugDraw_sygame$_0).drawSegment_j9j37o$(x1, p1, this.color_mirh30$_0);
        ensureNotNull(this.m_debugDraw_sygame$_0).drawSegment_j9j37o$(p1, p2, this.color_mirh30$_0);
        ensureNotNull(this.m_debugDraw_sygame$_0).drawSegment_j9j37o$(x2, p2, this.color_mirh30$_0);
        break;
    }
    this.pool.pushVec2_za3lpa$(2);
  };
  World.prototype.drawShape_4ycsu5$_0 = function (fixture, xf, color, wireframe) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    switch (fixture.type.name) {
      case 'CIRCLE':
        var circle = (tmp$ = fixture.getShape()) == null || Kotlin.isType(tmp$, CircleShape) ? tmp$ : throwCCE();
        Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(xf, ensureNotNull(circle).m_p, this.center_guqi8w$_0);
        var radius = circle.m_radius;
        xf.q.getXAxis_z1lo5s$(this.axis_lblkwk$_0);
        if (fixture.userData != null && equals(fixture.userData, World$Companion_getInstance().LIQUID_INT_0)) {
          var b = fixture.getBody();
          this.liquidOffset_1cx8qi$_0.set_z1lo5s$(ensureNotNull(b).m_linearVelocity);
          var linVelLength = b.m_linearVelocity.length();
          if (this.averageLinearVel_ju8g62$_0 === -1.0) {
            this.averageLinearVel_ju8g62$_0 = linVelLength;
          } else {
            this.averageLinearVel_ju8g62$_0 = 0.98 * this.averageLinearVel_ju8g62$_0 + 0.02 * linVelLength;
          }
          this.liquidOffset_1cx8qi$_0.mulLocal_mx4ult$(this.liquidLength_pa5bwz$_0 / this.averageLinearVel_ju8g62$_0 / 2.0);
          this.circCenterMoved_unsxd4$_0.set_z1lo5s$(this.center_guqi8w$_0).addLocal_z1lo5s$(this.liquidOffset_1cx8qi$_0);
          this.center_guqi8w$_0.subLocal_z1lo5s$(this.liquidOffset_1cx8qi$_0);
          ensureNotNull(this.m_debugDraw_sygame$_0).drawSegment_j9j37o$(this.center_guqi8w$_0, this.circCenterMoved_unsxd4$_0, this.liquidColor_agch5k$_0);
          return;
        }
        if (wireframe) {
          ensureNotNull(this.m_debugDraw_sygame$_0).drawCircle_x33xrr$(this.center_guqi8w$_0, radius, this.axis_lblkwk$_0, color);
        } else {
          ensureNotNull(this.m_debugDraw_sygame$_0).drawSolidCircle_x33xrr$(this.center_guqi8w$_0, radius, this.axis_lblkwk$_0, color);
        }

        break;
      case 'POLYGON':
        var poly = (tmp$_0 = fixture.getShape()) == null || Kotlin.isType(tmp$_0, PolygonShape) ? tmp$_0 : throwCCE();
        var vertexCount = ensureNotNull(poly).m_count;
        if (!(vertexCount <= Settings_getInstance().maxPolygonVertices)) {
          var message = 'Check failed.';
          throw IllegalStateException_init(message.toString());
        }
        var vertices = this.tlvertices_mk5t6s$_0.get_za3lpa$(Settings_getInstance().maxPolygonVertices);
        for (var i = 0; i < vertexCount; i++) {
          Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(xf, poly.m_vertices[i], vertices[i]);
        }

        if (wireframe) {
          ensureNotNull(this.m_debugDraw_sygame$_0).drawPolygon_om3j2w$(vertices, vertexCount, color);
        } else {
          ensureNotNull(this.m_debugDraw_sygame$_0).drawSolidPolygon_om3j2w$(vertices, vertexCount, color);
        }

        break;
      case 'EDGE':
        var edge = (tmp$_1 = fixture.getShape()) == null || Kotlin.isType(tmp$_1, EdgeShape) ? tmp$_1 : throwCCE();
        Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(xf, ensureNotNull(edge).m_vertex1, this.v1_gy5hru$_0);
        Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(xf, edge.m_vertex2, this.v2_gy5hsp$_0);
        ensureNotNull(this.m_debugDraw_sygame$_0).drawSegment_j9j37o$(this.v1_gy5hru$_0, this.v2_gy5hsp$_0, color);
        break;
      case 'CHAIN':
        var chain = (tmp$_2 = fixture.getShape()) == null || Kotlin.isType(tmp$_2, ChainShape) ? tmp$_2 : throwCCE();
        var count = ensureNotNull(chain).m_count;
        var vertices_0 = chain.m_vertices;
        Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(xf, ensureNotNull(vertices_0)[0], this.v1_gy5hru$_0);
        for (var i_0 = 1; i_0 < count; i_0++) {
          Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(xf, vertices_0[i_0], this.v2_gy5hsp$_0);
          ensureNotNull(this.m_debugDraw_sygame$_0).drawSegment_j9j37o$(this.v1_gy5hru$_0, this.v2_gy5hsp$_0, color);
          ensureNotNull(this.m_debugDraw_sygame$_0).drawCircle_xu6chv$(this.v1_gy5hru$_0, 0.05, color);
          this.v1_gy5hru$_0.set_z1lo5s$(this.v2_gy5hsp$_0);
        }

        break;
      default:break;
    }
  };
  World.prototype.drawParticleSystem_d5aw8o$_0 = function (system) {
    var wireframe = (ensureNotNull(this.m_debugDraw_sygame$_0).flags & DebugDraw$Companion_getInstance().e_wireframeDrawingBit) !== 0;
    var particleCount = system.particleCount;
    if (particleCount !== 0) {
      var particleRadius = system.particleRadius;
      var positionBuffer = system.particlePositionBuffer;
      var colorBuffer = null;
      if (system.m_colorBuffer.data != null) {
        colorBuffer = system.particleColorBuffer;
      }if (wireframe) {
        ensureNotNull(this.m_debugDraw_sygame$_0).drawParticlesWireframe_jxz4ut$(ensureNotNull(positionBuffer), particleRadius, ensureNotNull(colorBuffer), particleCount);
      } else {
        ensureNotNull(this.m_debugDraw_sygame$_0).drawParticles_jxz4ut$(ensureNotNull(positionBuffer), particleRadius, ensureNotNull(colorBuffer), particleCount);
      }
    }};
  World.prototype.createParticle_st4r7s$ = function (def) {
    if (!(this.isLocked === false)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (this.isLocked) {
      return 0;
    }var p = this.m_particleSystem_m9xxte$_0.createParticle_st4r7s$(def);
    return p;
  };
  World.prototype.destroyParticle_fzusl$ = function (index, callDestructionListener) {
    if (callDestructionListener === void 0)
      callDestructionListener = false;
    this.m_particleSystem_m9xxte$_0.destroyParticle_fzusl$(index, callDestructionListener);
  };
  World.prototype.destroyParticlesInShape_eznsef$ = function (shape, xf, callDestructionListener) {
    if (callDestructionListener === void 0)
      callDestructionListener = false;
    var tmp$;
    if (!(this.isLocked === false)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (this.isLocked) {
      tmp$ = 0;
    } else
      tmp$ = this.m_particleSystem_m9xxte$_0.destroyParticlesInShape_eznsef$(shape, xf, callDestructionListener);
    return tmp$;
  };
  World.prototype.createParticleGroup_l07xel$ = function (def) {
    if (!(this.isLocked === false)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (this.isLocked) {
      return null;
    }var g = this.m_particleSystem_m9xxte$_0.createParticleGroup_l07xel$(def);
    return g;
  };
  World.prototype.joinParticleGroups_wbolyg$ = function (groupA, groupB) {
    if (!(this.isLocked === false)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (this.isLocked) {
      return;
    }this.m_particleSystem_m9xxte$_0.joinParticleGroups_wbolyg$(groupA, groupB);
  };
  World.prototype.destroyParticlesInGroup_3icku3$ = function (group, callDestructionListener) {
    if (callDestructionListener === void 0)
      callDestructionListener = false;
    if (!(this.isLocked === false)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (this.isLocked) {
      return;
    }this.m_particleSystem_m9xxte$_0.destroyParticlesInGroup_3icku3$(group, callDestructionListener);
  };
  World.prototype.setParticleFlagsBuffer_u4kcgn$ = function (buffer, capacity) {
    this.m_particleSystem_m9xxte$_0.setParticleFlagsBuffer_u4kcgn$(buffer, capacity);
  };
  World.prototype.setParticlePositionBuffer_g8u1io$ = function (buffer, capacity) {
    this.m_particleSystem_m9xxte$_0.setParticlePositionBuffer_g8u1io$(buffer, capacity);
  };
  World.prototype.setParticleVelocityBuffer_g8u1io$ = function (buffer, capacity) {
    this.m_particleSystem_m9xxte$_0.setParticleVelocityBuffer_g8u1io$(buffer, capacity);
  };
  World.prototype.setParticleColorBuffer_8l94fu$ = function (buffer, capacity) {
    this.m_particleSystem_m9xxte$_0.setParticleColorBuffer_8l94fu$(buffer, capacity);
  };
  World.prototype.setParticleUserDataBuffer_8sn6zj$ = function (buffer, capacity) {
    this.m_particleSystem_m9xxte$_0.setParticleUserDataBuffer_8sn6zj$(buffer, capacity);
  };
  World.prototype.computeParticleCollisionEnergy = function () {
    return this.m_particleSystem_m9xxte$_0.computeParticleCollisionEnergy();
  };
  function World$Companion() {
    World$Companion_instance = this;
    this.WORLD_POOL_SIZE = 100;
    this.WORLD_POOL_CONTAINER_SIZE = 10;
    this.NEW_FIXTURE = 1;
    this.LOCKED = 2;
    this.CLEAR_FORCES = 4;
    this.LIQUID_INT_0 = 1234598372;
  }
  World$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var World$Companion_instance = null;
  function World$Companion_getInstance() {
    if (World$Companion_instance === null) {
      new World$Companion();
    }return World$Companion_instance;
  }
  World.prototype.contains_d2xgsj$ = function (key) {
    return this.$delegate_vqcmev$_0.contains_d2xgsj$(key);
  };
  World.prototype.get_d2xgsj$ = function (key) {
    return this.$delegate_vqcmev$_0.get_d2xgsj$(key);
  };
  World.prototype.set_kj97s6$ = function (key, value) {
    return this.$delegate_vqcmev$_0.set_kj97s6$(key, value);
  };
  World.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'World',
    interfaces: [Box2dTypedUserData, WorldRef]
  };
  function World_init(gravity, pool, strategy, $this) {
    if (pool === void 0)
      pool = new DefaultWorldPool(World$Companion_getInstance().WORLD_POOL_SIZE, World$Companion_getInstance().WORLD_POOL_CONTAINER_SIZE);
    if (strategy === void 0)
      strategy = new DynamicTree();
    $this = $this || Object.create(World.prototype);
    World.call($this, gravity, pool, new DefaultBroadPhaseBuffer(strategy));
    return $this;
  }
  function WorldQueryWrapper() {
    this.broadPhase = null;
    this.callback = null;
  }
  WorldQueryWrapper.prototype.treeCallback_za3lpa$ = function (nodeId) {
    var tmp$;
    var proxy = (tmp$ = ensureNotNull(this.broadPhase).getUserData_za3lpa$(nodeId)) == null || Kotlin.isType(tmp$, FixtureProxy) ? tmp$ : throwCCE();
    return ensureNotNull(this.callback).reportFixture_9p97b4$(ensureNotNull(ensureNotNull(proxy).fixture_8be2vx$));
  };
  WorldQueryWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WorldQueryWrapper',
    interfaces: [TreeCallback]
  };
  function WorldRayCastWrapper() {
    this.output_0 = new RayCastOutput();
    this.temp_0 = new Vec2();
    this.point_0 = new Vec2();
    this.broadPhase = null;
    this.callback = null;
  }
  WorldRayCastWrapper.prototype.raycastCallback_5zkam8$ = function (input, nodeId) {
    var tmp$;
    var userData = ensureNotNull(this.broadPhase).getUserData_za3lpa$(nodeId);
    var proxy = (tmp$ = userData) == null || Kotlin.isType(tmp$, FixtureProxy) ? tmp$ : throwCCE();
    var fixture = ensureNotNull(proxy).fixture_8be2vx$;
    var index = proxy.childIndex_8be2vx$;
    var hit = ensureNotNull(fixture).raycast_rawvn5$(this.output_0, input, index);
    if (hit) {
      var fraction = this.output_0.fraction;
      this.temp_0.set_z1lo5s$(input.p2).mulLocal_mx4ult$(fraction);
      this.point_0.set_z1lo5s$(input.p1).mulLocal_mx4ult$(1 - fraction).addLocal_z1lo5s$(this.temp_0);
      return ensureNotNull(this.callback).reportFixture_dt0rr9$(fixture, this.point_0, this.output_0.normal, fraction);
    }return input.maxFraction;
  };
  WorldRayCastWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WorldRayCastWrapper',
    interfaces: [TreeRayCastCallback]
  };
  function WorldRef() {
  }
  WorldRef.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WorldRef',
    interfaces: []
  };
  var forEachBody = defineInlineFunction('kbox2d-root-kbox2d.org.jbox2d.dynamics.forEachBody_5y2dax$', function ($receiver, callback) {
    var node = $receiver.world.bodyList;
    while (node != null) {
      callback(node);
      node = node.m_next;
    }
  });
  var forEachJoint = defineInlineFunction('kbox2d-root-kbox2d.org.jbox2d.dynamics.forEachJoint_5lmoxw$', function ($receiver, callback) {
    var node = $receiver.world.jointList;
    while (node != null) {
      callback(node);
      node = node.m_next;
    }
  });
  function ChainAndCircleContact(argPool) {
    Contact.call(this, argPool);
    this.edge_0 = new EdgeShape();
  }
  ChainAndCircleContact.prototype.init_smbpn8$ = function (fA, indexA, fB, indexB) {
    Contact.prototype.init_smbpn8$.call(this, fA, indexA, fB, indexB);
    if (!(ensureNotNull(this.m_fixtureA).type === ShapeType$CHAIN_getInstance())) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(ensureNotNull(this.m_fixtureB).type === ShapeType$CIRCLE_getInstance())) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }};
  ChainAndCircleContact.prototype.evaluate_1cez3t$ = function (manifold, xfA, xfB) {
    var tmp$, tmp$_0;
    var chain = Kotlin.isType(tmp$ = ensureNotNull(this.m_fixtureA).m_shape, ChainShape) ? tmp$ : throwCCE();
    chain.getChildEdge_vrnuyh$(this.edge_0, this.m_indexA);
    this.pool.collision.collideEdgeAndCircle_eglyfs$(manifold, this.edge_0, xfA, Kotlin.isType(tmp$_0 = ensureNotNull(this.m_fixtureB).m_shape, CircleShape) ? tmp$_0 : throwCCE(), xfB);
  };
  ChainAndCircleContact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChainAndCircleContact',
    interfaces: [Contact]
  };
  function ChainAndPolygonContact(argPool) {
    Contact.call(this, argPool);
    this.edge_0 = new EdgeShape();
  }
  ChainAndPolygonContact.prototype.init_smbpn8$ = function (fA, indexA, fB, indexB) {
    Contact.prototype.init_smbpn8$.call(this, fA, indexA, fB, indexB);
    if (!(ensureNotNull(this.m_fixtureA).type === ShapeType$CHAIN_getInstance())) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(ensureNotNull(this.m_fixtureB).type === ShapeType$POLYGON_getInstance())) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }};
  ChainAndPolygonContact.prototype.evaluate_1cez3t$ = function (manifold, xfA, xfB) {
    var tmp$, tmp$_0;
    var chain = Kotlin.isType(tmp$ = ensureNotNull(this.m_fixtureA).m_shape, ChainShape) ? tmp$ : throwCCE();
    chain.getChildEdge_vrnuyh$(this.edge_0, this.m_indexA);
    this.pool.collision.collideEdgeAndPolygon_h52eos$(manifold, this.edge_0, xfA, Kotlin.isType(tmp$_0 = ensureNotNull(this.m_fixtureB).m_shape, PolygonShape) ? tmp$_0 : throwCCE(), xfB);
  };
  ChainAndPolygonContact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChainAndPolygonContact',
    interfaces: [Contact]
  };
  function CircleContact(argPool) {
    Contact.call(this, argPool);
  }
  CircleContact.prototype.init_tw86jw$ = function (fixtureA, fixtureB) {
    Contact.prototype.init_smbpn8$.call(this, fixtureA, 0, fixtureB, 0);
    if (!(ensureNotNull(this.m_fixtureA).type === ShapeType$CIRCLE_getInstance())) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(ensureNotNull(this.m_fixtureB).type === ShapeType$CIRCLE_getInstance())) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }};
  CircleContact.prototype.evaluate_1cez3t$ = function (manifold, xfA, xfB) {
    var tmp$, tmp$_0;
    this.pool.collision.collideCircles_xmpyqj$(manifold, Kotlin.isType(tmp$ = ensureNotNull(this.m_fixtureA).m_shape, CircleShape) ? tmp$ : throwCCE(), xfA, Kotlin.isType(tmp$_0 = ensureNotNull(this.m_fixtureB).m_shape, CircleShape) ? tmp$_0 : throwCCE(), xfB);
  };
  CircleContact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CircleContact',
    interfaces: [Contact]
  };
  function Contact(pool) {
    Contact$Companion_getInstance();
    this.pool = pool;
    this.m_flags = 0;
    this.m_prev = null;
    this.m_next = null;
    this.m_nodeA = new ContactEdge();
    this.m_nodeB = new ContactEdge();
    this.m_fixtureA = null;
    this.m_fixtureB = null;
    this.m_indexA = 0;
    this.m_indexB = 0;
    this.m_manifold = Manifold_init();
    this.m_toiCount = 0;
    this.m_toi = 0;
    this.m_friction = 0;
    this.m_restitution = 0;
    this.m_tangentSpeed = 0;
    this.oldManifold_gsvd37$_0 = Manifold_init();
  }
  Contact.prototype.getPrev = function () {
    return this.m_prev;
  };
  Contact.prototype.getNext = function () {
    return this.m_next;
  };
  Contact.prototype.getFixtureA = function () {
    return this.m_fixtureA;
  };
  Contact.prototype.getFixtureB = function () {
    return this.m_fixtureB;
  };
  Contact.prototype.getChildIndexA = function () {
    return this.m_indexA;
  };
  Contact.prototype.getChildIndexB = function () {
    return this.m_indexB;
  };
  Contact.prototype.getManifold = function () {
    return this.m_manifold;
  };
  Object.defineProperty(Contact.prototype, 'isTouching', {
    get: function () {
      return (this.m_flags & Contact$Companion_getInstance().TOUCHING_FLAG) === Contact$Companion_getInstance().TOUCHING_FLAG;
    }
  });
  Object.defineProperty(Contact.prototype, 'isEnabled', {
    get: function () {
      return (this.m_flags & Contact$Companion_getInstance().ENABLED_FLAG) === Contact$Companion_getInstance().ENABLED_FLAG;
    },
    set: function (flag) {
      if (flag) {
        this.m_flags = this.m_flags | Contact$Companion_getInstance().ENABLED_FLAG;
      } else {
        this.m_flags = this.m_flags & ~Contact$Companion_getInstance().ENABLED_FLAG;
      }
    }
  });
  Contact.prototype.init_smbpn8$ = function (fA, indexA, fB, indexB) {
    this.m_flags = Contact$Companion_getInstance().ENABLED_FLAG;
    this.m_fixtureA = fA;
    this.m_fixtureB = fB;
    this.m_indexA = indexA;
    this.m_indexB = indexB;
    this.m_manifold.pointCount = 0;
    this.m_prev = null;
    this.m_next = null;
    ensureNotNull(this.m_nodeA).contact = null;
    ensureNotNull(this.m_nodeA).prev = null;
    ensureNotNull(this.m_nodeA).next = null;
    ensureNotNull(this.m_nodeA).other = null;
    ensureNotNull(this.m_nodeB).contact = null;
    ensureNotNull(this.m_nodeB).prev = null;
    ensureNotNull(this.m_nodeB).next = null;
    ensureNotNull(this.m_nodeB).other = null;
    this.m_toiCount = 0.0;
    this.m_friction = Contact$Companion_getInstance().mixFriction_dleff0$(fA.m_friction, fB.m_friction);
    this.m_restitution = Contact$Companion_getInstance().mixRestitution_dleff0$(fA.m_restitution, fB.m_restitution);
    this.m_tangentSpeed = 0.0;
  };
  Contact.prototype.getWorldManifold_j10qxh$ = function (worldManifold) {
    var bodyA = ensureNotNull(this.m_fixtureA).m_body;
    var bodyB = ensureNotNull(this.m_fixtureB).m_body;
    var shapeA = ensureNotNull(this.m_fixtureA).m_shape;
    var shapeB = ensureNotNull(this.m_fixtureB).m_shape;
    worldManifold.initialize_2vqwsd$(this.m_manifold, ensureNotNull(bodyA).m_xf, ensureNotNull(shapeA).m_radius, ensureNotNull(bodyB).m_xf, ensureNotNull(shapeB).m_radius);
  };
  Contact.prototype.resetFriction = function () {
    this.m_friction = Contact$Companion_getInstance().mixFriction_dleff0$(ensureNotNull(this.m_fixtureA).m_friction, ensureNotNull(this.m_fixtureB).m_friction);
  };
  Contact.prototype.resetRestitution = function () {
    this.m_restitution = Contact$Companion_getInstance().mixRestitution_dleff0$(ensureNotNull(this.m_fixtureA).m_restitution, ensureNotNull(this.m_fixtureB).m_restitution);
  };
  Contact.prototype.flagForFiltering = function () {
    this.m_flags = this.m_flags | Contact$Companion_getInstance().FILTER_FLAG;
  };
  Contact.prototype.update_ge5gqk$ = function (listener) {
    var tmp$, tmp$_0;
    this.oldManifold_gsvd37$_0.set_6hrjtp$(this.m_manifold);
    this.m_flags = this.m_flags | Contact$Companion_getInstance().ENABLED_FLAG;
    var touching = false;
    var wasTouching = (this.m_flags & Contact$Companion_getInstance().TOUCHING_FLAG) === Contact$Companion_getInstance().TOUCHING_FLAG;
    var sensorA = ensureNotNull(this.m_fixtureA).isSensor;
    var sensorB = ensureNotNull(this.m_fixtureB).isSensor;
    var sensor = sensorA || sensorB;
    var bodyA = ensureNotNull(ensureNotNull(this.m_fixtureA).m_body);
    var bodyB = ensureNotNull(ensureNotNull(this.m_fixtureB).m_body);
    var xfA = bodyA.m_xf;
    var xfB = bodyB.m_xf;
    if (sensor) {
      var shapeA = ensureNotNull(ensureNotNull(this.m_fixtureA).m_shape);
      var shapeB = ensureNotNull(ensureNotNull(this.m_fixtureB).m_shape);
      touching = this.pool.collision.testOverlap_uy2p54$(shapeA, this.m_indexA, shapeB, this.m_indexB, xfA, xfB);
      this.m_manifold.pointCount = 0;
    } else {
      this.evaluate_1cez3t$(this.m_manifold, xfA, xfB);
      touching = this.m_manifold.pointCount > 0;
      tmp$ = this.m_manifold.pointCount;
      for (var i = 0; i < tmp$; i++) {
        var mp2 = this.m_manifold.points[i];
        mp2.normalImpulse = 0.0;
        mp2.tangentImpulse = 0.0;
        var id2 = mp2.id;
        tmp$_0 = this.oldManifold_gsvd37$_0.pointCount;
        for (var j = 0; j < tmp$_0; j++) {
          var mp1 = this.oldManifold_gsvd37$_0.points[j];
          if (mp1.id.isEqual_ejcfhu$(id2)) {
            mp2.normalImpulse = mp1.normalImpulse;
            mp2.tangentImpulse = mp1.tangentImpulse;
            break;
          }}
      }
      if (touching !== wasTouching) {
        ensureNotNull(bodyA).isAwake = true;
        ensureNotNull(bodyB).isAwake = true;
      }}
    if (touching) {
      this.m_flags = this.m_flags | Contact$Companion_getInstance().TOUCHING_FLAG;
    } else {
      this.m_flags = this.m_flags & ~Contact$Companion_getInstance().TOUCHING_FLAG;
    }
    if (listener == null) {
      return;
    }if (wasTouching === false && touching === true) {
      listener.beginContact_6p61aq$(this);
    }if (wasTouching === true && touching === false) {
      listener.endContact_6p61aq$(this);
    }if (sensor === false && touching) {
      listener.preSolve_xnnspt$(this, this.oldManifold_gsvd37$_0);
    }};
  function Contact$Companion() {
    Contact$Companion_instance = this;
    this.ISLAND_FLAG = 1;
    this.TOUCHING_FLAG = 2;
    this.ENABLED_FLAG = 4;
    this.FILTER_FLAG = 8;
    this.BULLET_HIT_FLAG = 16;
    this.TOI_FLAG = 32;
  }
  Contact$Companion.prototype.mixFriction_dleff0$ = function (friction1, friction2) {
    return MathUtils$Companion_getInstance().sqrt_mx4ult$(friction1 * friction2);
  };
  Contact$Companion.prototype.mixRestitution_dleff0$ = function (restitution1, restitution2) {
    return restitution1 > restitution2 ? restitution1 : restitution2;
  };
  Contact$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Contact$Companion_instance = null;
  function Contact$Companion_getInstance() {
    if (Contact$Companion_instance === null) {
      new Contact$Companion();
    }return Contact$Companion_instance;
  }
  Contact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Contact',
    interfaces: []
  };
  function ContactCreator() {
  }
  ContactCreator.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ContactCreator',
    interfaces: []
  };
  function ContactEdge() {
    this.other = null;
    this.contact = null;
    this.prev = null;
    this.next = null;
  }
  ContactEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactEdge',
    interfaces: []
  };
  function ContactPositionConstraint() {
    var array = Array_0(Settings_getInstance().maxManifoldPoints);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Vec2();
    }
    this.localPoints_8be2vx$ = array;
    this.localNormal_8be2vx$ = new Vec2();
    this.localPoint_8be2vx$ = new Vec2();
    this.indexA_8be2vx$ = 0;
    this.indexB_8be2vx$ = 0;
    this.invMassA_8be2vx$ = 0;
    this.invMassB_8be2vx$ = 0;
    this.localCenterA_8be2vx$ = new Vec2();
    this.localCenterB_8be2vx$ = new Vec2();
    this.invIA_8be2vx$ = 0;
    this.invIB_8be2vx$ = 0;
    this.type_8be2vx$ = null;
    this.radiusA_8be2vx$ = 0;
    this.radiusB_8be2vx$ = 0;
    this.pointCount_8be2vx$ = 0;
  }
  ContactPositionConstraint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactPositionConstraint',
    interfaces: []
  };
  function ContactRegister() {
    this.creator = null;
    this.primary = false;
  }
  ContactRegister.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactRegister',
    interfaces: []
  };
  var arraycopy$lambda_7 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function ContactSolver() {
    ContactSolver$Companion_getInstance();
    this.m_step = null;
    this.m_positions = null;
    this.m_velocities = null;
    var array = Array_0(ContactSolver$Companion_getInstance().INITIAL_NUM_CONSTRAINTS);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new ContactPositionConstraint();
    }
    this.m_positionConstraints = array;
    var array_0 = Array_0(ContactSolver$Companion_getInstance().INITIAL_NUM_CONSTRAINTS);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = new ContactVelocityConstraint();
    }
    this.m_velocityConstraints = array_0;
    this.m_contacts = null;
    this.m_count = 0;
    this.xfA_0 = Transform_init();
    this.xfB_0 = Transform_init();
    this.worldManifold_0 = new WorldManifold();
    this.psolver_0 = new PositionSolverManifold();
    this.vA_0 = null;
    this.vB_0 = null;
    this.wA_0 = 0;
    this.wB_0 = 0;
  }
  ContactSolver.prototype.init_8xgpz3$ = function (def) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    this.m_step = def.step;
    this.m_count = def.count;
    if (this.m_positionConstraints.length < this.m_count) {
      var old = this.m_positionConstraints;
      this.m_positionConstraints = Kotlin.isArray(tmp$ = Kotlin.newArray(MathUtils$Companion_getInstance().max_vux9f0$(old.length * 2 | 0, this.m_count), null)) ? tmp$ : throwCCE();
      arrayCopy(old, this.m_positionConstraints, 0, 0, 0 + old.length | 0);
      tmp$_0 = this.m_positionConstraints.length;
      for (var i = old.length; i < tmp$_0; i++) {
        this.m_positionConstraints[i] = new ContactPositionConstraint();
      }
    }if (this.m_velocityConstraints.length < this.m_count) {
      var old_0 = this.m_velocityConstraints;
      this.m_velocityConstraints = Kotlin.isArray(tmp$_1 = Kotlin.newArray(MathUtils$Companion_getInstance().max_vux9f0$(old_0.length * 2 | 0, this.m_count), null)) ? tmp$_1 : throwCCE();
      arrayCopy(old_0, this.m_velocityConstraints, 0, 0, 0 + old_0.length | 0);
      tmp$_2 = this.m_velocityConstraints.length;
      for (var i_0 = old_0.length; i_0 < tmp$_2; i_0++) {
        this.m_velocityConstraints[i_0] = new ContactVelocityConstraint();
      }
    }this.m_positions = def.positions;
    this.m_velocities = def.velocities;
    this.m_contacts = def.contacts;
    tmp$_3 = this.m_count;
    for (var i_1 = 0; i_1 < tmp$_3; i_1++) {
      var contact = ensureNotNull(this.m_contacts)[i_1];
      var fixtureA = contact.m_fixtureA;
      var fixtureB = contact.m_fixtureB;
      var shapeA = ensureNotNull(fixtureA).getShape();
      var shapeB = ensureNotNull(fixtureB).getShape();
      var radiusA = ensureNotNull(shapeA).m_radius;
      var radiusB = ensureNotNull(shapeB).m_radius;
      var bodyA = fixtureA.getBody();
      var bodyB = fixtureB.getBody();
      var manifold = contact.getManifold();
      var pointCount = manifold.pointCount;
      var vc = this.m_velocityConstraints[i_1];
      vc.friction = contact.m_friction;
      vc.restitution = contact.m_restitution;
      vc.tangentSpeed = contact.m_tangentSpeed;
      vc.indexA = ensureNotNull(bodyA).m_islandIndex;
      vc.indexB = ensureNotNull(bodyB).m_islandIndex;
      vc.invMassA = bodyA.m_invMass;
      vc.invMassB = bodyB.m_invMass;
      vc.invIA = bodyA.m_invI;
      vc.invIB = bodyB.m_invI;
      vc.contactIndex = i_1;
      vc.pointCount = pointCount;
      vc.K.setZero();
      vc.normalMass.setZero();
      var pc = this.m_positionConstraints[i_1];
      pc.indexA_8be2vx$ = bodyA.m_islandIndex;
      pc.indexB_8be2vx$ = bodyB.m_islandIndex;
      pc.invMassA_8be2vx$ = bodyA.m_invMass;
      pc.invMassB_8be2vx$ = bodyB.m_invMass;
      pc.localCenterA_8be2vx$.set_z1lo5s$(bodyA.m_sweep.localCenter);
      pc.localCenterB_8be2vx$.set_z1lo5s$(bodyB.m_sweep.localCenter);
      pc.invIA_8be2vx$ = bodyA.m_invI;
      pc.invIB_8be2vx$ = bodyB.m_invI;
      pc.localNormal_8be2vx$.set_z1lo5s$(manifold.localNormal);
      pc.localPoint_8be2vx$.set_z1lo5s$(manifold.localPoint);
      pc.pointCount_8be2vx$ = pointCount;
      pc.radiusA_8be2vx$ = radiusA;
      pc.radiusB_8be2vx$ = radiusB;
      pc.type_8be2vx$ = manifold.type;
      for (var j = 0; j < pointCount; j++) {
        var cp = manifold.points[j];
        var vcp = vc.points[j];
        if (ensureNotNull(this.m_step).warmStarting) {
          vcp.normalImpulse = ensureNotNull(this.m_step).dtRatio * cp.normalImpulse;
          vcp.tangentImpulse = ensureNotNull(this.m_step).dtRatio * cp.tangentImpulse;
        } else {
          vcp.normalImpulse = 0.0;
          vcp.tangentImpulse = 0.0;
        }
        vcp.rA.setZero();
        vcp.rB.setZero();
        vcp.normalMass = 0.0;
        vcp.tangentMass = 0.0;
        vcp.velocityBias = 0.0;
        pc.localPoints_8be2vx$[j].x = cp.localPoint.x;
        pc.localPoints_8be2vx$[j].y = cp.localPoint.y;
      }
    }
  };
  ContactSolver.prototype.warmStart = function () {
    var tmp$;
    tmp$ = this.m_count;
    for (var i = 0; i < tmp$; i++) {
      var vc = this.m_velocityConstraints[i];
      var indexA = vc.indexA;
      var indexB = vc.indexB;
      var mA = vc.invMassA;
      var iA = vc.invIA;
      var mB = vc.invMassB;
      var iB = vc.invIB;
      var pointCount = vc.pointCount;
      var vA = ensureNotNull(this.m_velocities)[indexA].v;
      var wA = ensureNotNull(this.m_velocities)[indexA].w;
      var vB = ensureNotNull(this.m_velocities)[indexB].v;
      var wB = ensureNotNull(this.m_velocities)[indexB].w;
      var normal = vc.normal;
      var tangentx = 1.0 * normal.y;
      var tangenty = -1.0 * normal.x;
      for (var j = 0; j < pointCount; j++) {
        var vcp = vc.points[j];
        var Px = tangentx * vcp.tangentImpulse + normal.x * vcp.normalImpulse;
        var Py = tangenty * vcp.tangentImpulse + normal.y * vcp.normalImpulse;
        wA -= iA * (vcp.rA.x * Py - vcp.rA.y * Px);
        vA.x = vA.x - Px * mA;
        vA.y = vA.y - Py * mA;
        wB += iB * (vcp.rB.x * Py - vcp.rB.y * Px);
        vB.x = vB.x + Px * mB;
        vB.y = vB.y + Py * mB;
      }
      ensureNotNull(this.m_velocities)[indexA].w = wA;
      ensureNotNull(this.m_velocities)[indexB].w = wB;
    }
  };
  ContactSolver.prototype.initializeVelocityConstraints = function () {
    var tmp$;
    tmp$ = this.m_count;
    for (var i = 0; i < tmp$; i++) {
      var vc = this.m_velocityConstraints[i];
      var pc = this.m_positionConstraints[i];
      var radiusA = pc.radiusA_8be2vx$;
      var radiusB = pc.radiusB_8be2vx$;
      var manifold = ensureNotNull(this.m_contacts)[vc.contactIndex].getManifold();
      var indexA = vc.indexA;
      var indexB = vc.indexB;
      var mA = vc.invMassA;
      var mB = vc.invMassB;
      var iA = vc.invIA;
      var iB = vc.invIB;
      var localCenterA = pc.localCenterA_8be2vx$;
      var localCenterB = pc.localCenterB_8be2vx$;
      var cA = ensureNotNull(this.m_positions)[indexA].c;
      var aA = ensureNotNull(this.m_positions)[indexA].a;
      var vA = ensureNotNull(this.m_velocities)[indexA].v;
      var wA = ensureNotNull(this.m_velocities)[indexA].w;
      var cB = ensureNotNull(this.m_positions)[indexB].c;
      var aB = ensureNotNull(this.m_positions)[indexB].a;
      var vB = ensureNotNull(this.m_velocities)[indexB].v;
      var wB = ensureNotNull(this.m_velocities)[indexB].w;
      var xfAq = this.xfA_0.q;
      var xfBq = this.xfB_0.q;
      xfAq.set_mx4ult$(aA);
      xfBq.set_mx4ult$(aB);
      this.xfA_0.p.x = cA.x - (xfAq.c * localCenterA.x - xfAq.s * localCenterA.y);
      this.xfA_0.p.y = cA.y - (xfAq.s * localCenterA.x + xfAq.c * localCenterA.y);
      this.xfB_0.p.x = cB.x - (xfBq.c * localCenterB.x - xfBq.s * localCenterB.y);
      this.xfB_0.p.y = cB.y - (xfBq.s * localCenterB.x + xfBq.c * localCenterB.y);
      this.worldManifold_0.initialize_2vqwsd$(manifold, this.xfA_0, radiusA, this.xfB_0, radiusB);
      var vcnormal = vc.normal;
      vcnormal.x = this.worldManifold_0.normal.x;
      vcnormal.y = this.worldManifold_0.normal.y;
      var pointCount = vc.pointCount;
      for (var j = 0; j < pointCount; j++) {
        var vcp = vc.points[j];
        var wmPj = this.worldManifold_0.points[j];
        var vcprA = vcp.rA;
        var vcprB = vcp.rB;
        vcprA.x = wmPj.x - cA.x;
        vcprA.y = wmPj.y - cA.y;
        vcprB.x = wmPj.x - cB.x;
        vcprB.y = wmPj.y - cB.y;
        var rnA = vcprA.x * vcnormal.y - vcprA.y * vcnormal.x;
        var rnB = vcprB.x * vcnormal.y - vcprB.y * vcnormal.x;
        var kNormal = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
        vcp.normalMass = kNormal > 0.0 ? 1.0 / kNormal : 0.0;
        var tangentx = 1.0 * vcnormal.y;
        var tangenty = -1.0 * vcnormal.x;
        var rtA = vcprA.x * tangenty - vcprA.y * tangentx;
        var rtB = vcprB.x * tangenty - vcprB.y * tangentx;
        var kTangent = mA + mB + iA * rtA * rtA + iB * rtB * rtB;
        vcp.tangentMass = kTangent > 0.0 ? 1.0 / kTangent : 0.0;
        vcp.velocityBias = 0.0;
        var tempx = vB.x + -wB * vcprB.y - vA.x - -wA * vcprA.y;
        var tempy = vB.y + wB * vcprB.x - vA.y - wA * vcprA.x;
        var vRel = vcnormal.x * tempx + vcnormal.y * tempy;
        if (vRel < -Settings_getInstance().velocityThreshold) {
          vcp.velocityBias = -vc.restitution * vRel;
        }}
      if (vc.pointCount === 2) {
        var vcp1 = vc.points[0];
        var vcp2 = vc.points[1];
        var rn1A = vcp1.rA.x * vcnormal.y - vcp1.rA.y * vcnormal.x;
        var rn1B = vcp1.rB.x * vcnormal.y - vcp1.rB.y * vcnormal.x;
        var rn2A = vcp2.rA.x * vcnormal.y - vcp2.rA.y * vcnormal.x;
        var rn2B = vcp2.rB.x * vcnormal.y - vcp2.rB.y * vcnormal.x;
        var k11 = mA + mB + iA * rn1A * rn1A + iB * rn1B * rn1B;
        var k22 = mA + mB + iA * rn2A * rn2A + iB * rn2B * rn2B;
        var k12 = mA + mB + iA * rn1A * rn2A + iB * rn1B * rn2B;
        if (k11 * k11 < ContactSolver$Companion_getInstance().k_maxConditionNumber * (k11 * k22 - k12 * k12)) {
          vc.K.ex.x = k11;
          vc.K.ex.y = k12;
          vc.K.ey.x = k12;
          vc.K.ey.y = k22;
          vc.K.invertToOut_krympa$(vc.normalMass);
        } else {
          vc.pointCount = 1;
        }
      }}
  };
  ContactSolver.prototype.storeImpulses = function () {
    var tmp$, tmp$_0;
    tmp$ = this.m_count;
    for (var i = 0; i < tmp$; i++) {
      var vc = this.m_velocityConstraints[i];
      var manifold = ensureNotNull(this.m_contacts)[vc.contactIndex].getManifold();
      tmp$_0 = vc.pointCount;
      for (var j = 0; j < tmp$_0; j++) {
        manifold.points[j].normalImpulse = vc.points[j].normalImpulse;
        manifold.points[j].tangentImpulse = vc.points[j].tangentImpulse;
      }
    }
  };
  ContactSolver.prototype.solvePositionConstraints = function () {
    var tmp$;
    var minSeparation = 0.0;
    tmp$ = this.m_count;
    for (var i = 0; i < tmp$; i++) {
      var pc = this.m_positionConstraints[i];
      var indexA = pc.indexA_8be2vx$;
      var indexB = pc.indexB_8be2vx$;
      var mA = pc.invMassA_8be2vx$;
      var iA = pc.invIA_8be2vx$;
      var localCenterA = pc.localCenterA_8be2vx$;
      var localCenterAx = localCenterA.x;
      var localCenterAy = localCenterA.y;
      var mB = pc.invMassB_8be2vx$;
      var iB = pc.invIB_8be2vx$;
      var localCenterB = pc.localCenterB_8be2vx$;
      var localCenterBx = localCenterB.x;
      var localCenterBy = localCenterB.y;
      var pointCount = pc.pointCount_8be2vx$;
      var cA = ensureNotNull(this.m_positions)[indexA].c;
      var aA = ensureNotNull(this.m_positions)[indexA].a;
      var cB = ensureNotNull(this.m_positions)[indexB].c;
      var aB = ensureNotNull(this.m_positions)[indexB].a;
      for (var j = 0; j < pointCount; j++) {
        var xfAq = this.xfA_0.q;
        var xfBq = this.xfB_0.q;
        xfAq.set_mx4ult$(aA);
        xfBq.set_mx4ult$(aB);
        this.xfA_0.p.x = cA.x - xfAq.c * localCenterAx + xfAq.s * localCenterAy;
        this.xfA_0.p.y = cA.y - xfAq.s * localCenterAx - xfAq.c * localCenterAy;
        this.xfB_0.p.x = cB.x - xfBq.c * localCenterBx + xfBq.s * localCenterBy;
        this.xfB_0.p.y = cB.y - xfBq.s * localCenterBx - xfBq.c * localCenterBy;
        var psm = this.psolver_0;
        psm.initialize_jj0nb6$(pc, this.xfA_0, this.xfB_0, j);
        var normal = psm.normal;
        var point = psm.point;
        var separation = psm.separation;
        var rAx = point.x - cA.x;
        var rAy = point.y - cA.y;
        var rBx = point.x - cB.x;
        var rBy = point.y - cB.y;
        minSeparation = MathUtils$Companion_getInstance().min_dleff0$(minSeparation, separation);
        var C = MathUtils$Companion_getInstance().clamp_y2kzbl$(Settings_getInstance().baumgarte * (separation + Settings_getInstance().linearSlop), -Settings_getInstance().maxLinearCorrection, 0.0);
        var rnA = rAx * normal.y - rAy * normal.x;
        var rnB = rBx * normal.y - rBy * normal.x;
        var K = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
        var impulse = K > 0.0 ? -C / K : 0.0;
        var Px = normal.x * impulse;
        var Py = normal.y * impulse;
        cA.x = cA.x - Px * mA;
        cA.y = cA.y - Py * mA;
        aA -= iA * (rAx * Py - rAy * Px);
        cB.x = cB.x + Px * mB;
        cB.y = cB.y + Py * mB;
        aB += iB * (rBx * Py - rBy * Px);
      }
      ensureNotNull(this.m_positions)[indexA].a = aA;
      ensureNotNull(this.m_positions)[indexB].a = aB;
    }
    return minSeparation >= -3.0 * Settings_getInstance().linearSlop;
  };
  ContactSolver.prototype.solveTOIPositionConstraints_vux9f0$ = function (toiIndexA, toiIndexB) {
    var tmp$;
    var minSeparation = 0.0;
    tmp$ = this.m_count;
    for (var i = 0; i < tmp$; i++) {
      var pc = this.m_positionConstraints[i];
      var indexA = pc.indexA_8be2vx$;
      var indexB = pc.indexB_8be2vx$;
      var localCenterA = pc.localCenterA_8be2vx$;
      var localCenterB = pc.localCenterB_8be2vx$;
      var localCenterAx = localCenterA.x;
      var localCenterAy = localCenterA.y;
      var localCenterBx = localCenterB.x;
      var localCenterBy = localCenterB.y;
      var pointCount = pc.pointCount_8be2vx$;
      var mA = 0.0;
      var iA = 0.0;
      if (indexA === toiIndexA || indexA === toiIndexB) {
        mA = pc.invMassA_8be2vx$;
        iA = pc.invIA_8be2vx$;
      }var mB = 0.0;
      var iB = 0.0;
      if (indexB === toiIndexA || indexB === toiIndexB) {
        mB = pc.invMassB_8be2vx$;
        iB = pc.invIB_8be2vx$;
      }var cA = ensureNotNull(this.m_positions)[indexA].c;
      var aA = ensureNotNull(this.m_positions)[indexA].a;
      var cB = ensureNotNull(this.m_positions)[indexB].c;
      var aB = ensureNotNull(this.m_positions)[indexB].a;
      for (var j = 0; j < pointCount; j++) {
        var xfAq = this.xfA_0.q;
        var xfBq = this.xfB_0.q;
        xfAq.set_mx4ult$(aA);
        xfBq.set_mx4ult$(aB);
        this.xfA_0.p.x = cA.x - xfAq.c * localCenterAx + xfAq.s * localCenterAy;
        this.xfA_0.p.y = cA.y - xfAq.s * localCenterAx - xfAq.c * localCenterAy;
        this.xfB_0.p.x = cB.x - xfBq.c * localCenterBx + xfBq.s * localCenterBy;
        this.xfB_0.p.y = cB.y - xfBq.s * localCenterBx - xfBq.c * localCenterBy;
        var psm = this.psolver_0;
        psm.initialize_jj0nb6$(pc, this.xfA_0, this.xfB_0, j);
        var normal = psm.normal;
        var point = psm.point;
        var separation = psm.separation;
        var rAx = point.x - cA.x;
        var rAy = point.y - cA.y;
        var rBx = point.x - cB.x;
        var rBy = point.y - cB.y;
        minSeparation = MathUtils$Companion_getInstance().min_dleff0$(minSeparation, separation);
        var C = MathUtils$Companion_getInstance().clamp_y2kzbl$(Settings_getInstance().toiBaugarte * (separation + Settings_getInstance().linearSlop), -Settings_getInstance().maxLinearCorrection, 0.0);
        var rnA = rAx * normal.y - rAy * normal.x;
        var rnB = rBx * normal.y - rBy * normal.x;
        var K = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
        var impulse = K > 0.0 ? -C / K : 0.0;
        var Px = normal.x * impulse;
        var Py = normal.y * impulse;
        cA.x = cA.x - Px * mA;
        cA.y = cA.y - Py * mA;
        aA -= iA * (rAx * Py - rAy * Px);
        cB.x = cB.x + Px * mB;
        cB.y = cB.y + Py * mB;
        aB += iB * (rBx * Py - rBy * Px);
      }
      ensureNotNull(this.m_positions)[indexA].a = aA;
      ensureNotNull(this.m_positions)[indexB].a = aB;
    }
    return minSeparation >= -1.5 * Settings_getInstance().linearSlop;
  };
  ContactSolver.prototype.solveVelocityConstraints = function () {
    var tmp$;
    tmp$ = this.m_count;
    for (var i = 0; i < tmp$; i++) {
      var vc = this.m_velocityConstraints[i];
      var indexA = vc.indexA;
      var indexB = vc.indexB;
      var mA = vc.invMassA;
      var mB = vc.invMassB;
      var iA = vc.invIA;
      var iB = vc.invIB;
      var pointCount = vc.pointCount;
      this.vA_0 = ensureNotNull(this.m_velocities)[indexA].v;
      this.wA_0 = ensureNotNull(this.m_velocities)[indexA].w;
      this.vB_0 = ensureNotNull(this.m_velocities)[indexB].v;
      this.wB_0 = ensureNotNull(this.m_velocities)[indexB].w;
      var normal = vc.normal;
      var normalx = normal.x;
      var normaly = normal.y;
      var tangentx = 1.0 * vc.normal.y;
      var tangenty = -1.0 * vc.normal.x;
      var friction = vc.friction;
      this.solveVelocityConstraints0_0(vc, mA, mB, iA, iB, pointCount, tangentx, tangenty, friction);
      if (vc.pointCount === 1) {
        this.solveVelocityConstraints1_0(vc.points[0], mA, mB, iA, iB, normalx, normaly);
      } else {
        this.solveVelocityConstraints2_0(vc, mA, mB, iA, iB, normal, normalx, normaly);
      }
      ensureNotNull(this.m_velocities)[indexA].w = this.wA_0;
      ensureNotNull(this.m_velocities)[indexB].w = this.wB_0;
    }
  };
  ContactSolver.prototype.solveVelocityConstraints2_0 = function (vc, mA, mB, iA, iB, normal, normalx, normaly) {
    var cp1 = vc.points[0];
    var cp2 = vc.points[1];
    var cp1rA = cp1.rA;
    var cp1rB = cp1.rB;
    var cp2rA = cp2.rA;
    var cp2rB = cp2.rB;
    var ax = cp1.normalImpulse;
    var ay = cp2.normalImpulse;
    var dv1x = -this.wB_0 * cp1rB.y + ensureNotNull(this.vB_0).x - ensureNotNull(this.vA_0).x + this.wA_0 * cp1rA.y;
    var dv1y = this.wB_0 * cp1rB.x + ensureNotNull(this.vB_0).y - ensureNotNull(this.vA_0).y - this.wA_0 * cp1rA.x;
    var dv2x = -this.wB_0 * cp2rB.y + ensureNotNull(this.vB_0).x - ensureNotNull(this.vA_0).x + this.wA_0 * cp2rA.y;
    var dv2y = this.wB_0 * cp2rB.x + ensureNotNull(this.vB_0).y - ensureNotNull(this.vA_0).y - this.wA_0 * cp2rA.x;
    var vn1 = dv1x * normalx + dv1y * normaly;
    var vn2 = dv2x * normalx + dv2y * normaly;
    var bx = vn1 - cp1.velocityBias;
    var by = vn2 - cp2.velocityBias;
    var R = vc.K;
    bx -= R.ex.x * ax + R.ey.x * ay;
    by -= R.ex.y * ax + R.ey.y * ay;
    var R1 = vc.normalMass;
    var xx = R1.ex.x * bx + R1.ey.x * by;
    var xy = R1.ex.y * bx + R1.ey.y * by;
    xx *= -1.0;
    xy *= -1.0;
    if (xx >= 0.0 && xy >= 0.0) {
      this.solveVelocityConstraints2a_0(mA, mB, iA, iB, normal, normalx, normaly, cp1, cp2, cp1rA, cp1rB, cp2rA, cp2rB, ax, ay, xx, xy);
    } else {
      xx = -cp1.normalMass * bx;
      xy = 0.0;
      vn1 = 0.0;
      vn2 = vc.K.ex.y * xx + by;
      if (xx >= 0.0 && vn2 >= 0.0) {
        this.solveVelocityConstraints2b_0(mA, mB, iA, iB, normal, normalx, normaly, cp1, cp2, cp1rA, cp1rB, cp2rA, cp2rB, ax, ay, xx, xy);
      } else {
        xx = 0.0;
        xy = -cp2.normalMass * by;
        vn1 = vc.K.ey.x * xy + bx;
        vn2 = 0.0;
        if (xy >= 0.0 && vn1 >= 0.0) {
          this.solveVelocityConstraints2c_0(mA, mB, iA, iB, normal, normalx, normaly, cp1, cp2, cp1rA, cp1rB, cp2rA, cp2rB, ax, ay, xx, xy);
        } else {
          xx = 0.0;
          xy = 0.0;
          vn1 = bx;
          vn2 = by;
          if (vn1 >= 0.0 && vn2 >= 0.0) {
            this.solveVelocityConstraints2d_0(mA, mB, iA, iB, normalx, normaly, cp1, cp2, cp1rA, cp1rB, cp2rA, cp2rB, ax, ay, xx, xy);
          }}
      }
    }
  };
  ContactSolver.prototype.solveVelocityConstraints2d_0 = function (mA, mB, iA, iB, normalx, normaly, cp1, cp2, cp1rA, cp1rB, cp2rA, cp2rB, ax, ay, xx, xy) {
    var dx = xx - ax;
    var dy = xy - ay;
    var P1x = normalx * dx;
    var P1y = normaly * dx;
    var P2x = normalx * dy;
    var P2y = normaly * dy;
    ensureNotNull(this.vA_0).x = ensureNotNull(this.vA_0).x - mA * (P1x + P2x);
    ensureNotNull(this.vA_0).y = ensureNotNull(this.vA_0).y - mA * (P1y + P2y);
    ensureNotNull(this.vB_0).x = ensureNotNull(this.vB_0).x + mB * (P1x + P2x);
    ensureNotNull(this.vB_0).y = ensureNotNull(this.vB_0).y + mB * (P1y + P2y);
    this.wA_0 -= iA * (cp1rA.x * P1y - cp1rA.y * P1x + (cp2rA.x * P2y - cp2rA.y * P2x));
    this.wB_0 += iB * (cp1rB.x * P1y - cp1rB.y * P1x + (cp2rB.x * P2y - cp2rB.y * P2x));
    cp1.normalImpulse = xx;
    cp2.normalImpulse = xy;
  };
  ContactSolver.prototype.solveVelocityConstraints2c_0 = function (mA, mB, iA, iB, normal, normalx, normaly, cp1, cp2, cp1rA, cp1rB, cp2rA, cp2rB, ax, ay, xx, xy) {
    var vn2;
    var dx = xx - ax;
    var dy = xy - ay;
    var P1x = normalx * dx;
    var P1y = normaly * dx;
    var P2x = normalx * dy;
    var P2y = normaly * dy;
    ensureNotNull(this.vA_0).x = ensureNotNull(this.vA_0).x - mA * (P1x + P2x);
    ensureNotNull(this.vA_0).y = ensureNotNull(this.vA_0).y - mA * (P1y + P2y);
    ensureNotNull(this.vB_0).x = ensureNotNull(this.vB_0).x + mB * (P1x + P2x);
    ensureNotNull(this.vB_0).y = ensureNotNull(this.vB_0).y + mB * (P1y + P2y);
    this.wA_0 -= iA * (cp1rA.x * P1y - cp1rA.y * P1x + (cp2rA.x * P2y - cp2rA.y * P2x));
    this.wB_0 += iB * (cp1rB.x * P1y - cp1rB.y * P1x + (cp2rB.x * P2y - cp2rB.y * P2x));
    cp1.normalImpulse = xx;
    cp2.normalImpulse = xy;
    if (ContactSolver$Companion_getInstance().DEBUG_SOLVER) {
      var dv2 = ensureNotNull(this.vB_0).add_z1lo5s$(Vec2$Companion_getInstance().cross_rrlx6b$(this.wB_0, cp2rB).subLocal_z1lo5s$(ensureNotNull(this.vA_0)).subLocal_z1lo5s$(Vec2$Companion_getInstance().cross_rrlx6b$(this.wA_0, cp2rA)));
      vn2 = Vec2$Companion_getInstance().dot_xjacks$(dv2, normal);
    }};
  ContactSolver.prototype.solveVelocityConstraints2b_0 = function (mA, mB, iA, iB, normal, normalx, normaly, cp1, cp2, cp1rA, cp1rB, cp2rA, cp2rB, ax, ay, xx, xy) {
    var vn1;
    var dx = xx - ax;
    var dy = xy - ay;
    var P1x = normalx * dx;
    var P1y = normaly * dx;
    var P2x = normalx * dy;
    var P2y = normaly * dy;
    ensureNotNull(this.vA_0).x = ensureNotNull(this.vA_0).x - mA * (P1x + P2x);
    ensureNotNull(this.vA_0).y = ensureNotNull(this.vA_0).y - mA * (P1y + P2y);
    ensureNotNull(this.vB_0).x = ensureNotNull(this.vB_0).x + mB * (P1x + P2x);
    ensureNotNull(this.vB_0).y = ensureNotNull(this.vB_0).y + mB * (P1y + P2y);
    this.wA_0 -= iA * (cp1rA.x * P1y - cp1rA.y * P1x + (cp2rA.x * P2y - cp2rA.y * P2x));
    this.wB_0 += iB * (cp1rB.x * P1y - cp1rB.y * P1x + (cp2rB.x * P2y - cp2rB.y * P2x));
    cp1.normalImpulse = xx;
    cp2.normalImpulse = xy;
    if (ContactSolver$Companion_getInstance().DEBUG_SOLVER) {
      var dv1 = ensureNotNull(this.vB_0).add_z1lo5s$(Vec2$Companion_getInstance().cross_rrlx6b$(this.wB_0, cp1rB).subLocal_z1lo5s$(ensureNotNull(this.vA_0)).subLocal_z1lo5s$(Vec2$Companion_getInstance().cross_rrlx6b$(this.wA_0, cp1rA)));
      vn1 = Vec2$Companion_getInstance().dot_xjacks$(dv1, normal);
    }};
  ContactSolver.prototype.solveVelocityConstraints2a_0 = function (mA, mB, iA, iB, normal, normalx, normaly, cp1, cp2, cp1rA, cp1rB, cp2rA, cp2rB, ax, ay, xx, xy) {
    var vn1;
    var vn2;
    var dx = xx - ax;
    var dy = xy - ay;
    var P1x = dx * normalx;
    var P1y = dx * normaly;
    var P2x = dy * normalx;
    var P2y = dy * normaly;
    ensureNotNull(this.vA_0).x = ensureNotNull(this.vA_0).x - mA * (P1x + P2x);
    ensureNotNull(this.vA_0).y = ensureNotNull(this.vA_0).y - mA * (P1y + P2y);
    ensureNotNull(this.vB_0).x = ensureNotNull(this.vB_0).x + mB * (P1x + P2x);
    ensureNotNull(this.vB_0).y = ensureNotNull(this.vB_0).y + mB * (P1y + P2y);
    this.wA_0 -= iA * (cp1rA.x * P1y - cp1rA.y * P1x + (cp2rA.x * P2y - cp2rA.y * P2x));
    this.wB_0 += iB * (cp1rB.x * P1y - cp1rB.y * P1x + (cp2rB.x * P2y - cp2rB.y * P2x));
    cp1.normalImpulse = xx;
    cp2.normalImpulse = xy;
    if (ContactSolver$Companion_getInstance().DEBUG_SOLVER) {
      var dv1 = ensureNotNull(this.vB_0).add_z1lo5s$(Vec2$Companion_getInstance().cross_rrlx6b$(this.wB_0, cp1rB).subLocal_z1lo5s$(ensureNotNull(this.vA_0)).subLocal_z1lo5s$(Vec2$Companion_getInstance().cross_rrlx6b$(this.wA_0, cp1rA)));
      var dv2 = ensureNotNull(this.vB_0).add_z1lo5s$(Vec2$Companion_getInstance().cross_rrlx6b$(this.wB_0, cp2rB).subLocal_z1lo5s$(ensureNotNull(this.vA_0)).subLocal_z1lo5s$(Vec2$Companion_getInstance().cross_rrlx6b$(this.wA_0, cp2rA)));
      vn1 = Vec2$Companion_getInstance().dot_xjacks$(dv1, normal);
      vn2 = Vec2$Companion_getInstance().dot_xjacks$(dv2, normal);
    }};
  ContactSolver.prototype.solveVelocityConstraints1_0 = function (point, mA, mB, iA, iB, normalx, normaly) {
    var dvx = -this.wB_0 * point.rB.y + ensureNotNull(this.vB_0).x - ensureNotNull(this.vA_0).x + this.wA_0 * point.rA.y;
    var dvy = this.wB_0 * point.rB.x + ensureNotNull(this.vB_0).y - ensureNotNull(this.vA_0).y - this.wA_0 * point.rA.x;
    var vn = dvx * normalx + dvy * normaly;
    var lambda = -point.normalMass * (vn - point.velocityBias);
    var a = point.normalImpulse + lambda;
    var newImpulse = a > 0.0 ? a : 0.0;
    lambda = newImpulse - point.normalImpulse;
    point.normalImpulse = newImpulse;
    var Px = normalx * lambda;
    var Py = normaly * lambda;
    ensureNotNull(this.vA_0).x = ensureNotNull(this.vA_0).x - Px * mA;
    ensureNotNull(this.vA_0).y = ensureNotNull(this.vA_0).y - Py * mA;
    this.wA_0 -= iA * (point.rA.x * Py - point.rA.y * Px);
    ensureNotNull(this.vB_0).x = ensureNotNull(this.vB_0).x + Px * mB;
    ensureNotNull(this.vB_0).y = ensureNotNull(this.vB_0).y + Py * mB;
    this.wB_0 += iB * (point.rB.x * Py - point.rB.y * Px);
  };
  ContactSolver.prototype.solveVelocityConstraints0_0 = function (vc, mA, mB, iA, iB, pointCount, tangentx, tangenty, friction) {
    for (var j = 0; j < pointCount; j++) {
      var vcp = vc.points[j];
      var a = vcp.rA;
      var dvx = -this.wB_0 * vcp.rB.y + ensureNotNull(this.vB_0).x - ensureNotNull(this.vA_0).x + this.wA_0 * a.y;
      var dvy = this.wB_0 * vcp.rB.x + ensureNotNull(this.vB_0).y - ensureNotNull(this.vA_0).y - this.wA_0 * a.x;
      var vt = dvx * tangentx + dvy * tangenty - vc.tangentSpeed;
      var lambda = vcp.tangentMass * -vt;
      var maxFriction = friction * vcp.normalImpulse;
      var newImpulse = MathUtils$Companion_getInstance().clamp_y2kzbl$(vcp.tangentImpulse + lambda, -maxFriction, maxFriction);
      lambda = newImpulse - vcp.tangentImpulse;
      vcp.tangentImpulse = newImpulse;
      var Px = tangentx * lambda;
      var Py = tangenty * lambda;
      ensureNotNull(this.vA_0).x = ensureNotNull(this.vA_0).x - Px * mA;
      ensureNotNull(this.vA_0).y = ensureNotNull(this.vA_0).y - Py * mA;
      this.wA_0 -= iA * (vcp.rA.x * Py - vcp.rA.y * Px);
      ensureNotNull(this.vB_0).x = ensureNotNull(this.vB_0).x + Px * mB;
      ensureNotNull(this.vB_0).y = ensureNotNull(this.vB_0).y + Py * mB;
      this.wB_0 += iB * (vcp.rB.x * Py - vcp.rB.y * Px);
    }
  };
  function ContactSolver$ContactSolverDef() {
    this.step = null;
    this.contacts = null;
    this.count = 0;
    this.positions = null;
    this.velocities = null;
  }
  ContactSolver$ContactSolverDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactSolverDef',
    interfaces: []
  };
  function ContactSolver$Companion() {
    ContactSolver$Companion_instance = this;
    this.DEBUG_SOLVER = false;
    this.k_errorTol = 0.001;
    this.INITIAL_NUM_CONSTRAINTS = 256;
    this.k_maxConditionNumber = 100.0;
  }
  ContactSolver$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ContactSolver$Companion_instance = null;
  function ContactSolver$Companion_getInstance() {
    if (ContactSolver$Companion_instance === null) {
      new ContactSolver$Companion();
    }return ContactSolver$Companion_instance;
  }
  ContactSolver.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactSolver',
    interfaces: []
  };
  function ContactVelocityConstraint() {
    var array = Array_0(Settings_getInstance().maxManifoldPoints);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new ContactVelocityConstraint$VelocityConstraintPoint();
    }
    this.points = array;
    this.normal = new Vec2();
    this.normalMass = Mat22_init();
    this.K = Mat22_init();
    this.indexA = 0;
    this.indexB = 0;
    this.invMassA = 0;
    this.invMassB = 0;
    this.invIA = 0;
    this.invIB = 0;
    this.friction = 0;
    this.restitution = 0;
    this.tangentSpeed = 0;
    this.pointCount = 0;
    this.contactIndex = 0;
  }
  function ContactVelocityConstraint$VelocityConstraintPoint() {
    this.rA = new Vec2();
    this.rB = new Vec2();
    this.normalImpulse = 0;
    this.tangentImpulse = 0;
    this.normalMass = 0;
    this.tangentMass = 0;
    this.velocityBias = 0;
  }
  ContactVelocityConstraint$VelocityConstraintPoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VelocityConstraintPoint',
    interfaces: []
  };
  ContactVelocityConstraint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactVelocityConstraint',
    interfaces: []
  };
  function EdgeAndCircleContact(argPool) {
    Contact.call(this, argPool);
  }
  EdgeAndCircleContact.prototype.init_smbpn8$ = function (fA, indexA, fB, indexB) {
    Contact.prototype.init_smbpn8$.call(this, fA, indexA, fB, indexB);
    if (!(ensureNotNull(this.m_fixtureA).type === ShapeType$EDGE_getInstance())) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(ensureNotNull(this.m_fixtureB).type === ShapeType$CIRCLE_getInstance())) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }};
  EdgeAndCircleContact.prototype.evaluate_1cez3t$ = function (manifold, xfA, xfB) {
    var tmp$, tmp$_0;
    this.pool.collision.collideEdgeAndCircle_eglyfs$(manifold, Kotlin.isType(tmp$ = ensureNotNull(this.m_fixtureA).m_shape, EdgeShape) ? tmp$ : throwCCE(), xfA, Kotlin.isType(tmp$_0 = ensureNotNull(this.m_fixtureB).m_shape, CircleShape) ? tmp$_0 : throwCCE(), xfB);
  };
  EdgeAndCircleContact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EdgeAndCircleContact',
    interfaces: [Contact]
  };
  function EdgeAndPolygonContact(argPool) {
    Contact.call(this, argPool);
  }
  EdgeAndPolygonContact.prototype.init_smbpn8$ = function (fA, indexA, fB, indexB) {
    Contact.prototype.init_smbpn8$.call(this, fA, indexA, fB, indexB);
    if (!(ensureNotNull(this.m_fixtureA).type === ShapeType$EDGE_getInstance())) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(ensureNotNull(this.m_fixtureB).type === ShapeType$POLYGON_getInstance())) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }};
  EdgeAndPolygonContact.prototype.evaluate_1cez3t$ = function (manifold, xfA, xfB) {
    var tmp$, tmp$_0;
    this.pool.collision.collideEdgeAndPolygon_h52eos$(manifold, Kotlin.isType(tmp$ = ensureNotNull(this.m_fixtureA).m_shape, EdgeShape) ? tmp$ : throwCCE(), xfA, Kotlin.isType(tmp$_0 = ensureNotNull(this.m_fixtureB).m_shape, PolygonShape) ? tmp$_0 : throwCCE(), xfB);
  };
  EdgeAndPolygonContact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EdgeAndPolygonContact',
    interfaces: [Contact]
  };
  function PolygonAndCircleContact(argPool) {
    Contact.call(this, argPool);
  }
  PolygonAndCircleContact.prototype.init_tw86jw$ = function (fixtureA, fixtureB) {
    Contact.prototype.init_smbpn8$.call(this, fixtureA, 0, fixtureB, 0);
    if (!(ensureNotNull(this.m_fixtureA).type === ShapeType$POLYGON_getInstance())) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(ensureNotNull(this.m_fixtureB).type === ShapeType$CIRCLE_getInstance())) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }};
  PolygonAndCircleContact.prototype.evaluate_1cez3t$ = function (manifold, xfA, xfB) {
    var tmp$, tmp$_0;
    this.pool.collision.collidePolygonAndCircle_1xwx9z$(manifold, Kotlin.isType(tmp$ = ensureNotNull(this.m_fixtureA).m_shape, PolygonShape) ? tmp$ : throwCCE(), xfA, Kotlin.isType(tmp$_0 = ensureNotNull(this.m_fixtureB).m_shape, CircleShape) ? tmp$_0 : throwCCE(), xfB);
  };
  PolygonAndCircleContact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolygonAndCircleContact',
    interfaces: [Contact]
  };
  function PolygonContact(argPool) {
    Contact.call(this, argPool);
  }
  PolygonContact.prototype.init_tw86jw$ = function (fixtureA, fixtureB) {
    Contact.prototype.init_smbpn8$.call(this, fixtureA, 0, fixtureB, 0);
    if (!(ensureNotNull(this.m_fixtureA).type === ShapeType$POLYGON_getInstance())) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(ensureNotNull(this.m_fixtureB).type === ShapeType$POLYGON_getInstance())) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }};
  PolygonContact.prototype.evaluate_1cez3t$ = function (manifold, xfA, xfB) {
    var tmp$, tmp$_0;
    this.pool.collision.collidePolygons_fsxbfn$(manifold, Kotlin.isType(tmp$ = ensureNotNull(this.m_fixtureA).m_shape, PolygonShape) ? tmp$ : throwCCE(), xfA, Kotlin.isType(tmp$_0 = ensureNotNull(this.m_fixtureB).m_shape, PolygonShape) ? tmp$_0 : throwCCE(), xfB);
  };
  PolygonContact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolygonContact',
    interfaces: [Contact]
  };
  function Position() {
    this.c = new Vec2();
    this.a = 0;
  }
  Position.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Position',
    interfaces: []
  };
  function PositionSolverManifold() {
    this.normal = new Vec2();
    this.point = new Vec2();
    this.separation = 0;
  }
  PositionSolverManifold.prototype.initialize_jj0nb6$ = function (pc, xfA, xfB, index) {
    var tmp$;
    if (!(pc.pointCount_8be2vx$ > 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var xfAq = xfA.q;
    var xfBq = xfB.q;
    var pcLocalPointsI = pc.localPoints_8be2vx$[index];
    tmp$ = pc.type_8be2vx$;
    if (equals(tmp$, Manifold$ManifoldType$CIRCLES_getInstance())) {
      var plocalPoint = pc.localPoint_8be2vx$;
      var pLocalPoints0 = pc.localPoints_8be2vx$[0];
      var pointAx = xfAq.c * plocalPoint.x - xfAq.s * plocalPoint.y + xfA.p.x;
      var pointAy = xfAq.s * plocalPoint.x + xfAq.c * plocalPoint.y + xfA.p.y;
      var pointBx = xfBq.c * pLocalPoints0.x - xfBq.s * pLocalPoints0.y + xfB.p.x;
      var pointBy = xfBq.s * pLocalPoints0.x + xfBq.c * pLocalPoints0.y + xfB.p.y;
      this.normal.x = pointBx - pointAx;
      this.normal.y = pointBy - pointAy;
      this.normal.normalize();
      this.point.x = (pointAx + pointBx) * 0.5;
      this.point.y = (pointAy + pointBy) * 0.5;
      var tempx = pointBx - pointAx;
      var tempy = pointBy - pointAy;
      this.separation = tempx * this.normal.x + tempy * this.normal.y - pc.radiusA_8be2vx$ - pc.radiusB_8be2vx$;
    } else if (equals(tmp$, Manifold$ManifoldType$FACE_A_getInstance())) {
      var pcLocalNormal = pc.localNormal_8be2vx$;
      var pcLocalPoint = pc.localPoint_8be2vx$;
      this.normal.x = xfAq.c * pcLocalNormal.x - xfAq.s * pcLocalNormal.y;
      this.normal.y = xfAq.s * pcLocalNormal.x + xfAq.c * pcLocalNormal.y;
      var planePointx = xfAq.c * pcLocalPoint.x - xfAq.s * pcLocalPoint.y + xfA.p.x;
      var planePointy = xfAq.s * pcLocalPoint.x + xfAq.c * pcLocalPoint.y + xfA.p.y;
      var clipPointx = xfBq.c * pcLocalPointsI.x - xfBq.s * pcLocalPointsI.y + xfB.p.x;
      var clipPointy = xfBq.s * pcLocalPointsI.x + xfBq.c * pcLocalPointsI.y + xfB.p.y;
      var tempx_0 = clipPointx - planePointx;
      var tempy_0 = clipPointy - planePointy;
      this.separation = tempx_0 * this.normal.x + tempy_0 * this.normal.y - pc.radiusA_8be2vx$ - pc.radiusB_8be2vx$;
      this.point.x = clipPointx;
      this.point.y = clipPointy;
    } else if (equals(tmp$, Manifold$ManifoldType$FACE_B_getInstance())) {
      var pcLocalNormal_0 = pc.localNormal_8be2vx$;
      var pcLocalPoint_0 = pc.localPoint_8be2vx$;
      this.normal.x = xfBq.c * pcLocalNormal_0.x - xfBq.s * pcLocalNormal_0.y;
      this.normal.y = xfBq.s * pcLocalNormal_0.x + xfBq.c * pcLocalNormal_0.y;
      var planePointx_0 = xfBq.c * pcLocalPoint_0.x - xfBq.s * pcLocalPoint_0.y + xfB.p.x;
      var planePointy_0 = xfBq.s * pcLocalPoint_0.x + xfBq.c * pcLocalPoint_0.y + xfB.p.y;
      var clipPointx_0 = xfAq.c * pcLocalPointsI.x - xfAq.s * pcLocalPointsI.y + xfA.p.x;
      var clipPointy_0 = xfAq.s * pcLocalPointsI.x + xfAq.c * pcLocalPointsI.y + xfA.p.y;
      var tempx_1 = clipPointx_0 - planePointx_0;
      var tempy_1 = clipPointy_0 - planePointy_0;
      this.separation = tempx_1 * this.normal.x + tempy_1 * this.normal.y - pc.radiusA_8be2vx$ - pc.radiusB_8be2vx$;
      this.point.x = clipPointx_0;
      this.point.y = clipPointy_0;
      this.normal.x = this.normal.x * -1.0;
      this.normal.y = this.normal.y * -1.0;
    }};
  PositionSolverManifold.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PositionSolverManifold',
    interfaces: []
  };
  function Velocity() {
    this.v = new Vec2();
    this.w = 0;
  }
  Velocity.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Velocity',
    interfaces: []
  };
  function ConstantVolumeJoint(world, def) {
    Joint.call(this, world.pool, def);
    this.world_0 = world;
    this.bodies = null;
    this.targetLengths_0 = null;
    this.targetVolume_0 = 0;
    this.normals_0 = null;
    this.m_impulse_0 = 0.0;
    this.joints_yr3oz$_0 = null;
    var tmp$, tmp$_0, tmp$_1;
    if (def.bodies_8be2vx$.size <= 2) {
      throw IllegalArgumentException_init('You cannot create a constant volume joint with less than three bodies.');
    }this.bodies = copyToArray(def.bodies_8be2vx$);
    this.targetLengths_0 = new Float32Array(this.bodies.length);
    tmp$ = this.targetLengths_0;
    for (var i = 0; i !== tmp$.length; ++i) {
      var next = i === (this.targetLengths_0.length - 1 | 0) ? 0 : i + 1 | 0;
      var dist = this.bodies[i].worldCenter.sub_z1lo5s$(this.bodies[next].worldCenter).length();
      this.targetLengths_0[i] = dist;
    }
    this.targetVolume_0 = this.bodyArea_0;
    if (def.joints_8be2vx$ != null && ensureNotNull(def.joints_8be2vx$).size !== def.bodies_8be2vx$.size) {
      throw IllegalArgumentException_init('Incorrect joint definition.  Joints have to correspond to the bodies');
    }if (def.joints_8be2vx$ == null) {
      var djd = new DistanceJointDef();
      this.joints = Kotlin.isArray(tmp$_0 = Kotlin.newArray(this.bodies.length, null)) ? tmp$_0 : throwCCE();
      tmp$_1 = this.targetLengths_0;
      for (var i_0 = 0; i_0 !== tmp$_1.length; ++i_0) {
        var tmp$_2;
        var next_0 = i_0 === (this.targetLengths_0.length - 1 | 0) ? 0 : i_0 + 1 | 0;
        djd.frequencyHz = def.frequencyHz;
        djd.dampingRatio = def.dampingRatio;
        djd.collideConnected = def.collideConnected;
        djd.initialize_ns84qc$(this.bodies[i_0], this.bodies[next_0], this.bodies[i_0].worldCenter, this.bodies[next_0].worldCenter);
        this.joints[i_0] = Kotlin.isType(tmp$_2 = this.world_0.createJoint_35691l$(djd), DistanceJoint) ? tmp$_2 : throwCCE();
      }
    } else {
      this.joints = copyToArray(ensureNotNull(def.joints_8be2vx$));
    }
    var array = Array_0(this.bodies.length);
    var tmp$_3;
    tmp$_3 = array.length - 1 | 0;
    for (var i_1 = 0; i_1 <= tmp$_3; i_1++) {
      array[i_1] = new Vec2();
    }
    this.normals_0 = array;
  }
  Object.defineProperty(ConstantVolumeJoint.prototype, 'joints', {
    get: function () {
      return this.joints_yr3oz$_0;
    },
    set: function (joints) {
      this.joints_yr3oz$_0 = joints;
    }
  });
  Object.defineProperty(ConstantVolumeJoint.prototype, 'bodyArea_0', {
    get: function () {
      var tmp$;
      var area = 0.0;
      tmp$ = this.bodies;
      for (var i = 0; i !== tmp$.length; ++i) {
        var next = i === (this.bodies.length - 1 | 0) ? 0 : i + 1 | 0;
        area += this.bodies[i].worldCenter.x * this.bodies[next].worldCenter.y - this.bodies[next].worldCenter.x * this.bodies[i].worldCenter.y;
      }
      area *= 0.5;
      return area;
    }
  });
  ConstantVolumeJoint.prototype.inflate_mx4ult$ = function (factor) {
    this.targetVolume_0 *= factor;
  };
  ConstantVolumeJoint.prototype.destructor = function () {
    var tmp$;
    tmp$ = ensureNotNull(this.joints);
    for (var i = 0; i !== tmp$.length; ++i) {
      this.world_0.destroyJoint_jd18y9$(ensureNotNull(this.joints)[i]);
    }
  };
  ConstantVolumeJoint.prototype.getSolverArea_0 = function (positions) {
    var tmp$;
    var area = 0.0;
    tmp$ = this.bodies;
    for (var i = 0; i !== tmp$.length; ++i) {
      var next = i === (this.bodies.length - 1 | 0) ? 0 : i + 1 | 0;
      area += positions[this.bodies[i].m_islandIndex].c.x * positions[this.bodies[next].m_islandIndex].c.y - positions[this.bodies[next].m_islandIndex].c.x * positions[this.bodies[i].m_islandIndex].c.y;
    }
    area *= 0.5;
    return area;
  };
  ConstantVolumeJoint.prototype.constrainEdges_0 = function (positions) {
    var tmp$, tmp$_0;
    var perimeter = 0.0;
    tmp$ = this.bodies;
    for (var i = 0; i !== tmp$.length; ++i) {
      var next = i === (this.bodies.length - 1 | 0) ? 0 : i + 1 | 0;
      var dx = ensureNotNull(positions)[this.bodies[next].m_islandIndex].c.x - positions[this.bodies[i].m_islandIndex].c.x;
      var dy = positions[this.bodies[next].m_islandIndex].c.y - positions[this.bodies[i].m_islandIndex].c.y;
      var dist = MathUtils$Companion_getInstance().sqrt_mx4ult$(dx * dx + dy * dy);
      if (dist < Settings_getInstance().EPSILON) {
        dist = 1.0;
      }this.normals_0[i].x = dy / dist;
      this.normals_0[i].y = -dx / dist;
      perimeter += dist;
    }
    var delta = this.pool.popVec2();
    var deltaArea = this.targetVolume_0 - this.getSolverArea_0(positions);
    var toExtrude = 0.5 * deltaArea / perimeter;
    var done = true;
    tmp$_0 = this.bodies;
    for (var i_0 = 0; i_0 !== tmp$_0.length; ++i_0) {
      var next_0 = i_0 === (this.bodies.length - 1 | 0) ? 0 : i_0 + 1 | 0;
      delta.set_dleff0$(toExtrude * (this.normals_0[i_0].x + this.normals_0[next_0].x), toExtrude * (this.normals_0[i_0].y + this.normals_0[next_0].y));
      var normSqrd = delta.lengthSquared();
      if (normSqrd > Settings_getInstance().maxLinearCorrection * Settings_getInstance().maxLinearCorrection) {
        delta.mulLocal_mx4ult$(Settings_getInstance().maxLinearCorrection / MathUtils$Companion_getInstance().sqrt_mx4ult$(normSqrd));
      }if (normSqrd > Settings_getInstance().linearSlop * Settings_getInstance().linearSlop) {
        done = false;
      }ensureNotNull(positions)[this.bodies[next_0].m_islandIndex].c.x = ensureNotNull(positions)[this.bodies[next_0].m_islandIndex].c.x + delta.x;
      ensureNotNull(positions)[this.bodies[next_0].m_islandIndex].c.y = ensureNotNull(positions)[this.bodies[next_0].m_islandIndex].c.y + delta.y;
    }
    this.pool.pushVec2_za3lpa$(1);
    return done;
  };
  ConstantVolumeJoint.prototype.initVelocityConstraints_giqime$ = function (step) {
    var tmp$, tmp$_0;
    var velocities = step.velocities;
    var positions = step.positions;
    var d = this.pool.getVec2Array_za3lpa$(this.bodies.length);
    tmp$ = this.bodies;
    for (var i = 0; i !== tmp$.length; ++i) {
      var prev = i === 0 ? this.bodies.length - 1 | 0 : i - 1 | 0;
      var next = i === (this.bodies.length - 1 | 0) ? 0 : i + 1 | 0;
      d[i].set_z1lo5s$(ensureNotNull(positions)[this.bodies[next].m_islandIndex].c);
      d[i].subLocal_z1lo5s$(positions[this.bodies[prev].m_islandIndex].c);
    }
    if (ensureNotNull(step.step).warmStarting) {
      this.m_impulse_0 *= ensureNotNull(step.step).dtRatio;
      tmp$_0 = this.bodies;
      for (var i_0 = 0; i_0 !== tmp$_0.length; ++i_0) {
        ensureNotNull(velocities)[this.bodies[i_0].m_islandIndex].v.x = ensureNotNull(velocities)[this.bodies[i_0].m_islandIndex].v.x + this.bodies[i_0].m_invMass * d[i_0].y * 0.5 * this.m_impulse_0;
        ensureNotNull(velocities)[this.bodies[i_0].m_islandIndex].v.y = ensureNotNull(velocities)[this.bodies[i_0].m_islandIndex].v.y + this.bodies[i_0].m_invMass * -d[i_0].x * 0.5 * this.m_impulse_0;
      }
    } else {
      this.m_impulse_0 = 0.0;
    }
  };
  ConstantVolumeJoint.prototype.solvePositionConstraints_giqime$ = function (step) {
    return this.constrainEdges_0(ensureNotNull(step.positions));
  };
  ConstantVolumeJoint.prototype.solveVelocityConstraints_giqime$ = function (step) {
    var tmp$, tmp$_0;
    var crossMassSum = 0.0;
    var dotMassSum = 0.0;
    var velocities = step.velocities;
    var positions = step.positions;
    var d = this.pool.getVec2Array_za3lpa$(this.bodies.length);
    tmp$ = this.bodies;
    for (var i = 0; i !== tmp$.length; ++i) {
      var prev = i === 0 ? this.bodies.length - 1 | 0 : i - 1 | 0;
      var next = i === (this.bodies.length - 1 | 0) ? 0 : i + 1 | 0;
      d[i].set_z1lo5s$(ensureNotNull(positions)[this.bodies[next].m_islandIndex].c);
      d[i].subLocal_z1lo5s$(positions[this.bodies[prev].m_islandIndex].c);
      dotMassSum += d[i].lengthSquared() / this.bodies[i].m_mass;
      crossMassSum += Vec2$Companion_getInstance().cross_xjacks$(ensureNotNull(velocities)[this.bodies[i].m_islandIndex].v, d[i]);
    }
    var lambda = -2.0 * crossMassSum / dotMassSum;
    this.m_impulse_0 += lambda;
    tmp$_0 = this.bodies;
    for (var i_0 = 0; i_0 !== tmp$_0.length; ++i_0) {
      ensureNotNull(velocities)[this.bodies[i_0].m_islandIndex].v.x = ensureNotNull(velocities)[this.bodies[i_0].m_islandIndex].v.x + this.bodies[i_0].m_invMass * d[i_0].y * 0.5 * lambda;
      ensureNotNull(velocities)[this.bodies[i_0].m_islandIndex].v.y = ensureNotNull(velocities)[this.bodies[i_0].m_islandIndex].v.y + this.bodies[i_0].m_invMass * -d[i_0].x * 0.5 * lambda;
    }
  };
  ConstantVolumeJoint.prototype.getAnchorA_z1lo5s$ = function (argOut) {
  };
  ConstantVolumeJoint.prototype.getAnchorB_z1lo5s$ = function (argOut) {
  };
  ConstantVolumeJoint.prototype.getReactionForce_rrlx6b$ = function (inv_dt, argOut) {
  };
  ConstantVolumeJoint.prototype.getReactionTorque_mx4ult$ = function (inv_dt) {
    return 0.0;
  };
  ConstantVolumeJoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConstantVolumeJoint',
    interfaces: [Joint]
  };
  function ConstantVolumeJointDef() {
    JointDef.call(this, JointType$CONSTANT_VOLUME_getInstance());
    this.frequencyHz = 0.0;
    this.dampingRatio = 0.0;
    this.bodies_8be2vx$ = ArrayList_init();
    this.joints_8be2vx$ = null;
    this.collideConnected = false;
    this.frequencyHz = 0.0;
    this.dampingRatio = 0.0;
  }
  ConstantVolumeJointDef.prototype.addBody_v1loln$ = function (argBody) {
    this.bodies_8be2vx$.add_11rb$(argBody);
    if (this.bodies_8be2vx$.size === 1) {
      this.bodyA = argBody;
    }if (this.bodies_8be2vx$.size === 2) {
      this.bodyB = argBody;
    }};
  ConstantVolumeJointDef.prototype.addBodyAndJoint_uq5nwa$ = function (argBody, argJoint) {
    this.addBody_v1loln$(argBody);
    if (this.joints_8be2vx$ == null) {
      this.joints_8be2vx$ = ArrayList_init();
    }ensureNotNull(this.joints_8be2vx$).add_11rb$(argJoint);
  };
  ConstantVolumeJointDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConstantVolumeJointDef',
    interfaces: [JointDef]
  };
  function DistanceJoint(argWorld, def) {
    Joint.call(this, argWorld, def);
    this.frequency = 0;
    this.dampingRatio = 0;
    this.m_bias_0 = 0;
    this.localAnchorA = null;
    this.localAnchorB = null;
    this.m_gamma_0 = 0;
    this.m_impulse_0 = 0;
    this.length = 0;
    this.m_indexA_0 = 0;
    this.m_indexB_0 = 0;
    this.m_u_0 = new Vec2();
    this.m_rA_0 = new Vec2();
    this.m_rB_0 = new Vec2();
    this.m_localCenterA_0 = new Vec2();
    this.m_localCenterB_0 = new Vec2();
    this.m_invMassA_0 = 0;
    this.m_invMassB_0 = 0;
    this.m_invIA_0 = 0;
    this.m_invIB_0 = 0;
    this.m_mass_0 = 0;
    this.localAnchorA = def.localAnchorA.clone();
    this.localAnchorB = def.localAnchorB.clone();
    this.length = def.length;
    this.m_impulse_0 = 0.0;
    this.frequency = def.frequencyHz;
    this.dampingRatio = def.dampingRatio;
    this.m_gamma_0 = 0.0;
    this.m_bias_0 = 0.0;
  }
  DistanceJoint.prototype.getAnchorA_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyA).getWorldPointToOut_xjacks$(this.localAnchorA, argOut);
  };
  DistanceJoint.prototype.getAnchorB_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyB).getWorldPointToOut_xjacks$(this.localAnchorB, argOut);
  };
  DistanceJoint.prototype.getReactionForce_rrlx6b$ = function (inv_dt, argOut) {
    argOut.x = this.m_impulse_0 * this.m_u_0.x * inv_dt;
    argOut.y = this.m_impulse_0 * this.m_u_0.y * inv_dt;
  };
  DistanceJoint.prototype.getReactionTorque_mx4ult$ = function (inv_dt) {
    return 0.0;
  };
  DistanceJoint.prototype.initVelocityConstraints_giqime$ = function (data) {
    this.m_indexA_0 = ensureNotNull(this.m_bodyA).m_islandIndex;
    this.m_indexB_0 = ensureNotNull(this.m_bodyB).m_islandIndex;
    this.m_localCenterA_0.set_z1lo5s$(ensureNotNull(this.m_bodyA).m_sweep.localCenter);
    this.m_localCenterB_0.set_z1lo5s$(ensureNotNull(this.m_bodyB).m_sweep.localCenter);
    this.m_invMassA_0 = ensureNotNull(this.m_bodyA).m_invMass;
    this.m_invMassB_0 = ensureNotNull(this.m_bodyB).m_invMass;
    this.m_invIA_0 = ensureNotNull(this.m_bodyA).m_invI;
    this.m_invIB_0 = ensureNotNull(this.m_bodyB).m_invI;
    var cA = ensureNotNull(data.positions)[this.m_indexA_0].c;
    var aA = ensureNotNull(data.positions)[this.m_indexA_0].a;
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = ensureNotNull(data.velocities)[this.m_indexA_0].w;
    var cB = ensureNotNull(data.positions)[this.m_indexB_0].c;
    var aB = ensureNotNull(data.positions)[this.m_indexB_0].a;
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var qA = this.pool.popRot();
    var qB = this.pool.popRot();
    qA.set_mx4ult$(aA);
    qB.set_mx4ult$(aB);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, this.m_u_0.set_z1lo5s$(this.localAnchorA).subLocal_z1lo5s$(this.m_localCenterA_0), this.m_rA_0);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qB, this.m_u_0.set_z1lo5s$(this.localAnchorB).subLocal_z1lo5s$(this.m_localCenterB_0), this.m_rB_0);
    this.m_u_0.set_z1lo5s$(cB).addLocal_z1lo5s$(this.m_rB_0).subLocal_z1lo5s$(cA).subLocal_z1lo5s$(this.m_rA_0);
    this.pool.pushRot_za3lpa$(2);
    var length = this.m_u_0.length();
    if (length > Settings_getInstance().linearSlop) {
      this.m_u_0.x = this.m_u_0.x * (1.0 / length);
      this.m_u_0.y = this.m_u_0.y * (1.0 / length);
    } else {
      this.m_u_0.set_dleff0$(0.0, 0.0);
    }
    var crAu = Vec2$Companion_getInstance().cross_xjacks$(this.m_rA_0, this.m_u_0);
    var crBu = Vec2$Companion_getInstance().cross_xjacks$(this.m_rB_0, this.m_u_0);
    var invMass = this.m_invMassA_0 + this.m_invIA_0 * crAu * crAu + this.m_invMassB_0 + this.m_invIB_0 * crBu * crBu;
    this.m_mass_0 = invMass !== 0.0 ? 1.0 / invMass : 0.0;
    if (this.frequency > 0.0) {
      var C = length - this.length;
      var omega = 2.0 * MathUtils$Companion_getInstance().PI * this.frequency;
      var d = 2.0 * this.m_mass_0 * this.dampingRatio * omega;
      var k = this.m_mass_0 * omega * omega;
      var h = ensureNotNull(data.step).dt;
      this.m_gamma_0 = h * (d + h * k);
      this.m_gamma_0 = this.m_gamma_0 !== 0.0 ? 1.0 / this.m_gamma_0 : 0.0;
      this.m_bias_0 = C * h * k * this.m_gamma_0;
      invMass += this.m_gamma_0;
      this.m_mass_0 = invMass !== 0.0 ? 1.0 / invMass : 0.0;
    } else {
      this.m_gamma_0 = 0.0;
      this.m_bias_0 = 0.0;
    }
    if (ensureNotNull(data.step).warmStarting) {
      this.m_impulse_0 *= ensureNotNull(data.step).dtRatio;
      var P = this.pool.popVec2();
      P.set_z1lo5s$(this.m_u_0).mulLocal_mx4ult$(this.m_impulse_0);
      vA.x = vA.x - this.m_invMassA_0 * P.x;
      vA.y = vA.y - this.m_invMassA_0 * P.y;
      wA -= this.m_invIA_0 * Vec2$Companion_getInstance().cross_xjacks$(this.m_rA_0, P);
      vB.x = vB.x + this.m_invMassB_0 * P.x;
      vB.y = vB.y + this.m_invMassB_0 * P.y;
      wB += this.m_invIB_0 * Vec2$Companion_getInstance().cross_xjacks$(this.m_rB_0, P);
      this.pool.pushVec2_za3lpa$(1);
    } else {
      this.m_impulse_0 = 0.0;
    }
    ensureNotNull(data.velocities)[this.m_indexA_0].w = wA;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
  };
  DistanceJoint.prototype.solveVelocityConstraints_giqime$ = function (data) {
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = ensureNotNull(data.velocities)[this.m_indexA_0].w;
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var vpA = this.pool.popVec2();
    var vpB = this.pool.popVec2();
    Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wA, this.m_rA_0, vpA);
    vpA.addLocal_z1lo5s$(vA);
    Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wB, this.m_rB_0, vpB);
    vpB.addLocal_z1lo5s$(vB);
    var Cdot = Vec2$Companion_getInstance().dot_xjacks$(this.m_u_0, vpB.subLocal_z1lo5s$(vpA));
    var impulse = -this.m_mass_0 * (Cdot + this.m_bias_0 + this.m_gamma_0 * this.m_impulse_0);
    this.m_impulse_0 += impulse;
    var Px = impulse * this.m_u_0.x;
    var Py = impulse * this.m_u_0.y;
    vA.x = vA.x - this.m_invMassA_0 * Px;
    vA.y = vA.y - this.m_invMassA_0 * Py;
    wA -= this.m_invIA_0 * (this.m_rA_0.x * Py - this.m_rA_0.y * Px);
    vB.x = vB.x + this.m_invMassB_0 * Px;
    vB.y = vB.y + this.m_invMassB_0 * Py;
    wB += this.m_invIB_0 * (this.m_rB_0.x * Py - this.m_rB_0.y * Px);
    ensureNotNull(data.velocities)[this.m_indexA_0].w = wA;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
    this.pool.pushVec2_za3lpa$(2);
  };
  DistanceJoint.prototype.solvePositionConstraints_giqime$ = function (data) {
    if (this.frequency > 0.0) {
      return true;
    }var qA = this.pool.popRot();
    var qB = this.pool.popRot();
    var rA = this.pool.popVec2();
    var rB = this.pool.popVec2();
    var u = this.pool.popVec2();
    var cA = ensureNotNull(data.positions)[this.m_indexA_0].c;
    var aA = ensureNotNull(data.positions)[this.m_indexA_0].a;
    var cB = ensureNotNull(data.positions)[this.m_indexB_0].c;
    var aB = ensureNotNull(data.positions)[this.m_indexB_0].a;
    qA.set_mx4ult$(aA);
    qB.set_mx4ult$(aB);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, u.set_z1lo5s$(this.localAnchorA).subLocal_z1lo5s$(this.m_localCenterA_0), rA);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qB, u.set_z1lo5s$(this.localAnchorB).subLocal_z1lo5s$(this.m_localCenterB_0), rB);
    u.set_z1lo5s$(cB).addLocal_z1lo5s$(rB).subLocal_z1lo5s$(cA).subLocal_z1lo5s$(rA);
    var length = u.normalize();
    var C = length - this.length;
    C = MathUtils$Companion_getInstance().clamp_y2kzbl$(C, -Settings_getInstance().maxLinearCorrection, Settings_getInstance().maxLinearCorrection);
    var impulse = -this.m_mass_0 * C;
    var Px = impulse * u.x;
    var Py = impulse * u.y;
    cA.x = cA.x - this.m_invMassA_0 * Px;
    cA.y = cA.y - this.m_invMassA_0 * Py;
    aA -= this.m_invIA_0 * (rA.x * Py - rA.y * Px);
    cB.x = cB.x + this.m_invMassB_0 * Px;
    cB.y = cB.y + this.m_invMassB_0 * Py;
    aB += this.m_invIB_0 * (rB.x * Py - rB.y * Px);
    ensureNotNull(data.positions)[this.m_indexA_0].a = aA;
    ensureNotNull(data.positions)[this.m_indexB_0].a = aB;
    this.pool.pushVec2_za3lpa$(3);
    this.pool.pushRot_za3lpa$(2);
    return MathUtils$Companion_getInstance().abs_mx4ult$(C) < Settings_getInstance().linearSlop;
  };
  DistanceJoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DistanceJoint',
    interfaces: [Joint]
  };
  function DistanceJointDef() {
    JointDef.call(this, JointType$DISTANCE_getInstance());
    this.localAnchorA = new Vec2(0.0, 0.0);
    this.localAnchorB = new Vec2(0.0, 0.0);
    this.length = 1.0;
    this.frequencyHz = 0.0;
    this.dampingRatio = 0.0;
  }
  DistanceJointDef.prototype.initialize_ns84qc$ = function (b1, b2, anchor1, anchor2) {
    this.bodyA = b1;
    this.bodyB = b2;
    this.localAnchorA.set_z1lo5s$(ensureNotNull(this.bodyA).getLocalPoint_z1lo5s$(anchor1));
    this.localAnchorB.set_z1lo5s$(ensureNotNull(this.bodyB).getLocalPoint_z1lo5s$(anchor2));
    var d = anchor2.sub_z1lo5s$(anchor1);
    this.length = d.length();
  };
  DistanceJointDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DistanceJointDef',
    interfaces: [JointDef]
  };
  function FrictionJoint(argWorldPool, def) {
    Joint.call(this, argWorldPool, def);
    this.localAnchorA = Vec2_init(def.localAnchorA);
    this.localAnchorB = Vec2_init(def.localAnchorB);
    this.m_linearImpulse_0 = null;
    this.m_angularImpulse_0 = 0;
    this.m_maxForce_0 = 0;
    this.m_maxTorque_0 = 0;
    this.m_indexA_0 = 0;
    this.m_indexB_0 = 0;
    this.m_rA_0 = new Vec2();
    this.m_rB_0 = new Vec2();
    this.m_localCenterA_0 = new Vec2();
    this.m_localCenterB_0 = new Vec2();
    this.m_invMassA_0 = 0;
    this.m_invMassB_0 = 0;
    this.m_invIA_0 = 0;
    this.m_invIB_0 = 0;
    this.m_linearMass_0 = Mat22_init();
    this.m_angularMass_0 = 0;
    this.m_linearImpulse_0 = new Vec2();
    this.m_angularImpulse_0 = 0.0;
    this.m_maxForce_0 = def.maxForce;
    this.m_maxTorque_0 = def.maxTorque;
  }
  Object.defineProperty(FrictionJoint.prototype, 'maxForce', {
    get: function () {
      return this.m_maxForce_0;
    },
    set: function (force) {
      if (!(force >= 0.0)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }this.m_maxForce_0 = force;
    }
  });
  Object.defineProperty(FrictionJoint.prototype, 'maxTorque', {
    get: function () {
      return this.m_maxTorque_0;
    },
    set: function (torque) {
      if (!(torque >= 0.0)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }this.m_maxTorque_0 = torque;
    }
  });
  FrictionJoint.prototype.getAnchorA_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyA).getWorldPointToOut_xjacks$(this.localAnchorA, argOut);
  };
  FrictionJoint.prototype.getAnchorB_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyB).getWorldPointToOut_xjacks$(this.localAnchorB, argOut);
  };
  FrictionJoint.prototype.getReactionForce_rrlx6b$ = function (inv_dt, argOut) {
    argOut.set_z1lo5s$(this.m_linearImpulse_0).mulLocal_mx4ult$(inv_dt);
  };
  FrictionJoint.prototype.getReactionTorque_mx4ult$ = function (inv_dt) {
    return inv_dt * this.m_angularImpulse_0;
  };
  FrictionJoint.prototype.initVelocityConstraints_giqime$ = function (data) {
    this.m_indexA_0 = ensureNotNull(this.m_bodyA).m_islandIndex;
    this.m_indexB_0 = ensureNotNull(this.m_bodyB).m_islandIndex;
    this.m_localCenterA_0.set_z1lo5s$(ensureNotNull(this.m_bodyA).m_sweep.localCenter);
    this.m_localCenterB_0.set_z1lo5s$(ensureNotNull(this.m_bodyB).m_sweep.localCenter);
    this.m_invMassA_0 = ensureNotNull(this.m_bodyA).m_invMass;
    this.m_invMassB_0 = ensureNotNull(this.m_bodyB).m_invMass;
    this.m_invIA_0 = ensureNotNull(this.m_bodyA).m_invI;
    this.m_invIB_0 = ensureNotNull(this.m_bodyB).m_invI;
    var aA = ensureNotNull(data.positions)[this.m_indexA_0].a;
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = ensureNotNull(data.velocities)[this.m_indexA_0].w;
    var aB = ensureNotNull(data.positions)[this.m_indexB_0].a;
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var temp = this.pool.popVec2();
    var qA = this.pool.popRot();
    var qB = this.pool.popRot();
    qA.set_mx4ult$(aA);
    qB.set_mx4ult$(aB);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, temp.set_z1lo5s$(this.localAnchorA).subLocal_z1lo5s$(this.m_localCenterA_0), this.m_rA_0);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qB, temp.set_z1lo5s$(this.localAnchorB).subLocal_z1lo5s$(this.m_localCenterB_0), this.m_rB_0);
    var mA = this.m_invMassA_0;
    var mB = this.m_invMassB_0;
    var iA = this.m_invIA_0;
    var iB = this.m_invIB_0;
    var K = this.pool.popMat22();
    K.ex.x = mA + mB + iA * this.m_rA_0.y * this.m_rA_0.y + iB * this.m_rB_0.y * this.m_rB_0.y;
    K.ex.y = -iA * this.m_rA_0.x * this.m_rA_0.y - iB * this.m_rB_0.x * this.m_rB_0.y;
    K.ey.x = K.ex.y;
    K.ey.y = mA + mB + iA * this.m_rA_0.x * this.m_rA_0.x + iB * this.m_rB_0.x * this.m_rB_0.x;
    K.invertToOut_krympa$(this.m_linearMass_0);
    this.m_angularMass_0 = iA + iB;
    if (this.m_angularMass_0 > 0.0) {
      this.m_angularMass_0 = 1.0 / this.m_angularMass_0;
    }if (ensureNotNull(data.step).warmStarting) {
      this.m_linearImpulse_0.mulLocal_mx4ult$(ensureNotNull(data.step).dtRatio);
      this.m_angularImpulse_0 *= ensureNotNull(data.step).dtRatio;
      var P = this.pool.popVec2();
      P.set_z1lo5s$(this.m_linearImpulse_0);
      temp.set_z1lo5s$(P).mulLocal_mx4ult$(mA);
      vA.subLocal_z1lo5s$(temp);
      wA -= iA * (Vec2$Companion_getInstance().cross_xjacks$(this.m_rA_0, P) + this.m_angularImpulse_0);
      temp.set_z1lo5s$(P).mulLocal_mx4ult$(mB);
      vB.addLocal_z1lo5s$(temp);
      wB += iB * (Vec2$Companion_getInstance().cross_xjacks$(this.m_rB_0, P) + this.m_angularImpulse_0);
      this.pool.pushVec2_za3lpa$(1);
    } else {
      this.m_linearImpulse_0.setZero();
      this.m_angularImpulse_0 = 0.0;
    }
    if (ensureNotNull(data.velocities)[this.m_indexA_0].w !== wA) {
      if (!(ensureNotNull(data.velocities)[this.m_indexA_0].w !== wA)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }}ensureNotNull(data.velocities)[this.m_indexA_0].w = wA;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
    this.pool.pushRot_za3lpa$(2);
    this.pool.pushVec2_za3lpa$(1);
    this.pool.pushMat22_za3lpa$(1);
  };
  FrictionJoint.prototype.solveVelocityConstraints_giqime$ = function (data) {
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = {v: ensureNotNull(data.velocities)[this.m_indexA_0].w};
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = {v: ensureNotNull(data.velocities)[this.m_indexB_0].w};
    var mA = this.m_invMassA_0;
    var mB = this.m_invMassB_0;
    var iA = this.m_invIA_0;
    var iB = this.m_invIB_0;
    var h = ensureNotNull(data.step).dt;
    var Cdot = wB.v - wA.v;
    var impulse = -this.m_angularMass_0 * Cdot;
    var oldImpulse = this.m_angularImpulse_0;
    var maxImpulse = h * this.m_maxTorque_0;
    this.m_angularImpulse_0 = MathUtils$Companion_getInstance().clamp_y2kzbl$(this.m_angularImpulse_0 + impulse, -maxImpulse, maxImpulse);
    impulse = this.m_angularImpulse_0 - oldImpulse;
    wA.v -= iA * impulse;
    wB.v += iB * impulse;
    var Cdot_0 = this.pool.popVec2();
    var temp = this.pool.popVec2();
    Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wA.v, this.m_rA_0, temp);
    Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wB.v, this.m_rB_0, Cdot_0);
    Cdot_0.addLocal_z1lo5s$(vB).subLocal_z1lo5s$(vA).subLocal_z1lo5s$(temp);
    var impulse_0 = this.pool.popVec2();
    Mat22$Companion_getInstance().mulToOutUnsafe_q2b3pu$(this.m_linearMass_0, Cdot_0, impulse_0);
    impulse_0.negateLocal();
    var oldImpulse_0 = this.pool.popVec2();
    oldImpulse_0.set_z1lo5s$(this.m_linearImpulse_0);
    this.m_linearImpulse_0.addLocal_z1lo5s$(impulse_0);
    var maxImpulse_0 = h * this.m_maxForce_0;
    if (this.m_linearImpulse_0.lengthSquared() > maxImpulse_0 * maxImpulse_0) {
      this.m_linearImpulse_0.normalize();
      this.m_linearImpulse_0.mulLocal_mx4ult$(maxImpulse_0);
    }impulse_0.set_z1lo5s$(this.m_linearImpulse_0).subLocal_z1lo5s$(oldImpulse_0);
    temp.set_z1lo5s$(impulse_0).mulLocal_mx4ult$(mA);
    vA.subLocal_z1lo5s$(temp);
    wA.v -= iA * Vec2$Companion_getInstance().cross_xjacks$(this.m_rA_0, impulse_0);
    temp.set_z1lo5s$(impulse_0).mulLocal_mx4ult$(mB);
    vB.addLocal_z1lo5s$(temp);
    wB.v += iB * Vec2$Companion_getInstance().cross_xjacks$(this.m_rB_0, impulse_0);
    if (ensureNotNull(data.velocities)[this.m_indexA_0].w !== wA.v) {
      if (!(ensureNotNull(data.velocities)[this.m_indexA_0].w !== wA.v)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }}ensureNotNull(data.velocities)[this.m_indexA_0].w = wA.v;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB.v;
    this.pool.pushVec2_za3lpa$(4);
  };
  FrictionJoint.prototype.solvePositionConstraints_giqime$ = function (data) {
    return true;
  };
  FrictionJoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrictionJoint',
    interfaces: [Joint]
  };
  function FrictionJointDef() {
    JointDef.call(this, JointType$FRICTION_getInstance());
    this.localAnchorA = new Vec2();
    this.localAnchorB = new Vec2();
    this.maxForce = 0.0;
    this.maxTorque = 0.0;
  }
  FrictionJointDef.prototype.initialize_a3y2sw$ = function (bA, bB, anchor) {
    this.bodyA = bA;
    this.bodyB = bB;
    bA.getLocalPointToOut_xjacks$(anchor, this.localAnchorA);
    bB.getLocalPointToOut_xjacks$(anchor, this.localAnchorB);
  };
  FrictionJointDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrictionJointDef',
    interfaces: [JointDef]
  };
  function GearJoint(argWorldPool, def) {
    Joint.call(this, argWorldPool, def);
    this.joint1 = def.joint1;
    this.joint2 = def.joint2;
    this.m_typeA_0 = null;
    this.m_typeB_0 = null;
    this.m_bodyC_0 = null;
    this.m_bodyD_0 = null;
    this.m_localAnchorA_0 = new Vec2();
    this.m_localAnchorB_0 = new Vec2();
    this.m_localAnchorC_0 = new Vec2();
    this.m_localAnchorD_0 = new Vec2();
    this.m_localAxisC_0 = new Vec2();
    this.m_localAxisD_0 = new Vec2();
    this.m_referenceAngleA_0 = 0;
    this.m_referenceAngleB_0 = 0;
    this.m_constant_0 = 0;
    this.ratio = 0;
    this.m_impulse_0 = 0;
    this.m_indexA_0 = 0;
    this.m_indexB_0 = 0;
    this.m_indexC_0 = 0;
    this.m_indexD_0 = 0;
    this.m_lcA_0 = new Vec2();
    this.m_lcB_0 = new Vec2();
    this.m_lcC_0 = new Vec2();
    this.m_lcD_0 = new Vec2();
    this.m_mA_0 = 0;
    this.m_mB_0 = 0;
    this.m_mC_0 = 0;
    this.m_mD_0 = 0;
    this.m_iA_0 = 0;
    this.m_iB_0 = 0;
    this.m_iC_0 = 0;
    this.m_iD_0 = 0;
    this.m_JvAC_0 = new Vec2();
    this.m_JvBD_0 = new Vec2();
    this.m_JwA_0 = 0;
    this.m_JwB_0 = 0;
    this.m_JwC_0 = 0;
    this.m_JwD_0 = 0;
    this.m_mass_0 = 0;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.m_typeA_0 = ensureNotNull(this.joint1)._type;
    this.m_typeB_0 = ensureNotNull(this.joint2)._type;
    if (!(this.m_typeA_0 === JointType$REVOLUTE_getInstance() || this.m_typeA_0 === JointType$PRISMATIC_getInstance())) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(this.m_typeB_0 === JointType$REVOLUTE_getInstance() || this.m_typeB_0 === JointType$PRISMATIC_getInstance())) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }var coordinateA;
    var coordinateB;
    this.m_bodyC_0 = ensureNotNull(this.joint1.m_bodyA);
    this.m_bodyA = this.joint1.m_bodyB;
    var xfA = ensureNotNull(this.m_bodyA).m_xf;
    var aA = ensureNotNull(this.m_bodyA).m_sweep.a;
    var xfC = this.m_bodyC_0.m_xf;
    var aC = this.m_bodyC_0.m_sweep.a;
    if (this.m_typeA_0 === JointType$REVOLUTE_getInstance()) {
      var revolute = (tmp$ = def.joint1) == null || Kotlin.isType(tmp$, RevoluteJoint) ? tmp$ : throwCCE();
      this.m_localAnchorC_0.set_z1lo5s$(ensureNotNull(revolute).m_localAnchorA);
      this.m_localAnchorA_0.set_z1lo5s$(revolute.m_localAnchorB);
      this.m_referenceAngleA_0 = revolute.m_referenceAngle;
      this.m_localAxisC_0.setZero();
      coordinateA = aA - aC - this.m_referenceAngleA_0;
    } else {
      var pA = this.pool.popVec2();
      var temp = this.pool.popVec2();
      var prismatic = (tmp$_0 = def.joint1) == null || Kotlin.isType(tmp$_0, PrismaticJoint) ? tmp$_0 : throwCCE();
      this.m_localAnchorC_0.set_z1lo5s$(ensureNotNull(prismatic).m_localAnchorA);
      this.m_localAnchorA_0.set_z1lo5s$(prismatic.m_localAnchorB);
      this.m_referenceAngleA_0 = prismatic.m_referenceAngle;
      this.m_localAxisC_0.set_z1lo5s$(prismatic.m_localXAxisA);
      var pC = this.m_localAnchorC_0;
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(xfA.q, this.m_localAnchorA_0, temp);
      temp.addLocal_z1lo5s$(xfA.p).subLocal_z1lo5s$(xfC.p);
      Rot$Companion_getInstance().mulTransUnsafe_ok1ihx$(xfC.q, temp, pA);
      coordinateA = Vec2$Companion_getInstance().dot_xjacks$(pA.subLocal_z1lo5s$(pC), this.m_localAxisC_0);
      this.pool.pushVec2_za3lpa$(2);
    }
    this.m_bodyD_0 = ensureNotNull(this.joint2.m_bodyA);
    this.m_bodyB = this.joint2.m_bodyB;
    var xfB = ensureNotNull(this.m_bodyB).m_xf;
    var aB = ensureNotNull(this.m_bodyB).m_sweep.a;
    var xfD = this.m_bodyD_0.m_xf;
    var aD = this.m_bodyD_0.m_sweep.a;
    if (this.m_typeB_0 === JointType$REVOLUTE_getInstance()) {
      var revolute_0 = (tmp$_1 = def.joint2) == null || Kotlin.isType(tmp$_1, RevoluteJoint) ? tmp$_1 : throwCCE();
      this.m_localAnchorD_0.set_z1lo5s$(ensureNotNull(revolute_0).m_localAnchorA);
      this.m_localAnchorB_0.set_z1lo5s$(revolute_0.m_localAnchorB);
      this.m_referenceAngleB_0 = revolute_0.m_referenceAngle;
      this.m_localAxisD_0.setZero();
      coordinateB = aB - aD - this.m_referenceAngleB_0;
    } else {
      var pB = this.pool.popVec2();
      var temp_0 = this.pool.popVec2();
      var prismatic_0 = (tmp$_2 = def.joint2) == null || Kotlin.isType(tmp$_2, PrismaticJoint) ? tmp$_2 : throwCCE();
      this.m_localAnchorD_0.set_z1lo5s$(ensureNotNull(prismatic_0).m_localAnchorA);
      this.m_localAnchorB_0.set_z1lo5s$(prismatic_0.m_localAnchorB);
      this.m_referenceAngleB_0 = prismatic_0.m_referenceAngle;
      this.m_localAxisD_0.set_z1lo5s$(prismatic_0.m_localXAxisA);
      var pD = this.m_localAnchorD_0;
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(xfB.q, this.m_localAnchorB_0, temp_0);
      temp_0.addLocal_z1lo5s$(xfB.p).subLocal_z1lo5s$(xfD.p);
      Rot$Companion_getInstance().mulTransUnsafe_ok1ihx$(xfD.q, temp_0, pB);
      coordinateB = Vec2$Companion_getInstance().dot_xjacks$(pB.subLocal_z1lo5s$(pD), this.m_localAxisD_0);
      this.pool.pushVec2_za3lpa$(2);
    }
    this.ratio = def.ratio;
    this.m_constant_0 = coordinateA + this.ratio * coordinateB;
    this.m_impulse_0 = 0.0;
  }
  GearJoint.prototype.getAnchorA_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyA).getWorldPointToOut_xjacks$(this.m_localAnchorA_0, argOut);
  };
  GearJoint.prototype.getAnchorB_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyB).getWorldPointToOut_xjacks$(this.m_localAnchorB_0, argOut);
  };
  GearJoint.prototype.getReactionForce_rrlx6b$ = function (inv_dt, argOut) {
    argOut.set_z1lo5s$(this.m_JvAC_0).mulLocal_mx4ult$(this.m_impulse_0);
    argOut.mulLocal_mx4ult$(inv_dt);
  };
  GearJoint.prototype.getReactionTorque_mx4ult$ = function (inv_dt) {
    var L = this.m_impulse_0 * this.m_JwA_0;
    return inv_dt * L;
  };
  GearJoint.prototype.initVelocityConstraints_giqime$ = function (data) {
    this.m_indexA_0 = ensureNotNull(this.m_bodyA).m_islandIndex;
    this.m_indexB_0 = ensureNotNull(this.m_bodyB).m_islandIndex;
    this.m_indexC_0 = this.m_bodyC_0.m_islandIndex;
    this.m_indexD_0 = this.m_bodyD_0.m_islandIndex;
    this.m_lcA_0.set_z1lo5s$(ensureNotNull(this.m_bodyA).m_sweep.localCenter);
    this.m_lcB_0.set_z1lo5s$(ensureNotNull(this.m_bodyB).m_sweep.localCenter);
    this.m_lcC_0.set_z1lo5s$(this.m_bodyC_0.m_sweep.localCenter);
    this.m_lcD_0.set_z1lo5s$(this.m_bodyD_0.m_sweep.localCenter);
    this.m_mA_0 = ensureNotNull(this.m_bodyA).m_invMass;
    this.m_mB_0 = ensureNotNull(this.m_bodyB).m_invMass;
    this.m_mC_0 = this.m_bodyC_0.m_invMass;
    this.m_mD_0 = this.m_bodyD_0.m_invMass;
    this.m_iA_0 = ensureNotNull(this.m_bodyA).m_invI;
    this.m_iB_0 = ensureNotNull(this.m_bodyB).m_invI;
    this.m_iC_0 = this.m_bodyC_0.m_invI;
    this.m_iD_0 = this.m_bodyD_0.m_invI;
    var aA = ensureNotNull(data.positions)[this.m_indexA_0].a;
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = ensureNotNull(data.velocities)[this.m_indexA_0].w;
    var aB = ensureNotNull(data.positions)[this.m_indexB_0].a;
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var aC = ensureNotNull(data.positions)[this.m_indexC_0].a;
    var vC = ensureNotNull(data.velocities)[this.m_indexC_0].v;
    var wC = ensureNotNull(data.velocities)[this.m_indexC_0].w;
    var aD = ensureNotNull(data.positions)[this.m_indexD_0].a;
    var vD = ensureNotNull(data.velocities)[this.m_indexD_0].v;
    var wD = ensureNotNull(data.velocities)[this.m_indexD_0].w;
    var qA = this.pool.popRot();
    var qB = this.pool.popRot();
    var qC = this.pool.popRot();
    var qD = this.pool.popRot();
    qA.set_mx4ult$(aA);
    qB.set_mx4ult$(aB);
    qC.set_mx4ult$(aC);
    qD.set_mx4ult$(aD);
    this.m_mass_0 = 0.0;
    var temp = this.pool.popVec2();
    if (this.m_typeA_0 === JointType$REVOLUTE_getInstance()) {
      this.m_JvAC_0.setZero();
      this.m_JwA_0 = 1.0;
      this.m_JwC_0 = 1.0;
      this.m_mass_0 += this.m_iA_0 + this.m_iC_0;
    } else {
      var rC = this.pool.popVec2();
      var rA = this.pool.popVec2();
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qC, this.m_localAxisC_0, this.m_JvAC_0);
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qC, temp.set_z1lo5s$(this.m_localAnchorC_0).subLocal_z1lo5s$(this.m_lcC_0), rC);
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, temp.set_z1lo5s$(this.m_localAnchorA_0).subLocal_z1lo5s$(this.m_lcA_0), rA);
      this.m_JwC_0 = Vec2$Companion_getInstance().cross_xjacks$(rC, this.m_JvAC_0);
      this.m_JwA_0 = Vec2$Companion_getInstance().cross_xjacks$(rA, this.m_JvAC_0);
      this.m_mass_0 += this.m_mC_0 + this.m_mA_0 + this.m_iC_0 * this.m_JwC_0 * this.m_JwC_0 + this.m_iA_0 * this.m_JwA_0 * this.m_JwA_0;
      this.pool.pushVec2_za3lpa$(2);
    }
    if (this.m_typeB_0 === JointType$REVOLUTE_getInstance()) {
      this.m_JvBD_0.setZero();
      this.m_JwB_0 = this.ratio;
      this.m_JwD_0 = this.ratio;
      this.m_mass_0 += this.ratio * this.ratio * (this.m_iB_0 + this.m_iD_0);
    } else {
      var u = this.pool.popVec2();
      var rD = this.pool.popVec2();
      var rB = this.pool.popVec2();
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qD, this.m_localAxisD_0, u);
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qD, temp.set_z1lo5s$(this.m_localAnchorD_0).subLocal_z1lo5s$(this.m_lcD_0), rD);
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qB, temp.set_z1lo5s$(this.m_localAnchorB_0).subLocal_z1lo5s$(this.m_lcB_0), rB);
      this.m_JvBD_0.set_z1lo5s$(u).mulLocal_mx4ult$(this.ratio);
      this.m_JwD_0 = this.ratio * Vec2$Companion_getInstance().cross_xjacks$(rD, u);
      this.m_JwB_0 = this.ratio * Vec2$Companion_getInstance().cross_xjacks$(rB, u);
      this.m_mass_0 += this.ratio * this.ratio * (this.m_mD_0 + this.m_mB_0) + this.m_iD_0 * this.m_JwD_0 * this.m_JwD_0 + this.m_iB_0 * this.m_JwB_0 * this.m_JwB_0;
      this.pool.pushVec2_za3lpa$(3);
    }
    this.m_mass_0 = this.m_mass_0 > 0.0 ? 1.0 / this.m_mass_0 : 0.0;
    if (ensureNotNull(data.step).warmStarting) {
      vA.x = vA.x + this.m_mA_0 * this.m_impulse_0 * this.m_JvAC_0.x;
      vA.y = vA.y + this.m_mA_0 * this.m_impulse_0 * this.m_JvAC_0.y;
      wA += this.m_iA_0 * this.m_impulse_0 * this.m_JwA_0;
      vB.x = vB.x + this.m_mB_0 * this.m_impulse_0 * this.m_JvBD_0.x;
      vB.y = vB.y + this.m_mB_0 * this.m_impulse_0 * this.m_JvBD_0.y;
      wB += this.m_iB_0 * this.m_impulse_0 * this.m_JwB_0;
      vC.x = vC.x - this.m_mC_0 * this.m_impulse_0 * this.m_JvAC_0.x;
      vC.y = vC.y - this.m_mC_0 * this.m_impulse_0 * this.m_JvAC_0.y;
      wC -= this.m_iC_0 * this.m_impulse_0 * this.m_JwC_0;
      vD.x = vD.x - this.m_mD_0 * this.m_impulse_0 * this.m_JvBD_0.x;
      vD.y = vD.y - this.m_mD_0 * this.m_impulse_0 * this.m_JvBD_0.y;
      wD -= this.m_iD_0 * this.m_impulse_0 * this.m_JwD_0;
    } else {
      this.m_impulse_0 = 0.0;
    }
    this.pool.pushVec2_za3lpa$(1);
    this.pool.pushRot_za3lpa$(4);
    ensureNotNull(data.velocities)[this.m_indexA_0].w = wA;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
    ensureNotNull(data.velocities)[this.m_indexC_0].w = wC;
    ensureNotNull(data.velocities)[this.m_indexD_0].w = wD;
  };
  GearJoint.prototype.solveVelocityConstraints_giqime$ = function (data) {
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = ensureNotNull(data.velocities)[this.m_indexA_0].w;
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var vC = ensureNotNull(data.velocities)[this.m_indexC_0].v;
    var wC = ensureNotNull(data.velocities)[this.m_indexC_0].w;
    var vD = ensureNotNull(data.velocities)[this.m_indexD_0].v;
    var wD = ensureNotNull(data.velocities)[this.m_indexD_0].w;
    var temp1 = this.pool.popVec2();
    var temp2 = this.pool.popVec2();
    var Cdot = Vec2$Companion_getInstance().dot_xjacks$(this.m_JvAC_0, temp1.set_z1lo5s$(vA).subLocal_z1lo5s$(vC)) + Vec2$Companion_getInstance().dot_xjacks$(this.m_JvBD_0, temp2.set_z1lo5s$(vB).subLocal_z1lo5s$(vD));
    Cdot += this.m_JwA_0 * wA - this.m_JwC_0 * wC + (this.m_JwB_0 * wB - this.m_JwD_0 * wD);
    this.pool.pushVec2_za3lpa$(2);
    var impulse = -this.m_mass_0 * Cdot;
    this.m_impulse_0 += impulse;
    vA.x = vA.x + this.m_mA_0 * impulse * this.m_JvAC_0.x;
    vA.y = vA.y + this.m_mA_0 * impulse * this.m_JvAC_0.y;
    wA += this.m_iA_0 * impulse * this.m_JwA_0;
    vB.x = vB.x + this.m_mB_0 * impulse * this.m_JvBD_0.x;
    vB.y = vB.y + this.m_mB_0 * impulse * this.m_JvBD_0.y;
    wB += this.m_iB_0 * impulse * this.m_JwB_0;
    vC.x = vC.x - this.m_mC_0 * impulse * this.m_JvAC_0.x;
    vC.y = vC.y - this.m_mC_0 * impulse * this.m_JvAC_0.y;
    wC -= this.m_iC_0 * impulse * this.m_JwC_0;
    vD.x = vD.x - this.m_mD_0 * impulse * this.m_JvBD_0.x;
    vD.y = vD.y - this.m_mD_0 * impulse * this.m_JvBD_0.y;
    wD -= this.m_iD_0 * impulse * this.m_JwD_0;
    ensureNotNull(data.velocities)[this.m_indexA_0].w = wA;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
    ensureNotNull(data.velocities)[this.m_indexC_0].w = wC;
    ensureNotNull(data.velocities)[this.m_indexD_0].w = wD;
  };
  GearJoint.prototype.solvePositionConstraints_giqime$ = function (data) {
    var cA = ensureNotNull(data.positions)[this.m_indexA_0].c;
    var aA = ensureNotNull(data.positions)[this.m_indexA_0].a;
    var cB = ensureNotNull(data.positions)[this.m_indexB_0].c;
    var aB = ensureNotNull(data.positions)[this.m_indexB_0].a;
    var cC = ensureNotNull(data.positions)[this.m_indexC_0].c;
    var aC = ensureNotNull(data.positions)[this.m_indexC_0].a;
    var cD = ensureNotNull(data.positions)[this.m_indexD_0].c;
    var aD = ensureNotNull(data.positions)[this.m_indexD_0].a;
    var qA = this.pool.popRot();
    var qB = this.pool.popRot();
    var qC = this.pool.popRot();
    var qD = this.pool.popRot();
    qA.set_mx4ult$(aA);
    qB.set_mx4ult$(aB);
    qC.set_mx4ult$(aC);
    qD.set_mx4ult$(aD);
    var linearError = 0.0;
    var coordinateA;
    var coordinateB;
    var temp = this.pool.popVec2();
    var JvAC = this.pool.popVec2();
    var JvBD = this.pool.popVec2();
    var JwA;
    var JwB;
    var JwC;
    var JwD;
    var mass = 0.0;
    if (this.m_typeA_0 === JointType$REVOLUTE_getInstance()) {
      JvAC.setZero();
      JwA = 1.0;
      JwC = 1.0;
      mass += this.m_iA_0 + this.m_iC_0;
      coordinateA = aA - aC - this.m_referenceAngleA_0;
    } else {
      var rC = this.pool.popVec2();
      var rA = this.pool.popVec2();
      var pC = this.pool.popVec2();
      var pA = this.pool.popVec2();
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qC, this.m_localAxisC_0, JvAC);
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qC, temp.set_z1lo5s$(this.m_localAnchorC_0).subLocal_z1lo5s$(this.m_lcC_0), rC);
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, temp.set_z1lo5s$(this.m_localAnchorA_0).subLocal_z1lo5s$(this.m_lcA_0), rA);
      JwC = Vec2$Companion_getInstance().cross_xjacks$(rC, JvAC);
      JwA = Vec2$Companion_getInstance().cross_xjacks$(rA, JvAC);
      mass += this.m_mC_0 + this.m_mA_0 + this.m_iC_0 * JwC * JwC + this.m_iA_0 * JwA * JwA;
      pC.set_z1lo5s$(this.m_localAnchorC_0).subLocal_z1lo5s$(this.m_lcC_0);
      Rot$Companion_getInstance().mulTransUnsafe_ok1ihx$(qC, temp.set_z1lo5s$(rA).addLocal_z1lo5s$(cA).subLocal_z1lo5s$(cC), pA);
      coordinateA = Vec2$Companion_getInstance().dot_xjacks$(pA.subLocal_z1lo5s$(pC), this.m_localAxisC_0);
      this.pool.pushVec2_za3lpa$(4);
    }
    if (this.m_typeB_0 === JointType$REVOLUTE_getInstance()) {
      JvBD.setZero();
      JwB = this.ratio;
      JwD = this.ratio;
      mass += this.ratio * this.ratio * (this.m_iB_0 + this.m_iD_0);
      coordinateB = aB - aD - this.m_referenceAngleB_0;
    } else {
      var u = this.pool.popVec2();
      var rD = this.pool.popVec2();
      var rB = this.pool.popVec2();
      var pD = this.pool.popVec2();
      var pB = this.pool.popVec2();
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qD, this.m_localAxisD_0, u);
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qD, temp.set_z1lo5s$(this.m_localAnchorD_0).subLocal_z1lo5s$(this.m_lcD_0), rD);
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qB, temp.set_z1lo5s$(this.m_localAnchorB_0).subLocal_z1lo5s$(this.m_lcB_0), rB);
      JvBD.set_z1lo5s$(u).mulLocal_mx4ult$(this.ratio);
      JwD = Vec2$Companion_getInstance().cross_xjacks$(rD, u);
      JwB = Vec2$Companion_getInstance().cross_xjacks$(rB, u);
      mass += this.ratio * this.ratio * (this.m_mD_0 + this.m_mB_0) + this.m_iD_0 * JwD * JwD + this.m_iB_0 * JwB * JwB;
      pD.set_z1lo5s$(this.m_localAnchorD_0).subLocal_z1lo5s$(this.m_lcD_0);
      Rot$Companion_getInstance().mulTransUnsafe_ok1ihx$(qD, temp.set_z1lo5s$(rB).addLocal_z1lo5s$(cB).subLocal_z1lo5s$(cD), pB);
      coordinateB = Vec2$Companion_getInstance().dot_xjacks$(pB.subLocal_z1lo5s$(pD), this.m_localAxisD_0);
      this.pool.pushVec2_za3lpa$(5);
    }
    var C = coordinateA + this.ratio * coordinateB - this.m_constant_0;
    var impulse = 0.0;
    if (mass > 0.0) {
      impulse = -C / mass;
    }this.pool.pushVec2_za3lpa$(3);
    this.pool.pushRot_za3lpa$(4);
    cA.x = cA.x + this.m_mA_0 * impulse * JvAC.x;
    cA.y = cA.y + this.m_mA_0 * impulse * JvAC.y;
    aA += this.m_iA_0 * impulse * JwA;
    cB.x = cB.x + this.m_mB_0 * impulse * JvBD.x;
    cB.y = cB.y + this.m_mB_0 * impulse * JvBD.y;
    aB += this.m_iB_0 * impulse * JwB;
    cC.x = cC.x - this.m_mC_0 * impulse * JvAC.x;
    cC.y = cC.y - this.m_mC_0 * impulse * JvAC.y;
    aC -= this.m_iC_0 * impulse * JwC;
    cD.x = cD.x - this.m_mD_0 * impulse * JvBD.x;
    cD.y = cD.y - this.m_mD_0 * impulse * JvBD.y;
    aD -= this.m_iD_0 * impulse * JwD;
    ensureNotNull(data.positions)[this.m_indexA_0].a = aA;
    ensureNotNull(data.positions)[this.m_indexB_0].a = aB;
    ensureNotNull(data.positions)[this.m_indexC_0].a = aC;
    ensureNotNull(data.positions)[this.m_indexD_0].a = aD;
    return linearError < Settings_getInstance().linearSlop;
  };
  GearJoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GearJoint',
    interfaces: [Joint]
  };
  function GearJointDef() {
    JointDef.call(this, JointType$GEAR_getInstance());
    this.joint1 = null;
    this.joint2 = null;
    this.ratio = 0.0;
  }
  GearJointDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GearJointDef',
    interfaces: [JointDef]
  };
  function Jacobian() {
    this.linearA = new Vec2();
    this.angularA = 0.0;
    this.angularB = 0.0;
  }
  Jacobian.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Jacobian',
    interfaces: []
  };
  function Joint(pool, def) {
    Joint$Companion_getInstance();
    this.pool = pool;
    this.$delegate_atyahe$_0 = new Box2dTypedUserData$Mixin();
    this._type = null;
    this.m_prev = null;
    this.m_next = null;
    this.m_edgeA = null;
    this.m_edgeB = null;
    this.m_bodyA = null;
    this.m_bodyB = null;
    this.m_islandFlag = false;
    this._collideConnected = false;
    this.userData = null;
    if (!(def.bodyA !== def.bodyB)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }this._type = def.type;
    this.m_prev = null;
    this.m_next = null;
    this.m_bodyA = def.bodyA;
    this.m_bodyB = def.bodyB;
    this._collideConnected = def.collideConnected;
    this.m_islandFlag = false;
    this.userData = def.userData;
    this.m_edgeA = new JointEdge();
    this.m_edgeA.joint = null;
    this.m_edgeA.other = null;
    this.m_edgeA.prev = null;
    this.m_edgeA.next = null;
    this.m_edgeB = new JointEdge();
    this.m_edgeB.joint = null;
    this.m_edgeB.other = null;
    this.m_edgeB.prev = null;
    this.m_edgeB.next = null;
  }
  Joint.prototype.getType = function () {
    return this._type;
  };
  Joint.prototype.getNext = function () {
    return this.m_next;
  };
  Joint.prototype.getBodyA = function () {
    return this.m_bodyA;
  };
  Joint.prototype.getBodyB = function () {
    return this.m_bodyB;
  };
  Joint.prototype.getCollideConnected = function () {
    return this._collideConnected;
  };
  Object.defineProperty(Joint.prototype, 'isActive', {
    get: function () {
      return ensureNotNull(this.m_bodyA).isActive && ensureNotNull(this.m_bodyB).isActive;
    }
  });
  Joint.prototype.destructor = function () {
  };
  function Joint$Companion() {
    Joint$Companion_instance = this;
  }
  Joint$Companion.prototype.create_ihqup8$ = function (world, def) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
    switch (def.type.name) {
      case 'MOUSE':
        return new MouseJoint(world.pool, Kotlin.isType(tmp$ = def, MouseJointDef) ? tmp$ : throwCCE());
      case 'DISTANCE':
        return new DistanceJoint(world.pool, Kotlin.isType(tmp$_0 = def, DistanceJointDef) ? tmp$_0 : throwCCE());
      case 'PRISMATIC':
        return new PrismaticJoint(world.pool, Kotlin.isType(tmp$_1 = def, PrismaticJointDef) ? tmp$_1 : throwCCE());
      case 'REVOLUTE':
        return new RevoluteJoint(world.pool, Kotlin.isType(tmp$_2 = def, RevoluteJointDef) ? tmp$_2 : throwCCE());
      case 'WELD':
        return new WeldJoint(world.pool, Kotlin.isType(tmp$_3 = def, WeldJointDef) ? tmp$_3 : throwCCE());
      case 'FRICTION':
        return new FrictionJoint(world.pool, Kotlin.isType(tmp$_4 = def, FrictionJointDef) ? tmp$_4 : throwCCE());
      case 'WHEEL':
        return new WheelJoint(world.pool, Kotlin.isType(tmp$_5 = def, WheelJointDef) ? tmp$_5 : throwCCE());
      case 'GEAR':
        return new GearJoint(world.pool, Kotlin.isType(tmp$_6 = def, GearJointDef) ? tmp$_6 : throwCCE());
      case 'PULLEY':
        return new PulleyJoint(world.pool, Kotlin.isType(tmp$_7 = def, PulleyJointDef) ? tmp$_7 : throwCCE());
      case 'CONSTANT_VOLUME':
        return new ConstantVolumeJoint(world, Kotlin.isType(tmp$_8 = def, ConstantVolumeJointDef) ? tmp$_8 : throwCCE());
      case 'ROPE':
        return new RopeJoint(world.pool, Kotlin.isType(tmp$_9 = def, RopeJointDef) ? tmp$_9 : throwCCE());
      case 'MOTOR':
        return new MotorJoint(world.pool, Kotlin.isType(tmp$_10 = def, MotorJointDef) ? tmp$_10 : throwCCE());
      case 'UNKNOWN':
        return null;
      default:return null;
    }
  };
  Joint$Companion.prototype.destroy_atyahe$ = function (joint) {
    joint.destructor();
  };
  Joint$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Joint$Companion_instance = null;
  function Joint$Companion_getInstance() {
    if (Joint$Companion_instance === null) {
      new Joint$Companion();
    }return Joint$Companion_instance;
  }
  Joint.prototype.contains_d2xgsj$ = function (key) {
    return this.$delegate_atyahe$_0.contains_d2xgsj$(key);
  };
  Joint.prototype.get_d2xgsj$ = function (key) {
    return this.$delegate_atyahe$_0.get_d2xgsj$(key);
  };
  Joint.prototype.set_kj97s6$ = function (key, value) {
    return this.$delegate_atyahe$_0.set_kj97s6$(key, value);
  };
  Joint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Joint',
    interfaces: [Box2dTypedUserData]
  };
  function JointDef(type) {
    this.type = type;
    this.$delegate_35691l$_0 = new Box2dTypedUserData$Mixin();
    this.userData = null;
    this.bodyA = null;
    this.bodyB = null;
    this.collideConnected = false;
  }
  JointDef.prototype.contains_d2xgsj$ = function (key) {
    return this.$delegate_35691l$_0.contains_d2xgsj$(key);
  };
  JointDef.prototype.get_d2xgsj$ = function (key) {
    return this.$delegate_35691l$_0.get_d2xgsj$(key);
  };
  JointDef.prototype.set_kj97s6$ = function (key, value) {
    return this.$delegate_35691l$_0.set_kj97s6$(key, value);
  };
  JointDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JointDef',
    interfaces: [Box2dTypedUserData]
  };
  function JointEdge() {
    this.other = null;
    this.joint = null;
    this.prev = null;
    this.next = null;
  }
  JointEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JointEdge',
    interfaces: []
  };
  function JointType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function JointType_initFields() {
    JointType_initFields = function () {
    };
    JointType$UNKNOWN_instance = new JointType('UNKNOWN', 0);
    JointType$REVOLUTE_instance = new JointType('REVOLUTE', 1);
    JointType$PRISMATIC_instance = new JointType('PRISMATIC', 2);
    JointType$DISTANCE_instance = new JointType('DISTANCE', 3);
    JointType$PULLEY_instance = new JointType('PULLEY', 4);
    JointType$MOUSE_instance = new JointType('MOUSE', 5);
    JointType$GEAR_instance = new JointType('GEAR', 6);
    JointType$WHEEL_instance = new JointType('WHEEL', 7);
    JointType$WELD_instance = new JointType('WELD', 8);
    JointType$FRICTION_instance = new JointType('FRICTION', 9);
    JointType$ROPE_instance = new JointType('ROPE', 10);
    JointType$CONSTANT_VOLUME_instance = new JointType('CONSTANT_VOLUME', 11);
    JointType$MOTOR_instance = new JointType('MOTOR', 12);
  }
  var JointType$UNKNOWN_instance;
  function JointType$UNKNOWN_getInstance() {
    JointType_initFields();
    return JointType$UNKNOWN_instance;
  }
  var JointType$REVOLUTE_instance;
  function JointType$REVOLUTE_getInstance() {
    JointType_initFields();
    return JointType$REVOLUTE_instance;
  }
  var JointType$PRISMATIC_instance;
  function JointType$PRISMATIC_getInstance() {
    JointType_initFields();
    return JointType$PRISMATIC_instance;
  }
  var JointType$DISTANCE_instance;
  function JointType$DISTANCE_getInstance() {
    JointType_initFields();
    return JointType$DISTANCE_instance;
  }
  var JointType$PULLEY_instance;
  function JointType$PULLEY_getInstance() {
    JointType_initFields();
    return JointType$PULLEY_instance;
  }
  var JointType$MOUSE_instance;
  function JointType$MOUSE_getInstance() {
    JointType_initFields();
    return JointType$MOUSE_instance;
  }
  var JointType$GEAR_instance;
  function JointType$GEAR_getInstance() {
    JointType_initFields();
    return JointType$GEAR_instance;
  }
  var JointType$WHEEL_instance;
  function JointType$WHEEL_getInstance() {
    JointType_initFields();
    return JointType$WHEEL_instance;
  }
  var JointType$WELD_instance;
  function JointType$WELD_getInstance() {
    JointType_initFields();
    return JointType$WELD_instance;
  }
  var JointType$FRICTION_instance;
  function JointType$FRICTION_getInstance() {
    JointType_initFields();
    return JointType$FRICTION_instance;
  }
  var JointType$ROPE_instance;
  function JointType$ROPE_getInstance() {
    JointType_initFields();
    return JointType$ROPE_instance;
  }
  var JointType$CONSTANT_VOLUME_instance;
  function JointType$CONSTANT_VOLUME_getInstance() {
    JointType_initFields();
    return JointType$CONSTANT_VOLUME_instance;
  }
  var JointType$MOTOR_instance;
  function JointType$MOTOR_getInstance() {
    JointType_initFields();
    return JointType$MOTOR_instance;
  }
  JointType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JointType',
    interfaces: [Enum]
  };
  function JointType$values() {
    return [JointType$UNKNOWN_getInstance(), JointType$REVOLUTE_getInstance(), JointType$PRISMATIC_getInstance(), JointType$DISTANCE_getInstance(), JointType$PULLEY_getInstance(), JointType$MOUSE_getInstance(), JointType$GEAR_getInstance(), JointType$WHEEL_getInstance(), JointType$WELD_getInstance(), JointType$FRICTION_getInstance(), JointType$ROPE_getInstance(), JointType$CONSTANT_VOLUME_getInstance(), JointType$MOTOR_getInstance()];
  }
  JointType.values = JointType$values;
  function JointType$valueOf(name) {
    switch (name) {
      case 'UNKNOWN':
        return JointType$UNKNOWN_getInstance();
      case 'REVOLUTE':
        return JointType$REVOLUTE_getInstance();
      case 'PRISMATIC':
        return JointType$PRISMATIC_getInstance();
      case 'DISTANCE':
        return JointType$DISTANCE_getInstance();
      case 'PULLEY':
        return JointType$PULLEY_getInstance();
      case 'MOUSE':
        return JointType$MOUSE_getInstance();
      case 'GEAR':
        return JointType$GEAR_getInstance();
      case 'WHEEL':
        return JointType$WHEEL_getInstance();
      case 'WELD':
        return JointType$WELD_getInstance();
      case 'FRICTION':
        return JointType$FRICTION_getInstance();
      case 'ROPE':
        return JointType$ROPE_getInstance();
      case 'CONSTANT_VOLUME':
        return JointType$CONSTANT_VOLUME_getInstance();
      case 'MOTOR':
        return JointType$MOTOR_getInstance();
      default:throwISE('No enum constant org.jbox2d.dynamics.joints.JointType.' + name);
    }
  }
  JointType.valueOf_61zpoe$ = JointType$valueOf;
  function LimitState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LimitState_initFields() {
    LimitState_initFields = function () {
    };
    LimitState$INACTIVE_instance = new LimitState('INACTIVE', 0);
    LimitState$AT_LOWER_instance = new LimitState('AT_LOWER', 1);
    LimitState$AT_UPPER_instance = new LimitState('AT_UPPER', 2);
    LimitState$EQUAL_instance = new LimitState('EQUAL', 3);
  }
  var LimitState$INACTIVE_instance;
  function LimitState$INACTIVE_getInstance() {
    LimitState_initFields();
    return LimitState$INACTIVE_instance;
  }
  var LimitState$AT_LOWER_instance;
  function LimitState$AT_LOWER_getInstance() {
    LimitState_initFields();
    return LimitState$AT_LOWER_instance;
  }
  var LimitState$AT_UPPER_instance;
  function LimitState$AT_UPPER_getInstance() {
    LimitState_initFields();
    return LimitState$AT_UPPER_instance;
  }
  var LimitState$EQUAL_instance;
  function LimitState$EQUAL_getInstance() {
    LimitState_initFields();
    return LimitState$EQUAL_instance;
  }
  LimitState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LimitState',
    interfaces: [Enum]
  };
  function LimitState$values() {
    return [LimitState$INACTIVE_getInstance(), LimitState$AT_LOWER_getInstance(), LimitState$AT_UPPER_getInstance(), LimitState$EQUAL_getInstance()];
  }
  LimitState.values = LimitState$values;
  function LimitState$valueOf(name) {
    switch (name) {
      case 'INACTIVE':
        return LimitState$INACTIVE_getInstance();
      case 'AT_LOWER':
        return LimitState$AT_LOWER_getInstance();
      case 'AT_UPPER':
        return LimitState$AT_UPPER_getInstance();
      case 'EQUAL':
        return LimitState$EQUAL_getInstance();
      default:throwISE('No enum constant org.jbox2d.dynamics.joints.LimitState.' + name);
    }
  }
  LimitState.valueOf_61zpoe$ = LimitState$valueOf;
  function MotorJoint(pool, def) {
    Joint.call(this, pool, def);
    this.linearOffset_gn88rf$_0 = new Vec2();
    this.m_angularOffset_0 = def.angularOffset;
    this.m_linearImpulse_0 = new Vec2();
    this.m_angularImpulse_0 = 0.0;
    this.m_maxForce_0 = def.maxForce;
    this.m_maxTorque_0 = def.maxTorque;
    this.correctionFactor = def.correctionFactor;
    this.m_indexA_0 = 0;
    this.m_indexB_0 = 0;
    this.m_rA_0 = new Vec2();
    this.m_rB_0 = new Vec2();
    this.m_localCenterA_0 = new Vec2();
    this.m_localCenterB_0 = new Vec2();
    this.m_linearError_0 = new Vec2();
    this.m_angularError_0 = 0;
    this.m_invMassA_0 = 0;
    this.m_invMassB_0 = 0;
    this.m_invIA_0 = 0;
    this.m_invIB_0 = 0;
    this.m_linearMass_0 = Mat22_init();
    this.m_angularMass_0 = 0;
    this.linearOffset.set_z1lo5s$(def.linearOffset);
  }
  Object.defineProperty(MotorJoint.prototype, 'linearOffset', {
    get: function () {
      return this.linearOffset_gn88rf$_0;
    },
    set: function (linearOffset) {
      if (linearOffset.x !== this.linearOffset.x || linearOffset.y !== this.linearOffset.y) {
        ensureNotNull(this.m_bodyA).isAwake = true;
        ensureNotNull(this.m_bodyB).isAwake = true;
        this.linearOffset.set_z1lo5s$(linearOffset);
      }}
  });
  Object.defineProperty(MotorJoint.prototype, 'angularOffset', {
    get: function () {
      return this.m_angularOffset_0;
    },
    set: function (angularOffset) {
      if (angularOffset !== this.m_angularOffset_0) {
        ensureNotNull(this.m_bodyA).isAwake = true;
        ensureNotNull(this.m_bodyB).isAwake = true;
        this.m_angularOffset_0 = angularOffset;
      }}
  });
  Object.defineProperty(MotorJoint.prototype, 'maxForce', {
    get: function () {
      return this.m_maxForce_0;
    },
    set: function (force) {
      if (!(force >= 0.0)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }this.m_maxForce_0 = force;
    }
  });
  Object.defineProperty(MotorJoint.prototype, 'maxTorque', {
    get: function () {
      return this.m_maxTorque_0;
    },
    set: function (torque) {
      if (!(torque >= 0.0)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }this.m_maxTorque_0 = torque;
    }
  });
  MotorJoint.prototype.getAnchorA_z1lo5s$ = function (out) {
    out.set_z1lo5s$(ensureNotNull(this.m_bodyA).position);
  };
  MotorJoint.prototype.getAnchorB_z1lo5s$ = function (out) {
    out.set_z1lo5s$(ensureNotNull(this.m_bodyB).position);
  };
  MotorJoint.prototype.getReactionForce_rrlx6b$ = function (inv_dt, out) {
    out.set_z1lo5s$(this.m_linearImpulse_0).mulLocal_mx4ult$(inv_dt);
  };
  MotorJoint.prototype.getReactionTorque_mx4ult$ = function (inv_dt) {
    return this.m_angularImpulse_0 * inv_dt;
  };
  MotorJoint.prototype.getLinearOffset_z1lo5s$ = function (out) {
    out.set_z1lo5s$(this.linearOffset);
  };
  MotorJoint.prototype.initVelocityConstraints_giqime$ = function (data) {
    this.m_indexA_0 = ensureNotNull(this.m_bodyA).m_islandIndex;
    this.m_indexB_0 = ensureNotNull(this.m_bodyB).m_islandIndex;
    this.m_localCenterA_0.set_z1lo5s$(ensureNotNull(this.m_bodyA).m_sweep.localCenter);
    this.m_localCenterB_0.set_z1lo5s$(ensureNotNull(this.m_bodyB).m_sweep.localCenter);
    this.m_invMassA_0 = ensureNotNull(this.m_bodyA).m_invMass;
    this.m_invMassB_0 = ensureNotNull(this.m_bodyB).m_invMass;
    this.m_invIA_0 = ensureNotNull(this.m_bodyA).m_invI;
    this.m_invIB_0 = ensureNotNull(this.m_bodyB).m_invI;
    var cA = ensureNotNull(data.positions)[this.m_indexA_0].c;
    var aA = ensureNotNull(data.positions)[this.m_indexA_0].a;
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = ensureNotNull(data.velocities)[this.m_indexA_0].w;
    var cB = ensureNotNull(data.positions)[this.m_indexB_0].c;
    var aB = ensureNotNull(data.positions)[this.m_indexB_0].a;
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var qA = this.pool.popRot();
    var qB = this.pool.popRot();
    var temp = this.pool.popVec2();
    var K = this.pool.popMat22();
    qA.set_mx4ult$(aA);
    qB.set_mx4ult$(aB);
    this.m_rA_0.x = qA.c * -this.m_localCenterA_0.x - qA.s * -this.m_localCenterA_0.y;
    this.m_rA_0.y = qA.s * -this.m_localCenterA_0.x + qA.c * -this.m_localCenterA_0.y;
    this.m_rB_0.x = qB.c * -this.m_localCenterB_0.x - qB.s * -this.m_localCenterB_0.y;
    this.m_rB_0.y = qB.s * -this.m_localCenterB_0.x + qB.c * -this.m_localCenterB_0.y;
    var mA = this.m_invMassA_0;
    var mB = this.m_invMassB_0;
    var iA = this.m_invIA_0;
    var iB = this.m_invIB_0;
    K.ex.x = mA + mB + iA * this.m_rA_0.y * this.m_rA_0.y + iB * this.m_rB_0.y * this.m_rB_0.y;
    K.ex.y = -iA * this.m_rA_0.x * this.m_rA_0.y - iB * this.m_rB_0.x * this.m_rB_0.y;
    K.ey.x = K.ex.y;
    K.ey.y = mA + mB + iA * this.m_rA_0.x * this.m_rA_0.x + iB * this.m_rB_0.x * this.m_rB_0.x;
    K.invertToOut_krympa$(this.m_linearMass_0);
    this.m_angularMass_0 = iA + iB;
    if (this.m_angularMass_0 > 0.0) {
      this.m_angularMass_0 = 1.0 / this.m_angularMass_0;
    }Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, this.linearOffset, temp);
    this.m_linearError_0.x = cB.x + this.m_rB_0.x - cA.x - this.m_rA_0.x - temp.x;
    this.m_linearError_0.y = cB.y + this.m_rB_0.y - cA.y - this.m_rA_0.y - temp.y;
    this.m_angularError_0 = aB - aA - this.m_angularOffset_0;
    if (ensureNotNull(data.step).warmStarting) {
      this.m_linearImpulse_0.x = this.m_linearImpulse_0.x * ensureNotNull(data.step).dtRatio;
      this.m_linearImpulse_0.y = this.m_linearImpulse_0.y * ensureNotNull(data.step).dtRatio;
      this.m_angularImpulse_0 *= ensureNotNull(data.step).dtRatio;
      var P = this.m_linearImpulse_0;
      vA.x = vA.x - mA * P.x;
      vA.y = vA.y - mA * P.y;
      wA -= iA * (this.m_rA_0.x * P.y - this.m_rA_0.y * P.x + this.m_angularImpulse_0);
      vB.x = vB.x + mB * P.x;
      vB.y = vB.y + mB * P.y;
      wB += iB * (this.m_rB_0.x * P.y - this.m_rB_0.y * P.x + this.m_angularImpulse_0);
    } else {
      this.m_linearImpulse_0.setZero();
      this.m_angularImpulse_0 = 0.0;
    }
    this.pool.pushVec2_za3lpa$(1);
    this.pool.pushMat22_za3lpa$(1);
    this.pool.pushRot_za3lpa$(2);
    ensureNotNull(data.velocities)[this.m_indexA_0].w = wA;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
  };
  MotorJoint.prototype.solveVelocityConstraints_giqime$ = function (data) {
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = {v: ensureNotNull(data.velocities)[this.m_indexA_0].w};
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = {v: ensureNotNull(data.velocities)[this.m_indexB_0].w};
    var mA = this.m_invMassA_0;
    var mB = this.m_invMassB_0;
    var iA = this.m_invIA_0;
    var iB = this.m_invIB_0;
    var h = ensureNotNull(data.step).dt;
    var inv_h = ensureNotNull(data.step).inv_dt;
    var temp = this.pool.popVec2();
    var Cdot = wB.v - wA.v + inv_h * this.correctionFactor * this.m_angularError_0;
    var impulse = -this.m_angularMass_0 * Cdot;
    var oldImpulse = this.m_angularImpulse_0;
    var maxImpulse = h * this.m_maxTorque_0;
    this.m_angularImpulse_0 = MathUtils$Companion_getInstance().clamp_y2kzbl$(this.m_angularImpulse_0 + impulse, -maxImpulse, maxImpulse);
    impulse = this.m_angularImpulse_0 - oldImpulse;
    wA.v -= iA * impulse;
    wB.v += iB * impulse;
    var Cdot_0 = this.pool.popVec2();
    Cdot_0.x = vB.x + -wB.v * this.m_rB_0.y - vA.x - -wA.v * this.m_rA_0.y + inv_h * this.correctionFactor * this.m_linearError_0.x;
    Cdot_0.y = vB.y + wB.v * this.m_rB_0.x - vA.y - wA.v * this.m_rA_0.x + inv_h * this.correctionFactor * this.m_linearError_0.y;
    var impulse_0 = temp;
    Mat22$Companion_getInstance().mulToOutUnsafe_q2b3pu$(this.m_linearMass_0, Cdot_0, impulse_0);
    impulse_0.negateLocal();
    var oldImpulse_0 = this.pool.popVec2();
    oldImpulse_0.set_z1lo5s$(this.m_linearImpulse_0);
    this.m_linearImpulse_0.addLocal_z1lo5s$(impulse_0);
    var maxImpulse_0 = h * this.m_maxForce_0;
    if (this.m_linearImpulse_0.lengthSquared() > maxImpulse_0 * maxImpulse_0) {
      this.m_linearImpulse_0.normalize();
      this.m_linearImpulse_0.mulLocal_mx4ult$(maxImpulse_0);
    }impulse_0.x = this.m_linearImpulse_0.x - oldImpulse_0.x;
    impulse_0.y = this.m_linearImpulse_0.y - oldImpulse_0.y;
    vA.x = vA.x - mA * impulse_0.x;
    vA.y = vA.y - mA * impulse_0.y;
    wA.v -= iA * (this.m_rA_0.x * impulse_0.y - this.m_rA_0.y * impulse_0.x);
    vB.x = vB.x + mB * impulse_0.x;
    vB.y = vB.y + mB * impulse_0.y;
    wB.v += iB * (this.m_rB_0.x * impulse_0.y - this.m_rB_0.y * impulse_0.x);
    this.pool.pushVec2_za3lpa$(3);
    ensureNotNull(data.velocities)[this.m_indexA_0].w = wA.v;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB.v;
  };
  MotorJoint.prototype.solvePositionConstraints_giqime$ = function (data) {
    return true;
  };
  MotorJoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MotorJoint',
    interfaces: [Joint]
  };
  function MotorJointDef() {
    JointDef.call(this, JointType$MOTOR_getInstance());
    this.linearOffset = new Vec2();
    this.angularOffset = 0.0;
    this.maxForce = 1.0;
    this.maxTorque = 1.0;
    this.correctionFactor = 0.3;
  }
  MotorJointDef.prototype.initialize_eu95dg$ = function (bA, bB) {
    this.bodyA = bA;
    this.bodyB = bB;
    var xB = ensureNotNull(this.bodyB).position;
    ensureNotNull(this.bodyA).getLocalPointToOut_xjacks$(xB, this.linearOffset);
    var angleA = ensureNotNull(this.bodyA).angle;
    var angleB = ensureNotNull(this.bodyB).angle;
    this.angularOffset = angleB - angleA;
  };
  MotorJointDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MotorJointDef',
    interfaces: [JointDef]
  };
  function MouseJoint(argWorld, def) {
    Joint.call(this, argWorld, def);
    this.m_localAnchorB_0 = new Vec2();
    this.target_bp22xo$_0 = new Vec2();
    this.frequency = 0;
    this.dampingRatio = 0;
    this.m_beta_0 = 0;
    this.m_impulse_0 = new Vec2();
    this.maxForce = 0;
    this.m_gamma_0 = 0;
    this.m_indexB_0 = 0;
    this.m_rB_0 = new Vec2();
    this.m_localCenterB_0 = new Vec2();
    this.m_invMassB_0 = 0;
    this.m_invIB_0 = 0;
    this.m_mass_0 = Mat22_init();
    this.m_C_0 = new Vec2();
    if (!def.target.isValid) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(def.maxForce >= 0)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }if (!(def.frequencyHz >= 0)) {
      var message_1 = 'Check failed.';
      throw IllegalStateException_init(message_1.toString());
    }if (!(def.dampingRatio >= 0)) {
      var message_2 = 'Check failed.';
      throw IllegalStateException_init(message_2.toString());
    }this.target.set_z1lo5s$(def.target);
    Transform$Companion_getInstance().mulTransToOutUnsafe_r18ri2$(ensureNotNull(this.m_bodyB).m_xf, this.target, this.m_localAnchorB_0);
    this.maxForce = def.maxForce;
    this.m_impulse_0.setZero();
    this.frequency = def.frequencyHz;
    this.dampingRatio = def.dampingRatio;
    this.m_beta_0 = 0.0;
    this.m_gamma_0 = 0.0;
  }
  Object.defineProperty(MouseJoint.prototype, 'target', {
    get: function () {
      return this.target_bp22xo$_0;
    },
    set: function (target) {
      if (ensureNotNull(this.m_bodyB).isAwake === false) {
        ensureNotNull(this.m_bodyB).isAwake = true;
      }this.target.set_z1lo5s$(target);
    }
  });
  MouseJoint.prototype.getAnchorA_z1lo5s$ = function (argOut) {
    argOut.set_z1lo5s$(this.target);
  };
  MouseJoint.prototype.getAnchorB_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyB).getWorldPointToOut_xjacks$(this.m_localAnchorB_0, argOut);
  };
  MouseJoint.prototype.getReactionForce_rrlx6b$ = function (invDt, argOut) {
    argOut.set_z1lo5s$(this.m_impulse_0).mulLocal_mx4ult$(invDt);
  };
  MouseJoint.prototype.getReactionTorque_mx4ult$ = function (invDt) {
    return invDt * 0.0;
  };
  MouseJoint.prototype.initVelocityConstraints_giqime$ = function (data) {
    this.m_indexB_0 = ensureNotNull(this.m_bodyB).m_islandIndex;
    this.m_localCenterB_0.set_z1lo5s$(ensureNotNull(this.m_bodyB).m_sweep.localCenter);
    this.m_invMassB_0 = ensureNotNull(this.m_bodyB).m_invMass;
    this.m_invIB_0 = ensureNotNull(this.m_bodyB).m_invI;
    var cB = ensureNotNull(data.positions)[this.m_indexB_0].c;
    var aB = ensureNotNull(data.positions)[this.m_indexB_0].a;
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var qB = this.pool.popRot();
    qB.set_mx4ult$(aB);
    var mass = ensureNotNull(this.m_bodyB).m_mass;
    var omega = 2.0 * MathUtils$Companion_getInstance().PI * this.frequency;
    var d = 2.0 * mass * this.dampingRatio * omega;
    var k = mass * (omega * omega);
    var h = ensureNotNull(data.step).dt;
    if (!(d + h * k > Settings_getInstance().EPSILON)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }this.m_gamma_0 = h * (d + h * k);
    if (this.m_gamma_0 !== 0.0) {
      this.m_gamma_0 = 1.0 / this.m_gamma_0;
    }this.m_beta_0 = h * k * this.m_gamma_0;
    var temp = this.pool.popVec2();
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qB, temp.set_z1lo5s$(this.m_localAnchorB_0).subLocal_z1lo5s$(this.m_localCenterB_0), this.m_rB_0);
    var K = this.pool.popMat22();
    K.ex.x = this.m_invMassB_0 + this.m_invIB_0 * this.m_rB_0.y * this.m_rB_0.y + this.m_gamma_0;
    K.ex.y = -this.m_invIB_0 * this.m_rB_0.x * this.m_rB_0.y;
    K.ey.x = K.ex.y;
    K.ey.y = this.m_invMassB_0 + this.m_invIB_0 * this.m_rB_0.x * this.m_rB_0.x + this.m_gamma_0;
    K.invertToOut_krympa$(this.m_mass_0);
    this.m_C_0.set_z1lo5s$(cB).addLocal_z1lo5s$(this.m_rB_0).subLocal_z1lo5s$(this.target);
    this.m_C_0.mulLocal_mx4ult$(this.m_beta_0);
    wB *= 0.98;
    if (ensureNotNull(data.step).warmStarting) {
      this.m_impulse_0.mulLocal_mx4ult$(ensureNotNull(data.step).dtRatio);
      vB.x = vB.x + this.m_invMassB_0 * this.m_impulse_0.x;
      vB.y = vB.y + this.m_invMassB_0 * this.m_impulse_0.y;
      wB += this.m_invIB_0 * Vec2$Companion_getInstance().cross_xjacks$(this.m_rB_0, this.m_impulse_0);
    } else {
      this.m_impulse_0.setZero();
    }
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
    this.pool.pushVec2_za3lpa$(1);
    this.pool.pushMat22_za3lpa$(1);
    this.pool.pushRot_za3lpa$(1);
  };
  MouseJoint.prototype.solvePositionConstraints_giqime$ = function (data) {
    return true;
  };
  MouseJoint.prototype.solveVelocityConstraints_giqime$ = function (data) {
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var Cdot = this.pool.popVec2();
    Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wB, this.m_rB_0, Cdot);
    Cdot.addLocal_z1lo5s$(vB);
    var impulse = this.pool.popVec2();
    var temp = this.pool.popVec2();
    temp.set_z1lo5s$(this.m_impulse_0).mulLocal_mx4ult$(this.m_gamma_0).addLocal_z1lo5s$(this.m_C_0).addLocal_z1lo5s$(Cdot).negateLocal();
    Mat22$Companion_getInstance().mulToOutUnsafe_q2b3pu$(this.m_mass_0, temp, impulse);
    var oldImpulse = temp;
    oldImpulse.set_z1lo5s$(this.m_impulse_0);
    this.m_impulse_0.addLocal_z1lo5s$(impulse);
    var maxImpulse = ensureNotNull(data.step).dt * this.maxForce;
    if (this.m_impulse_0.lengthSquared() > maxImpulse * maxImpulse) {
      this.m_impulse_0.mulLocal_mx4ult$(maxImpulse / this.m_impulse_0.length());
    }impulse.set_z1lo5s$(this.m_impulse_0).subLocal_z1lo5s$(oldImpulse);
    vB.x = vB.x + this.m_invMassB_0 * impulse.x;
    vB.y = vB.y + this.m_invMassB_0 * impulse.y;
    wB += this.m_invIB_0 * Vec2$Companion_getInstance().cross_xjacks$(this.m_rB_0, impulse);
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
    this.pool.pushVec2_za3lpa$(3);
  };
  MouseJoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseJoint',
    interfaces: [Joint]
  };
  function MouseJointDef() {
    JointDef.call(this, JointType$MOUSE_getInstance());
    this.target = new Vec2(0.0, 0.0);
    this.maxForce = 0.0;
    this.frequencyHz = 0.5;
    this.dampingRatio = 0.7;
  }
  MouseJointDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseJointDef',
    interfaces: [JointDef]
  };
  function PrismaticJoint(argWorld, def) {
    Joint.call(this, argWorld, def);
    this.m_localAnchorA = Vec2_init(def.localAnchorA);
    this.m_localAnchorB = Vec2_init(def.localAnchorB);
    this.m_localXAxisA = Vec2_init(def.localAxisA);
    this.m_localYAxisA_0 = new Vec2();
    this.m_referenceAngle_xx65gq$_0 = 0;
    this.m_impulse_0 = new Vec3();
    this.m_motorImpulse_0 = 0;
    this.lowerLimit_9pehu2$_0 = 0;
    this.upperLimit_j9klnv$_0 = 0;
    this.m_maxMotorForce_0 = 0;
    this.m_motorSpeed_0 = 0;
    this.isLimitEnabled_cjxxn0$_0 = false;
    this.isMotorEnabled_ua2eoi$_0 = false;
    this.m_limitState_0 = null;
    this.m_indexA_0 = 0;
    this.m_indexB_0 = 0;
    this.m_localCenterA_0 = new Vec2();
    this.m_localCenterB_0 = new Vec2();
    this.m_invMassA_0 = 0;
    this.m_invMassB_0 = 0;
    this.m_invIA_0 = 0;
    this.m_invIB_0 = 0;
    this.m_axis_0 = null;
    this.m_perp_0 = null;
    this.m_s1_0 = 0;
    this.m_s2_0 = 0;
    this.m_a1_0 = 0;
    this.m_a2_0 = 0;
    this.m_K_0 = null;
    this.m_motorMass_0 = 0;
    this.lowerLimit = def.lowerTranslation;
    this.upperLimit = def.upperTranslation;
    this.m_maxMotorForce_0 = def.maxMotorForce;
    this.m_motorSpeed_0 = def.motorSpeed;
    this.isLimitEnabled = def.enableLimit;
    this.isMotorEnabled = def.enableMotor;
    this.m_limitState_0 = LimitState$INACTIVE_getInstance();
    this.m_K_0 = Mat33_init();
    this.m_axis_0 = new Vec2();
    this.m_perp_0 = new Vec2();
    this.m_motorMass_0 = 0.0;
    this.m_motorImpulse_0 = 0.0;
    this.m_localXAxisA.normalize();
    Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(1.0, this.m_localXAxisA, this.m_localYAxisA_0);
    this.m_referenceAngle = def.referenceAngle;
  }
  Object.defineProperty(PrismaticJoint.prototype, 'm_referenceAngle', {
    get: function () {
      return this.m_referenceAngle_xx65gq$_0;
    },
    set: function (m_referenceAngle) {
      this.m_referenceAngle_xx65gq$_0 = m_referenceAngle;
    }
  });
  Object.defineProperty(PrismaticJoint.prototype, 'lowerLimit', {
    get: function () {
      return this.lowerLimit_9pehu2$_0;
    },
    set: function (lowerLimit) {
      this.lowerLimit_9pehu2$_0 = lowerLimit;
    }
  });
  Object.defineProperty(PrismaticJoint.prototype, 'upperLimit', {
    get: function () {
      return this.upperLimit_j9klnv$_0;
    },
    set: function (upperLimit) {
      this.upperLimit_j9klnv$_0 = upperLimit;
    }
  });
  Object.defineProperty(PrismaticJoint.prototype, 'isLimitEnabled', {
    get: function () {
      return this.isLimitEnabled_cjxxn0$_0;
    },
    set: function (isLimitEnabled) {
      this.isLimitEnabled_cjxxn0$_0 = isLimitEnabled;
    }
  });
  Object.defineProperty(PrismaticJoint.prototype, 'isMotorEnabled', {
    get: function () {
      return this.isMotorEnabled_ua2eoi$_0;
    },
    set: function (isMotorEnabled) {
      this.isMotorEnabled_ua2eoi$_0 = isMotorEnabled;
    }
  });
  Object.defineProperty(PrismaticJoint.prototype, 'jointSpeed', {
    get: function () {
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var temp = this.pool.popVec2();
      var rA = this.pool.popVec2();
      var rB = this.pool.popVec2();
      var p1 = this.pool.popVec2();
      var p2 = this.pool.popVec2();
      var d = this.pool.popVec2();
      var axis = this.pool.popVec2();
      var temp2 = this.pool.popVec2();
      var temp3 = this.pool.popVec2();
      temp.set_z1lo5s$(this.m_localAnchorA).subLocal_z1lo5s$(ensureNotNull(bA).m_sweep.localCenter);
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(bA.m_xf.q, temp, rA);
      temp.set_z1lo5s$(this.m_localAnchorB).subLocal_z1lo5s$(ensureNotNull(bB).m_sweep.localCenter);
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(bB.m_xf.q, temp, rB);
      p1.set_z1lo5s$(bA.m_sweep.c).addLocal_z1lo5s$(rA);
      p2.set_z1lo5s$(bB.m_sweep.c).addLocal_z1lo5s$(rB);
      d.set_z1lo5s$(p2).subLocal_z1lo5s$(p1);
      Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(bA.m_xf.q, this.m_localXAxisA, axis);
      var vA = bA.m_linearVelocity;
      var vB = bB.m_linearVelocity;
      var wA = bA.m_angularVelocity;
      var wB = bB.m_angularVelocity;
      Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wA, axis, temp);
      Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wB, rB, temp2);
      Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wA, rA, temp3);
      temp2.addLocal_z1lo5s$(vB).subLocal_z1lo5s$(vA).subLocal_z1lo5s$(temp3);
      var speed = Vec2$Companion_getInstance().dot_xjacks$(d, temp) + Vec2$Companion_getInstance().dot_xjacks$(axis, temp2);
      this.pool.pushVec2_za3lpa$(9);
      return speed;
    }
  });
  Object.defineProperty(PrismaticJoint.prototype, 'jointTranslation', {
    get: function () {
      var pA = this.pool.popVec2();
      var pB = this.pool.popVec2();
      var axis = this.pool.popVec2();
      ensureNotNull(this.m_bodyA).getWorldPointToOut_xjacks$(this.m_localAnchorA, pA);
      ensureNotNull(this.m_bodyB).getWorldPointToOut_xjacks$(this.m_localAnchorB, pB);
      ensureNotNull(this.m_bodyA).getWorldVectorToOutUnsafe_xjacks$(this.m_localXAxisA, axis);
      pB.subLocal_z1lo5s$(pA);
      var translation = Vec2$Companion_getInstance().dot_xjacks$(pB, axis);
      this.pool.pushVec2_za3lpa$(3);
      return translation;
    }
  });
  Object.defineProperty(PrismaticJoint.prototype, 'motorSpeed', {
    get: function () {
      return this.m_motorSpeed_0;
    },
    set: function (speed) {
      ensureNotNull(this.m_bodyA).isAwake = true;
      ensureNotNull(this.m_bodyB).isAwake = true;
      this.m_motorSpeed_0 = speed;
    }
  });
  Object.defineProperty(PrismaticJoint.prototype, 'maxMotorForce', {
    get: function () {
      return this.m_maxMotorForce_0;
    },
    set: function (force) {
      ensureNotNull(this.m_bodyA).isAwake = true;
      ensureNotNull(this.m_bodyB).isAwake = true;
      this.m_maxMotorForce_0 = force;
    }
  });
  PrismaticJoint.prototype.getAnchorA_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyA).getWorldPointToOut_xjacks$(this.m_localAnchorA, argOut);
  };
  PrismaticJoint.prototype.getAnchorB_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyB).getWorldPointToOut_xjacks$(this.m_localAnchorB, argOut);
  };
  PrismaticJoint.prototype.getReactionForce_rrlx6b$ = function (inv_dt, argOut) {
    var temp = this.pool.popVec2();
    temp.set_z1lo5s$(this.m_axis_0).mulLocal_mx4ult$(this.m_motorImpulse_0 + this.m_impulse_0.z);
    argOut.set_z1lo5s$(this.m_perp_0).mulLocal_mx4ult$(this.m_impulse_0.x).addLocal_z1lo5s$(temp).mulLocal_mx4ult$(inv_dt);
    this.pool.pushVec2_za3lpa$(1);
  };
  PrismaticJoint.prototype.getReactionTorque_mx4ult$ = function (inv_dt) {
    return inv_dt * this.m_impulse_0.y;
  };
  PrismaticJoint.prototype.enableLimit_6taknv$ = function (flag) {
    if (flag !== this.isLimitEnabled) {
      ensureNotNull(this.m_bodyA).isAwake = true;
      ensureNotNull(this.m_bodyB).isAwake = true;
      this.isLimitEnabled = flag;
      this.m_impulse_0.z = 0.0;
    }};
  PrismaticJoint.prototype.setLimits_dleff0$ = function (lower, upper) {
    if (!(lower <= upper)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (lower !== this.lowerLimit || upper !== this.upperLimit) {
      ensureNotNull(this.m_bodyA).isAwake = true;
      ensureNotNull(this.m_bodyB).isAwake = true;
      this.lowerLimit = lower;
      this.upperLimit = upper;
      this.m_impulse_0.z = 0.0;
    }};
  PrismaticJoint.prototype.enableMotor_6taknv$ = function (flag) {
    ensureNotNull(this.m_bodyA).isAwake = true;
    ensureNotNull(this.m_bodyB).isAwake = true;
    this.isMotorEnabled = flag;
  };
  PrismaticJoint.prototype.getMotorForce_mx4ult$ = function (inv_dt) {
    return this.m_motorImpulse_0 * inv_dt;
  };
  PrismaticJoint.prototype.initVelocityConstraints_giqime$ = function (data) {
    this.m_indexA_0 = ensureNotNull(this.m_bodyA).m_islandIndex;
    this.m_indexB_0 = ensureNotNull(this.m_bodyB).m_islandIndex;
    this.m_localCenterA_0.set_z1lo5s$(ensureNotNull(this.m_bodyA).m_sweep.localCenter);
    this.m_localCenterB_0.set_z1lo5s$(ensureNotNull(this.m_bodyB).m_sweep.localCenter);
    this.m_invMassA_0 = ensureNotNull(this.m_bodyA).m_invMass;
    this.m_invMassB_0 = ensureNotNull(this.m_bodyB).m_invMass;
    this.m_invIA_0 = ensureNotNull(this.m_bodyA).m_invI;
    this.m_invIB_0 = ensureNotNull(this.m_bodyB).m_invI;
    var cA = ensureNotNull(data.positions)[this.m_indexA_0].c;
    var aA = ensureNotNull(data.positions)[this.m_indexA_0].a;
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = ensureNotNull(data.velocities)[this.m_indexA_0].w;
    var cB = ensureNotNull(data.positions)[this.m_indexB_0].c;
    var aB = ensureNotNull(data.positions)[this.m_indexB_0].a;
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var qA = this.pool.popRot();
    var qB = this.pool.popRot();
    var d = this.pool.popVec2();
    var temp = this.pool.popVec2();
    var rA = this.pool.popVec2();
    var rB = this.pool.popVec2();
    qA.set_mx4ult$(aA);
    qB.set_mx4ult$(aB);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, d.set_z1lo5s$(this.m_localAnchorA).subLocal_z1lo5s$(this.m_localCenterA_0), rA);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qB, d.set_z1lo5s$(this.m_localAnchorB).subLocal_z1lo5s$(this.m_localCenterB_0), rB);
    d.set_z1lo5s$(cB).subLocal_z1lo5s$(cA).addLocal_z1lo5s$(rB).subLocal_z1lo5s$(rA);
    var mA = this.m_invMassA_0;
    var mB = this.m_invMassB_0;
    var iA = this.m_invIA_0;
    var iB = this.m_invIB_0;
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, this.m_localXAxisA, this.m_axis_0);
    temp.set_z1lo5s$(d).addLocal_z1lo5s$(rA);
    this.m_a1_0 = Vec2$Companion_getInstance().cross_xjacks$(temp, this.m_axis_0);
    this.m_a2_0 = Vec2$Companion_getInstance().cross_xjacks$(rB, this.m_axis_0);
    this.m_motorMass_0 = mA + mB + iA * this.m_a1_0 * this.m_a1_0 + iB * this.m_a2_0 * this.m_a2_0;
    if (this.m_motorMass_0 > 0.0) {
      this.m_motorMass_0 = 1.0 / this.m_motorMass_0;
    }Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, this.m_localYAxisA_0, this.m_perp_0);
    temp.set_z1lo5s$(d).addLocal_z1lo5s$(rA);
    this.m_s1_0 = Vec2$Companion_getInstance().cross_xjacks$(temp, this.m_perp_0);
    this.m_s2_0 = Vec2$Companion_getInstance().cross_xjacks$(rB, this.m_perp_0);
    var k11 = mA + mB + iA * this.m_s1_0 * this.m_s1_0 + iB * this.m_s2_0 * this.m_s2_0;
    var k12 = iA * this.m_s1_0 + iB * this.m_s2_0;
    var k13 = iA * this.m_s1_0 * this.m_a1_0 + iB * this.m_s2_0 * this.m_a2_0;
    var k22 = iA + iB;
    if (k22 === 0.0) {
      k22 = 1.0;
    }var k23 = iA * this.m_a1_0 + iB * this.m_a2_0;
    var k33 = mA + mB + iA * this.m_a1_0 * this.m_a1_0 + iB * this.m_a2_0 * this.m_a2_0;
    this.m_K_0.ex.set_y2kzbl$(k11, k12, k13);
    this.m_K_0.ey.set_y2kzbl$(k12, k22, k23);
    this.m_K_0.ez.set_y2kzbl$(k13, k23, k33);
    if (this.isLimitEnabled) {
      var jointTranslation = Vec2$Companion_getInstance().dot_xjacks$(this.m_axis_0, d);
      if (MathUtils$Companion_getInstance().abs_mx4ult$(this.upperLimit - this.lowerLimit) < 2.0 * Settings_getInstance().linearSlop) {
        this.m_limitState_0 = LimitState$EQUAL_getInstance();
      } else if (jointTranslation <= this.lowerLimit) {
        if (this.m_limitState_0 !== LimitState$AT_LOWER_getInstance()) {
          this.m_limitState_0 = LimitState$AT_LOWER_getInstance();
          this.m_impulse_0.z = 0.0;
        }} else if (jointTranslation >= this.upperLimit) {
        if (this.m_limitState_0 !== LimitState$AT_UPPER_getInstance()) {
          this.m_limitState_0 = LimitState$AT_UPPER_getInstance();
          this.m_impulse_0.z = 0.0;
        }} else {
        this.m_limitState_0 = LimitState$INACTIVE_getInstance();
        this.m_impulse_0.z = 0.0;
      }
    } else {
      this.m_limitState_0 = LimitState$INACTIVE_getInstance();
      this.m_impulse_0.z = 0.0;
    }
    if (this.isMotorEnabled === false) {
      this.m_motorImpulse_0 = 0.0;
    }if (ensureNotNull(data.step).warmStarting) {
      this.m_impulse_0.mulLocal_mx4ult$(ensureNotNull(data.step).dtRatio);
      this.m_motorImpulse_0 *= ensureNotNull(data.step).dtRatio;
      var P = this.pool.popVec2();
      temp.set_z1lo5s$(this.m_axis_0).mulLocal_mx4ult$(this.m_motorImpulse_0 + this.m_impulse_0.z);
      P.set_z1lo5s$(this.m_perp_0).mulLocal_mx4ult$(this.m_impulse_0.x).addLocal_z1lo5s$(temp);
      var LA = this.m_impulse_0.x * this.m_s1_0 + this.m_impulse_0.y + (this.m_motorImpulse_0 + this.m_impulse_0.z) * this.m_a1_0;
      var LB = this.m_impulse_0.x * this.m_s2_0 + this.m_impulse_0.y + (this.m_motorImpulse_0 + this.m_impulse_0.z) * this.m_a2_0;
      vA.x = vA.x - mA * P.x;
      vA.y = vA.y - mA * P.y;
      wA -= iA * LA;
      vB.x = vB.x + mB * P.x;
      vB.y = vB.y + mB * P.y;
      wB += iB * LB;
      this.pool.pushVec2_za3lpa$(1);
    } else {
      this.m_impulse_0.setZero();
      this.m_motorImpulse_0 = 0.0;
    }
    ensureNotNull(data.velocities)[this.m_indexA_0].w = wA;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
    this.pool.pushRot_za3lpa$(2);
    this.pool.pushVec2_za3lpa$(4);
  };
  PrismaticJoint.prototype.solveVelocityConstraints_giqime$ = function (data) {
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = ensureNotNull(data.velocities)[this.m_indexA_0].w;
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var mA = this.m_invMassA_0;
    var mB = this.m_invMassB_0;
    var iA = this.m_invIA_0;
    var iB = this.m_invIB_0;
    var temp = this.pool.popVec2();
    if (this.isMotorEnabled && this.m_limitState_0 !== LimitState$EQUAL_getInstance()) {
      temp.set_z1lo5s$(vB).subLocal_z1lo5s$(vA);
      var Cdot = Vec2$Companion_getInstance().dot_xjacks$(this.m_axis_0, temp) + this.m_a2_0 * wB - this.m_a1_0 * wA;
      var impulse = this.m_motorMass_0 * (this.m_motorSpeed_0 - Cdot);
      var oldImpulse = this.m_motorImpulse_0;
      var maxImpulse = ensureNotNull(data.step).dt * this.m_maxMotorForce_0;
      this.m_motorImpulse_0 = MathUtils$Companion_getInstance().clamp_y2kzbl$(this.m_motorImpulse_0 + impulse, -maxImpulse, maxImpulse);
      impulse = this.m_motorImpulse_0 - oldImpulse;
      var P = this.pool.popVec2();
      P.set_z1lo5s$(this.m_axis_0).mulLocal_mx4ult$(impulse);
      var LA = impulse * this.m_a1_0;
      var LB = impulse * this.m_a2_0;
      vA.x = vA.x - mA * P.x;
      vA.y = vA.y - mA * P.y;
      wA -= iA * LA;
      vB.x = vB.x + mB * P.x;
      vB.y = vB.y + mB * P.y;
      wB += iB * LB;
      this.pool.pushVec2_za3lpa$(1);
    }var Cdot1 = this.pool.popVec2();
    temp.set_z1lo5s$(vB).subLocal_z1lo5s$(vA);
    Cdot1.x = Vec2$Companion_getInstance().dot_xjacks$(this.m_perp_0, temp) + this.m_s2_0 * wB - this.m_s1_0 * wA;
    Cdot1.y = wB - wA;
    if (this.isLimitEnabled && this.m_limitState_0 !== LimitState$INACTIVE_getInstance()) {
      var Cdot2;
      temp.set_z1lo5s$(vB).subLocal_z1lo5s$(vA);
      Cdot2 = Vec2$Companion_getInstance().dot_xjacks$(this.m_axis_0, temp) + this.m_a2_0 * wB - this.m_a1_0 * wA;
      var Cdot_0 = this.pool.popVec3();
      Cdot_0.set_y2kzbl$(Cdot1.x, Cdot1.y, Cdot2);
      var f1 = this.pool.popVec3();
      var df = this.pool.popVec3();
      f1.set_z1lo5t$(this.m_impulse_0);
      this.m_K_0.solve33ToOut_wfe5u4$(Cdot_0.negateLocal(), df);
      this.m_impulse_0.addLocal_z1lo5t$(df);
      if (this.m_limitState_0 === LimitState$AT_LOWER_getInstance()) {
        this.m_impulse_0.z = MathUtils$Companion_getInstance().max_dleff0$(this.m_impulse_0.z, 0.0);
      } else if (this.m_limitState_0 === LimitState$AT_UPPER_getInstance()) {
        this.m_impulse_0.z = MathUtils$Companion_getInstance().min_dleff0$(this.m_impulse_0.z, 0.0);
      }var b = this.pool.popVec2();
      var f2r = this.pool.popVec2();
      temp.set_dleff0$(this.m_K_0.ez.x, this.m_K_0.ez.y).mulLocal_mx4ult$(this.m_impulse_0.z - f1.z);
      b.set_z1lo5s$(Cdot1).negateLocal().subLocal_z1lo5s$(temp);
      this.m_K_0.solve22ToOut_xjacks$(b, f2r);
      f2r.addLocal_dleff0$(f1.x, f1.y);
      this.m_impulse_0.x = f2r.x;
      this.m_impulse_0.y = f2r.y;
      df.set_z1lo5t$(this.m_impulse_0).subLocal_z1lo5t$(f1);
      var P_0 = this.pool.popVec2();
      temp.set_z1lo5s$(this.m_axis_0).mulLocal_mx4ult$(df.z);
      P_0.set_z1lo5s$(this.m_perp_0).mulLocal_mx4ult$(df.x).addLocal_z1lo5s$(temp);
      var LA_0 = df.x * this.m_s1_0 + df.y + df.z * this.m_a1_0;
      var LB_0 = df.x * this.m_s2_0 + df.y + df.z * this.m_a2_0;
      vA.x = vA.x - mA * P_0.x;
      vA.y = vA.y - mA * P_0.y;
      wA -= iA * LA_0;
      vB.x = vB.x + mB * P_0.x;
      vB.y = vB.y + mB * P_0.y;
      wB += iB * LB_0;
      this.pool.pushVec2_za3lpa$(3);
      this.pool.pushVec3_za3lpa$(3);
    } else {
      var df_0 = this.pool.popVec2();
      this.m_K_0.solve22ToOut_xjacks$(Cdot1.negateLocal(), df_0);
      Cdot1.negateLocal();
      this.m_impulse_0.x = this.m_impulse_0.x + df_0.x;
      this.m_impulse_0.y = this.m_impulse_0.y + df_0.y;
      var P_1 = this.pool.popVec2();
      P_1.set_z1lo5s$(this.m_perp_0).mulLocal_mx4ult$(df_0.x);
      var LA_1 = df_0.x * this.m_s1_0 + df_0.y;
      var LB_1 = df_0.x * this.m_s2_0 + df_0.y;
      vA.x = vA.x - mA * P_1.x;
      vA.y = vA.y - mA * P_1.y;
      wA -= iA * LA_1;
      vB.x = vB.x + mB * P_1.x;
      vB.y = vB.y + mB * P_1.y;
      wB += iB * LB_1;
      this.pool.pushVec2_za3lpa$(2);
    }
    ensureNotNull(data.velocities)[this.m_indexA_0].w = wA;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
    this.pool.pushVec2_za3lpa$(2);
  };
  PrismaticJoint.prototype.solvePositionConstraints_giqime$ = function (data) {
    var qA = this.pool.popRot();
    var qB = this.pool.popRot();
    var rA = this.pool.popVec2();
    var rB = this.pool.popVec2();
    var d = this.pool.popVec2();
    var axis = this.pool.popVec2();
    var perp = this.pool.popVec2();
    var temp = this.pool.popVec2();
    var C1 = this.pool.popVec2();
    var impulse = this.pool.popVec3();
    var cA = ensureNotNull(data.positions)[this.m_indexA_0].c;
    var aA = ensureNotNull(data.positions)[this.m_indexA_0].a;
    var cB = ensureNotNull(data.positions)[this.m_indexB_0].c;
    var aB = ensureNotNull(data.positions)[this.m_indexB_0].a;
    qA.set_mx4ult$(aA);
    qB.set_mx4ult$(aB);
    var mA = this.m_invMassA_0;
    var mB = this.m_invMassB_0;
    var iA = this.m_invIA_0;
    var iB = this.m_invIB_0;
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, temp.set_z1lo5s$(this.m_localAnchorA).subLocal_z1lo5s$(this.m_localCenterA_0), rA);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qB, temp.set_z1lo5s$(this.m_localAnchorB).subLocal_z1lo5s$(this.m_localCenterB_0), rB);
    d.set_z1lo5s$(cB).addLocal_z1lo5s$(rB).subLocal_z1lo5s$(cA).subLocal_z1lo5s$(rA);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, this.m_localXAxisA, axis);
    var a1 = Vec2$Companion_getInstance().cross_xjacks$(temp.set_z1lo5s$(d).addLocal_z1lo5s$(rA), axis);
    var a2 = Vec2$Companion_getInstance().cross_xjacks$(rB, axis);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, this.m_localYAxisA_0, perp);
    var s1 = Vec2$Companion_getInstance().cross_xjacks$(temp.set_z1lo5s$(d).addLocal_z1lo5s$(rA), perp);
    var s2 = Vec2$Companion_getInstance().cross_xjacks$(rB, perp);
    C1.x = Vec2$Companion_getInstance().dot_xjacks$(perp, d);
    C1.y = aB - aA - this.m_referenceAngle;
    var linearError = MathUtils$Companion_getInstance().abs_mx4ult$(C1.x);
    var angularError = MathUtils$Companion_getInstance().abs_mx4ult$(C1.y);
    var active = false;
    var C2 = 0.0;
    if (this.isLimitEnabled) {
      var translation = Vec2$Companion_getInstance().dot_xjacks$(axis, d);
      if (MathUtils$Companion_getInstance().abs_mx4ult$(this.upperLimit - this.lowerLimit) < 2.0 * Settings_getInstance().linearSlop) {
        C2 = MathUtils$Companion_getInstance().clamp_y2kzbl$(translation, -Settings_getInstance().maxLinearCorrection, Settings_getInstance().maxLinearCorrection);
        linearError = MathUtils$Companion_getInstance().max_dleff0$(linearError, MathUtils$Companion_getInstance().abs_mx4ult$(translation));
        active = true;
      } else if (translation <= this.lowerLimit) {
        C2 = MathUtils$Companion_getInstance().clamp_y2kzbl$(translation - this.lowerLimit + Settings_getInstance().linearSlop, -Settings_getInstance().maxLinearCorrection, 0.0);
        linearError = MathUtils$Companion_getInstance().max_dleff0$(linearError, this.lowerLimit - translation);
        active = true;
      } else if (translation >= this.upperLimit) {
        C2 = MathUtils$Companion_getInstance().clamp_y2kzbl$(translation - this.upperLimit - Settings_getInstance().linearSlop, 0.0, Settings_getInstance().maxLinearCorrection);
        linearError = MathUtils$Companion_getInstance().max_dleff0$(linearError, translation - this.upperLimit);
        active = true;
      }}if (active) {
      var k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
      var k12 = iA * s1 + iB * s2;
      var k13 = iA * s1 * a1 + iB * s2 * a2;
      var k22 = iA + iB;
      if (k22 === 0.0) {
        k22 = 1.0;
      }var k23 = iA * a1 + iB * a2;
      var k33 = mA + mB + iA * a1 * a1 + iB * a2 * a2;
      var K = this.pool.popMat33();
      K.ex.set_y2kzbl$(k11, k12, k13);
      K.ey.set_y2kzbl$(k12, k22, k23);
      K.ez.set_y2kzbl$(k13, k23, k33);
      var C = this.pool.popVec3();
      C.x = C1.x;
      C.y = C1.y;
      C.z = C2;
      K.solve33ToOut_wfe5u4$(C.negateLocal(), impulse);
      this.pool.pushVec3_za3lpa$(1);
      this.pool.pushMat33_za3lpa$(1);
    } else {
      var k11_0 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
      var k12_0 = iA * s1 + iB * s2;
      var k22_0 = iA + iB;
      if (k22_0 === 0.0) {
        k22_0 = 1.0;
      }var K_0 = this.pool.popMat22();
      K_0.ex.set_dleff0$(k11_0, k12_0);
      K_0.ey.set_dleff0$(k12_0, k22_0);
      K_0.solveToOut_xjacks$(C1.negateLocal(), temp);
      C1.negateLocal();
      impulse.x = temp.x;
      impulse.y = temp.y;
      impulse.z = 0.0;
      this.pool.pushMat22_za3lpa$(1);
    }
    var Px = impulse.x * perp.x + impulse.z * axis.x;
    var Py = impulse.x * perp.y + impulse.z * axis.y;
    var LA = impulse.x * s1 + impulse.y + impulse.z * a1;
    var LB = impulse.x * s2 + impulse.y + impulse.z * a2;
    cA.x = cA.x - mA * Px;
    cA.y = cA.y - mA * Py;
    aA -= iA * LA;
    cB.x = cB.x + mB * Px;
    cB.y = cB.y + mB * Py;
    aB += iB * LB;
    ensureNotNull(data.positions)[this.m_indexA_0].a = aA;
    ensureNotNull(data.positions)[this.m_indexB_0].a = aB;
    this.pool.pushVec2_za3lpa$(7);
    this.pool.pushVec3_za3lpa$(1);
    this.pool.pushRot_za3lpa$(2);
    return linearError <= Settings_getInstance().linearSlop && angularError <= Settings_getInstance().angularSlop;
  };
  PrismaticJoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrismaticJoint',
    interfaces: [Joint]
  };
  function PrismaticJointDef() {
    JointDef.call(this, JointType$PRISMATIC_getInstance());
    this.localAnchorA = new Vec2();
    this.localAnchorB = new Vec2();
    this.localAxisA = new Vec2(1.0, 0.0);
    this.referenceAngle = 0.0;
    this.enableLimit = false;
    this.lowerTranslation = 0.0;
    this.upperTranslation = 0.0;
    this.enableMotor = false;
    this.maxMotorForce = 0.0;
    this.motorSpeed = 0.0;
  }
  PrismaticJointDef.prototype.initialize_ns84qc$ = function (b1, b2, anchor, axis) {
    this.bodyA = b1;
    this.bodyB = b2;
    ensureNotNull(this.bodyA).getLocalPointToOut_xjacks$(anchor, this.localAnchorA);
    ensureNotNull(this.bodyB).getLocalPointToOut_xjacks$(anchor, this.localAnchorB);
    ensureNotNull(this.bodyA).getLocalVectorToOut_xjacks$(axis, this.localAxisA);
    this.referenceAngle = ensureNotNull(this.bodyB).angle - ensureNotNull(this.bodyA).angle;
  };
  PrismaticJointDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrismaticJointDef',
    interfaces: [JointDef]
  };
  function PulleyJoint(argWorldPool, def) {
    PulleyJoint$Companion_getInstance();
    Joint.call(this, argWorldPool, def);
    this._groundAnchorA = new Vec2();
    this._groundAnchorB = new Vec2();
    this.lengthA = 0;
    this.lengthB = 0;
    this.localAnchorA = new Vec2();
    this.localAnchorB = new Vec2();
    this.m_constant_0 = 0;
    this.ratio = 0;
    this.m_impulse_0 = 0;
    this.m_indexA_0 = 0;
    this.m_indexB_0 = 0;
    this.m_uA_0 = new Vec2();
    this.m_uB_0 = new Vec2();
    this.m_rA_0 = new Vec2();
    this.m_rB_0 = new Vec2();
    this.m_localCenterA_0 = new Vec2();
    this.m_localCenterB_0 = new Vec2();
    this.m_invMassA_0 = 0;
    this.m_invMassB_0 = 0;
    this.m_invIA_0 = 0;
    this.m_invIB_0 = 0;
    this.m_mass_0 = 0;
    this._groundAnchorA.set_z1lo5s$(def.groundAnchorA);
    this._groundAnchorB.set_z1lo5s$(def.groundAnchorB);
    this.localAnchorA.set_z1lo5s$(def.localAnchorA);
    this.localAnchorB.set_z1lo5s$(def.localAnchorB);
    if (!(def.ratio !== 0.0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }this.ratio = def.ratio;
    this.lengthA = def.lengthA;
    this.lengthB = def.lengthB;
    this.m_constant_0 = def.lengthA + this.ratio * def.lengthB;
    this.m_impulse_0 = 0.0;
  }
  PulleyJoint.prototype.getGroundAnchorA = function () {
    return this._groundAnchorA;
  };
  PulleyJoint.prototype.getGroundAnchorB = function () {
    return this._groundAnchorB;
  };
  Object.defineProperty(PulleyJoint.prototype, 'currentLengthA', {
    get: function () {
      var p = this.pool.popVec2();
      ensureNotNull(this.m_bodyA).getWorldPointToOut_xjacks$(this.localAnchorA, p);
      p.subLocal_z1lo5s$(this._groundAnchorA);
      var length = p.length();
      this.pool.pushVec2_za3lpa$(1);
      return length;
    }
  });
  Object.defineProperty(PulleyJoint.prototype, 'currentLengthB', {
    get: function () {
      var p = this.pool.popVec2();
      ensureNotNull(this.m_bodyB).getWorldPointToOut_xjacks$(this.localAnchorB, p);
      p.subLocal_z1lo5s$(this._groundAnchorB);
      var length = p.length();
      this.pool.pushVec2_za3lpa$(1);
      return length;
    }
  });
  Object.defineProperty(PulleyJoint.prototype, 'length1', {
    get: function () {
      var p = this.pool.popVec2();
      ensureNotNull(this.m_bodyA).getWorldPointToOut_xjacks$(this.localAnchorA, p);
      p.subLocal_z1lo5s$(this._groundAnchorA);
      var len = p.length();
      this.pool.pushVec2_za3lpa$(1);
      return len;
    }
  });
  Object.defineProperty(PulleyJoint.prototype, 'length2', {
    get: function () {
      var p = this.pool.popVec2();
      ensureNotNull(this.m_bodyB).getWorldPointToOut_xjacks$(this.localAnchorB, p);
      p.subLocal_z1lo5s$(this._groundAnchorB);
      var len = p.length();
      this.pool.pushVec2_za3lpa$(1);
      return len;
    }
  });
  PulleyJoint.prototype.getAnchorA_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyA).getWorldPointToOut_xjacks$(this.localAnchorA, argOut);
  };
  PulleyJoint.prototype.getAnchorB_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyB).getWorldPointToOut_xjacks$(this.localAnchorB, argOut);
  };
  PulleyJoint.prototype.getReactionForce_rrlx6b$ = function (inv_dt, argOut) {
    argOut.set_z1lo5s$(this.m_uB_0).mulLocal_mx4ult$(this.m_impulse_0).mulLocal_mx4ult$(inv_dt);
  };
  PulleyJoint.prototype.getReactionTorque_mx4ult$ = function (inv_dt) {
    return 0.0;
  };
  PulleyJoint.prototype.initVelocityConstraints_giqime$ = function (data) {
    this.m_indexA_0 = ensureNotNull(this.m_bodyA).m_islandIndex;
    this.m_indexB_0 = ensureNotNull(this.m_bodyB).m_islandIndex;
    this.m_localCenterA_0.set_z1lo5s$(ensureNotNull(this.m_bodyA).m_sweep.localCenter);
    this.m_localCenterB_0.set_z1lo5s$(ensureNotNull(this.m_bodyB).m_sweep.localCenter);
    this.m_invMassA_0 = ensureNotNull(this.m_bodyA).m_invMass;
    this.m_invMassB_0 = ensureNotNull(this.m_bodyB).m_invMass;
    this.m_invIA_0 = ensureNotNull(this.m_bodyA).m_invI;
    this.m_invIB_0 = ensureNotNull(this.m_bodyB).m_invI;
    var cA = ensureNotNull(data.positions)[this.m_indexA_0].c;
    var aA = ensureNotNull(data.positions)[this.m_indexA_0].a;
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = ensureNotNull(data.velocities)[this.m_indexA_0].w;
    var cB = ensureNotNull(data.positions)[this.m_indexB_0].c;
    var aB = ensureNotNull(data.positions)[this.m_indexB_0].a;
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var qA = this.pool.popRot();
    var qB = this.pool.popRot();
    var temp = this.pool.popVec2();
    qA.set_mx4ult$(aA);
    qB.set_mx4ult$(aB);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, temp.set_z1lo5s$(this.localAnchorA).subLocal_z1lo5s$(this.m_localCenterA_0), this.m_rA_0);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qB, temp.set_z1lo5s$(this.localAnchorB).subLocal_z1lo5s$(this.m_localCenterB_0), this.m_rB_0);
    this.m_uA_0.set_z1lo5s$(cA).addLocal_z1lo5s$(this.m_rA_0).subLocal_z1lo5s$(this._groundAnchorA);
    this.m_uB_0.set_z1lo5s$(cB).addLocal_z1lo5s$(this.m_rB_0).subLocal_z1lo5s$(this._groundAnchorB);
    var lengthA = this.m_uA_0.length();
    var lengthB = this.m_uB_0.length();
    if (lengthA > 10.0 * Settings_getInstance().linearSlop) {
      this.m_uA_0.mulLocal_mx4ult$(1.0 / lengthA);
    } else {
      this.m_uA_0.setZero();
    }
    if (lengthB > 10.0 * Settings_getInstance().linearSlop) {
      this.m_uB_0.mulLocal_mx4ult$(1.0 / lengthB);
    } else {
      this.m_uB_0.setZero();
    }
    var ruA = Vec2$Companion_getInstance().cross_xjacks$(this.m_rA_0, this.m_uA_0);
    var ruB = Vec2$Companion_getInstance().cross_xjacks$(this.m_rB_0, this.m_uB_0);
    var mA = this.m_invMassA_0 + this.m_invIA_0 * ruA * ruA;
    var mB = this.m_invMassB_0 + this.m_invIB_0 * ruB * ruB;
    this.m_mass_0 = mA + this.ratio * this.ratio * mB;
    if (this.m_mass_0 > 0.0) {
      this.m_mass_0 = 1.0 / this.m_mass_0;
    }if (ensureNotNull(data.step).warmStarting) {
      this.m_impulse_0 *= ensureNotNull(data.step).dtRatio;
      var PA = this.pool.popVec2();
      var PB = this.pool.popVec2();
      PA.set_z1lo5s$(this.m_uA_0).mulLocal_mx4ult$(-this.m_impulse_0);
      PB.set_z1lo5s$(this.m_uB_0).mulLocal_mx4ult$(-this.ratio * this.m_impulse_0);
      vA.x = vA.x + this.m_invMassA_0 * PA.x;
      vA.y = vA.y + this.m_invMassA_0 * PA.y;
      wA += this.m_invIA_0 * Vec2$Companion_getInstance().cross_xjacks$(this.m_rA_0, PA);
      vB.x = vB.x + this.m_invMassB_0 * PB.x;
      vB.y = vB.y + this.m_invMassB_0 * PB.y;
      wB += this.m_invIB_0 * Vec2$Companion_getInstance().cross_xjacks$(this.m_rB_0, PB);
      this.pool.pushVec2_za3lpa$(2);
    } else {
      this.m_impulse_0 = 0.0;
    }
    ensureNotNull(data.velocities)[this.m_indexA_0].w = wA;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
    this.pool.pushVec2_za3lpa$(1);
    this.pool.pushRot_za3lpa$(2);
  };
  PulleyJoint.prototype.solveVelocityConstraints_giqime$ = function (data) {
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = ensureNotNull(data.velocities)[this.m_indexA_0].w;
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var vpA = this.pool.popVec2();
    var vpB = this.pool.popVec2();
    var PA = this.pool.popVec2();
    var PB = this.pool.popVec2();
    Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wA, this.m_rA_0, vpA);
    vpA.addLocal_z1lo5s$(vA);
    Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wB, this.m_rB_0, vpB);
    vpB.addLocal_z1lo5s$(vB);
    var Cdot = -Vec2$Companion_getInstance().dot_xjacks$(this.m_uA_0, vpA) - this.ratio * Vec2$Companion_getInstance().dot_xjacks$(this.m_uB_0, vpB);
    var impulse = -this.m_mass_0 * Cdot;
    this.m_impulse_0 += impulse;
    PA.set_z1lo5s$(this.m_uA_0).mulLocal_mx4ult$(-impulse);
    PB.set_z1lo5s$(this.m_uB_0).mulLocal_mx4ult$(-this.ratio * impulse);
    vA.x = vA.x + this.m_invMassA_0 * PA.x;
    vA.y = vA.y + this.m_invMassA_0 * PA.y;
    wA += this.m_invIA_0 * Vec2$Companion_getInstance().cross_xjacks$(this.m_rA_0, PA);
    vB.x = vB.x + this.m_invMassB_0 * PB.x;
    vB.y = vB.y + this.m_invMassB_0 * PB.y;
    wB += this.m_invIB_0 * Vec2$Companion_getInstance().cross_xjacks$(this.m_rB_0, PB);
    ensureNotNull(data.velocities)[this.m_indexA_0].w = wA;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
    this.pool.pushVec2_za3lpa$(4);
  };
  PulleyJoint.prototype.solvePositionConstraints_giqime$ = function (data) {
    var qA = this.pool.popRot();
    var qB = this.pool.popRot();
    var rA = this.pool.popVec2();
    var rB = this.pool.popVec2();
    var uA = this.pool.popVec2();
    var uB = this.pool.popVec2();
    var temp = this.pool.popVec2();
    var PA = this.pool.popVec2();
    var PB = this.pool.popVec2();
    var cA = ensureNotNull(data.positions)[this.m_indexA_0].c;
    var aA = ensureNotNull(data.positions)[this.m_indexA_0].a;
    var cB = ensureNotNull(data.positions)[this.m_indexB_0].c;
    var aB = ensureNotNull(data.positions)[this.m_indexB_0].a;
    qA.set_mx4ult$(aA);
    qB.set_mx4ult$(aB);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, temp.set_z1lo5s$(this.localAnchorA).subLocal_z1lo5s$(this.m_localCenterA_0), rA);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qB, temp.set_z1lo5s$(this.localAnchorB).subLocal_z1lo5s$(this.m_localCenterB_0), rB);
    uA.set_z1lo5s$(cA).addLocal_z1lo5s$(rA).subLocal_z1lo5s$(this._groundAnchorA);
    uB.set_z1lo5s$(cB).addLocal_z1lo5s$(rB).subLocal_z1lo5s$(this._groundAnchorB);
    var lengthA = uA.length();
    var lengthB = uB.length();
    if (lengthA > 10.0 * Settings_getInstance().linearSlop) {
      uA.mulLocal_mx4ult$(1.0 / lengthA);
    } else {
      uA.setZero();
    }
    if (lengthB > 10.0 * Settings_getInstance().linearSlop) {
      uB.mulLocal_mx4ult$(1.0 / lengthB);
    } else {
      uB.setZero();
    }
    var ruA = Vec2$Companion_getInstance().cross_xjacks$(rA, uA);
    var ruB = Vec2$Companion_getInstance().cross_xjacks$(rB, uB);
    var mA = this.m_invMassA_0 + this.m_invIA_0 * ruA * ruA;
    var mB = this.m_invMassB_0 + this.m_invIB_0 * ruB * ruB;
    var mass = mA + this.ratio * this.ratio * mB;
    if (mass > 0.0) {
      mass = 1.0 / mass;
    }var C = this.m_constant_0 - lengthA - this.ratio * lengthB;
    var linearError = MathUtils$Companion_getInstance().abs_mx4ult$(C);
    var impulse = -mass * C;
    PA.set_z1lo5s$(uA).mulLocal_mx4ult$(-impulse);
    PB.set_z1lo5s$(uB).mulLocal_mx4ult$(-this.ratio * impulse);
    cA.x = cA.x + this.m_invMassA_0 * PA.x;
    cA.y = cA.y + this.m_invMassA_0 * PA.y;
    aA += this.m_invIA_0 * Vec2$Companion_getInstance().cross_xjacks$(rA, PA);
    cB.x = cB.x + this.m_invMassB_0 * PB.x;
    cB.y = cB.y + this.m_invMassB_0 * PB.y;
    aB += this.m_invIB_0 * Vec2$Companion_getInstance().cross_xjacks$(rB, PB);
    ensureNotNull(data.positions)[this.m_indexA_0].a = aA;
    ensureNotNull(data.positions)[this.m_indexB_0].a = aB;
    this.pool.pushRot_za3lpa$(2);
    this.pool.pushVec2_za3lpa$(7);
    return linearError < Settings_getInstance().linearSlop;
  };
  function PulleyJoint$Companion() {
    PulleyJoint$Companion_instance = this;
    this.MIN_PULLEY_LENGTH = 2.0;
  }
  PulleyJoint$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PulleyJoint$Companion_instance = null;
  function PulleyJoint$Companion_getInstance() {
    if (PulleyJoint$Companion_instance === null) {
      new PulleyJoint$Companion();
    }return PulleyJoint$Companion_instance;
  }
  PulleyJoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PulleyJoint',
    interfaces: [Joint]
  };
  function PulleyJointDef() {
    JointDef.call(this, JointType$PULLEY_getInstance());
    this.groundAnchorA = new Vec2(-1.0, 1.0);
    this.groundAnchorB = new Vec2(1.0, 1.0);
    this.localAnchorA = new Vec2(-1.0, 0.0);
    this.localAnchorB = new Vec2(1.0, 0.0);
    this.lengthA = 0.0;
    this.lengthB = 0.0;
    this.ratio = 1.0;
    this.collideConnected = true;
  }
  PulleyJointDef.prototype.initialize_qsnupb$ = function (b1, b2, ga1, ga2, anchor1, anchor2, r) {
    this.bodyA = b1;
    this.bodyB = b2;
    this.groundAnchorA = ga1;
    this.groundAnchorB = ga2;
    this.localAnchorA = ensureNotNull(this.bodyA).getLocalPoint_z1lo5s$(anchor1);
    this.localAnchorB = ensureNotNull(this.bodyB).getLocalPoint_z1lo5s$(anchor2);
    var d1 = anchor1.sub_z1lo5s$(ga1);
    this.lengthA = d1.length();
    var d2 = anchor2.sub_z1lo5s$(ga2);
    this.lengthB = d2.length();
    this.ratio = r;
    if (!(this.ratio > Settings_getInstance().EPSILON)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }};
  PulleyJointDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PulleyJointDef',
    interfaces: [JointDef]
  };
  function RevoluteJoint(argWorld, def) {
    Joint.call(this, argWorld, def);
    this.m_localAnchorA = new Vec2();
    this.m_localAnchorB = new Vec2();
    this.m_impulse_0 = new Vec3();
    this.m_motorImpulse_0 = 0;
    this.isMotorEnabled_xch0ki$_0 = false;
    this.m_maxMotorTorque_0 = 0;
    this.m_motorSpeed_0 = 0;
    this.isLimitEnabled_fmcjj0$_0 = false;
    this.m_referenceAngle_115wrq$_0 = 0;
    this.lowerLimit_fhr2ii$_0 = 0;
    this.upperLimit_p1x6cb$_0 = 0;
    this.m_indexA_0 = 0;
    this.m_indexB_0 = 0;
    this.m_rA_0 = new Vec2();
    this.m_rB_0 = new Vec2();
    this.m_localCenterA_0 = new Vec2();
    this.m_localCenterB_0 = new Vec2();
    this.m_invMassA_0 = 0;
    this.m_invMassB_0 = 0;
    this.m_invIA_0 = 0;
    this.m_invIB_0 = 0;
    this.m_mass_0 = Mat33_init();
    this.m_motorMass_0 = 0;
    this.m_limitState_0 = null;
    this.m_localAnchorA.set_z1lo5s$(def.localAnchorA);
    this.m_localAnchorB.set_z1lo5s$(def.localAnchorB);
    this.m_referenceAngle = def.referenceAngle;
    this.m_motorImpulse_0 = 0.0;
    this.lowerLimit = def.lowerAngle;
    this.upperLimit = def.upperAngle;
    this.m_maxMotorTorque_0 = def.maxMotorTorque;
    this.m_motorSpeed_0 = def.motorSpeed;
    this.isLimitEnabled = def.enableLimit;
    this.isMotorEnabled = def.enableMotor;
    this.m_limitState_0 = LimitState$INACTIVE_getInstance();
  }
  Object.defineProperty(RevoluteJoint.prototype, 'isMotorEnabled', {
    get: function () {
      return this.isMotorEnabled_xch0ki$_0;
    },
    set: function (isMotorEnabled) {
      this.isMotorEnabled_xch0ki$_0 = isMotorEnabled;
    }
  });
  Object.defineProperty(RevoluteJoint.prototype, 'isLimitEnabled', {
    get: function () {
      return this.isLimitEnabled_fmcjj0$_0;
    },
    set: function (isLimitEnabled) {
      this.isLimitEnabled_fmcjj0$_0 = isLimitEnabled;
    }
  });
  Object.defineProperty(RevoluteJoint.prototype, 'm_referenceAngle', {
    get: function () {
      return this.m_referenceAngle_115wrq$_0;
    },
    set: function (m_referenceAngle) {
      this.m_referenceAngle_115wrq$_0 = m_referenceAngle;
    }
  });
  Object.defineProperty(RevoluteJoint.prototype, 'lowerLimit', {
    get: function () {
      return this.lowerLimit_fhr2ii$_0;
    },
    set: function (lowerLimit) {
      this.lowerLimit_fhr2ii$_0 = lowerLimit;
    }
  });
  Object.defineProperty(RevoluteJoint.prototype, 'upperLimit', {
    get: function () {
      return this.upperLimit_p1x6cb$_0;
    },
    set: function (upperLimit) {
      this.upperLimit_p1x6cb$_0 = upperLimit;
    }
  });
  Object.defineProperty(RevoluteJoint.prototype, 'jointAngle', {
    get: function () {
      var b1 = this.m_bodyA;
      var b2 = this.m_bodyB;
      return ensureNotNull(b2).m_sweep.a - ensureNotNull(b1).m_sweep.a - this.m_referenceAngle;
    }
  });
  Object.defineProperty(RevoluteJoint.prototype, 'jointSpeed', {
    get: function () {
      var b1 = this.m_bodyA;
      var b2 = this.m_bodyB;
      return ensureNotNull(b2).m_angularVelocity - ensureNotNull(b1).m_angularVelocity;
    }
  });
  Object.defineProperty(RevoluteJoint.prototype, 'motorSpeed', {
    get: function () {
      return this.m_motorSpeed_0;
    },
    set: function (speed) {
      ensureNotNull(this.m_bodyA).isAwake = true;
      ensureNotNull(this.m_bodyB).isAwake = true;
      this.m_motorSpeed_0 = speed;
    }
  });
  Object.defineProperty(RevoluteJoint.prototype, 'maxMotorTorque', {
    get: function () {
      return this.m_maxMotorTorque_0;
    },
    set: function (torque) {
      ensureNotNull(this.m_bodyA).isAwake = true;
      ensureNotNull(this.m_bodyB).isAwake = true;
      this.m_maxMotorTorque_0 = torque;
    }
  });
  RevoluteJoint.prototype.initVelocityConstraints_giqime$ = function (data) {
    this.m_indexA_0 = ensureNotNull(this.m_bodyA).m_islandIndex;
    this.m_indexB_0 = ensureNotNull(this.m_bodyB).m_islandIndex;
    this.m_localCenterA_0.set_z1lo5s$(ensureNotNull(this.m_bodyA).m_sweep.localCenter);
    this.m_localCenterB_0.set_z1lo5s$(ensureNotNull(this.m_bodyB).m_sweep.localCenter);
    this.m_invMassA_0 = ensureNotNull(this.m_bodyA).m_invMass;
    this.m_invMassB_0 = ensureNotNull(this.m_bodyB).m_invMass;
    this.m_invIA_0 = ensureNotNull(this.m_bodyA).m_invI;
    this.m_invIB_0 = ensureNotNull(this.m_bodyB).m_invI;
    var aA = ensureNotNull(data.positions)[this.m_indexA_0].a;
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = ensureNotNull(data.velocities)[this.m_indexA_0].w;
    var aB = ensureNotNull(data.positions)[this.m_indexB_0].a;
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var qA = this.pool.popRot();
    var qB = this.pool.popRot();
    var temp = this.pool.popVec2();
    qA.set_mx4ult$(aA);
    qB.set_mx4ult$(aB);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, temp.set_z1lo5s$(this.m_localAnchorA).subLocal_z1lo5s$(this.m_localCenterA_0), this.m_rA_0);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qB, temp.set_z1lo5s$(this.m_localAnchorB).subLocal_z1lo5s$(this.m_localCenterB_0), this.m_rB_0);
    var mA = this.m_invMassA_0;
    var mB = this.m_invMassB_0;
    var iA = this.m_invIA_0;
    var iB = this.m_invIB_0;
    var fixedRotation = iA + iB === 0.0;
    this.m_mass_0.ex.x = mA + mB + this.m_rA_0.y * this.m_rA_0.y * iA + this.m_rB_0.y * this.m_rB_0.y * iB;
    this.m_mass_0.ey.x = -this.m_rA_0.y * this.m_rA_0.x * iA - this.m_rB_0.y * this.m_rB_0.x * iB;
    this.m_mass_0.ez.x = -this.m_rA_0.y * iA - this.m_rB_0.y * iB;
    this.m_mass_0.ex.y = this.m_mass_0.ey.x;
    this.m_mass_0.ey.y = mA + mB + this.m_rA_0.x * this.m_rA_0.x * iA + this.m_rB_0.x * this.m_rB_0.x * iB;
    this.m_mass_0.ez.y = this.m_rA_0.x * iA + this.m_rB_0.x * iB;
    this.m_mass_0.ex.z = this.m_mass_0.ez.x;
    this.m_mass_0.ey.z = this.m_mass_0.ez.y;
    this.m_mass_0.ez.z = iA + iB;
    this.m_motorMass_0 = iA + iB;
    if (this.m_motorMass_0 > 0.0) {
      this.m_motorMass_0 = 1.0 / this.m_motorMass_0;
    }if (this.isMotorEnabled === false || fixedRotation) {
      this.m_motorImpulse_0 = 0.0;
    }if (this.isLimitEnabled && fixedRotation === false) {
      var jointAngle = aB - aA - this.m_referenceAngle;
      if (MathUtils$Companion_getInstance().abs_mx4ult$(this.upperLimit - this.lowerLimit) < 2.0 * Settings_getInstance().angularSlop) {
        this.m_limitState_0 = LimitState$EQUAL_getInstance();
      } else if (jointAngle <= this.lowerLimit) {
        if (this.m_limitState_0 !== LimitState$AT_LOWER_getInstance()) {
          this.m_impulse_0.z = 0.0;
        }this.m_limitState_0 = LimitState$AT_LOWER_getInstance();
      } else if (jointAngle >= this.upperLimit) {
        if (this.m_limitState_0 !== LimitState$AT_UPPER_getInstance()) {
          this.m_impulse_0.z = 0.0;
        }this.m_limitState_0 = LimitState$AT_UPPER_getInstance();
      } else {
        this.m_limitState_0 = LimitState$INACTIVE_getInstance();
        this.m_impulse_0.z = 0.0;
      }
    } else {
      this.m_limitState_0 = LimitState$INACTIVE_getInstance();
    }
    if (ensureNotNull(data.step).warmStarting) {
      var P = this.pool.popVec2();
      this.m_impulse_0.x = this.m_impulse_0.x * ensureNotNull(data.step).dtRatio;
      this.m_impulse_0.y = this.m_impulse_0.y * ensureNotNull(data.step).dtRatio;
      this.m_motorImpulse_0 *= ensureNotNull(data.step).dtRatio;
      P.x = this.m_impulse_0.x;
      P.y = this.m_impulse_0.y;
      vA.x = vA.x - mA * P.x;
      vA.y = vA.y - mA * P.y;
      wA -= iA * (Vec2$Companion_getInstance().cross_xjacks$(this.m_rA_0, P) + this.m_motorImpulse_0 + this.m_impulse_0.z);
      vB.x = vB.x + mB * P.x;
      vB.y = vB.y + mB * P.y;
      wB += iB * (Vec2$Companion_getInstance().cross_xjacks$(this.m_rB_0, P) + this.m_motorImpulse_0 + this.m_impulse_0.z);
      this.pool.pushVec2_za3lpa$(1);
    } else {
      this.m_impulse_0.setZero();
      this.m_motorImpulse_0 = 0.0;
    }
    ensureNotNull(data.velocities)[this.m_indexA_0].w = wA;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
    this.pool.pushVec2_za3lpa$(1);
    this.pool.pushRot_za3lpa$(2);
  };
  RevoluteJoint.prototype.solveVelocityConstraints_giqime$ = function (data) {
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = ensureNotNull(data.velocities)[this.m_indexA_0].w;
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var mA = this.m_invMassA_0;
    var mB = this.m_invMassB_0;
    var iA = this.m_invIA_0;
    var iB = this.m_invIB_0;
    var fixedRotation = iA + iB === 0.0;
    if (this.isMotorEnabled && this.m_limitState_0 !== LimitState$EQUAL_getInstance() && fixedRotation === false) {
      var Cdot = wB - wA - this.m_motorSpeed_0;
      var impulse = -this.m_motorMass_0 * Cdot;
      var oldImpulse = this.m_motorImpulse_0;
      var maxImpulse = ensureNotNull(data.step).dt * this.m_maxMotorTorque_0;
      this.m_motorImpulse_0 = MathUtils$Companion_getInstance().clamp_y2kzbl$(this.m_motorImpulse_0 + impulse, -maxImpulse, maxImpulse);
      impulse = this.m_motorImpulse_0 - oldImpulse;
      wA -= iA * impulse;
      wB += iB * impulse;
    }var temp = this.pool.popVec2();
    if (this.isLimitEnabled && this.m_limitState_0 !== LimitState$INACTIVE_getInstance() && fixedRotation === false) {
      var Cdot1 = this.pool.popVec2();
      var Cdot_0 = this.pool.popVec3();
      Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wA, this.m_rA_0, temp);
      Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wB, this.m_rB_0, Cdot1);
      Cdot1.addLocal_z1lo5s$(vB).subLocal_z1lo5s$(vA).subLocal_z1lo5s$(temp);
      var Cdot2 = wB - wA;
      Cdot_0.set_y2kzbl$(Cdot1.x, Cdot1.y, Cdot2);
      var impulse_0 = this.pool.popVec3();
      this.m_mass_0.solve33ToOut_wfe5u4$(Cdot_0, impulse_0);
      impulse_0.negateLocal();
      if (this.m_limitState_0 === LimitState$EQUAL_getInstance()) {
        this.m_impulse_0.addLocal_z1lo5t$(impulse_0);
      } else if (this.m_limitState_0 === LimitState$AT_LOWER_getInstance()) {
        var newImpulse = this.m_impulse_0.z + impulse_0.z;
        if (newImpulse < 0.0) {
          var rhs = this.pool.popVec2();
          rhs.set_dleff0$(this.m_mass_0.ez.x, this.m_mass_0.ez.y).mulLocal_mx4ult$(this.m_impulse_0.z).subLocal_z1lo5s$(Cdot1);
          this.m_mass_0.solve22ToOut_xjacks$(rhs, temp);
          impulse_0.x = temp.x;
          impulse_0.y = temp.y;
          impulse_0.z = -this.m_impulse_0.z;
          this.m_impulse_0.x = this.m_impulse_0.x + temp.x;
          this.m_impulse_0.y = this.m_impulse_0.y + temp.y;
          this.m_impulse_0.z = 0.0;
          this.pool.pushVec2_za3lpa$(1);
        } else {
          this.m_impulse_0.addLocal_z1lo5t$(impulse_0);
        }
      } else if (this.m_limitState_0 === LimitState$AT_UPPER_getInstance()) {
        var newImpulse_0 = this.m_impulse_0.z + impulse_0.z;
        if (newImpulse_0 > 0.0) {
          var rhs_0 = this.pool.popVec2();
          rhs_0.set_dleff0$(this.m_mass_0.ez.x, this.m_mass_0.ez.y).mulLocal_mx4ult$(this.m_impulse_0.z).subLocal_z1lo5s$(Cdot1);
          this.m_mass_0.solve22ToOut_xjacks$(rhs_0, temp);
          impulse_0.x = temp.x;
          impulse_0.y = temp.y;
          impulse_0.z = -this.m_impulse_0.z;
          this.m_impulse_0.x = this.m_impulse_0.x + temp.x;
          this.m_impulse_0.y = this.m_impulse_0.y + temp.y;
          this.m_impulse_0.z = 0.0;
          this.pool.pushVec2_za3lpa$(1);
        } else {
          this.m_impulse_0.addLocal_z1lo5t$(impulse_0);
        }
      }var P = this.pool.popVec2();
      P.set_dleff0$(impulse_0.x, impulse_0.y);
      vA.x = vA.x - mA * P.x;
      vA.y = vA.y - mA * P.y;
      wA -= iA * (Vec2$Companion_getInstance().cross_xjacks$(this.m_rA_0, P) + impulse_0.z);
      vB.x = vB.x + mB * P.x;
      vB.y = vB.y + mB * P.y;
      wB += iB * (Vec2$Companion_getInstance().cross_xjacks$(this.m_rB_0, P) + impulse_0.z);
      this.pool.pushVec2_za3lpa$(2);
      this.pool.pushVec3_za3lpa$(2);
    } else {
      var Cdot_1 = this.pool.popVec2();
      var impulse_1 = this.pool.popVec2();
      Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wA, this.m_rA_0, temp);
      Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wB, this.m_rB_0, Cdot_1);
      Cdot_1.addLocal_z1lo5s$(vB).subLocal_z1lo5s$(vA).subLocal_z1lo5s$(temp);
      this.m_mass_0.solve22ToOut_xjacks$(Cdot_1.negateLocal(), impulse_1);
      this.m_impulse_0.x = this.m_impulse_0.x + impulse_1.x;
      this.m_impulse_0.y = this.m_impulse_0.y + impulse_1.y;
      vA.x = vA.x - mA * impulse_1.x;
      vA.y = vA.y - mA * impulse_1.y;
      wA -= iA * Vec2$Companion_getInstance().cross_xjacks$(this.m_rA_0, impulse_1);
      vB.x = vB.x + mB * impulse_1.x;
      vB.y = vB.y + mB * impulse_1.y;
      wB += iB * Vec2$Companion_getInstance().cross_xjacks$(this.m_rB_0, impulse_1);
      this.pool.pushVec2_za3lpa$(2);
    }
    ensureNotNull(data.velocities)[this.m_indexA_0].w = wA;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
    this.pool.pushVec2_za3lpa$(1);
  };
  RevoluteJoint.prototype.solvePositionConstraints_giqime$ = function (data) {
    var qA = this.pool.popRot();
    var qB = this.pool.popRot();
    var cA = ensureNotNull(data.positions)[this.m_indexA_0].c;
    var aA = {v: ensureNotNull(data.positions)[this.m_indexA_0].a};
    var cB = ensureNotNull(data.positions)[this.m_indexB_0].c;
    var aB = {v: ensureNotNull(data.positions)[this.m_indexB_0].a};
    qA.set_mx4ult$(aA.v);
    qB.set_mx4ult$(aB.v);
    var angularError = 0.0;
    var positionError = {v: 0.0};
    var fixedRotation = this.m_invIA_0 + this.m_invIB_0 === 0.0;
    if (this.isLimitEnabled && this.m_limitState_0 !== LimitState$INACTIVE_getInstance() && fixedRotation === false) {
      var angle = aB.v - aA.v - this.m_referenceAngle;
      var limitImpulse = 0.0;
      if (this.m_limitState_0 === LimitState$EQUAL_getInstance()) {
        var C = MathUtils$Companion_getInstance().clamp_y2kzbl$(angle - this.lowerLimit, -Settings_getInstance().maxAngularCorrection, Settings_getInstance().maxAngularCorrection);
        limitImpulse = -this.m_motorMass_0 * C;
        angularError = MathUtils$Companion_getInstance().abs_mx4ult$(C);
      } else if (this.m_limitState_0 === LimitState$AT_LOWER_getInstance()) {
        var C_0 = angle - this.lowerLimit;
        angularError = -C_0;
        C_0 = MathUtils$Companion_getInstance().clamp_y2kzbl$(C_0 + Settings_getInstance().angularSlop, -Settings_getInstance().maxAngularCorrection, 0.0);
        limitImpulse = -this.m_motorMass_0 * C_0;
      } else if (this.m_limitState_0 === LimitState$AT_UPPER_getInstance()) {
        var C_1 = angle - this.upperLimit;
        angularError = C_1;
        C_1 = MathUtils$Companion_getInstance().clamp_y2kzbl$(C_1 - Settings_getInstance().angularSlop, 0.0, Settings_getInstance().maxAngularCorrection);
        limitImpulse = -this.m_motorMass_0 * C_1;
      }aA.v -= this.m_invIA_0 * limitImpulse;
      aB.v += this.m_invIB_0 * limitImpulse;
    }qA.set_mx4ult$(aA.v);
    qB.set_mx4ult$(aB.v);
    var rA = this.pool.popVec2();
    var rB = this.pool.popVec2();
    var C_2 = this.pool.popVec2();
    var impulse = this.pool.popVec2();
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, C_2.set_z1lo5s$(this.m_localAnchorA).subLocal_z1lo5s$(this.m_localCenterA_0), rA);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qB, C_2.set_z1lo5s$(this.m_localAnchorB).subLocal_z1lo5s$(this.m_localCenterB_0), rB);
    C_2.set_z1lo5s$(cB).addLocal_z1lo5s$(rB).subLocal_z1lo5s$(cA).subLocal_z1lo5s$(rA);
    positionError.v = C_2.length();
    var mA = this.m_invMassA_0;
    var mB = this.m_invMassB_0;
    var iA = this.m_invIA_0;
    var iB = this.m_invIB_0;
    var K = this.pool.popMat22();
    K.ex.x = mA + mB + iA * rA.y * rA.y + iB * rB.y * rB.y;
    K.ex.y = -iA * rA.x * rA.y - iB * rB.x * rB.y;
    K.ey.x = K.ex.y;
    K.ey.y = mA + mB + iA * rA.x * rA.x + iB * rB.x * rB.x;
    K.solveToOut_xjacks$(C_2, impulse);
    impulse.negateLocal();
    cA.x = cA.x - mA * impulse.x;
    cA.y = cA.y - mA * impulse.y;
    aA.v -= iA * Vec2$Companion_getInstance().cross_xjacks$(rA, impulse);
    cB.x = cB.x + mB * impulse.x;
    cB.y = cB.y + mB * impulse.y;
    aB.v += iB * Vec2$Companion_getInstance().cross_xjacks$(rB, impulse);
    this.pool.pushVec2_za3lpa$(4);
    this.pool.pushMat22_za3lpa$(1);
    ensureNotNull(data.positions)[this.m_indexA_0].a = aA.v;
    ensureNotNull(data.positions)[this.m_indexB_0].a = aB.v;
    this.pool.pushRot_za3lpa$(2);
    return positionError.v <= Settings_getInstance().linearSlop && angularError <= Settings_getInstance().angularSlop;
  };
  RevoluteJoint.prototype.getAnchorA_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyA).getWorldPointToOut_xjacks$(this.m_localAnchorA, argOut);
  };
  RevoluteJoint.prototype.getAnchorB_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyB).getWorldPointToOut_xjacks$(this.m_localAnchorB, argOut);
  };
  RevoluteJoint.prototype.getReactionForce_rrlx6b$ = function (inv_dt, argOut) {
    argOut.set_dleff0$(this.m_impulse_0.x, this.m_impulse_0.y).mulLocal_mx4ult$(inv_dt);
  };
  RevoluteJoint.prototype.getReactionTorque_mx4ult$ = function (inv_dt) {
    return inv_dt * this.m_impulse_0.z;
  };
  RevoluteJoint.prototype.enableMotor_6taknv$ = function (flag) {
    ensureNotNull(this.m_bodyA).isAwake = true;
    ensureNotNull(this.m_bodyB).isAwake = true;
    this.isMotorEnabled = flag;
  };
  RevoluteJoint.prototype.getMotorTorque_mx4ult$ = function (inv_dt) {
    return this.m_motorImpulse_0 * inv_dt;
  };
  RevoluteJoint.prototype.enableLimit_6taknv$ = function (flag) {
    if (flag !== this.isLimitEnabled) {
      ensureNotNull(this.m_bodyA).isAwake = true;
      ensureNotNull(this.m_bodyB).isAwake = true;
      this.isLimitEnabled = flag;
      this.m_impulse_0.z = 0.0;
    }};
  RevoluteJoint.prototype.setLimits_dleff0$ = function (lower, upper) {
    if (!(lower <= upper)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (lower !== this.lowerLimit || upper !== this.upperLimit) {
      ensureNotNull(this.m_bodyA).isAwake = true;
      ensureNotNull(this.m_bodyB).isAwake = true;
      this.m_impulse_0.z = 0.0;
      this.lowerLimit = lower;
      this.upperLimit = upper;
    }};
  RevoluteJoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RevoluteJoint',
    interfaces: [Joint]
  };
  function RevoluteJointDef() {
    JointDef.call(this, JointType$REVOLUTE_getInstance());
    this.localAnchorA = new Vec2(0.0, 0.0);
    this.localAnchorB = new Vec2(0.0, 0.0);
    this.referenceAngle = 0.0;
    this.enableLimit = false;
    this.lowerAngle = 0.0;
    this.upperAngle = 0.0;
    this.enableMotor = false;
    this.motorSpeed = 0.0;
    this.maxMotorTorque = 0.0;
  }
  RevoluteJointDef.prototype.initialize_a3y2sw$ = function (b1, b2, anchor) {
    this.bodyA = b1;
    this.bodyB = b2;
    ensureNotNull(this.bodyA).getLocalPointToOut_xjacks$(anchor, this.localAnchorA);
    ensureNotNull(this.bodyB).getLocalPointToOut_xjacks$(anchor, this.localAnchorB);
    this.referenceAngle = ensureNotNull(this.bodyB).angle - ensureNotNull(this.bodyA).angle;
  };
  RevoluteJointDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RevoluteJointDef',
    interfaces: [JointDef]
  };
  function RopeJoint(worldPool, def) {
    Joint.call(this, worldPool, def);
    this.localAnchorA = new Vec2();
    this.localAnchorB = new Vec2();
    this.maxLength = 0;
    this.m_length_0 = 0;
    this.m_impulse_0 = 0;
    this.m_indexA_0 = 0;
    this.m_indexB_0 = 0;
    this.m_u_0 = new Vec2();
    this.m_rA_0 = new Vec2();
    this.m_rB_0 = new Vec2();
    this.m_localCenterA_0 = new Vec2();
    this.m_localCenterB_0 = new Vec2();
    this.m_invMassA_0 = 0;
    this.m_invMassB_0 = 0;
    this.m_invIA_0 = 0;
    this.m_invIB_0 = 0;
    this.m_mass_0 = 0;
    this.limitState_frqh3m$_0 = null;
    this.localAnchorA.set_z1lo5s$(def.localAnchorA);
    this.localAnchorB.set_z1lo5s$(def.localAnchorB);
    this.maxLength = def.maxLength;
    this.m_mass_0 = 0.0;
    this.m_impulse_0 = 0.0;
    this.limitState = LimitState$INACTIVE_getInstance();
    this.m_length_0 = 0.0;
  }
  Object.defineProperty(RopeJoint.prototype, 'limitState', {
    get: function () {
      return this.limitState_frqh3m$_0;
    },
    set: function (limitState) {
      this.limitState_frqh3m$_0 = limitState;
    }
  });
  RopeJoint.prototype.initVelocityConstraints_giqime$ = function (data) {
    this.m_indexA_0 = ensureNotNull(this.m_bodyA).m_islandIndex;
    this.m_indexB_0 = ensureNotNull(this.m_bodyB).m_islandIndex;
    this.m_localCenterA_0.set_z1lo5s$(ensureNotNull(this.m_bodyA).m_sweep.localCenter);
    this.m_localCenterB_0.set_z1lo5s$(ensureNotNull(this.m_bodyB).m_sweep.localCenter);
    this.m_invMassA_0 = ensureNotNull(this.m_bodyA).m_invMass;
    this.m_invMassB_0 = ensureNotNull(this.m_bodyB).m_invMass;
    this.m_invIA_0 = ensureNotNull(this.m_bodyA).m_invI;
    this.m_invIB_0 = ensureNotNull(this.m_bodyB).m_invI;
    var cA = ensureNotNull(data.positions)[this.m_indexA_0].c;
    var aA = ensureNotNull(data.positions)[this.m_indexA_0].a;
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = ensureNotNull(data.velocities)[this.m_indexA_0].w;
    var cB = ensureNotNull(data.positions)[this.m_indexB_0].c;
    var aB = ensureNotNull(data.positions)[this.m_indexB_0].a;
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var qA = this.pool.popRot();
    var qB = this.pool.popRot();
    var temp = this.pool.popVec2();
    qA.set_mx4ult$(aA);
    qB.set_mx4ult$(aB);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, temp.set_z1lo5s$(this.localAnchorA).subLocal_z1lo5s$(this.m_localCenterA_0), this.m_rA_0);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qB, temp.set_z1lo5s$(this.localAnchorB).subLocal_z1lo5s$(this.m_localCenterB_0), this.m_rB_0);
    this.m_u_0.set_z1lo5s$(cB).addLocal_z1lo5s$(this.m_rB_0).subLocal_z1lo5s$(cA).subLocal_z1lo5s$(this.m_rA_0);
    this.m_length_0 = this.m_u_0.length();
    var C = this.m_length_0 - this.maxLength;
    if (C > 0.0) {
      this.limitState = LimitState$AT_UPPER_getInstance();
    } else {
      this.limitState = LimitState$INACTIVE_getInstance();
    }
    if (this.m_length_0 > Settings_getInstance().linearSlop) {
      this.m_u_0.mulLocal_mx4ult$(1.0 / this.m_length_0);
    } else {
      this.m_u_0.setZero();
      this.m_mass_0 = 0.0;
      this.m_impulse_0 = 0.0;
      this.pool.pushRot_za3lpa$(2);
      this.pool.pushVec2_za3lpa$(1);
      return;
    }
    var crA = Vec2$Companion_getInstance().cross_xjacks$(this.m_rA_0, this.m_u_0);
    var crB = Vec2$Companion_getInstance().cross_xjacks$(this.m_rB_0, this.m_u_0);
    var invMass = this.m_invMassA_0 + this.m_invIA_0 * crA * crA + this.m_invMassB_0 + this.m_invIB_0 * crB * crB;
    this.m_mass_0 = invMass !== 0.0 ? 1.0 / invMass : 0.0;
    if (ensureNotNull(data.step).warmStarting) {
      this.m_impulse_0 *= ensureNotNull(data.step).dtRatio;
      var Px = this.m_impulse_0 * this.m_u_0.x;
      var Py = this.m_impulse_0 * this.m_u_0.y;
      vA.x = vA.x - this.m_invMassA_0 * Px;
      vA.y = vA.y - this.m_invMassA_0 * Py;
      wA -= this.m_invIA_0 * (this.m_rA_0.x * Py - this.m_rA_0.y * Px);
      vB.x = vB.x + this.m_invMassB_0 * Px;
      vB.y = vB.y + this.m_invMassB_0 * Py;
      wB += this.m_invIB_0 * (this.m_rB_0.x * Py - this.m_rB_0.y * Px);
    } else {
      this.m_impulse_0 = 0.0;
    }
    this.pool.pushRot_za3lpa$(2);
    this.pool.pushVec2_za3lpa$(1);
    ensureNotNull(data.velocities)[this.m_indexA_0].w = wA;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
  };
  RopeJoint.prototype.solveVelocityConstraints_giqime$ = function (data) {
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = ensureNotNull(data.velocities)[this.m_indexA_0].w;
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var vpA = this.pool.popVec2();
    var vpB = this.pool.popVec2();
    var temp = this.pool.popVec2();
    Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wA, this.m_rA_0, vpA);
    vpA.addLocal_z1lo5s$(vA);
    Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wB, this.m_rB_0, vpB);
    vpB.addLocal_z1lo5s$(vB);
    var C = this.m_length_0 - this.maxLength;
    var Cdot = Vec2$Companion_getInstance().dot_xjacks$(this.m_u_0, temp.set_z1lo5s$(vpB).subLocal_z1lo5s$(vpA));
    if (C < 0.0) {
      Cdot += ensureNotNull(data.step).inv_dt * C;
    }var impulse = -this.m_mass_0 * Cdot;
    var oldImpulse = this.m_impulse_0;
    this.m_impulse_0 = MathUtils$Companion_getInstance().min_dleff0$(0.0, this.m_impulse_0 + impulse);
    impulse = this.m_impulse_0 - oldImpulse;
    var Px = impulse * this.m_u_0.x;
    var Py = impulse * this.m_u_0.y;
    vA.x = vA.x - this.m_invMassA_0 * Px;
    vA.y = vA.y - this.m_invMassA_0 * Py;
    wA -= this.m_invIA_0 * (this.m_rA_0.x * Py - this.m_rA_0.y * Px);
    vB.x = vB.x + this.m_invMassB_0 * Px;
    vB.y = vB.y + this.m_invMassB_0 * Py;
    wB += this.m_invIB_0 * (this.m_rB_0.x * Py - this.m_rB_0.y * Px);
    this.pool.pushVec2_za3lpa$(3);
    ensureNotNull(data.velocities)[this.m_indexA_0].w = wA;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
  };
  RopeJoint.prototype.solvePositionConstraints_giqime$ = function (data) {
    var cA = ensureNotNull(data.positions)[this.m_indexA_0].c;
    var aA = ensureNotNull(data.positions)[this.m_indexA_0].a;
    var cB = ensureNotNull(data.positions)[this.m_indexB_0].c;
    var aB = ensureNotNull(data.positions)[this.m_indexB_0].a;
    var qA = this.pool.popRot();
    var qB = this.pool.popRot();
    var u = this.pool.popVec2();
    var rA = this.pool.popVec2();
    var rB = this.pool.popVec2();
    var temp = this.pool.popVec2();
    qA.set_mx4ult$(aA);
    qB.set_mx4ult$(aB);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, temp.set_z1lo5s$(this.localAnchorA).subLocal_z1lo5s$(this.m_localCenterA_0), rA);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qB, temp.set_z1lo5s$(this.localAnchorB).subLocal_z1lo5s$(this.m_localCenterB_0), rB);
    u.set_z1lo5s$(cB).addLocal_z1lo5s$(rB).subLocal_z1lo5s$(cA).subLocal_z1lo5s$(rA);
    var length = u.normalize();
    var C = length - this.maxLength;
    C = MathUtils$Companion_getInstance().clamp_y2kzbl$(C, 0.0, Settings_getInstance().maxLinearCorrection);
    var impulse = -this.m_mass_0 * C;
    var Px = impulse * u.x;
    var Py = impulse * u.y;
    cA.x = cA.x - this.m_invMassA_0 * Px;
    cA.y = cA.y - this.m_invMassA_0 * Py;
    aA -= this.m_invIA_0 * (rA.x * Py - rA.y * Px);
    cB.x = cB.x + this.m_invMassB_0 * Px;
    cB.y = cB.y + this.m_invMassB_0 * Py;
    aB += this.m_invIB_0 * (rB.x * Py - rB.y * Px);
    this.pool.pushRot_za3lpa$(2);
    this.pool.pushVec2_za3lpa$(4);
    ensureNotNull(data.positions)[this.m_indexA_0].a = aA;
    ensureNotNull(data.positions)[this.m_indexB_0].a = aB;
    return length - this.maxLength < Settings_getInstance().linearSlop;
  };
  RopeJoint.prototype.getAnchorA_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyA).getWorldPointToOut_xjacks$(this.localAnchorA, argOut);
  };
  RopeJoint.prototype.getAnchorB_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyB).getWorldPointToOut_xjacks$(this.localAnchorB, argOut);
  };
  RopeJoint.prototype.getReactionForce_rrlx6b$ = function (inv_dt, argOut) {
    argOut.set_z1lo5s$(this.m_u_0).mulLocal_mx4ult$(inv_dt).mulLocal_mx4ult$(this.m_impulse_0);
  };
  RopeJoint.prototype.getReactionTorque_mx4ult$ = function (inv_dt) {
    return 0.0;
  };
  RopeJoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RopeJoint',
    interfaces: [Joint]
  };
  function RopeJointDef() {
    JointDef.call(this, JointType$ROPE_getInstance());
    this.localAnchorA = new Vec2(-1.0, 0.0);
    this.localAnchorB = new Vec2(1.0, 0.0);
    this.maxLength = 0.0;
  }
  RopeJointDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RopeJointDef',
    interfaces: [JointDef]
  };
  function WeldJoint(argWorld, def) {
    Joint.call(this, argWorld, def);
    this.frequency = def.frequencyHz;
    this.dampingRatio = def.dampingRatio;
    this.m_bias_0 = 0;
    this.localAnchorA = Vec2_init(def.localAnchorA);
    this.localAnchorB = Vec2_init(def.localAnchorB);
    this.referenceAngle = def.referenceAngle;
    this.m_gamma_0 = 0;
    this.m_impulse_0 = new Vec3(0.0, 0.0, 0.0);
    this.m_indexA_0 = 0;
    this.m_indexB_0 = 0;
    this.m_rA_0 = new Vec2();
    this.m_rB_0 = new Vec2();
    this.m_localCenterA_0 = new Vec2();
    this.m_localCenterB_0 = new Vec2();
    this.m_invMassA_0 = 0;
    this.m_invMassB_0 = 0;
    this.m_invIA_0 = 0;
    this.m_invIB_0 = 0;
    this.m_mass_0 = Mat33_init();
  }
  WeldJoint.prototype.getAnchorA_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyA).getWorldPointToOut_xjacks$(this.localAnchorA, argOut);
  };
  WeldJoint.prototype.getAnchorB_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyB).getWorldPointToOut_xjacks$(this.localAnchorB, argOut);
  };
  WeldJoint.prototype.getReactionForce_rrlx6b$ = function (inv_dt, argOut) {
    argOut.set_dleff0$(this.m_impulse_0.x, this.m_impulse_0.y);
    argOut.mulLocal_mx4ult$(inv_dt);
  };
  WeldJoint.prototype.getReactionTorque_mx4ult$ = function (inv_dt) {
    return inv_dt * this.m_impulse_0.z;
  };
  WeldJoint.prototype.initVelocityConstraints_giqime$ = function (data) {
    this.m_indexA_0 = ensureNotNull(this.m_bodyA).m_islandIndex;
    this.m_indexB_0 = ensureNotNull(this.m_bodyB).m_islandIndex;
    this.m_localCenterA_0.set_z1lo5s$(ensureNotNull(this.m_bodyA).m_sweep.localCenter);
    this.m_localCenterB_0.set_z1lo5s$(ensureNotNull(this.m_bodyB).m_sweep.localCenter);
    this.m_invMassA_0 = ensureNotNull(this.m_bodyA).m_invMass;
    this.m_invMassB_0 = ensureNotNull(this.m_bodyB).m_invMass;
    this.m_invIA_0 = ensureNotNull(this.m_bodyA).m_invI;
    this.m_invIB_0 = ensureNotNull(this.m_bodyB).m_invI;
    var aA = ensureNotNull(data.positions)[this.m_indexA_0].a;
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = ensureNotNull(data.velocities)[this.m_indexA_0].w;
    var aB = ensureNotNull(data.positions)[this.m_indexB_0].a;
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var qA = this.pool.popRot();
    var qB = this.pool.popRot();
    var temp = this.pool.popVec2();
    qA.set_mx4ult$(aA);
    qB.set_mx4ult$(aB);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, temp.set_z1lo5s$(this.localAnchorA).subLocal_z1lo5s$(this.m_localCenterA_0), this.m_rA_0);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qB, temp.set_z1lo5s$(this.localAnchorB).subLocal_z1lo5s$(this.m_localCenterB_0), this.m_rB_0);
    var mA = this.m_invMassA_0;
    var mB = this.m_invMassB_0;
    var iA = this.m_invIA_0;
    var iB = this.m_invIB_0;
    var K = this.pool.popMat33();
    K.ex.x = mA + mB + this.m_rA_0.y * this.m_rA_0.y * iA + this.m_rB_0.y * this.m_rB_0.y * iB;
    K.ey.x = -this.m_rA_0.y * this.m_rA_0.x * iA - this.m_rB_0.y * this.m_rB_0.x * iB;
    K.ez.x = -this.m_rA_0.y * iA - this.m_rB_0.y * iB;
    K.ex.y = K.ey.x;
    K.ey.y = mA + mB + this.m_rA_0.x * this.m_rA_0.x * iA + this.m_rB_0.x * this.m_rB_0.x * iB;
    K.ez.y = this.m_rA_0.x * iA + this.m_rB_0.x * iB;
    K.ex.z = K.ez.x;
    K.ey.z = K.ez.y;
    K.ez.z = iA + iB;
    if (this.frequency > 0.0) {
      K.getInverse22_krymq6$(this.m_mass_0);
      var invM = iA + iB;
      var m = invM > 0.0 ? 1.0 / invM : 0.0;
      var C = aB - aA - this.referenceAngle;
      var omega = 2.0 * MathUtils$Companion_getInstance().PI * this.frequency;
      var d = 2.0 * m * this.dampingRatio * omega;
      var k = m * omega * omega;
      var h = ensureNotNull(data.step).dt;
      this.m_gamma_0 = h * (d + h * k);
      this.m_gamma_0 = this.m_gamma_0 !== 0.0 ? 1.0 / this.m_gamma_0 : 0.0;
      this.m_bias_0 = C * h * k * this.m_gamma_0;
      invM += this.m_gamma_0;
      this.m_mass_0.ez.z = invM !== 0.0 ? 1.0 / invM : 0.0;
    } else {
      K.getSymInverse33_krymq6$(this.m_mass_0);
      this.m_gamma_0 = 0.0;
      this.m_bias_0 = 0.0;
    }
    if (ensureNotNull(data.step).warmStarting) {
      var P = this.pool.popVec2();
      this.m_impulse_0.mulLocal_mx4ult$(ensureNotNull(data.step).dtRatio);
      P.set_dleff0$(this.m_impulse_0.x, this.m_impulse_0.y);
      vA.x = vA.x - mA * P.x;
      vA.y = vA.y - mA * P.y;
      wA -= iA * (Vec2$Companion_getInstance().cross_xjacks$(this.m_rA_0, P) + this.m_impulse_0.z);
      vB.x = vB.x + mB * P.x;
      vB.y = vB.y + mB * P.y;
      wB += iB * (Vec2$Companion_getInstance().cross_xjacks$(this.m_rB_0, P) + this.m_impulse_0.z);
      this.pool.pushVec2_za3lpa$(1);
    } else {
      this.m_impulse_0.setZero();
    }
    ensureNotNull(data.velocities)[this.m_indexA_0].w = wA;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
    this.pool.pushVec2_za3lpa$(1);
    this.pool.pushRot_za3lpa$(2);
    this.pool.pushMat33_za3lpa$(1);
  };
  WeldJoint.prototype.solveVelocityConstraints_giqime$ = function (data) {
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = ensureNotNull(data.velocities)[this.m_indexA_0].w;
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var mA = this.m_invMassA_0;
    var mB = this.m_invMassB_0;
    var iA = this.m_invIA_0;
    var iB = this.m_invIB_0;
    var Cdot1 = this.pool.popVec2();
    var P = this.pool.popVec2();
    var temp = this.pool.popVec2();
    if (this.frequency > 0.0) {
      var Cdot2 = wB - wA;
      var impulse2 = -this.m_mass_0.ez.z * (Cdot2 + this.m_bias_0 + this.m_gamma_0 * this.m_impulse_0.z);
      this.m_impulse_0.z = this.m_impulse_0.z + impulse2;
      wA -= iA * impulse2;
      wB += iB * impulse2;
      Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wB, this.m_rB_0, Cdot1);
      Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wA, this.m_rA_0, temp);
      Cdot1.addLocal_z1lo5s$(vB).subLocal_z1lo5s$(vA).subLocal_z1lo5s$(temp);
      var impulse1 = P;
      Mat33$Companion_getInstance().mul22ToOutUnsafe_mkegem$(this.m_mass_0, Cdot1, impulse1);
      impulse1.negateLocal();
      this.m_impulse_0.x = this.m_impulse_0.x + impulse1.x;
      this.m_impulse_0.y = this.m_impulse_0.y + impulse1.y;
      vA.x = vA.x - mA * P.x;
      vA.y = vA.y - mA * P.y;
      wA -= iA * Vec2$Companion_getInstance().cross_xjacks$(this.m_rA_0, P);
      vB.x = vB.x + mB * P.x;
      vB.y = vB.y + mB * P.y;
      wB += iB * Vec2$Companion_getInstance().cross_xjacks$(this.m_rB_0, P);
    } else {
      Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wA, this.m_rA_0, temp);
      Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(wB, this.m_rB_0, Cdot1);
      Cdot1.addLocal_z1lo5s$(vB).subLocal_z1lo5s$(vA).subLocal_z1lo5s$(temp);
      var Cdot2_0 = wB - wA;
      var Cdot = this.pool.popVec3();
      Cdot.set_y2kzbl$(Cdot1.x, Cdot1.y, Cdot2_0);
      var impulse = this.pool.popVec3();
      Mat33$Companion_getInstance().mulToOutUnsafe_lgi9ny$(this.m_mass_0, Cdot, impulse);
      impulse.negateLocal();
      this.m_impulse_0.addLocal_z1lo5t$(impulse);
      P.set_dleff0$(impulse.x, impulse.y);
      vA.x = vA.x - mA * P.x;
      vA.y = vA.y - mA * P.y;
      wA -= iA * (Vec2$Companion_getInstance().cross_xjacks$(this.m_rA_0, P) + impulse.z);
      vB.x = vB.x + mB * P.x;
      vB.y = vB.y + mB * P.y;
      wB += iB * (Vec2$Companion_getInstance().cross_xjacks$(this.m_rB_0, P) + impulse.z);
      this.pool.pushVec3_za3lpa$(2);
    }
    ensureNotNull(data.velocities)[this.m_indexA_0].w = wA;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
    this.pool.pushVec2_za3lpa$(3);
  };
  WeldJoint.prototype.solvePositionConstraints_giqime$ = function (data) {
    var cA = ensureNotNull(data.positions)[this.m_indexA_0].c;
    var aA = ensureNotNull(data.positions)[this.m_indexA_0].a;
    var cB = ensureNotNull(data.positions)[this.m_indexB_0].c;
    var aB = ensureNotNull(data.positions)[this.m_indexB_0].a;
    var qA = this.pool.popRot();
    var qB = this.pool.popRot();
    var temp = this.pool.popVec2();
    var rA = this.pool.popVec2();
    var rB = this.pool.popVec2();
    qA.set_mx4ult$(aA);
    qB.set_mx4ult$(aB);
    var mA = this.m_invMassA_0;
    var mB = this.m_invMassB_0;
    var iA = this.m_invIA_0;
    var iB = this.m_invIB_0;
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, temp.set_z1lo5s$(this.localAnchorA).subLocal_z1lo5s$(this.m_localCenterA_0), rA);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qB, temp.set_z1lo5s$(this.localAnchorB).subLocal_z1lo5s$(this.m_localCenterB_0), rB);
    var positionError;
    var angularError;
    var K = this.pool.popMat33();
    var C1 = this.pool.popVec2();
    var P = this.pool.popVec2();
    K.ex.x = mA + mB + rA.y * rA.y * iA + rB.y * rB.y * iB;
    K.ey.x = -rA.y * rA.x * iA - rB.y * rB.x * iB;
    K.ez.x = -rA.y * iA - rB.y * iB;
    K.ex.y = K.ey.x;
    K.ey.y = mA + mB + rA.x * rA.x * iA + rB.x * rB.x * iB;
    K.ez.y = rA.x * iA + rB.x * iB;
    K.ex.z = K.ez.x;
    K.ey.z = K.ez.y;
    K.ez.z = iA + iB;
    if (this.frequency > 0.0) {
      C1.set_z1lo5s$(cB).addLocal_z1lo5s$(rB).subLocal_z1lo5s$(cA).subLocal_z1lo5s$(rA);
      positionError = C1.length();
      angularError = 0.0;
      K.solve22ToOut_xjacks$(C1, P);
      P.negateLocal();
      cA.x = cA.x - mA * P.x;
      cA.y = cA.y - mA * P.y;
      aA -= iA * Vec2$Companion_getInstance().cross_xjacks$(rA, P);
      cB.x = cB.x + mB * P.x;
      cB.y = cB.y + mB * P.y;
      aB += iB * Vec2$Companion_getInstance().cross_xjacks$(rB, P);
    } else {
      C1.set_z1lo5s$(cB).addLocal_z1lo5s$(rB).subLocal_z1lo5s$(cA).subLocal_z1lo5s$(rA);
      var C2 = aB - aA - this.referenceAngle;
      positionError = C1.length();
      angularError = MathUtils$Companion_getInstance().abs_mx4ult$(C2);
      var C = this.pool.popVec3();
      var impulse = this.pool.popVec3();
      C.set_y2kzbl$(C1.x, C1.y, C2);
      K.solve33ToOut_wfe5u4$(C, impulse);
      impulse.negateLocal();
      P.set_dleff0$(impulse.x, impulse.y);
      cA.x = cA.x - mA * P.x;
      cA.y = cA.y - mA * P.y;
      aA -= iA * (Vec2$Companion_getInstance().cross_xjacks$(rA, P) + impulse.z);
      cB.x = cB.x + mB * P.x;
      cB.y = cB.y + mB * P.y;
      aB += iB * (Vec2$Companion_getInstance().cross_xjacks$(rB, P) + impulse.z);
      this.pool.pushVec3_za3lpa$(2);
    }
    ensureNotNull(data.positions)[this.m_indexA_0].a = aA;
    ensureNotNull(data.positions)[this.m_indexB_0].a = aB;
    this.pool.pushVec2_za3lpa$(5);
    this.pool.pushRot_za3lpa$(2);
    this.pool.pushMat33_za3lpa$(1);
    return positionError <= Settings_getInstance().linearSlop && angularError <= Settings_getInstance().angularSlop;
  };
  WeldJoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeldJoint',
    interfaces: [Joint]
  };
  function WeldJointDef() {
    JointDef.call(this, JointType$WELD_getInstance());
    this.localAnchorA = new Vec2();
    this.localAnchorB = new Vec2();
    this.referenceAngle = 0.0;
    this.frequencyHz = 0.0;
    this.dampingRatio = 0.0;
  }
  WeldJointDef.prototype.initialize_a3y2sw$ = function (bA, bB, anchor) {
    this.bodyA = bA;
    this.bodyB = bB;
    ensureNotNull(this.bodyA).getLocalPointToOut_xjacks$(anchor, this.localAnchorA);
    ensureNotNull(this.bodyB).getLocalPointToOut_xjacks$(anchor, this.localAnchorB);
    this.referenceAngle = ensureNotNull(this.bodyB).angle - ensureNotNull(this.bodyA).angle;
  };
  WeldJointDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeldJointDef',
    interfaces: [JointDef]
  };
  function WheelJoint(argPool, def) {
    Joint.call(this, argPool, def);
    this.springFrequencyHz = 0;
    this.springDampingRatio = 0;
    this.localAnchorA = new Vec2();
    this.localAnchorB = new Vec2();
    this.localAxisA = new Vec2();
    this.m_localYAxisA_0 = new Vec2();
    this.m_impulse_0 = 0;
    this.m_motorImpulse_0 = 0;
    this.m_springImpulse_0 = 0;
    this.m_maxMotorTorque_0 = 0;
    this.m_motorSpeed_0 = 0;
    this.isMotorEnabled_q2ksht$_0 = false;
    this.m_indexA_0 = 0;
    this.m_indexB_0 = 0;
    this.m_localCenterA_0 = new Vec2();
    this.m_localCenterB_0 = new Vec2();
    this.m_invMassA_0 = 0;
    this.m_invMassB_0 = 0;
    this.m_invIA_0 = 0;
    this.m_invIB_0 = 0;
    this.m_ax_0 = new Vec2();
    this.m_ay_0 = new Vec2();
    this.m_sAx_0 = 0;
    this.m_sBx_0 = 0;
    this.m_sAy_0 = 0;
    this.m_sBy_0 = 0;
    this.m_mass_0 = 0;
    this.m_motorMass_0 = 0;
    this.m_springMass_0 = 0;
    this.m_bias_0 = 0;
    this.m_gamma_0 = 0;
    this.rA_0 = new Vec2();
    this.rB_0 = new Vec2();
    this.d_0 = new Vec2();
    this.localAnchorA.set_z1lo5s$(def.localAnchorA);
    this.localAnchorB.set_z1lo5s$(def.localAnchorB);
    this.localAxisA.set_z1lo5s$(def.localAxisA);
    Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(1.0, this.localAxisA, this.m_localYAxisA_0);
    this.m_motorMass_0 = 0.0;
    this.m_motorImpulse_0 = 0.0;
    this.m_maxMotorTorque_0 = def.maxMotorTorque;
    this.m_motorSpeed_0 = def.motorSpeed;
    this.isMotorEnabled = def.enableMotor;
    this.springFrequencyHz = def.frequencyHz;
    this.springDampingRatio = def.dampingRatio;
  }
  Object.defineProperty(WheelJoint.prototype, 'isMotorEnabled', {
    get: function () {
      return this.isMotorEnabled_q2ksht$_0;
    },
    set: function (isMotorEnabled) {
      this.isMotorEnabled_q2ksht$_0 = isMotorEnabled;
    }
  });
  Object.defineProperty(WheelJoint.prototype, 'jointTranslation', {
    get: function () {
      var b1 = this.m_bodyA;
      var b2 = this.m_bodyB;
      var p1 = this.pool.popVec2();
      var p2 = this.pool.popVec2();
      var axis = this.pool.popVec2();
      ensureNotNull(b1).getWorldPointToOut_xjacks$(this.localAnchorA, p1);
      ensureNotNull(b2).getWorldPointToOut_xjacks$(this.localAnchorA, p2);
      p2.subLocal_z1lo5s$(p1);
      b1.getWorldVectorToOut_xjacks$(this.localAxisA, axis);
      var translation = Vec2$Companion_getInstance().dot_xjacks$(p2, axis);
      this.pool.pushVec2_za3lpa$(3);
      return translation;
    }
  });
  Object.defineProperty(WheelJoint.prototype, 'jointSpeed', {
    get: function () {
      return ensureNotNull(this.m_bodyA).m_angularVelocity - ensureNotNull(this.m_bodyB).m_angularVelocity;
    }
  });
  Object.defineProperty(WheelJoint.prototype, 'motorSpeed', {
    get: function () {
      return this.m_motorSpeed_0;
    },
    set: function (speed) {
      ensureNotNull(this.m_bodyA).isAwake = true;
      ensureNotNull(this.m_bodyB).isAwake = true;
      this.m_motorSpeed_0 = speed;
    }
  });
  Object.defineProperty(WheelJoint.prototype, 'maxMotorTorque', {
    get: function () {
      return this.m_maxMotorTorque_0;
    },
    set: function (torque) {
      ensureNotNull(this.m_bodyA).isAwake = true;
      ensureNotNull(this.m_bodyB).isAwake = true;
      this.m_maxMotorTorque_0 = torque;
    }
  });
  WheelJoint.prototype.getAnchorA_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyA).getWorldPointToOut_xjacks$(this.localAnchorA, argOut);
  };
  WheelJoint.prototype.getAnchorB_z1lo5s$ = function (argOut) {
    ensureNotNull(this.m_bodyB).getWorldPointToOut_xjacks$(this.localAnchorB, argOut);
  };
  WheelJoint.prototype.getReactionForce_rrlx6b$ = function (inv_dt, argOut) {
    var temp = this.pool.popVec2();
    temp.set_z1lo5s$(this.m_ay_0).mulLocal_mx4ult$(this.m_impulse_0);
    argOut.set_z1lo5s$(this.m_ax_0).mulLocal_mx4ult$(this.m_springImpulse_0).addLocal_z1lo5s$(temp).mulLocal_mx4ult$(inv_dt);
    this.pool.pushVec2_za3lpa$(1);
  };
  WheelJoint.prototype.getReactionTorque_mx4ult$ = function (inv_dt) {
    return inv_dt * this.m_motorImpulse_0;
  };
  WheelJoint.prototype.enableMotor_6taknv$ = function (flag) {
    ensureNotNull(this.m_bodyA).isAwake = true;
    ensureNotNull(this.m_bodyB).isAwake = true;
    this.isMotorEnabled = flag;
  };
  WheelJoint.prototype.getMotorTorque_mx4ult$ = function (inv_dt) {
    return this.m_motorImpulse_0 * inv_dt;
  };
  WheelJoint.prototype.initVelocityConstraints_giqime$ = function (data) {
    this.m_indexA_0 = ensureNotNull(this.m_bodyA).m_islandIndex;
    this.m_indexB_0 = ensureNotNull(this.m_bodyB).m_islandIndex;
    this.m_localCenterA_0.set_z1lo5s$(ensureNotNull(this.m_bodyA).m_sweep.localCenter);
    this.m_localCenterB_0.set_z1lo5s$(ensureNotNull(this.m_bodyB).m_sweep.localCenter);
    this.m_invMassA_0 = ensureNotNull(this.m_bodyA).m_invMass;
    this.m_invMassB_0 = ensureNotNull(this.m_bodyB).m_invMass;
    this.m_invIA_0 = ensureNotNull(this.m_bodyA).m_invI;
    this.m_invIB_0 = ensureNotNull(this.m_bodyB).m_invI;
    var mA = this.m_invMassA_0;
    var mB = this.m_invMassB_0;
    var iA = this.m_invIA_0;
    var iB = this.m_invIB_0;
    var cA = ensureNotNull(data.positions)[this.m_indexA_0].c;
    var aA = ensureNotNull(data.positions)[this.m_indexA_0].a;
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = ensureNotNull(data.velocities)[this.m_indexA_0].w;
    var cB = ensureNotNull(data.positions)[this.m_indexB_0].c;
    var aB = ensureNotNull(data.positions)[this.m_indexB_0].a;
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = ensureNotNull(data.velocities)[this.m_indexB_0].w;
    var qA = this.pool.popRot();
    var qB = this.pool.popRot();
    var temp = this.pool.popVec2();
    qA.set_mx4ult$(aA);
    qB.set_mx4ult$(aB);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qA, temp.set_z1lo5s$(this.localAnchorA).subLocal_z1lo5s$(this.m_localCenterA_0), this.rA_0);
    Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(qB, temp.set_z1lo5s$(this.localAnchorB).subLocal_z1lo5s$(this.m_localCenterB_0), this.rB_0);
    this.d_0.set_z1lo5s$(cB).addLocal_z1lo5s$(this.rB_0).subLocal_z1lo5s$(cA).subLocal_z1lo5s$(this.rA_0);
    Rot$Companion_getInstance().mulToOut_ok1ihx$(qA, this.m_localYAxisA_0, this.m_ay_0);
    this.m_sAy_0 = Vec2$Companion_getInstance().cross_xjacks$(temp.set_z1lo5s$(this.d_0).addLocal_z1lo5s$(this.rA_0), this.m_ay_0);
    this.m_sBy_0 = Vec2$Companion_getInstance().cross_xjacks$(this.rB_0, this.m_ay_0);
    this.m_mass_0 = mA + mB + iA * this.m_sAy_0 * this.m_sAy_0 + iB * this.m_sBy_0 * this.m_sBy_0;
    if (this.m_mass_0 > 0.0) {
      this.m_mass_0 = 1.0 / this.m_mass_0;
    }this.m_springMass_0 = 0.0;
    this.m_bias_0 = 0.0;
    this.m_gamma_0 = 0.0;
    if (this.springFrequencyHz > 0.0) {
      Rot$Companion_getInstance().mulToOut_ok1ihx$(qA, this.localAxisA, this.m_ax_0);
      this.m_sAx_0 = Vec2$Companion_getInstance().cross_xjacks$(temp.set_z1lo5s$(this.d_0).addLocal_z1lo5s$(this.rA_0), this.m_ax_0);
      this.m_sBx_0 = Vec2$Companion_getInstance().cross_xjacks$(this.rB_0, this.m_ax_0);
      var invMass = mA + mB + iA * this.m_sAx_0 * this.m_sAx_0 + iB * this.m_sBx_0 * this.m_sBx_0;
      if (invMass > 0.0) {
        this.m_springMass_0 = 1.0 / invMass;
        var C = Vec2$Companion_getInstance().dot_xjacks$(this.d_0, this.m_ax_0);
        var omega = 2.0 * MathUtils$Companion_getInstance().PI * this.springFrequencyHz;
        var d = 2.0 * this.m_springMass_0 * this.springDampingRatio * omega;
        var k = this.m_springMass_0 * omega * omega;
        var h = ensureNotNull(data.step).dt;
        this.m_gamma_0 = h * (d + h * k);
        if (this.m_gamma_0 > 0.0) {
          this.m_gamma_0 = 1.0 / this.m_gamma_0;
        }this.m_bias_0 = C * h * k * this.m_gamma_0;
        this.m_springMass_0 = invMass + this.m_gamma_0;
        if (this.m_springMass_0 > 0.0) {
          this.m_springMass_0 = 1.0 / this.m_springMass_0;
        }}} else {
      this.m_springImpulse_0 = 0.0;
    }
    if (this.isMotorEnabled) {
      this.m_motorMass_0 = iA + iB;
      if (this.m_motorMass_0 > 0.0) {
        this.m_motorMass_0 = 1.0 / this.m_motorMass_0;
      }} else {
      this.m_motorMass_0 = 0.0;
      this.m_motorImpulse_0 = 0.0;
    }
    if (ensureNotNull(data.step).warmStarting) {
      var P = this.pool.popVec2();
      this.m_impulse_0 *= ensureNotNull(data.step).dtRatio;
      this.m_springImpulse_0 *= ensureNotNull(data.step).dtRatio;
      this.m_motorImpulse_0 *= ensureNotNull(data.step).dtRatio;
      P.x = this.m_impulse_0 * this.m_ay_0.x + this.m_springImpulse_0 * this.m_ax_0.x;
      P.y = this.m_impulse_0 * this.m_ay_0.y + this.m_springImpulse_0 * this.m_ax_0.y;
      var LA = this.m_impulse_0 * this.m_sAy_0 + this.m_springImpulse_0 * this.m_sAx_0 + this.m_motorImpulse_0;
      var LB = this.m_impulse_0 * this.m_sBy_0 + this.m_springImpulse_0 * this.m_sBx_0 + this.m_motorImpulse_0;
      vA.x = vA.x - this.m_invMassA_0 * P.x;
      vA.y = vA.y - this.m_invMassA_0 * P.y;
      wA -= this.m_invIA_0 * LA;
      vB.x = vB.x + this.m_invMassB_0 * P.x;
      vB.y = vB.y + this.m_invMassB_0 * P.y;
      wB += this.m_invIB_0 * LB;
      this.pool.pushVec2_za3lpa$(1);
    } else {
      this.m_impulse_0 = 0.0;
      this.m_springImpulse_0 = 0.0;
      this.m_motorImpulse_0 = 0.0;
    }
    this.pool.pushRot_za3lpa$(2);
    this.pool.pushVec2_za3lpa$(1);
    ensureNotNull(data.velocities)[this.m_indexA_0].w = wA;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB;
  };
  WheelJoint.prototype.solveVelocityConstraints_giqime$ = function (data) {
    var mA = this.m_invMassA_0;
    var mB = this.m_invMassB_0;
    var iA = this.m_invIA_0;
    var iB = this.m_invIB_0;
    var vA = ensureNotNull(data.velocities)[this.m_indexA_0].v;
    var wA = {v: ensureNotNull(data.velocities)[this.m_indexA_0].w};
    var vB = ensureNotNull(data.velocities)[this.m_indexB_0].v;
    var wB = {v: ensureNotNull(data.velocities)[this.m_indexB_0].w};
    var temp = this.pool.popVec2();
    var P = this.pool.popVec2();
    var Cdot = Vec2$Companion_getInstance().dot_xjacks$(this.m_ax_0, temp.set_z1lo5s$(vB).subLocal_z1lo5s$(vA)) + this.m_sBx_0 * wB.v - this.m_sAx_0 * wA.v;
    var impulse = -this.m_springMass_0 * (Cdot + this.m_bias_0 + this.m_gamma_0 * this.m_springImpulse_0);
    this.m_springImpulse_0 += impulse;
    P.x = impulse * this.m_ax_0.x;
    P.y = impulse * this.m_ax_0.y;
    var LA = impulse * this.m_sAx_0;
    var LB = impulse * this.m_sBx_0;
    vA.x = vA.x - mA * P.x;
    vA.y = vA.y - mA * P.y;
    wA.v -= iA * LA;
    vB.x = vB.x + mB * P.x;
    vB.y = vB.y + mB * P.y;
    wB.v += iB * LB;
    var Cdot_0 = wB.v - wA.v - this.m_motorSpeed_0;
    var impulse_0 = -this.m_motorMass_0 * Cdot_0;
    var oldImpulse = this.m_motorImpulse_0;
    var maxImpulse = ensureNotNull(data.step).dt * this.m_maxMotorTorque_0;
    this.m_motorImpulse_0 = MathUtils$Companion_getInstance().clamp_y2kzbl$(this.m_motorImpulse_0 + impulse_0, -maxImpulse, maxImpulse);
    impulse_0 = this.m_motorImpulse_0 - oldImpulse;
    wA.v -= iA * impulse_0;
    wB.v += iB * impulse_0;
    var Cdot_1 = Vec2$Companion_getInstance().dot_xjacks$(this.m_ay_0, temp.set_z1lo5s$(vB).subLocal_z1lo5s$(vA)) + this.m_sBy_0 * wB.v - this.m_sAy_0 * wA.v;
    var impulse_1 = -this.m_mass_0 * Cdot_1;
    this.m_impulse_0 += impulse_1;
    P.x = impulse_1 * this.m_ay_0.x;
    P.y = impulse_1 * this.m_ay_0.y;
    var LA_0 = impulse_1 * this.m_sAy_0;
    var LB_0 = impulse_1 * this.m_sBy_0;
    vA.x = vA.x - mA * P.x;
    vA.y = vA.y - mA * P.y;
    wA.v -= iA * LA_0;
    vB.x = vB.x + mB * P.x;
    vB.y = vB.y + mB * P.y;
    wB.v += iB * LB_0;
    this.pool.pushVec2_za3lpa$(2);
    ensureNotNull(data.velocities)[this.m_indexA_0].w = wA.v;
    ensureNotNull(data.velocities)[this.m_indexB_0].w = wB.v;
  };
  WheelJoint.prototype.solvePositionConstraints_giqime$ = function (data) {
    var cA = ensureNotNull(data.positions)[this.m_indexA_0].c;
    var aA = ensureNotNull(data.positions)[this.m_indexA_0].a;
    var cB = ensureNotNull(data.positions)[this.m_indexB_0].c;
    var aB = ensureNotNull(data.positions)[this.m_indexB_0].a;
    var qA = this.pool.popRot();
    var qB = this.pool.popRot();
    var temp = this.pool.popVec2();
    qA.set_mx4ult$(aA);
    qB.set_mx4ult$(aB);
    Rot$Companion_getInstance().mulToOut_ok1ihx$(qA, temp.set_z1lo5s$(this.localAnchorA).subLocal_z1lo5s$(this.m_localCenterA_0), this.rA_0);
    Rot$Companion_getInstance().mulToOut_ok1ihx$(qB, temp.set_z1lo5s$(this.localAnchorB).subLocal_z1lo5s$(this.m_localCenterB_0), this.rB_0);
    this.d_0.set_z1lo5s$(cB).subLocal_z1lo5s$(cA).addLocal_z1lo5s$(this.rB_0).subLocal_z1lo5s$(this.rA_0);
    var ay = this.pool.popVec2();
    Rot$Companion_getInstance().mulToOut_ok1ihx$(qA, this.m_localYAxisA_0, ay);
    var sAy = Vec2$Companion_getInstance().cross_xjacks$(temp.set_z1lo5s$(this.d_0).addLocal_z1lo5s$(this.rA_0), ay);
    var sBy = Vec2$Companion_getInstance().cross_xjacks$(this.rB_0, ay);
    var C = Vec2$Companion_getInstance().dot_xjacks$(this.d_0, ay);
    var k = this.m_invMassA_0 + this.m_invMassB_0 + this.m_invIA_0 * this.m_sAy_0 * this.m_sAy_0 + this.m_invIB_0 * this.m_sBy_0 * this.m_sBy_0;
    var impulse;
    if (k !== 0.0) {
      impulse = -C / k;
    } else {
      impulse = 0.0;
    }
    var P = this.pool.popVec2();
    P.x = impulse * ay.x;
    P.y = impulse * ay.y;
    var LA = impulse * sAy;
    var LB = impulse * sBy;
    cA.x = cA.x - this.m_invMassA_0 * P.x;
    cA.y = cA.y - this.m_invMassA_0 * P.y;
    aA -= this.m_invIA_0 * LA;
    cB.x = cB.x + this.m_invMassB_0 * P.x;
    cB.y = cB.y + this.m_invMassB_0 * P.y;
    aB += this.m_invIB_0 * LB;
    this.pool.pushVec2_za3lpa$(3);
    this.pool.pushRot_za3lpa$(2);
    ensureNotNull(data.positions)[this.m_indexA_0].a = aA;
    ensureNotNull(data.positions)[this.m_indexB_0].a = aB;
    return MathUtils$Companion_getInstance().abs_mx4ult$(C) <= Settings_getInstance().linearSlop;
  };
  WheelJoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WheelJoint',
    interfaces: [Joint]
  };
  function WheelJointDef() {
    JointDef.call(this, JointType$WHEEL_getInstance());
    this.localAnchorA = new Vec2();
    this.localAnchorB = new Vec2();
    this.localAxisA = new Vec2(1.0, 0.0);
    this.enableMotor = false;
    this.maxMotorTorque = 0.0;
    this.motorSpeed = 0.0;
    this.frequencyHz = 0.0;
    this.dampingRatio = 0;
  }
  WheelJointDef.prototype.initialize_ns84qc$ = function (b1, b2, anchor, axis) {
    this.bodyA = b1;
    this.bodyB = b2;
    b1.getLocalPointToOut_xjacks$(anchor, this.localAnchorA);
    b2.getLocalPointToOut_xjacks$(anchor, this.localAnchorB);
    ensureNotNull(this.bodyA).getLocalVectorToOut_xjacks$(axis, this.localAxisA);
  };
  WheelJointDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WheelJointDef',
    interfaces: [JointDef]
  };
  var arraycopy$lambda_8 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  var arraycopy = defineInlineFunction('kbox2d-root-kbox2d.org.jbox2d.internal.arraycopy_t6l26v$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    var arraycopy$lambda = wrapFunction(function () {
      var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
      return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
        return function () {
          arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
          return Unit;
        };
      };
    });
    return function (src, srcPos, dst, dstPos, size) {
      arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
    };
  }));
  var arraycopy_0 = defineInlineFunction('kbox2d-root-kbox2d.org.jbox2d.internal.arraycopy_66j11b$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    var arraycopy$lambda = wrapFunction(function () {
      var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
      return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
        return function () {
          arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
          return Unit;
        };
      };
    });
    return function (src, srcPos, dst, dstPos, size) {
      arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
    };
  }));
  var arraycopy_1 = defineInlineFunction('kbox2d-root-kbox2d.org.jbox2d.internal.arraycopy_kho0rf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    var arraycopy$lambda = wrapFunction(function () {
      var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
      return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
        return function () {
          arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
          return Unit;
        };
      };
    });
    return function (src, srcPos, dst, dstPos, size) {
      arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
    };
  }));
  var arraycopy_2 = defineInlineFunction('kbox2d-root-kbox2d.org.jbox2d.internal.arraycopy_lwkm2r$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    var arraycopy$lambda = wrapFunction(function () {
      var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
      return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
        return function () {
          arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
          return Unit;
        };
      };
    });
    return function (src, srcPos, dst, dstPos, size) {
      arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
    };
  }));
  var arraycopy_3 = defineInlineFunction('kbox2d-root-kbox2d.org.jbox2d.internal.arraycopy_6oq96n$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    var arraycopy$lambda = wrapFunction(function () {
      var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
      return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
        return function () {
          arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
          return Unit;
        };
      };
    });
    return function (src, srcPos, dst, dstPos, size) {
      arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
    };
  }));
  var arraycopy_4 = defineInlineFunction('kbox2d-root-kbox2d.org.jbox2d.internal.arraycopy_3jsevz$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    var arraycopy$lambda = wrapFunction(function () {
      var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
      return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
        return function () {
          arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
          return Unit;
        };
      };
    });
    return function (src, srcPos, dst, dstPos, size) {
      arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
    };
  }));
  var arraycopy_5 = defineInlineFunction('kbox2d-root-kbox2d.org.jbox2d.internal.arraycopy_215ibj$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    var arraycopy$lambda = wrapFunction(function () {
      var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
      return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
        return function () {
          arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
          return Unit;
        };
      };
    });
    return function (src, srcPos, dst, dstPos, size) {
      arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
    };
  }));
  var arraycopy_6 = defineInlineFunction('kbox2d-root-kbox2d.org.jbox2d.internal.arraycopy_wkn64v$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    var arraycopy$lambda = wrapFunction(function () {
      var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
      return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
        return function () {
          arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
          return Unit;
        };
      };
    });
    return function (src, srcPos, dst, dstPos, size) {
      arrayCopy(src, dst, dstPos, srcPos, srcPos + size | 0);
    };
  }));
  var assert = defineInlineFunction('kbox2d-root-kbox2d.org.jbox2d.internal.assert_vft4zs$', wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function (boolean) {
      if (!boolean) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }};
  }));
  var assert_0 = defineInlineFunction('kbox2d-root-kbox2d.org.jbox2d.internal.assert_sui5oy$', wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function (boolean, message) {
      if (!boolean) {
        var message_0 = 'Check failed.';
        throw IllegalStateException_init(message_0.toString());
      }};
  }));
  function Arrays_sort(array, fromIndex, toIndex) {
    var sorted = sortedArray(copyOfRange(array, fromIndex, toIndex));
    arrayCopy(sorted, array, fromIndex, 0, 0 + (toIndex - fromIndex | 0) | 0);
  }
  function ParticleBodyContact() {
    this.index = 0;
    this.body = null;
    this.weight_8be2vx$ = 0;
    this.normal = new Vec2();
    this.mass_8be2vx$ = 0;
  }
  ParticleBodyContact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParticleBodyContact',
    interfaces: []
  };
  function ParticleColor() {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
  }
  Object.defineProperty(ParticleColor.prototype, 'isZero', {
    get: function () {
      return this.r === 0 && this.g === 0 && this.b === 0 && this.a === 0;
    }
  });
  ParticleColor.prototype.set_8kej5w$ = function (color) {
    this.r = toByte(numberToInt(255 * color.x));
    this.g = toByte(numberToInt(255 * color.y));
    this.b = toByte(numberToInt(255 * color.z));
    this.a = toByte(255);
  };
  ParticleColor.prototype.set_gec3a2$ = function (color) {
    this.r = color.r;
    this.g = color.g;
    this.b = color.b;
    this.a = color.a;
  };
  ParticleColor.prototype.set_sz6or4$ = function (r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  };
  ParticleColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParticleColor',
    interfaces: []
  };
  function ParticleColor_init($this) {
    $this = $this || Object.create(ParticleColor.prototype);
    ParticleColor.call($this);
    $this.r = toByte(127);
    $this.g = toByte(127);
    $this.b = toByte(127);
    $this.a = toByte(50);
    return $this;
  }
  function ParticleColor_init_0(r, g, b, a, $this) {
    $this = $this || Object.create(ParticleColor.prototype);
    ParticleColor.call($this);
    $this.set_sz6or4$(r, g, b, a);
    return $this;
  }
  function ParticleColor_init_1(color, $this) {
    $this = $this || Object.create(ParticleColor.prototype);
    ParticleColor.call($this);
    $this.set_8kej5w$(color);
    return $this;
  }
  function ParticleContact() {
    this.indexA = 0;
    this.indexB = 0;
    this.flags = 0;
    this.weight = 0;
    this.normal = new Vec2();
  }
  ParticleContact.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParticleContact',
    interfaces: []
  };
  function ParticleDef() {
    this.$delegate_st4r7s$_0 = new Box2dTypedUserData$Mixin();
    this.flags_8be2vx$ = 0;
    this.position = new Vec2();
    this.velocity = new Vec2();
    this.color = null;
    this.userData = null;
  }
  ParticleDef.prototype.contains_d2xgsj$ = function (key) {
    return this.$delegate_st4r7s$_0.contains_d2xgsj$(key);
  };
  ParticleDef.prototype.get_d2xgsj$ = function (key) {
    return this.$delegate_st4r7s$_0.get_d2xgsj$(key);
  };
  ParticleDef.prototype.set_kj97s6$ = function (key, value) {
    return this.$delegate_st4r7s$_0.set_kj97s6$(key, value);
  };
  ParticleDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParticleDef',
    interfaces: [Box2dTypedUserData]
  };
  function ParticleGroup() {
    this.m_system_8be2vx$ = null;
    this.m_firstIndex = 0;
    this.m_lastIndex_8be2vx$ = 0;
    this.m_groupFlags = 0;
    this.m_strength_8be2vx$ = 0;
    this.m_prev_8be2vx$ = null;
    this.m_next = null;
    this.m_timestamp_8be2vx$ = 0;
    this.m_mass_8be2vx$ = 0;
    this.m_inertia_8be2vx$ = 0;
    this.m_center_8be2vx$ = new Vec2();
    this.m_linearVelocity_8be2vx$ = new Vec2();
    this.m_angularVelocity_8be2vx$ = 0;
    this.m_transform = Transform_init();
    this.m_destroyAutomatically_8be2vx$ = false;
    this.m_toBeDestroyed_8be2vx$ = false;
    this.m_toBeSplit_8be2vx$ = false;
    this.m_userData = null;
    this.m_firstIndex = 0;
    this.m_lastIndex_8be2vx$ = 0;
    this.m_groupFlags = 0;
    this.m_strength_8be2vx$ = 1.0;
    this.m_timestamp_8be2vx$ = -1;
    this.m_mass_8be2vx$ = 0.0;
    this.m_inertia_8be2vx$ = 0.0;
    this.m_angularVelocity_8be2vx$ = 0.0;
    this.m_transform.setIdentity();
    this.m_destroyAutomatically_8be2vx$ = true;
    this.m_toBeDestroyed_8be2vx$ = false;
    this.m_toBeSplit_8be2vx$ = false;
  }
  ParticleGroup.prototype.getNext = function () {
    return this.m_next;
  };
  Object.defineProperty(ParticleGroup.prototype, 'particleCount', {
    get: function () {
      return this.m_lastIndex_8be2vx$ - this.m_firstIndex | 0;
    }
  });
  Object.defineProperty(ParticleGroup.prototype, 'mass', {
    get: function () {
      this.updateStatistics();
      return this.m_mass_8be2vx$;
    }
  });
  Object.defineProperty(ParticleGroup.prototype, 'inertia', {
    get: function () {
      this.updateStatistics();
      return this.m_inertia_8be2vx$;
    }
  });
  Object.defineProperty(ParticleGroup.prototype, 'center', {
    get: function () {
      this.updateStatistics();
      return this.m_center_8be2vx$;
    }
  });
  Object.defineProperty(ParticleGroup.prototype, 'linearVelocity', {
    get: function () {
      this.updateStatistics();
      return this.m_linearVelocity_8be2vx$;
    }
  });
  Object.defineProperty(ParticleGroup.prototype, 'angularVelocity', {
    get: function () {
      this.updateStatistics();
      return this.m_angularVelocity_8be2vx$;
    }
  });
  Object.defineProperty(ParticleGroup.prototype, 'position', {
    get: function () {
      return this.m_transform.p;
    }
  });
  Object.defineProperty(ParticleGroup.prototype, 'angle', {
    get: function () {
      return this.m_transform.q.angle;
    }
  });
  ParticleGroup.prototype.updateStatistics = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.m_timestamp_8be2vx$ !== ensureNotNull(this.m_system_8be2vx$).m_timestamp_8be2vx$) {
      var m = ensureNotNull(this.m_system_8be2vx$).particleMass_8be2vx$;
      this.m_mass_8be2vx$ = 0.0;
      this.m_center_8be2vx$.setZero();
      this.m_linearVelocity_8be2vx$.setZero();
      tmp$ = this.m_firstIndex;
      tmp$_0 = this.m_lastIndex_8be2vx$;
      for (var i = tmp$; i < tmp$_0; i++) {
        this.m_mass_8be2vx$ += m;
        var pos = ensureNotNull(ensureNotNull(ensureNotNull(this.m_system_8be2vx$).m_positionBuffer_8be2vx$).data)[i];
        this.m_center_8be2vx$.x = this.m_center_8be2vx$.x + m * pos.x;
        this.m_center_8be2vx$.y = this.m_center_8be2vx$.y + m * pos.y;
        var vel = ensureNotNull(ensureNotNull(this.m_system_8be2vx$).m_velocityBuffer_8be2vx$.data)[i];
        this.m_linearVelocity_8be2vx$.x = this.m_linearVelocity_8be2vx$.x + m * vel.x;
        this.m_linearVelocity_8be2vx$.y = this.m_linearVelocity_8be2vx$.y + m * vel.y;
      }
      if (this.m_mass_8be2vx$ > 0) {
        this.m_center_8be2vx$.x = this.m_center_8be2vx$.x * (1 / this.m_mass_8be2vx$);
        this.m_center_8be2vx$.y = this.m_center_8be2vx$.y * (1 / this.m_mass_8be2vx$);
        this.m_linearVelocity_8be2vx$.x = this.m_linearVelocity_8be2vx$.x * (1 / this.m_mass_8be2vx$);
        this.m_linearVelocity_8be2vx$.y = this.m_linearVelocity_8be2vx$.y * (1 / this.m_mass_8be2vx$);
      }this.m_inertia_8be2vx$ = 0.0;
      this.m_angularVelocity_8be2vx$ = 0.0;
      tmp$_1 = this.m_firstIndex;
      tmp$_2 = this.m_lastIndex_8be2vx$;
      for (var i_0 = tmp$_1; i_0 < tmp$_2; i_0++) {
        var pos_0 = ensureNotNull(ensureNotNull(this.m_system_8be2vx$).m_positionBuffer_8be2vx$.data)[i_0];
        var vel_0 = ensureNotNull(ensureNotNull(this.m_system_8be2vx$).m_velocityBuffer_8be2vx$.data)[i_0];
        var px = pos_0.x - this.m_center_8be2vx$.x;
        var py = pos_0.y - this.m_center_8be2vx$.y;
        var vx = vel_0.x - this.m_linearVelocity_8be2vx$.x;
        var vy = vel_0.y - this.m_linearVelocity_8be2vx$.y;
        this.m_inertia_8be2vx$ += m * (px * px + py * py);
        this.m_angularVelocity_8be2vx$ += m * (px * vy - py * vx);
      }
      if (this.m_inertia_8be2vx$ > 0) {
        this.m_angularVelocity_8be2vx$ *= 1 / this.m_inertia_8be2vx$;
      }this.m_timestamp_8be2vx$ = ensureNotNull(this.m_system_8be2vx$).m_timestamp_8be2vx$;
    }};
  ParticleGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParticleGroup',
    interfaces: []
  };
  function ParticleGroupDef() {
    this.$delegate_l07xel$_0 = new Box2dTypedUserData$Mixin();
    this.flags = 0;
    this.groupFlags = 0;
    this.position = new Vec2();
    this.angle = 0.0;
    this.linearVelocity = new Vec2();
    this.angularVelocity = 0.0;
    this.color = null;
    this.strength = 1.0;
    this.shape = null;
    this.destroyAutomatically = true;
    this.userData = null;
  }
  ParticleGroupDef.prototype.contains_d2xgsj$ = function (key) {
    return this.$delegate_l07xel$_0.contains_d2xgsj$(key);
  };
  ParticleGroupDef.prototype.get_d2xgsj$ = function (key) {
    return this.$delegate_l07xel$_0.get_d2xgsj$(key);
  };
  ParticleGroupDef.prototype.set_kj97s6$ = function (key, value) {
    return this.$delegate_l07xel$_0.set_kj97s6$(key, value);
  };
  ParticleGroupDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParticleGroupDef',
    interfaces: [Box2dTypedUserData]
  };
  function ParticleGroupType() {
    ParticleGroupType_instance = this;
    this.b2_solidParticleGroup = 1;
    this.b2_rigidParticleGroup = 2;
  }
  ParticleGroupType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ParticleGroupType',
    interfaces: []
  };
  var ParticleGroupType_instance = null;
  function ParticleGroupType_getInstance() {
    if (ParticleGroupType_instance === null) {
      new ParticleGroupType();
    }return ParticleGroupType_instance;
  }
  function ParticleSystem(m_world) {
    ParticleSystem$Companion_getInstance();
    this.m_world_8be2vx$ = m_world;
    this.m_timestamp_8be2vx$ = 0;
    this.m_allParticleFlags_8be2vx$ = 0;
    this.m_allGroupFlags_8be2vx$ = 0;
    this.m_density_8be2vx$ = 1.0;
    this.m_inverseDensity_8be2vx$ = 1.0;
    this.particleGravityScale = 1.0;
    this.m_particleDiameter_8be2vx$ = 1.0;
    this.m_inverseDiameter_8be2vx$ = 1.0;
    this.m_squaredDiameter_8be2vx$ = 1.0;
    this.particleCount_sbeur1$_0 = 0;
    this.m_internalAllocatedCapacity_8be2vx$ = 0;
    this.m_maxCount_8be2vx$ = 0;
    this.m_flagsBuffer_8be2vx$ = new ParticleSystem$ParticleBufferInt();
    this.m_positionBuffer_8be2vx$ = new ParticleSystem$ParticleBuffer(ParticleSystem$m_positionBuffer$lambda);
    this.m_velocityBuffer_8be2vx$ = new ParticleSystem$ParticleBuffer(ParticleSystem$m_velocityBuffer$lambda);
    this.m_accumulationBuffer_8be2vx$ = new Float32Array(0);
    this.m_accumulation2Buffer_8be2vx$ = [];
    this.m_depthBuffer_8be2vx$ = null;
    this.m_colorBuffer = new ParticleSystem$ParticleBuffer(ParticleSystem$m_colorBuffer$lambda);
    this.particleGroupBuffer_o2ikzh$_0 = [];
    this.m_userDataBuffer_8be2vx$ = new ParticleSystem$ParticleBuffer(ParticleSystem$m_userDataBuffer$lambda);
    this.m_proxyCount_8be2vx$ = 0;
    this.m_proxyCapacity_8be2vx$ = 0;
    this.m_proxyBuffer_8be2vx$ = [];
    this.m_contactCount = 0;
    this.m_contactCapacity_8be2vx$ = 0;
    this.m_contactBuffer = [];
    this.m_bodyContactCount = 0;
    this.m_bodyContactCapacity_8be2vx$ = 0;
    this.m_bodyContactBuffer = [];
    this.m_pairCount_8be2vx$ = 0;
    this.m_pairCapacity_8be2vx$ = 0;
    this.m_pairBuffer_8be2vx$ = [];
    this.m_triadCount_8be2vx$ = 0;
    this.m_triadCapacity_8be2vx$ = 0;
    this.m_triadBuffer_8be2vx$ = [];
    this.particleGroupCount_rvs9r2$_0 = 0;
    this.m_groupList_8be2vx$ = null;
    this.m_pressureStrength_8be2vx$ = 0.05;
    this.particleDamping = 1.0;
    this.m_elasticStrength_8be2vx$ = 0.25;
    this.m_springStrength_8be2vx$ = 0.25;
    this.m_viscousStrength_8be2vx$ = 0.25;
    this.m_surfaceTensionStrengthA_8be2vx$ = 0.1;
    this.m_surfaceTensionStrengthB_8be2vx$ = 0.2;
    this.m_powderStrength_8be2vx$ = 0.5;
    this.m_ejectionStrength_8be2vx$ = 0.5;
    this.m_colorMixingStrength_8be2vx$ = 0.5;
    this.temp_0 = AABB_init();
    this.dpcallback_0 = new ParticleSystem$DestroyParticlesInShapeCallback();
    this.temp2_0 = AABB_init();
    this.tempVec_0 = new Vec2();
    this.tempTransform_0 = Transform_init();
    this.tempTransform2_0 = Transform_init();
    this.createParticleGroupCallback_0 = new ParticleSystem$CreateParticleGroupCallback();
    this.tempParticleDef_0 = new ParticleDef();
    this.ubccallback_0 = new ParticleSystem$UpdateBodyContactsCallback();
    this.sccallback_0 = new ParticleSystem$SolveCollisionCallback();
    this.tempVec2_0 = new Vec2();
    this.tempRot_0 = Rot_init();
    this.tempXf_0 = Transform_init();
    this.tempXf2_0 = Transform_init();
    this.newIndices_0 = new ParticleSystem$NewIndices();
  }
  Object.defineProperty(ParticleSystem.prototype, 'particleCount', {
    get: function () {
      return this.particleCount_sbeur1$_0;
    },
    set: function (particleCount) {
      this.particleCount_sbeur1$_0 = particleCount;
    }
  });
  Object.defineProperty(ParticleSystem.prototype, 'particleGroupBuffer', {
    get: function () {
      return this.particleGroupBuffer_o2ikzh$_0;
    },
    set: function (particleGroupBuffer) {
      this.particleGroupBuffer_o2ikzh$_0 = particleGroupBuffer;
    }
  });
  Object.defineProperty(ParticleSystem.prototype, 'particleGroupCount', {
    get: function () {
      return this.particleGroupCount_rvs9r2$_0;
    },
    set: function (particleGroupCount) {
      this.particleGroupCount_rvs9r2$_0 = particleGroupCount;
    }
  });
  Object.defineProperty(ParticleSystem.prototype, 'particleDensity', {
    get: function () {
      return this.m_density_8be2vx$;
    },
    set: function (density) {
      this.m_density_8be2vx$ = density;
      this.m_inverseDensity_8be2vx$ = 1 / this.m_density_8be2vx$;
    }
  });
  Object.defineProperty(ParticleSystem.prototype, 'particleRadius', {
    get: function () {
      return this.m_particleDiameter_8be2vx$ / 2;
    },
    set: function (radius) {
      this.m_particleDiameter_8be2vx$ = 2 * radius;
      this.m_squaredDiameter_8be2vx$ = this.m_particleDiameter_8be2vx$ * this.m_particleDiameter_8be2vx$;
      this.m_inverseDiameter_8be2vx$ = 1 / this.m_particleDiameter_8be2vx$;
    }
  });
  Object.defineProperty(ParticleSystem.prototype, 'particleStride_8be2vx$', {
    get: function () {
      return Settings_getInstance().particleStride * this.m_particleDiameter_8be2vx$;
    }
  });
  Object.defineProperty(ParticleSystem.prototype, 'particleMass_8be2vx$', {
    get: function () {
      var stride = this.particleStride_8be2vx$;
      return this.m_density_8be2vx$ * stride * stride;
    }
  });
  Object.defineProperty(ParticleSystem.prototype, 'particleInvMass_8be2vx$', {
    get: function () {
      return 1.777777 * this.m_inverseDensity_8be2vx$ * this.m_inverseDiameter_8be2vx$ * this.m_inverseDiameter_8be2vx$;
    }
  });
  Object.defineProperty(ParticleSystem.prototype, 'particleFlagsBuffer', {
    get: function () {
      return this.m_flagsBuffer_8be2vx$.data;
    }
  });
  Object.defineProperty(ParticleSystem.prototype, 'particlePositionBuffer', {
    get: function () {
      return this.m_positionBuffer_8be2vx$.data;
    }
  });
  Object.defineProperty(ParticleSystem.prototype, 'particleVelocityBuffer', {
    get: function () {
      return this.m_velocityBuffer_8be2vx$.data;
    }
  });
  function ParticleSystem$get_ParticleSystem$particleColorBuffer$lambda() {
    return ParticleColor_init();
  }
  Object.defineProperty(ParticleSystem.prototype, 'particleColorBuffer', {
    get: function () {
      this.m_colorBuffer.data = this.requestParticleBuffer_x9lftn$(ParticleSystem$get_ParticleSystem$particleColorBuffer$lambda, this.m_colorBuffer.data);
      return this.m_colorBuffer.data;
    }
  });
  function ParticleSystem$get_ParticleSystem$particleUserDataBuffer$lambda() {
    return new Any();
  }
  Object.defineProperty(ParticleSystem.prototype, 'particleUserDataBuffer', {
    get: function () {
      this.m_userDataBuffer_8be2vx$.data = this.requestParticleBuffer_x9lftn$(ParticleSystem$get_ParticleSystem$particleUserDataBuffer$lambda, this.m_userDataBuffer_8be2vx$.data);
      return this.m_userDataBuffer_8be2vx$.data;
    }
  });
  Object.defineProperty(ParticleSystem.prototype, 'particleMaxCount', {
    get: function () {
      return this.m_maxCount_8be2vx$;
    },
    set: function (count) {
      if (!(this.particleCount <= count)) {
        var message = 'Check failed.';
        throw IllegalStateException_init(message.toString());
      }this.m_maxCount_8be2vx$ = count;
    }
  });
  function ParticleSystem$createParticle$lambda() {
    return new Vec2();
  }
  function ParticleSystem$createParticle$lambda_0() {
    return new ParticleGroup();
  }
  function ParticleSystem$createParticle$lambda_1() {
    return new ParticleSystem$Proxy();
  }
  ParticleSystem.prototype.createParticle_st4r7s$ = function (def) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.particleCount >= this.m_internalAllocatedCapacity_8be2vx$) {
      var capacity = this.particleCount !== 0 ? 2 * this.particleCount | 0 : Settings_getInstance().minParticleBufferCapacity;
      capacity = ParticleSystem$Companion_getInstance().limitCapacity_6xvm5r$(capacity, this.m_maxCount_8be2vx$);
      capacity = ParticleSystem$Companion_getInstance().limitCapacity_6xvm5r$(capacity, this.m_flagsBuffer_8be2vx$.userSuppliedCapacity);
      capacity = ParticleSystem$Companion_getInstance().limitCapacity_6xvm5r$(capacity, this.m_positionBuffer_8be2vx$.userSuppliedCapacity_8be2vx$);
      capacity = ParticleSystem$Companion_getInstance().limitCapacity_6xvm5r$(capacity, this.m_velocityBuffer_8be2vx$.userSuppliedCapacity_8be2vx$);
      capacity = ParticleSystem$Companion_getInstance().limitCapacity_6xvm5r$(capacity, this.m_colorBuffer.userSuppliedCapacity_8be2vx$);
      capacity = ParticleSystem$Companion_getInstance().limitCapacity_6xvm5r$(capacity, this.m_userDataBuffer_8be2vx$.userSuppliedCapacity_8be2vx$);
      if (this.m_internalAllocatedCapacity_8be2vx$ < capacity) {
        this.m_flagsBuffer_8be2vx$.data = ParticleSystem$Companion_getInstance().reallocateBuffer_girg3n$(this.m_flagsBuffer_8be2vx$, this.m_internalAllocatedCapacity_8be2vx$, capacity, false);
        this.m_positionBuffer_8be2vx$.data = ParticleSystem$Companion_getInstance().reallocateBuffer_e8did$(this.m_positionBuffer_8be2vx$, this.m_internalAllocatedCapacity_8be2vx$, capacity, false);
        this.m_velocityBuffer_8be2vx$.data = ParticleSystem$Companion_getInstance().reallocateBuffer_e8did$(this.m_velocityBuffer_8be2vx$, this.m_internalAllocatedCapacity_8be2vx$, capacity, false);
        this.m_accumulationBuffer_8be2vx$ = BufferUtils_getInstance().reallocateBuffer_oghb6a$(this.m_accumulationBuffer_8be2vx$, 0, this.m_internalAllocatedCapacity_8be2vx$, capacity, false);
        this.m_accumulation2Buffer_8be2vx$ = BufferUtils_getInstance().reallocateBuffer_8tm975$(ParticleSystem$createParticle$lambda, this.m_accumulation2Buffer_8be2vx$, 0, this.m_internalAllocatedCapacity_8be2vx$, capacity, true);
        this.m_depthBuffer_8be2vx$ = BufferUtils_getInstance().reallocateBuffer_oghb6a$(this.m_depthBuffer_8be2vx$, 0, this.m_internalAllocatedCapacity_8be2vx$, capacity, true);
        this.m_colorBuffer.data = ParticleSystem$Companion_getInstance().reallocateBuffer_e8did$(this.m_colorBuffer, this.m_internalAllocatedCapacity_8be2vx$, capacity, true);
        this.particleGroupBuffer = Kotlin.isArray(tmp$_0 = BufferUtils_getInstance().reallocateBuffer_8tm975$(ParticleSystem$createParticle$lambda_0, Kotlin.isArray(tmp$ = this.particleGroupBuffer) ? tmp$ : throwCCE(), 0, this.m_internalAllocatedCapacity_8be2vx$, capacity, false)) ? tmp$_0 : throwCCE();
        this.m_userDataBuffer_8be2vx$.data = ParticleSystem$Companion_getInstance().reallocateBuffer_e8did$(this.m_userDataBuffer_8be2vx$, this.m_internalAllocatedCapacity_8be2vx$, capacity, true);
        this.m_internalAllocatedCapacity_8be2vx$ = capacity;
      }}if (this.particleCount >= this.m_internalAllocatedCapacity_8be2vx$) {
      return Settings_getInstance().invalidParticleIndex;
    }var index = (tmp$_1 = this.particleCount, this.particleCount = tmp$_1 + 1 | 0, tmp$_1);
    ensureNotNull(ensureNotNull(this.m_flagsBuffer_8be2vx$).data)[index] = def.flags_8be2vx$;
    ensureNotNull(this.m_positionBuffer_8be2vx$.data)[index].set_z1lo5s$(def.position);
    ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[index].set_z1lo5s$(def.velocity);
    ensureNotNull(this.particleGroupBuffer)[index] = null;
    if (this.m_depthBuffer_8be2vx$ != null) {
      ensureNotNull(this.m_depthBuffer_8be2vx$)[index] = 0.0;
    }if (this.m_colorBuffer.data != null || def.color != null) {
      this.m_colorBuffer.data = this.requestParticleBuffer_x9lftn$(this.m_colorBuffer.dataClass_8be2vx$, this.m_colorBuffer.data);
      ensureNotNull(this.m_colorBuffer.data)[index].set_gec3a2$(ensureNotNull(def.color));
    }if (this.m_userDataBuffer_8be2vx$.data != null || def.userData != null) {
      this.m_userDataBuffer_8be2vx$.data = this.requestParticleBuffer_x9lftn$(this.m_userDataBuffer_8be2vx$.dataClass_8be2vx$, this.m_userDataBuffer_8be2vx$.data);
      ensureNotNull(this.m_userDataBuffer_8be2vx$.data)[index] = ensureNotNull(def.userData);
    }if (this.m_proxyCount_8be2vx$ >= this.m_proxyCapacity_8be2vx$) {
      var oldCapacity = this.m_proxyCapacity_8be2vx$;
      var newCapacity = this.m_proxyCount_8be2vx$ !== 0 ? 2 * this.m_proxyCount_8be2vx$ | 0 : Settings_getInstance().minParticleBufferCapacity;
      this.m_proxyBuffer_8be2vx$ = BufferUtils_getInstance().reallocateBuffer_z72n54$(ParticleSystem$createParticle$lambda_1, this.m_proxyBuffer_8be2vx$, oldCapacity, newCapacity);
      this.m_proxyCapacity_8be2vx$ = newCapacity;
    }this.m_proxyBuffer_8be2vx$[tmp$_2 = this.m_proxyCount_8be2vx$, this.m_proxyCount_8be2vx$ = tmp$_2 + 1 | 0, tmp$_2].index_8be2vx$ = index;
    return index;
  };
  ParticleSystem.prototype.destroyParticle_fzusl$ = function (index, callDestructionListener) {
    var flags = ParticleType_getInstance().b2_zombieParticle;
    if (callDestructionListener) {
      flags = flags | ParticleType_getInstance().b2_destructionListener;
    }ensureNotNull(ensureNotNull(this.m_flagsBuffer_8be2vx$).data)[index] = ensureNotNull(ensureNotNull(this.m_flagsBuffer_8be2vx$).data)[index] | flags;
  };
  ParticleSystem.prototype.destroyParticlesInShape_eznsef$ = function (shape, xf, callDestructionListener) {
    this.dpcallback_0.init_1scalj$(this, shape, xf, callDestructionListener);
    shape.computeAABB_wue7ir$(this.temp_0, xf, 0);
    this.m_world_8be2vx$.queryAABB_gvhqw9$(this.dpcallback_0, this.temp_0);
    return this.dpcallback_0.destroyed;
  };
  ParticleSystem.prototype.destroyParticlesInGroup_3icku3$ = function (group, callDestructionListener) {
    var tmp$, tmp$_0;
    tmp$ = group.m_firstIndex;
    tmp$_0 = group.m_lastIndex_8be2vx$;
    for (var i = tmp$; i < tmp$_0; i++) {
      this.destroyParticle_fzusl$(i, callDestructionListener);
    }
  };
  function ParticleSystem$createParticleGroup$lambda() {
    return new ParticleSystem$Pair();
  }
  ParticleSystem.prototype.createParticleGroup_l07xel$ = function (groupDef) {
    var tmp$;
    var stride = this.particleStride_8be2vx$;
    var identity = this.tempTransform_0;
    identity.setIdentity();
    var transform = this.tempTransform2_0;
    transform.setIdentity();
    var firstIndex = this.particleCount;
    if (groupDef.shape != null) {
      var particleDef = this.tempParticleDef_0;
      particleDef.flags_8be2vx$ = groupDef.flags;
      particleDef.color = groupDef.color;
      particleDef.userData = groupDef.userData;
      var shape = groupDef.shape;
      transform.set_mmv06j$(groupDef.position, groupDef.angle);
      var aabb = this.temp_0;
      var childCount = ensureNotNull(shape).getChildCount();
      for (var childIndex = 0; childIndex < childCount; childIndex++) {
        if (childIndex === 0) {
          shape.computeAABB_wue7ir$(aabb, identity, childIndex);
        } else {
          var childAABB = this.temp2_0;
          shape.computeAABB_wue7ir$(childAABB, identity, childIndex);
          aabb.combine_lvg3qr$(childAABB);
        }
      }
      var upperBoundY = aabb.upperBound.y;
      var upperBoundX = aabb.upperBound.x;
      var y = MathUtils$Companion_getInstance().floor_mx4ult$(aabb.lowerBound.y / stride) * stride;
      while (y < upperBoundY) {
        var x = MathUtils$Companion_getInstance().floor_mx4ult$(aabb.lowerBound.x / stride) * stride;
        while (x < upperBoundX) {
          var p = this.tempVec_0;
          p.x = x;
          p.y = y;
          if (shape.testPoint_v1llj6$(identity, p)) {
            Transform$Companion_getInstance().mulToOut_r18ri2$(transform, p, p);
            particleDef.position.x = p.x;
            particleDef.position.y = p.y;
            p.subLocal_z1lo5s$(groupDef.position);
            Vec2$Companion_getInstance().crossToOutUnsafe_yrhwoh$(groupDef.angularVelocity, p, particleDef.velocity);
            particleDef.velocity.addLocal_z1lo5s$(groupDef.linearVelocity);
            this.createParticle_st4r7s$(particleDef);
          }x += stride;
        }
        y += stride;
      }
    }var lastIndex = this.particleCount;
    var group = new ParticleGroup();
    group.m_system_8be2vx$ = this;
    group.m_firstIndex = firstIndex;
    group.m_lastIndex_8be2vx$ = lastIndex;
    group.m_groupFlags = groupDef.groupFlags;
    group.m_strength_8be2vx$ = groupDef.strength;
    group.m_userData = groupDef.userData;
    group.m_transform.set_m97ft2$(transform);
    group.m_destroyAutomatically_8be2vx$ = groupDef.destroyAutomatically;
    group.m_prev_8be2vx$ = null;
    group.m_next = this.m_groupList_8be2vx$;
    if (this.m_groupList_8be2vx$ != null) {
      ensureNotNull(this.m_groupList_8be2vx$).m_prev_8be2vx$ = group;
    }this.m_groupList_8be2vx$ = group;
    this.particleGroupCount = this.particleGroupCount + 1 | 0;
    for (var i = firstIndex; i < lastIndex; i++) {
      ensureNotNull(this.particleGroupBuffer)[i] = group;
    }
    this.updateContacts_6taknv$(true);
    if ((groupDef.flags & ParticleSystem$Companion_getInstance().k_pairFlags_0) !== 0) {
      tmp$ = this.m_contactCount;
      for (var k = 0; k < tmp$; k++) {
        var contact = this.m_contactBuffer[k];
        var a = contact.indexA;
        var b = contact.indexB;
        if (a > b) {
          var temp = a;
          a = b;
          b = temp;
        }if (firstIndex <= a && b < lastIndex) {
          if (this.m_pairCount_8be2vx$ >= this.m_pairCapacity_8be2vx$) {
            var oldCapacity = this.m_pairCapacity_8be2vx$;
            var newCapacity = this.m_pairCount_8be2vx$ !== 0 ? 2 * this.m_pairCount_8be2vx$ | 0 : Settings_getInstance().minParticleBufferCapacity;
            this.m_pairBuffer_8be2vx$ = BufferUtils_getInstance().reallocateBuffer_z72n54$(ParticleSystem$createParticleGroup$lambda, this.m_pairBuffer_8be2vx$, oldCapacity, newCapacity);
            this.m_pairCapacity_8be2vx$ = newCapacity;
          }var pair = this.m_pairBuffer_8be2vx$[this.m_pairCount_8be2vx$];
          pair.indexA_8be2vx$ = a;
          pair.indexB_8be2vx$ = b;
          pair.flags_8be2vx$ = contact.flags;
          pair.strength_8be2vx$ = groupDef.strength;
          pair.distance_8be2vx$ = MathUtils$Companion_getInstance().distance_xjacks$(ensureNotNull(this.m_positionBuffer_8be2vx$.data)[a], ensureNotNull(this.m_positionBuffer_8be2vx$.data)[b]);
          this.m_pairCount_8be2vx$ = this.m_pairCount_8be2vx$ + 1 | 0;
        }}
    }if ((groupDef.flags & ParticleSystem$Companion_getInstance().k_triadFlags_0) !== 0) {
      var diagram = new VoronoiDiagram(lastIndex - firstIndex | 0);
      for (var i_0 = firstIndex; i_0 < lastIndex; i_0++) {
        diagram.addGenerator_tu5csi$(ensureNotNull(this.m_positionBuffer_8be2vx$.data)[i_0], i_0);
      }
      diagram.generate_mx4ult$(stride / 2);
      this.createParticleGroupCallback_0.system = this;
      this.createParticleGroupCallback_0.def = groupDef;
      this.createParticleGroupCallback_0.firstIndex = firstIndex;
      diagram.getNodes_tx8s1w$(this.createParticleGroupCallback_0);
    }if ((groupDef.groupFlags & ParticleGroupType_getInstance().b2_solidParticleGroup) !== 0) {
      this.computeDepthForGroup_gc2xku$(group);
    }return group;
  };
  function ParticleSystem$joinParticleGroups$lambda() {
    return new ParticleSystem$Pair();
  }
  ParticleSystem.prototype.joinParticleGroups_wbolyg$ = function (groupA, groupB) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (!!equals(groupA, groupB)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }this.RotateBuffer_cub51b$(groupB.m_firstIndex, groupB.m_lastIndex_8be2vx$, this.particleCount);
    if (!(groupB.m_lastIndex_8be2vx$ === this.particleCount)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }this.RotateBuffer_cub51b$(groupA.m_firstIndex, groupA.m_lastIndex_8be2vx$, groupB.m_firstIndex);
    if (!(groupA.m_lastIndex_8be2vx$ === groupB.m_firstIndex)) {
      var message_1 = 'Check failed.';
      throw IllegalStateException_init(message_1.toString());
    }var particleFlags = 0;
    tmp$ = groupA.m_firstIndex;
    tmp$_0 = groupB.m_lastIndex_8be2vx$;
    for (var i = tmp$; i < tmp$_0; i++) {
      particleFlags = particleFlags | ensureNotNull(this.m_flagsBuffer_8be2vx$.data)[i];
    }
    this.updateContacts_6taknv$(true);
    if ((particleFlags & ParticleSystem$Companion_getInstance().k_pairFlags_0) !== 0) {
      tmp$_1 = this.m_contactCount;
      for (var k = 0; k < tmp$_1; k++) {
        var contact = this.m_contactBuffer[k];
        var a = contact.indexA;
        var b = contact.indexB;
        if (a > b) {
          var temp = a;
          a = b;
          b = temp;
        }if (groupA.m_firstIndex <= a && a < groupA.m_lastIndex_8be2vx$ && groupB.m_firstIndex <= b && b < groupB.m_lastIndex_8be2vx$) {
          if (this.m_pairCount_8be2vx$ >= this.m_pairCapacity_8be2vx$) {
            var oldCapacity = this.m_pairCapacity_8be2vx$;
            var newCapacity = this.m_pairCount_8be2vx$ !== 0 ? 2 * this.m_pairCount_8be2vx$ | 0 : Settings_getInstance().minParticleBufferCapacity;
            this.m_pairBuffer_8be2vx$ = BufferUtils_getInstance().reallocateBuffer_z72n54$(ParticleSystem$joinParticleGroups$lambda, this.m_pairBuffer_8be2vx$, oldCapacity, newCapacity);
            this.m_pairCapacity_8be2vx$ = newCapacity;
          }var pair = this.m_pairBuffer_8be2vx$[this.m_pairCount_8be2vx$];
          pair.indexA_8be2vx$ = a;
          pair.indexB_8be2vx$ = b;
          pair.flags_8be2vx$ = contact.flags;
          pair.strength_8be2vx$ = MathUtils$Companion_getInstance().min_dleff0$(groupA.m_strength_8be2vx$, groupB.m_strength_8be2vx$);
          pair.distance_8be2vx$ = MathUtils$Companion_getInstance().distance_xjacks$(ensureNotNull(this.m_positionBuffer_8be2vx$.data)[a], ensureNotNull(this.m_positionBuffer_8be2vx$.data)[b]);
          this.m_pairCount_8be2vx$ = this.m_pairCount_8be2vx$ + 1 | 0;
        }}
    }if ((particleFlags & ParticleSystem$Companion_getInstance().k_triadFlags_0) !== 0) {
      var diagram = new VoronoiDiagram(groupB.m_lastIndex_8be2vx$ - groupA.m_firstIndex | 0);
      tmp$_2 = groupA.m_firstIndex;
      tmp$_3 = groupB.m_lastIndex_8be2vx$;
      for (var i_0 = tmp$_2; i_0 < tmp$_3; i_0++) {
        if ((ensureNotNull(this.m_flagsBuffer_8be2vx$.data)[i_0] & ParticleType_getInstance().b2_zombieParticle) === 0) {
          diagram.addGenerator_tu5csi$(ensureNotNull(this.m_positionBuffer_8be2vx$.data)[i_0], i_0);
        }}
      diagram.generate_mx4ult$(this.particleStride_8be2vx$ / 2);
      var callback = new ParticleSystem$JoinParticleGroupsCallback();
      callback.system = this;
      callback.groupA = groupA;
      callback.groupB = groupB;
      diagram.getNodes_tx8s1w$(callback);
    }tmp$_4 = groupB.m_firstIndex;
    tmp$_5 = groupB.m_lastIndex_8be2vx$;
    for (var i_1 = tmp$_4; i_1 < tmp$_5; i_1++) {
      ensureNotNull(this.particleGroupBuffer)[i_1] = groupA;
    }
    var groupFlags = groupA.m_groupFlags | groupB.m_groupFlags;
    groupA.m_groupFlags = groupFlags;
    groupA.m_lastIndex_8be2vx$ = groupB.m_lastIndex_8be2vx$;
    groupB.m_firstIndex = groupB.m_lastIndex_8be2vx$;
    this.destroyParticleGroup_ki5l96$(groupB);
    if ((groupFlags & ParticleGroupType_getInstance().b2_solidParticleGroup) !== 0) {
      this.computeDepthForGroup_gc2xku$(groupA);
    }};
  ParticleSystem.prototype.destroyParticleGroup_ki5l96$ = function (group) {
    var tmp$, tmp$_0;
    if (!(this.particleGroupCount > 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(group != null)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }if (this.m_world_8be2vx$.particleDestructionListener != null) {
      ensureNotNull(this.m_world_8be2vx$.particleDestructionListener).sayGoodbye_gc2xku$(ensureNotNull(group));
    }tmp$ = ensureNotNull(group).m_firstIndex;
    tmp$_0 = group.m_lastIndex_8be2vx$;
    for (var i = tmp$; i < tmp$_0; i++) {
      ensureNotNull(this.particleGroupBuffer)[i] = null;
    }
    if (group.m_prev_8be2vx$ != null) {
      ensureNotNull(group.m_prev_8be2vx$).m_next = group.m_next;
    }if (group.m_next != null) {
      ensureNotNull(group.m_next).m_prev_8be2vx$ = group.m_prev_8be2vx$;
    }if (equals(group, this.m_groupList_8be2vx$)) {
      this.m_groupList_8be2vx$ = group.m_next;
    }this.particleGroupCount = this.particleGroupCount - 1 | 0;
  };
  ParticleSystem.prototype.computeDepthForGroup_gc2xku$ = function (group) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    tmp$ = group.m_firstIndex;
    tmp$_0 = group.m_lastIndex_8be2vx$;
    for (var i = tmp$; i < tmp$_0; i++) {
      ensureNotNull(this.m_accumulationBuffer_8be2vx$)[i] = 0.0;
    }
    tmp$_1 = this.m_contactCount;
    for (var k = 0; k < tmp$_1; k++) {
      var contact = this.m_contactBuffer[k];
      var a = contact.indexA;
      var b = contact.indexB;
      if (a >= group.m_firstIndex && a < group.m_lastIndex_8be2vx$ && b >= group.m_firstIndex && b < group.m_lastIndex_8be2vx$) {
        var w = contact.weight;
        ensureNotNull(this.m_accumulationBuffer_8be2vx$)[a] = ensureNotNull(this.m_accumulationBuffer_8be2vx$)[a] + w;
        ensureNotNull(this.m_accumulationBuffer_8be2vx$)[b] = ensureNotNull(this.m_accumulationBuffer_8be2vx$)[b] + w;
      }}
    this.m_depthBuffer_8be2vx$ = this.requestParticleBuffer_bzstsi$(this.m_depthBuffer_8be2vx$);
    tmp$_2 = group.m_firstIndex;
    tmp$_3 = group.m_lastIndex_8be2vx$;
    for (var i_0 = tmp$_2; i_0 < tmp$_3; i_0++) {
      var w_0 = ensureNotNull(this.m_accumulationBuffer_8be2vx$)[i_0];
      ensureNotNull(this.m_depthBuffer_8be2vx$)[i_0] = w_0 < 0.8 ? 0.0 : kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    }
    var interationCount = group.particleCount;
    for (var t = 0; t < interationCount; t++) {
      var updated = false;
      tmp$_4 = this.m_contactCount;
      for (var k_0 = 0; k_0 < tmp$_4; k_0++) {
        var contact_0 = this.m_contactBuffer[k_0];
        var a_0 = contact_0.indexA;
        var b_0 = contact_0.indexB;
        if (a_0 >= group.m_firstIndex && a_0 < group.m_lastIndex_8be2vx$ && b_0 >= group.m_firstIndex && b_0 < group.m_lastIndex_8be2vx$) {
          var r = 1 - contact_0.weight;
          var ap0 = ensureNotNull(this.m_depthBuffer_8be2vx$)[a_0];
          var bp0 = ensureNotNull(this.m_depthBuffer_8be2vx$)[b_0];
          var ap1 = bp0 + r;
          var bp1 = ap0 + r;
          if (ap0 > ap1) {
            ensureNotNull(this.m_depthBuffer_8be2vx$)[a_0] = ap1;
            updated = true;
          }if (bp0 > bp1) {
            ensureNotNull(this.m_depthBuffer_8be2vx$)[b_0] = bp1;
            updated = true;
          }}}
      if (!updated) {
        break;
      }}
    tmp$_5 = group.m_firstIndex;
    tmp$_6 = group.m_lastIndex_8be2vx$;
    for (var i_1 = tmp$_5; i_1 < tmp$_6; i_1++) {
      var p = ensureNotNull(this.m_depthBuffer_8be2vx$)[i_1];
      if (p < kotlin_js_internal_FloatCompanionObject.MAX_VALUE) {
        ensureNotNull(this.m_depthBuffer_8be2vx$)[i_1] = ensureNotNull(this.m_depthBuffer_8be2vx$)[i_1] * this.m_particleDiameter_8be2vx$;
      } else {
        ensureNotNull(this.m_depthBuffer_8be2vx$)[i_1] = 0.0;
      }
    }
  };
  function ParticleSystem$addContact$lambda() {
    return new ParticleContact();
  }
  ParticleSystem.prototype.addContact_vux9f0$ = function (a, b) {
    if (!(a !== b)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var pa = ensureNotNull(this.m_positionBuffer_8be2vx$.data)[a];
    var pb = ensureNotNull(this.m_positionBuffer_8be2vx$.data)[b];
    var dx = pb.x - pa.x;
    var dy = pb.y - pa.y;
    var d2 = dx * dx + dy * dy;
    if (d2 < this.m_squaredDiameter_8be2vx$) {
      if (this.m_contactCount >= this.m_contactCapacity_8be2vx$) {
        var oldCapacity = this.m_contactCapacity_8be2vx$;
        var newCapacity = this.m_contactCount !== 0 ? 2 * this.m_contactCount | 0 : Settings_getInstance().minParticleBufferCapacity;
        this.m_contactBuffer = BufferUtils_getInstance().reallocateBuffer_z72n54$(ParticleSystem$addContact$lambda, this.m_contactBuffer, oldCapacity, newCapacity);
        this.m_contactCapacity_8be2vx$ = newCapacity;
      }var invD = d2 !== 0.0 ? MathUtils$Companion_getInstance().sqrt_mx4ult$(1 / d2) : kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
      var contact = this.m_contactBuffer[this.m_contactCount];
      contact.indexA = a;
      contact.indexB = b;
      contact.flags = ensureNotNull(this.m_flagsBuffer_8be2vx$.data)[a] | ensureNotNull(this.m_flagsBuffer_8be2vx$.data)[b];
      contact.weight = 1 - d2 * invD * this.m_inverseDiameter_8be2vx$;
      contact.normal.x = invD * dx;
      contact.normal.y = invD * dy;
      this.m_contactCount = this.m_contactCount + 1 | 0;
    }};
  ParticleSystem.prototype.updateContacts_6taknv$ = function (exceptZombie) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = this.m_proxyCount_8be2vx$;
    for (var p = 0; p < tmp$; p++) {
      var proxy = this.m_proxyBuffer_8be2vx$[p];
      var i = proxy.index_8be2vx$;
      var pos = ensureNotNull(this.m_positionBuffer_8be2vx$.data)[i];
      proxy.tag_8be2vx$ = ParticleSystem$Companion_getInstance().computeTag_dob1fz$(this.m_inverseDiameter_8be2vx$ * pos.x, this.m_inverseDiameter_8be2vx$ * pos.y);
    }
    Arrays_sort(this.m_proxyBuffer_8be2vx$, 0, this.m_proxyCount_8be2vx$);
    this.m_contactCount = 0;
    var c_index = 0;
    tmp$_0 = this.m_proxyCount_8be2vx$;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
      var a = this.m_proxyBuffer_8be2vx$[i_0];
      var rightTag = ParticleSystem$Companion_getInstance().computeRelativeTag_2cjn0$(a.tag_8be2vx$, 1, 0);
      tmp$_1 = this.m_proxyCount_8be2vx$;
      for (var j = i_0 + 1 | 0; j < tmp$_1; j++) {
        var b = this.m_proxyBuffer_8be2vx$[j];
        if (rightTag.compareTo_11rb$(b.tag_8be2vx$) < 0) {
          break;
        }this.addContact_vux9f0$(a.index_8be2vx$, b.index_8be2vx$);
      }
      var bottomLeftTag = ParticleSystem$Companion_getInstance().computeRelativeTag_2cjn0$(a.tag_8be2vx$, -1, 1);
      while (c_index < this.m_proxyCount_8be2vx$) {
        var c = this.m_proxyBuffer_8be2vx$[c_index];
        if (bottomLeftTag.compareTo_11rb$(c.tag_8be2vx$) <= 0) {
          break;
        }c_index = c_index + 1 | 0;
      }
      var bottomRightTag = ParticleSystem$Companion_getInstance().computeRelativeTag_2cjn0$(a.tag_8be2vx$, 1, 1);
      tmp$_2 = this.m_proxyCount_8be2vx$;
      for (var b_index = c_index; b_index < tmp$_2; b_index++) {
        var b_0 = this.m_proxyBuffer_8be2vx$[b_index];
        if (bottomRightTag.compareTo_11rb$(b_0.tag_8be2vx$) < 0) {
          break;
        }this.addContact_vux9f0$(a.index_8be2vx$, b_0.index_8be2vx$);
      }
    }
    if (exceptZombie) {
      var j_0 = this.m_contactCount;
      var i_1 = 0;
      while (i_1 < j_0) {
        if ((this.m_contactBuffer[i_1].flags & ParticleType_getInstance().b2_zombieParticle) !== 0) {
          j_0 = j_0 - 1 | 0;
          var temp = this.m_contactBuffer[j_0];
          this.m_contactBuffer[j_0] = this.m_contactBuffer[i_1];
          this.m_contactBuffer[i_1] = temp;
          i_1 = i_1 - 1 | 0;
        }i_1 = i_1 + 1 | 0;
      }
      this.m_contactCount = j_0;
    }};
  ParticleSystem.prototype.updateBodyContacts = function () {
    var tmp$;
    var aabb = this.temp_0;
    aabb.lowerBound.x = kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    aabb.lowerBound.y = kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    aabb.upperBound.x = -kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    aabb.upperBound.y = -kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    tmp$ = this.particleCount;
    for (var i = 0; i < tmp$; i++) {
      var p = ensureNotNull(this.m_positionBuffer_8be2vx$.data)[i];
      Vec2$Companion_getInstance().minToOut_9ymoeo$(aabb.lowerBound, p, aabb.lowerBound);
      Vec2$Companion_getInstance().maxToOut_9ymoeo$(aabb.upperBound, p, aabb.upperBound);
    }
    aabb.lowerBound.x = aabb.lowerBound.x - this.m_particleDiameter_8be2vx$;
    aabb.lowerBound.y = aabb.lowerBound.y - this.m_particleDiameter_8be2vx$;
    aabb.upperBound.x = aabb.upperBound.x + this.m_particleDiameter_8be2vx$;
    aabb.upperBound.y = aabb.upperBound.y + this.m_particleDiameter_8be2vx$;
    this.m_bodyContactCount = 0;
    this.ubccallback_0.system = this;
    this.m_world_8be2vx$.queryAABB_ujan7h$(this.ubccallback_0, aabb);
  };
  ParticleSystem.prototype.solveCollision_bht1jy$ = function (step) {
    var tmp$;
    var aabb = this.temp_0;
    var lowerBound = aabb.lowerBound;
    var upperBound = aabb.upperBound;
    lowerBound.x = kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    lowerBound.y = kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    upperBound.x = -kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    upperBound.y = -kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    tmp$ = this.particleCount;
    for (var i = 0; i < tmp$; i++) {
      var v = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[i];
      var p1 = ensureNotNull(this.m_positionBuffer_8be2vx$.data)[i];
      var p1x = p1.x;
      var p1y = p1.y;
      var p2x = p1x + step.dt * v.x;
      var p2y = p1y + step.dt * v.y;
      var bx = p1x < p2x ? p1x : p2x;
      var by = p1y < p2y ? p1y : p2y;
      lowerBound.x = lowerBound.x < bx ? lowerBound.x : bx;
      lowerBound.y = lowerBound.y < by ? lowerBound.y : by;
      var b1x = p1x > p2x ? p1x : p2x;
      var b1y = p1y > p2y ? p1y : p2y;
      upperBound.x = upperBound.x > b1x ? upperBound.x : b1x;
      upperBound.y = upperBound.y > b1y ? upperBound.y : b1y;
    }
    this.sccallback_0.step = step;
    this.sccallback_0.system = this;
    this.m_world_8be2vx$.queryAABB_ujan7h$(this.sccallback_0, aabb);
  };
  ParticleSystem.prototype.solve_bht1jy$ = function (step) {
    var tmp$, tmp$_0, tmp$_1;
    this.m_timestamp_8be2vx$ = this.m_timestamp_8be2vx$ + 1 | 0;
    if (this.particleCount === 0) {
      return;
    }this.m_allParticleFlags_8be2vx$ = 0;
    tmp$ = this.particleCount;
    for (var i = 0; i < tmp$; i++) {
      this.m_allParticleFlags_8be2vx$ = this.m_allParticleFlags_8be2vx$ | ensureNotNull(this.m_flagsBuffer_8be2vx$.data)[i];
    }
    if ((this.m_allParticleFlags_8be2vx$ & ParticleType_getInstance().b2_zombieParticle) !== 0) {
      this.solveZombie_8be2vx$();
    }if (this.particleCount === 0) {
      return;
    }this.m_allGroupFlags_8be2vx$ = 0;
    var group = this.m_groupList_8be2vx$;
    while (group != null) {
      this.m_allGroupFlags_8be2vx$ = this.m_allGroupFlags_8be2vx$ | group.m_groupFlags;
      group = group.getNext();
    }
    var gravityx = step.dt * this.particleGravityScale * this.m_world_8be2vx$.gravity.x;
    var gravityy = step.dt * this.particleGravityScale * this.m_world_8be2vx$.gravity.y;
    var criticalVelocytySquared = this.getCriticalVelocitySquared_luey69$(step);
    tmp$_0 = this.particleCount;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
      var v = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[i_0];
      v.x = v.x + gravityx;
      v.y = v.y + gravityy;
      var v2 = v.x * v.x + v.y * v.y;
      if (v2 > criticalVelocytySquared) {
        var a = v2 === 0.0 ? kotlin_js_internal_FloatCompanionObject.MAX_VALUE : MathUtils$Companion_getInstance().sqrt_mx4ult$(criticalVelocytySquared / v2);
        v.x = v.x * a;
        v.y = v.y * a;
      }}
    this.solveCollision_bht1jy$(step);
    if ((this.m_allGroupFlags_8be2vx$ & ParticleGroupType_getInstance().b2_rigidParticleGroup) !== 0) {
      this.solveRigid_luey69$(step);
    }if ((this.m_allParticleFlags_8be2vx$ & ParticleType_getInstance().b2_wallParticle) !== 0) {
      this.solveWall_bht1jy$(step);
    }tmp$_1 = this.particleCount;
    for (var i_1 = 0; i_1 < tmp$_1; i_1++) {
      var pos = ensureNotNull(this.m_positionBuffer_8be2vx$.data)[i_1];
      var vel = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[i_1];
      pos.x = pos.x + step.dt * vel.x;
      pos.y = pos.y + step.dt * vel.y;
    }
    this.updateBodyContacts();
    this.updateContacts_6taknv$(false);
    if ((this.m_allParticleFlags_8be2vx$ & ParticleType_getInstance().b2_viscousParticle) !== 0) {
      this.solveViscous_luey69$(step);
    }if ((this.m_allParticleFlags_8be2vx$ & ParticleType_getInstance().b2_powderParticle) !== 0) {
      this.solvePowder_luey69$(step);
    }if ((this.m_allParticleFlags_8be2vx$ & ParticleType_getInstance().b2_tensileParticle) !== 0) {
      this.solveTensile_luey69$(step);
    }if ((this.m_allParticleFlags_8be2vx$ & ParticleType_getInstance().b2_elasticParticle) !== 0) {
      this.solveElastic_luey69$(step);
    }if ((this.m_allParticleFlags_8be2vx$ & ParticleType_getInstance().b2_springParticle) !== 0) {
      this.solveSpring_luey69$(step);
    }if ((this.m_allGroupFlags_8be2vx$ & ParticleGroupType_getInstance().b2_solidParticleGroup) !== 0) {
      this.solveSolid_luey69$(step);
    }if ((this.m_allParticleFlags_8be2vx$ & ParticleType_getInstance().b2_colorMixingParticle) !== 0) {
      this.solveColorMixing_luey69$(step);
    }this.solvePressure_luey69$(step);
    this.solveDamping_luey69$(step);
  };
  ParticleSystem.prototype.solvePressure_luey69$ = function (step) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$ = this.particleCount;
    for (var i = 0; i < tmp$; i++) {
      this.m_accumulationBuffer_8be2vx$[i] = 0.0;
    }
    tmp$_0 = this.m_bodyContactCount;
    for (var k = 0; k < tmp$_0; k++) {
      var contact = this.m_bodyContactBuffer[k];
      var a = contact.index;
      var w = contact.weight_8be2vx$;
      this.m_accumulationBuffer_8be2vx$[a] = this.m_accumulationBuffer_8be2vx$[a] + w;
    }
    tmp$_1 = this.m_contactCount;
    for (var k_0 = 0; k_0 < tmp$_1; k_0++) {
      var contact_0 = this.m_contactBuffer[k_0];
      var a_0 = contact_0.indexA;
      var b = contact_0.indexB;
      var w_0 = contact_0.weight;
      this.m_accumulationBuffer_8be2vx$[a_0] = this.m_accumulationBuffer_8be2vx$[a_0] + w_0;
      this.m_accumulationBuffer_8be2vx$[b] = this.m_accumulationBuffer_8be2vx$[b] + w_0;
    }
    if ((this.m_allParticleFlags_8be2vx$ & ParticleSystem$Companion_getInstance().k_noPressureFlags_0) !== 0) {
      tmp$_2 = this.particleCount;
      for (var i_0 = 0; i_0 < tmp$_2; i_0++) {
        if ((ensureNotNull(this.m_flagsBuffer_8be2vx$.data)[i_0] & ParticleSystem$Companion_getInstance().k_noPressureFlags_0) !== 0) {
          this.m_accumulationBuffer_8be2vx$[i_0] = 0.0;
        }}
    }var pressurePerWeight = this.m_pressureStrength_8be2vx$ * this.getCriticalPressure_luey69$(step);
    tmp$_3 = this.particleCount;
    for (var i_1 = 0; i_1 < tmp$_3; i_1++) {
      var w_1 = ensureNotNull(this.m_accumulationBuffer_8be2vx$)[i_1];
      var h = pressurePerWeight * MathUtils$Companion_getInstance().max_dleff0$(0.0, MathUtils$Companion_getInstance().min_dleff0$(w_1, Settings_getInstance().maxParticleWeight) - Settings_getInstance().minParticleWeight);
      this.m_accumulationBuffer_8be2vx$[i_1] = h;
    }
    var velocityPerPressure = step.dt / (this.m_density_8be2vx$ * this.m_particleDiameter_8be2vx$);
    tmp$_4 = this.m_bodyContactCount;
    for (var k_1 = 0; k_1 < tmp$_4; k_1++) {
      var contact_1 = this.m_bodyContactBuffer[k_1];
      var a_1 = contact_1.index;
      var b_0 = contact_1.body;
      var w_2 = contact_1.weight_8be2vx$;
      var m = contact_1.mass_8be2vx$;
      var n = contact_1.normal;
      var p = ensureNotNull(this.m_positionBuffer_8be2vx$.data)[a_1];
      var h_0 = ensureNotNull(this.m_accumulationBuffer_8be2vx$)[a_1] + pressurePerWeight * w_2;
      var f = this.tempVec_0;
      var coef = velocityPerPressure * w_2 * m * h_0;
      f.x = coef * n.x;
      f.y = coef * n.y;
      var velData = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[a_1];
      var particleInvMass = this.particleInvMass_8be2vx$;
      velData.x = velData.x - particleInvMass * f.x;
      velData.y = velData.y - particleInvMass * f.y;
      ensureNotNull(b_0).applyLinearImpulse_34eqaj$(f, p, true);
    }
    tmp$_5 = this.m_contactCount;
    for (var k_2 = 0; k_2 < tmp$_5; k_2++) {
      var contact_2 = this.m_contactBuffer[k_2];
      var a_2 = contact_2.indexA;
      var b_1 = contact_2.indexB;
      var w_3 = contact_2.weight;
      var n_0 = contact_2.normal;
      var h_1 = ensureNotNull(this.m_accumulationBuffer_8be2vx$)[a_2] + ensureNotNull(this.m_accumulationBuffer_8be2vx$)[b_1];
      var fx = velocityPerPressure * w_3 * h_1 * n_0.x;
      var fy = velocityPerPressure * w_3 * h_1 * n_0.y;
      var velDataA = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[a_2];
      var velDataB = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[b_1];
      velDataA.x = velDataA.x - fx;
      velDataA.y = velDataA.y - fy;
      velDataB.x = velDataB.x + fx;
      velDataB.y = velDataB.y + fy;
    }
  };
  ParticleSystem.prototype.solveDamping_luey69$ = function (step) {
    var tmp$, tmp$_0;
    var damping = this.particleDamping;
    tmp$ = this.m_bodyContactCount;
    for (var k = 0; k < tmp$; k++) {
      var contact = this.m_bodyContactBuffer[k];
      var a = contact.index;
      var b = contact.body;
      var w = contact.weight_8be2vx$;
      var m = contact.mass_8be2vx$;
      var n = contact.normal;
      var p = ensureNotNull(this.m_positionBuffer_8be2vx$.data)[a];
      var tempX = p.x - ensureNotNull(b).m_sweep.c.x;
      var tempY = p.y - ensureNotNull(b).m_sweep.c.y;
      var velA = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[a];
      var vx = -ensureNotNull(b).m_angularVelocity * tempY + ensureNotNull(b).m_linearVelocity.x - velA.x;
      var vy = ensureNotNull(b).m_angularVelocity * tempX + ensureNotNull(b).m_linearVelocity.y - velA.y;
      var vn = vx * n.x + vy * n.y;
      if (vn < 0) {
        var f = this.tempVec_0;
        f.x = damping * w * m * vn * n.x;
        f.y = damping * w * m * vn * n.y;
        var invMass = this.particleInvMass_8be2vx$;
        velA.x = velA.x + invMass * f.x;
        velA.y = velA.y + invMass * f.y;
        f.x = -f.x;
        f.y = -f.y;
        ensureNotNull(b).applyLinearImpulse_34eqaj$(f, p, true);
      }}
    tmp$_0 = this.m_contactCount;
    for (var k_0 = 0; k_0 < tmp$_0; k_0++) {
      var contact_0 = this.m_contactBuffer[k_0];
      var a_0 = contact_0.indexA;
      var b_0 = contact_0.indexB;
      var w_0 = contact_0.weight;
      var n_0 = contact_0.normal;
      var velA_0 = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[a_0];
      var velB = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[b_0];
      var vx_0 = velB.x - velA_0.x;
      var vy_0 = velB.y - velA_0.y;
      var vn_0 = vx_0 * n_0.x + vy_0 * n_0.y;
      if (vn_0 < 0) {
        var fx = damping * w_0 * vn_0 * n_0.x;
        var fy = damping * w_0 * vn_0 * n_0.y;
        velA_0.x = velA_0.x + fx;
        velA_0.y = velA_0.y + fy;
        velB.x = velB.x - fx;
        velB.y = velB.y - fy;
      }}
  };
  ParticleSystem.prototype.solveWall_bht1jy$ = function (step) {
    var tmp$;
    tmp$ = this.particleCount;
    for (var i = 0; i < tmp$; i++) {
      if ((ensureNotNull(this.m_flagsBuffer_8be2vx$.data)[i] & ParticleType_getInstance().b2_wallParticle) !== 0) {
        var r = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[i];
        r.x = 0.0;
        r.y = 0.0;
      }}
  };
  ParticleSystem.prototype.solveRigid_luey69$ = function (step) {
    var tmp$, tmp$_0;
    var group = this.m_groupList_8be2vx$;
    while (group != null) {
      if ((group.m_groupFlags & ParticleGroupType_getInstance().b2_rigidParticleGroup) !== 0) {
        group.updateStatistics();
        var temp = this.tempVec_0;
        var cross = this.tempVec2_0;
        var rotation = this.tempRot_0;
        rotation.set_mx4ult$(step.dt * group.m_angularVelocity_8be2vx$);
        Rot$Companion_getInstance().mulToOutUnsafe_ok1ihx$(rotation, group.m_center_8be2vx$, cross);
        temp.set_z1lo5s$(group.m_linearVelocity_8be2vx$).mulLocal_mx4ult$(step.dt).addLocal_z1lo5s$(group.m_center_8be2vx$).subLocal_z1lo5s$(cross);
        this.tempXf_0.p.set_z1lo5s$(temp);
        this.tempXf_0.q.set_8196u3$(rotation);
        Transform$Companion_getInstance().mulToOut_9xhzu2$(this.tempXf_0, group.m_transform, group.m_transform);
        var velocityTransform = this.tempXf2_0;
        velocityTransform.p.x = step.inv_dt * this.tempXf_0.p.x;
        velocityTransform.p.y = step.inv_dt * this.tempXf_0.p.y;
        velocityTransform.q.s = step.inv_dt * this.tempXf_0.q.s;
        velocityTransform.q.c = step.inv_dt * (this.tempXf_0.q.c - 1);
        tmp$ = group.m_firstIndex;
        tmp$_0 = group.m_lastIndex_8be2vx$;
        for (var i = tmp$; i < tmp$_0; i++) {
          Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(velocityTransform, ensureNotNull(this.m_positionBuffer_8be2vx$.data)[i], ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[i]);
        }
      }group = group.getNext();
    }
  };
  ParticleSystem.prototype.solveElastic_luey69$ = function (step) {
    var tmp$;
    var elasticStrength = step.inv_dt * this.m_elasticStrength_8be2vx$;
    tmp$ = this.m_triadCount_8be2vx$;
    for (var k = 0; k < tmp$; k++) {
      var triad = this.m_triadBuffer_8be2vx$[k];
      if ((triad.flags_8be2vx$ & ParticleType_getInstance().b2_elasticParticle) !== 0) {
        var a = triad.indexA_8be2vx$;
        var b = triad.indexB_8be2vx$;
        var c = triad.indexC_8be2vx$;
        var oa = triad.pa_8be2vx$;
        var ob = triad.pb_8be2vx$;
        var oc = triad.pc_8be2vx$;
        var pa = ensureNotNull(this.m_positionBuffer_8be2vx$.data)[a];
        var pb = ensureNotNull(this.m_positionBuffer_8be2vx$.data)[b];
        var pc = ensureNotNull(this.m_positionBuffer_8be2vx$.data)[c];
        var px = 1.0 / 3 * (pa.x + pb.x + pc.x);
        var py = 1.0 / 3 * (pa.y + pb.y + pc.y);
        var rs = Vec2$Companion_getInstance().cross_xjacks$(oa, pa) + Vec2$Companion_getInstance().cross_xjacks$(ob, pb) + Vec2$Companion_getInstance().cross_xjacks$(oc, pc);
        var rc = Vec2$Companion_getInstance().dot_xjacks$(oa, pa) + Vec2$Companion_getInstance().dot_xjacks$(ob, pb) + Vec2$Companion_getInstance().dot_xjacks$(oc, pc);
        var r2 = rs * rs + rc * rc;
        var invR = r2 === 0.0 ? kotlin_js_internal_FloatCompanionObject.MAX_VALUE : MathUtils$Companion_getInstance().sqrt_mx4ult$(1.0 / r2);
        rs *= invR;
        rc *= invR;
        var strength = elasticStrength * triad.strength_8be2vx$;
        var roax = rc * oa.x - rs * oa.y;
        var roay = rs * oa.x + rc * oa.y;
        var robx = rc * ob.x - rs * ob.y;
        var roby = rs * ob.x + rc * ob.y;
        var rocx = rc * oc.x - rs * oc.y;
        var rocy = rs * oc.x + rc * oc.y;
        var va = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[a];
        var vb = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[b];
        var vc = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[c];
        va.x = va.x + strength * (roax - (pa.x - px));
        va.y = va.y + strength * (roay - (pa.y - py));
        vb.x = vb.x + strength * (robx - (pb.x - px));
        vb.y = vb.y + strength * (roby - (pb.y - py));
        vc.x = vc.x + strength * (rocx - (pc.x - px));
        vc.y = vc.y + strength * (rocy - (pc.y - py));
      }}
  };
  ParticleSystem.prototype.solveSpring_luey69$ = function (step) {
    var tmp$;
    var springStrength = step.inv_dt * this.m_springStrength_8be2vx$;
    tmp$ = this.m_pairCount_8be2vx$;
    for (var k = 0; k < tmp$; k++) {
      var pair = this.m_pairBuffer_8be2vx$[k];
      if ((pair.flags_8be2vx$ & ParticleType_getInstance().b2_springParticle) !== 0) {
        var a = pair.indexA_8be2vx$;
        var b = pair.indexB_8be2vx$;
        var pa = ensureNotNull(this.m_positionBuffer_8be2vx$.data)[a];
        var pb = ensureNotNull(this.m_positionBuffer_8be2vx$.data)[b];
        var dx = pb.x - pa.x;
        var dy = pb.y - pa.y;
        var r0 = pair.distance_8be2vx$;
        var r1 = MathUtils$Companion_getInstance().sqrt_mx4ult$(dx * dx + dy * dy);
        if (r1 === 0.0)
          r1 = kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
        var strength = springStrength * pair.strength_8be2vx$;
        var fx = strength * (r0 - r1) / r1 * dx;
        var fy = strength * (r0 - r1) / r1 * dy;
        var va = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[a];
        var vb = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[b];
        va.x = va.x - fx;
        va.y = va.y - fy;
        vb.x = vb.x + fx;
        vb.y = vb.y + fy;
      }}
  };
  function ParticleSystem$solveTensile$lambda() {
    return new Vec2();
  }
  ParticleSystem.prototype.solveTensile_luey69$ = function (step) {
    var tmp$, tmp$_0, tmp$_1;
    this.m_accumulation2Buffer_8be2vx$ = this.requestParticleBuffer_x9lftn$(ParticleSystem$solveTensile$lambda, this.m_accumulation2Buffer_8be2vx$);
    tmp$ = this.particleCount;
    for (var i = 0; i < tmp$; i++) {
      this.m_accumulationBuffer_8be2vx$[i] = 0.0;
      ensureNotNull(this.m_accumulation2Buffer_8be2vx$)[i].setZero();
    }
    tmp$_0 = this.m_contactCount;
    for (var k = 0; k < tmp$_0; k++) {
      var contact = this.m_contactBuffer[k];
      if ((contact.flags & ParticleType_getInstance().b2_tensileParticle) !== 0) {
        var a = contact.indexA;
        var b = contact.indexB;
        var w = contact.weight;
        var n = contact.normal;
        this.m_accumulationBuffer_8be2vx$[a] = this.m_accumulationBuffer_8be2vx$[a] + w;
        this.m_accumulationBuffer_8be2vx$[b] = this.m_accumulationBuffer_8be2vx$[b] + w;
        var a2A = ensureNotNull(this.m_accumulation2Buffer_8be2vx$)[a];
        var a2B = ensureNotNull(this.m_accumulation2Buffer_8be2vx$)[b];
        var inter = (1 - w) * w;
        a2A.x = a2A.x - inter * n.x;
        a2A.y = a2A.y - inter * n.y;
        a2B.x = a2B.x + inter * n.x;
        a2B.y = a2B.y + inter * n.y;
      }}
    var strengthA = this.m_surfaceTensionStrengthA_8be2vx$ * this.getCriticalVelocity_luey69$(step);
    var strengthB = this.m_surfaceTensionStrengthB_8be2vx$ * this.getCriticalVelocity_luey69$(step);
    tmp$_1 = this.m_contactCount;
    for (var k_0 = 0; k_0 < tmp$_1; k_0++) {
      var contact_0 = this.m_contactBuffer[k_0];
      if ((contact_0.flags & ParticleType_getInstance().b2_tensileParticle) !== 0) {
        var a_0 = contact_0.indexA;
        var b_0 = contact_0.indexB;
        var w_0 = contact_0.weight;
        var n_0 = contact_0.normal;
        var a2A_0 = ensureNotNull(this.m_accumulation2Buffer_8be2vx$)[a_0];
        var a2B_0 = ensureNotNull(this.m_accumulation2Buffer_8be2vx$)[b_0];
        var h = ensureNotNull(this.m_accumulationBuffer_8be2vx$)[a_0] + ensureNotNull(this.m_accumulationBuffer_8be2vx$)[b_0];
        var sx = a2B_0.x - a2A_0.x;
        var sy = a2B_0.y - a2A_0.y;
        var fn = (strengthA * (h - 2) + strengthB * (sx * n_0.x + sy * n_0.y)) * w_0;
        var fx = fn * n_0.x;
        var fy = fn * n_0.y;
        var va = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[a_0];
        var vb = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[b_0];
        va.x = va.x - fx;
        va.y = va.y - fy;
        vb.x = vb.x + fx;
        vb.y = vb.y + fy;
      }}
  };
  ParticleSystem.prototype.solveViscous_luey69$ = function (step) {
    var tmp$, tmp$_0;
    var viscousStrength = this.m_viscousStrength_8be2vx$;
    tmp$ = this.m_bodyContactCount;
    for (var k = 0; k < tmp$; k++) {
      var contact = this.m_bodyContactBuffer[k];
      var a = contact.index;
      if ((ensureNotNull(this.m_flagsBuffer_8be2vx$.data)[a] & ParticleType_getInstance().b2_viscousParticle) !== 0) {
        var b = contact.body;
        var w = contact.weight_8be2vx$;
        var m = contact.mass_8be2vx$;
        var p = ensureNotNull(this.m_positionBuffer_8be2vx$.data)[a];
        var va = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[a];
        var tempX = p.x - ensureNotNull(b).m_sweep.c.x;
        var tempY = p.y - ensureNotNull(b).m_sweep.c.y;
        var vx = -ensureNotNull(b).m_angularVelocity * tempY + ensureNotNull(b).m_linearVelocity.x - va.x;
        var vy = ensureNotNull(b).m_angularVelocity * tempX + ensureNotNull(b).m_linearVelocity.y - va.y;
        var f = this.tempVec_0;
        var pInvMass = this.particleInvMass_8be2vx$;
        f.x = viscousStrength * m * w * vx;
        f.y = viscousStrength * m * w * vy;
        va.x = va.x + pInvMass * f.x;
        va.y = va.y + pInvMass * f.y;
        f.x = -f.x;
        f.y = -f.y;
        ensureNotNull(b).applyLinearImpulse_34eqaj$(f, p, true);
      }}
    tmp$_0 = this.m_contactCount;
    for (var k_0 = 0; k_0 < tmp$_0; k_0++) {
      var contact_0 = this.m_contactBuffer[k_0];
      if ((contact_0.flags & ParticleType_getInstance().b2_viscousParticle) !== 0) {
        var a_0 = contact_0.indexA;
        var b_0 = contact_0.indexB;
        var w_0 = contact_0.weight;
        var va_0 = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[a_0];
        var vb = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[b_0];
        var vx_0 = vb.x - va_0.x;
        var vy_0 = vb.y - va_0.y;
        var fx = viscousStrength * w_0 * vx_0;
        var fy = viscousStrength * w_0 * vy_0;
        va_0.x = va_0.x + fx;
        va_0.y = va_0.y + fy;
        vb.x = vb.x - fx;
        vb.y = vb.y - fy;
      }}
  };
  ParticleSystem.prototype.solvePowder_luey69$ = function (step) {
    var tmp$, tmp$_0;
    var powderStrength = this.m_powderStrength_8be2vx$ * this.getCriticalVelocity_luey69$(step);
    var minWeight = 1.0 - Settings_getInstance().particleStride;
    tmp$ = this.m_bodyContactCount;
    for (var k = 0; k < tmp$; k++) {
      var contact = this.m_bodyContactBuffer[k];
      var a = contact.index;
      if ((ensureNotNull(this.m_flagsBuffer_8be2vx$.data)[a] & ParticleType_getInstance().b2_powderParticle) !== 0) {
        var w = contact.weight_8be2vx$;
        if (w > minWeight) {
          var b = contact.body;
          var m = contact.mass_8be2vx$;
          var p = ensureNotNull(this.m_positionBuffer_8be2vx$.data)[a];
          var n = contact.normal;
          var f = this.tempVec_0;
          var va = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[a];
          var inter = powderStrength * m * (w - minWeight);
          var pInvMass = this.particleInvMass_8be2vx$;
          f.x = inter * n.x;
          f.y = inter * n.y;
          va.x = va.x - pInvMass * f.x;
          va.y = va.y - pInvMass * f.y;
          ensureNotNull(b).applyLinearImpulse_34eqaj$(f, p, true);
        }}}
    tmp$_0 = this.m_contactCount;
    for (var k_0 = 0; k_0 < tmp$_0; k_0++) {
      var contact_0 = this.m_contactBuffer[k_0];
      if ((contact_0.flags & ParticleType_getInstance().b2_powderParticle) !== 0) {
        var w_0 = contact_0.weight;
        if (w_0 > minWeight) {
          var a_0 = contact_0.indexA;
          var b_0 = contact_0.indexB;
          var n_0 = contact_0.normal;
          var va_0 = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[a_0];
          var vb = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[b_0];
          var inter_0 = powderStrength * (w_0 - minWeight);
          var fx = inter_0 * n_0.x;
          var fy = inter_0 * n_0.y;
          va_0.x = va_0.x - fx;
          va_0.y = va_0.y - fy;
          vb.x = vb.x + fx;
          vb.y = vb.y + fy;
        }}}
  };
  ParticleSystem.prototype.solveSolid_luey69$ = function (step) {
    var tmp$;
    this.m_depthBuffer_8be2vx$ = this.requestParticleBuffer_bzstsi$(this.m_depthBuffer_8be2vx$);
    var ejectionStrength = step.inv_dt * this.m_ejectionStrength_8be2vx$;
    tmp$ = this.m_contactCount;
    for (var k = 0; k < tmp$; k++) {
      var contact = this.m_contactBuffer[k];
      var a = contact.indexA;
      var b = contact.indexB;
      if (!equals(ensureNotNull(this.particleGroupBuffer)[a], ensureNotNull(this.particleGroupBuffer)[b])) {
        var w = contact.weight;
        var n = contact.normal;
        var h = ensureNotNull(this.m_depthBuffer_8be2vx$)[a] + ensureNotNull(this.m_depthBuffer_8be2vx$)[b];
        var va = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[a];
        var vb = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[b];
        var inter = ejectionStrength * h * w;
        var fx = inter * n.x;
        var fy = inter * n.y;
        va.x = va.x - fx;
        va.y = va.y - fy;
        vb.x = vb.x + fx;
        vb.y = vb.y + fy;
      }}
  };
  function ParticleSystem$solveColorMixing$lambda() {
    return ParticleColor_init();
  }
  ParticleSystem.prototype.solveColorMixing_luey69$ = function (step) {
    var tmp$;
    this.m_colorBuffer.data = this.requestParticleBuffer_x9lftn$(ParticleSystem$solveColorMixing$lambda, this.m_colorBuffer.data);
    var colorMixing256 = numberToInt(256 * this.m_colorMixingStrength_8be2vx$);
    tmp$ = this.m_contactCount;
    for (var k = 0; k < tmp$; k++) {
      var contact = this.m_contactBuffer[k];
      var a = contact.indexA;
      var b = contact.indexB;
      if ((ensureNotNull(this.m_flagsBuffer_8be2vx$.data)[a] & ensureNotNull(this.m_flagsBuffer_8be2vx$.data)[b] & ParticleType_getInstance().b2_colorMixingParticle) !== 0) {
        var colorA = ensureNotNull(ensureNotNull(this.m_colorBuffer.data)[a]);
        var colorB = ensureNotNull(ensureNotNull(this.m_colorBuffer.data)[b]);
        var dr = Kotlin.imul(colorMixing256, colorB.r - colorA.r) >> 8;
        var dg = Kotlin.imul(colorMixing256, colorB.g - colorA.g) >> 8;
        var db = Kotlin.imul(colorMixing256, colorB.b - colorA.b) >> 8;
        var da = Kotlin.imul(colorMixing256, colorB.a - colorA.a) >> 8;
        colorA.r = toByte(colorA.r + toByte(dr));
        colorA.g = toByte(colorA.g + toByte(dg));
        colorA.b = toByte(colorA.b + toByte(db));
        colorA.a = toByte(colorA.a + toByte(da));
        colorB.r = toByte(colorB.r - toByte(dr));
        colorB.g = toByte(colorB.g - toByte(dg));
        colorB.b = toByte(colorB.b - toByte(db));
        colorB.a = toByte(colorB.a - toByte(da));
      }}
  };
  ParticleSystem.prototype.solveZombie_8be2vx$ = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var newCount = {v: 0};
    var newIndices = new Int32Array(this.particleCount);
    tmp$ = this.particleCount;
    for (var i = 0; i < tmp$; i++) {
      var flags = ensureNotNull(this.m_flagsBuffer_8be2vx$.data)[i];
      if ((flags & ParticleType_getInstance().b2_zombieParticle) !== 0) {
        var destructionListener = this.m_world_8be2vx$.particleDestructionListener;
        if ((flags & ParticleType_getInstance().b2_destructionListener) !== 0 && destructionListener != null) {
          destructionListener.sayGoodbye_za3lpa$(i);
        }newIndices[i] = Settings_getInstance().invalidParticleIndex;
      } else {
        newIndices[i] = newCount.v;
        if (i !== newCount.v) {
          ensureNotNull(ensureNotNull(this.m_flagsBuffer_8be2vx$).data)[newCount.v] = ensureNotNull(this.m_flagsBuffer_8be2vx$.data)[i];
          ensureNotNull(this.m_positionBuffer_8be2vx$.data)[newCount.v].set_z1lo5s$(ensureNotNull(this.m_positionBuffer_8be2vx$.data)[i]);
          ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[newCount.v].set_z1lo5s$(ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[i]);
          ensureNotNull(this.particleGroupBuffer)[newCount.v] = ensureNotNull(ensureNotNull(this.particleGroupBuffer)[i]);
          if (this.m_depthBuffer_8be2vx$ != null) {
            ensureNotNull(this.m_depthBuffer_8be2vx$)[newCount.v] = ensureNotNull(this.m_depthBuffer_8be2vx$)[i];
          }if (this.m_colorBuffer.data != null) {
            ensureNotNull(this.m_colorBuffer.data)[newCount.v].set_gec3a2$(ensureNotNull(this.m_colorBuffer.data)[i]);
          }if (this.m_userDataBuffer_8be2vx$.data != null) {
            ensureNotNull(ensureNotNull(this.m_userDataBuffer_8be2vx$).data)[newCount.v] = ensureNotNull(this.m_userDataBuffer_8be2vx$.data)[i];
          }}newCount.v = newCount.v + 1 | 0;
      }
    }
    tmp$_0 = this.m_proxyCount_8be2vx$;
    for (var k = 0; k < tmp$_0; k++) {
      var proxy = this.m_proxyBuffer_8be2vx$[k];
      proxy.index_8be2vx$ = newIndices[proxy.index_8be2vx$];
    }
    var j = {v: this.m_proxyCount_8be2vx$};
    var i_0 = 0;
    while (i_0 < j.v) {
      if (ParticleSystem$Test_getInstance().IsProxyInvalid_xid9ck$(this.m_proxyBuffer_8be2vx$[i_0])) {
        j.v = j.v - 1 | 0;
        var temp = this.m_proxyBuffer_8be2vx$[j.v];
        this.m_proxyBuffer_8be2vx$[j.v] = this.m_proxyBuffer_8be2vx$[i_0];
        this.m_proxyBuffer_8be2vx$[i_0] = temp;
        i_0 = i_0 - 1 | 0;
      }i_0 = i_0 + 1 | 0;
    }
    this.m_proxyCount_8be2vx$ = j.v;
    tmp$_1 = this.m_contactCount;
    for (var k_0 = 0; k_0 < tmp$_1; k_0++) {
      var contact = this.m_contactBuffer[k_0];
      contact.indexA = newIndices[contact.indexA];
      contact.indexB = newIndices[contact.indexB];
    }
    j.v = this.m_contactCount;
    var i_1 = 0;
    while (i_1 < j.v) {
      if (ParticleSystem$Test_getInstance().IsContactInvalid_a7f52b$(this.m_contactBuffer[i_1])) {
        j.v = j.v - 1 | 0;
        var temp_0 = this.m_contactBuffer[j.v];
        this.m_contactBuffer[j.v] = this.m_contactBuffer[i_1];
        this.m_contactBuffer[i_1] = temp_0;
        i_1 = i_1 - 1 | 0;
      }i_1 = i_1 + 1 | 0;
    }
    this.m_contactCount = j.v;
    tmp$_2 = this.m_bodyContactCount;
    for (var k_1 = 0; k_1 < tmp$_2; k_1++) {
      var contact_0 = this.m_bodyContactBuffer[k_1];
      contact_0.index = newIndices[contact_0.index];
    }
    j.v = this.m_bodyContactCount;
    var i_2 = 0;
    while (i_2 < j.v) {
      if (ParticleSystem$Test_getInstance().IsBodyContactInvalid_mj7hsx$(this.m_bodyContactBuffer[i_2])) {
        j.v = j.v - 1 | 0;
        var temp_1 = this.m_bodyContactBuffer[j.v];
        this.m_bodyContactBuffer[j.v] = this.m_bodyContactBuffer[i_2];
        this.m_bodyContactBuffer[i_2] = temp_1;
        i_2 = i_2 - 1 | 0;
      }i_2 = i_2 + 1 | 0;
    }
    this.m_bodyContactCount = j.v;
    tmp$_3 = this.m_pairCount_8be2vx$;
    for (var k_2 = 0; k_2 < tmp$_3; k_2++) {
      var pair = this.m_pairBuffer_8be2vx$[k_2];
      pair.indexA_8be2vx$ = newIndices[pair.indexA_8be2vx$];
      pair.indexB_8be2vx$ = newIndices[pair.indexB_8be2vx$];
    }
    j.v = this.m_pairCount_8be2vx$;
    var i_3 = 0;
    while (i_3 < j.v) {
      if (ParticleSystem$Test_getInstance().IsPairInvalid_speuqk$(this.m_pairBuffer_8be2vx$[i_3])) {
        j.v = j.v - 1 | 0;
        var temp_2 = this.m_pairBuffer_8be2vx$[j.v];
        this.m_pairBuffer_8be2vx$[j.v] = this.m_pairBuffer_8be2vx$[i_3];
        this.m_pairBuffer_8be2vx$[i_3] = temp_2;
        i_3 = i_3 - 1 | 0;
      }i_3 = i_3 + 1 | 0;
    }
    this.m_pairCount_8be2vx$ = j.v;
    tmp$_4 = this.m_triadCount_8be2vx$;
    for (var k_3 = 0; k_3 < tmp$_4; k_3++) {
      var triad = this.m_triadBuffer_8be2vx$[k_3];
      triad.indexA_8be2vx$ = newIndices[triad.indexA_8be2vx$];
      triad.indexB_8be2vx$ = newIndices[triad.indexB_8be2vx$];
      triad.indexC_8be2vx$ = newIndices[triad.indexC_8be2vx$];
    }
    j.v = this.m_triadCount_8be2vx$;
    var i_4 = 0;
    while (i_4 < j.v) {
      if (ParticleSystem$Test_getInstance().IsTriadInvalid_xg67zo$(this.m_triadBuffer_8be2vx$[i_4])) {
        j.v = j.v - 1 | 0;
        var temp_3 = this.m_triadBuffer_8be2vx$[j.v];
        this.m_triadBuffer_8be2vx$[j.v] = this.m_triadBuffer_8be2vx$[i_4];
        this.m_triadBuffer_8be2vx$[i_4] = temp_3;
        i_4 = i_4 - 1 | 0;
      }i_4 = i_4 + 1 | 0;
    }
    this.m_triadCount_8be2vx$ = j.v;
    var tmp$_5, tmp$_6;
    var group = this.m_groupList_8be2vx$;
    while (group != null) {
      var firstIndex = newCount.v;
      var lastIndex = 0;
      var modified = false;
      tmp$_5 = ensureNotNull(group).m_firstIndex;
      tmp$_6 = ensureNotNull(group).m_lastIndex_8be2vx$;
      for (var i_5 = tmp$_5; i_5 < tmp$_6; i_5++) {
        j.v = newIndices[i_5];
        if (j.v >= 0) {
          firstIndex = MathUtils$Companion_getInstance().min_vux9f0$(firstIndex, j.v);
          lastIndex = MathUtils$Companion_getInstance().max_vux9f0$(lastIndex, j.v + 1 | 0);
        } else {
          modified = true;
        }
      }
      if (firstIndex < lastIndex) {
        ensureNotNull(group).m_firstIndex = firstIndex;
        ensureNotNull(group).m_lastIndex_8be2vx$ = lastIndex;
        if (modified) {
          if ((ensureNotNull(group).m_groupFlags & ParticleGroupType_getInstance().b2_rigidParticleGroup) !== 0) {
            ensureNotNull(group).m_toBeSplit_8be2vx$ = true;
          }}} else {
        ensureNotNull(group).m_firstIndex = 0;
        ensureNotNull(group).m_lastIndex_8be2vx$ = 0;
        if (ensureNotNull(group).m_destroyAutomatically_8be2vx$) {
          ensureNotNull(group).m_toBeDestroyed_8be2vx$ = true;
        }}
      group = ensureNotNull(group).getNext();
    }
    this.particleCount = newCount.v;
    var group_0 = this.m_groupList_8be2vx$;
    while (group_0 != null) {
      var next = ensureNotNull(group_0).getNext();
      if (ensureNotNull(group_0).m_toBeDestroyed_8be2vx$) {
        this.destroyParticleGroup_ki5l96$(group_0);
      } else
        ensureNotNull(group_0);
      group_0 = next;
    }
  };
  function ParticleSystem$NewIndices() {
    this.start_8be2vx$ = 0;
    this.mid_8be2vx$ = 0;
    this.end_8be2vx$ = 0;
  }
  ParticleSystem$NewIndices.prototype.getIndex_kcn2v3$ = function (i) {
    var tmp$;
    if (i < this.start_8be2vx$) {
      tmp$ = i;
    } else if (i < this.mid_8be2vx$) {
      tmp$ = i + this.end_8be2vx$ - this.mid_8be2vx$ | 0;
    } else if (i < this.end_8be2vx$) {
      tmp$ = i + this.start_8be2vx$ - this.mid_8be2vx$ | 0;
    } else {
      tmp$ = i;
    }
    return tmp$;
  };
  ParticleSystem$NewIndices.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NewIndices',
    interfaces: []
  };
  ParticleSystem.prototype.RotateBuffer_cub51b$ = function (start, mid, end) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (start === mid || mid === end) {
      return;
    }this.newIndices_0.start_8be2vx$ = start;
    this.newIndices_0.mid_8be2vx$ = mid;
    this.newIndices_0.end_8be2vx$ = end;
    BufferUtils_getInstance().rotate_7lcbvb$(ensureNotNull(this.m_flagsBuffer_8be2vx$.data), start, mid, end);
    BufferUtils_getInstance().rotate_rahehc$(ensureNotNull(this.m_positionBuffer_8be2vx$.data), start, mid, end);
    BufferUtils_getInstance().rotate_rahehc$(ensureNotNull(this.m_velocityBuffer_8be2vx$.data), start, mid, end);
    BufferUtils_getInstance().rotate_rahehc$(Kotlin.isArray(tmp$ = ensureNotNull(this.particleGroupBuffer)) ? tmp$ : throwCCE(), start, mid, end);
    if (this.m_depthBuffer_8be2vx$ != null) {
      BufferUtils_getInstance().rotate_ll5sec$(ensureNotNull(this.m_depthBuffer_8be2vx$), start, mid, end);
    }if (this.m_colorBuffer.data != null) {
      BufferUtils_getInstance().rotate_rahehc$(ensureNotNull(this.m_colorBuffer.data), start, mid, end);
    }if (this.m_userDataBuffer_8be2vx$.data != null) {
      BufferUtils_getInstance().rotate_rahehc$(ensureNotNull(this.m_userDataBuffer_8be2vx$.data), start, mid, end);
    }tmp$_0 = this.m_proxyCount_8be2vx$;
    for (var k = 0; k < tmp$_0; k++) {
      var proxy = this.m_proxyBuffer_8be2vx$[k];
      proxy.index_8be2vx$ = this.newIndices_0.getIndex_kcn2v3$(proxy.index_8be2vx$);
    }
    tmp$_1 = this.m_contactCount;
    for (var k_0 = 0; k_0 < tmp$_1; k_0++) {
      var contact = this.m_contactBuffer[k_0];
      contact.indexA = this.newIndices_0.getIndex_kcn2v3$(contact.indexA);
      contact.indexB = this.newIndices_0.getIndex_kcn2v3$(contact.indexB);
    }
    tmp$_2 = this.m_bodyContactCount;
    for (var k_1 = 0; k_1 < tmp$_2; k_1++) {
      var contact_0 = this.m_bodyContactBuffer[k_1];
      contact_0.index = this.newIndices_0.getIndex_kcn2v3$(contact_0.index);
    }
    tmp$_3 = this.m_pairCount_8be2vx$;
    for (var k_2 = 0; k_2 < tmp$_3; k_2++) {
      var pair = this.m_pairBuffer_8be2vx$[k_2];
      pair.indexA_8be2vx$ = this.newIndices_0.getIndex_kcn2v3$(pair.indexA_8be2vx$);
      pair.indexB_8be2vx$ = this.newIndices_0.getIndex_kcn2v3$(pair.indexB_8be2vx$);
    }
    tmp$_4 = this.m_triadCount_8be2vx$;
    for (var k_3 = 0; k_3 < tmp$_4; k_3++) {
      var triad = this.m_triadBuffer_8be2vx$[k_3];
      triad.indexA_8be2vx$ = this.newIndices_0.getIndex_kcn2v3$(triad.indexA_8be2vx$);
      triad.indexB_8be2vx$ = this.newIndices_0.getIndex_kcn2v3$(triad.indexB_8be2vx$);
      triad.indexC_8be2vx$ = this.newIndices_0.getIndex_kcn2v3$(triad.indexC_8be2vx$);
    }
    var group = this.m_groupList_8be2vx$;
    while (group != null) {
      group.m_firstIndex = this.newIndices_0.getIndex_kcn2v3$(group.m_firstIndex);
      group.m_lastIndex_8be2vx$ = this.newIndices_0.getIndex_kcn2v3$(group.m_lastIndex_8be2vx$ - 1 | 0) + 1 | 0;
      group = group.getNext();
    }
  };
  ParticleSystem.prototype.getCriticalVelocity_luey69$ = function (step) {
    return this.m_particleDiameter_8be2vx$ * step.inv_dt;
  };
  ParticleSystem.prototype.getCriticalVelocitySquared_luey69$ = function (step) {
    var velocity = this.getCriticalVelocity_luey69$(step);
    return velocity * velocity;
  };
  ParticleSystem.prototype.getCriticalPressure_luey69$ = function (step) {
    return this.m_density_8be2vx$ * this.getCriticalVelocitySquared_luey69$(step);
  };
  ParticleSystem.prototype.setParticleBuffer_rqtmua$ = function (buffer, newData, newCapacity) {
    if (!(newData != null && newCapacity !== 0 || (newData == null && newCapacity === 0))) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }buffer.data = newData;
    buffer.userSuppliedCapacity = newCapacity;
  };
  ParticleSystem.prototype.setParticleBuffer_mtbgyj$ = function (buffer, newData, newCapacity) {
    if (!(newData != null && newCapacity !== 0 || (newData == null && newCapacity === 0))) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }buffer.data = newData;
    buffer.userSuppliedCapacity_8be2vx$ = newCapacity;
  };
  ParticleSystem.prototype.setParticleFlagsBuffer_u4kcgn$ = function (buffer, capacity) {
    this.setParticleBuffer_rqtmua$(this.m_flagsBuffer_8be2vx$, buffer, capacity);
  };
  ParticleSystem.prototype.setParticlePositionBuffer_g8u1io$ = function (buffer, capacity) {
    this.setParticleBuffer_mtbgyj$(this.m_positionBuffer_8be2vx$, buffer, capacity);
  };
  ParticleSystem.prototype.setParticleVelocityBuffer_g8u1io$ = function (buffer, capacity) {
    this.setParticleBuffer_mtbgyj$(this.m_velocityBuffer_8be2vx$, buffer, capacity);
  };
  ParticleSystem.prototype.setParticleColorBuffer_8l94fu$ = function (buffer, capacity) {
    this.setParticleBuffer_mtbgyj$(this.m_colorBuffer, buffer, capacity);
  };
  ParticleSystem.prototype.getParticleGroupList = function () {
    return ensureNotNull(this.particleGroupBuffer);
  };
  ParticleSystem.prototype.setParticleUserDataBuffer_8sn6zj$ = function (buffer, capacity) {
    this.setParticleBuffer_mtbgyj$(this.m_userDataBuffer_8be2vx$, buffer, capacity);
  };
  ParticleSystem.prototype.queryAABB_gvhqw9$ = function (callback, aabb) {
    if (this.m_proxyCount_8be2vx$ === 0) {
      return;
    }var lowerBoundX = aabb.lowerBound.x;
    var lowerBoundY = aabb.lowerBound.y;
    var upperBoundX = aabb.upperBound.x;
    var upperBoundY = aabb.upperBound.y;
    var firstProxy = ParticleSystem$Companion_getInstance().lowerBound_0(this.m_proxyBuffer_8be2vx$, this.m_proxyCount_8be2vx$, ParticleSystem$Companion_getInstance().computeTag_dob1fz$(this.m_inverseDiameter_8be2vx$ * lowerBoundX, this.m_inverseDiameter_8be2vx$ * lowerBoundY));
    var lastProxy = ParticleSystem$Companion_getInstance().upperBound_0(this.m_proxyBuffer_8be2vx$, this.m_proxyCount_8be2vx$, ParticleSystem$Companion_getInstance().computeTag_dob1fz$(this.m_inverseDiameter_8be2vx$ * upperBoundX, this.m_inverseDiameter_8be2vx$ * upperBoundY));
    for (var proxy = firstProxy; proxy < lastProxy; proxy++) {
      var i = this.m_proxyBuffer_8be2vx$[proxy].index_8be2vx$;
      var p = ensureNotNull(this.m_positionBuffer_8be2vx$.data)[i];
      if (lowerBoundX < p.x && p.x < upperBoundX && lowerBoundY < p.y && p.y < upperBoundY) {
        if (!callback.reportParticle_za3lpa$(i)) {
          break;
        }}}
  };
  ParticleSystem.prototype.raycast_1xblih$ = function (callback, point1, point2) {
    if (this.m_proxyCount_8be2vx$ === 0) {
      return;
    }var firstProxy = ParticleSystem$Companion_getInstance().lowerBound_0(this.m_proxyBuffer_8be2vx$, this.m_proxyCount_8be2vx$, ParticleSystem$Companion_getInstance().computeTag_dob1fz$(this.m_inverseDiameter_8be2vx$ * MathUtils$Companion_getInstance().min_dleff0$(point1.x, point2.x) - 1, this.m_inverseDiameter_8be2vx$ * MathUtils$Companion_getInstance().min_dleff0$(point1.y, point2.y) - 1));
    var lastProxy = ParticleSystem$Companion_getInstance().upperBound_0(this.m_proxyBuffer_8be2vx$, this.m_proxyCount_8be2vx$, ParticleSystem$Companion_getInstance().computeTag_dob1fz$(this.m_inverseDiameter_8be2vx$ * MathUtils$Companion_getInstance().max_dleff0$(point1.x, point2.x) + 1, this.m_inverseDiameter_8be2vx$ * MathUtils$Companion_getInstance().max_dleff0$(point1.y, point2.y) + 1));
    var fraction = 1.0;
    var vx = point2.x - point1.x;
    var vy = point2.y - point1.y;
    var v2 = vx * vx + vy * vy;
    if (v2 === 0.0)
      v2 = kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    for (var proxy = firstProxy; proxy < lastProxy; proxy++) {
      var i = this.m_proxyBuffer_8be2vx$[proxy].index_8be2vx$;
      var posI = ensureNotNull(this.m_positionBuffer_8be2vx$.data)[i];
      var px = point1.x - posI.x;
      var py = point1.y - posI.y;
      var pv = px * vx + py * vy;
      var p2 = px * px + py * py;
      var determinant = pv * pv - v2 * (p2 - this.m_squaredDiameter_8be2vx$);
      if (determinant >= 0) {
        var sqrtDeterminant = MathUtils$Companion_getInstance().sqrt_mx4ult$(determinant);
        var t = (-pv - sqrtDeterminant) / v2;
        if (t > fraction) {
          continue;
        }if (t < 0) {
          t = (-pv + sqrtDeterminant) / v2;
          if (t < 0 || t > fraction) {
            continue;
          }}var n = this.tempVec_0;
        this.tempVec_0.x = px + t * vx;
        this.tempVec_0.y = py + t * vy;
        n.normalize();
        var point = this.tempVec2_0;
        point.x = point1.x + t * vx;
        point.y = point1.y + t * vy;
        var f = callback.reportParticle_w9c6qh$(i, point, n, t);
        fraction = MathUtils$Companion_getInstance().min_dleff0$(fraction, f);
        if (fraction <= 0) {
          break;
        }}}
  };
  ParticleSystem.prototype.computeParticleCollisionEnergy = function () {
    var tmp$;
    var sum_v2 = 0.0;
    tmp$ = this.m_contactCount;
    for (var k = 0; k < tmp$; k++) {
      var contact = this.m_contactBuffer[k];
      var a = contact.indexA;
      var b = contact.indexB;
      var n = contact.normal;
      var va = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[a];
      var vb = ensureNotNull(this.m_velocityBuffer_8be2vx$.data)[b];
      var vx = vb.x - va.x;
      var vy = vb.y - va.y;
      var vn = vx * n.x + vy * n.y;
      if (vn < 0) {
        sum_v2 += vn * vn;
      }}
    return 0.5 * this.particleMass_8be2vx$ * sum_v2;
  };
  ParticleSystem.prototype.requestParticleBuffer_x9lftn$ = function (newInstance, buffer) {
    var tmp$;
    var buffer_0 = buffer;
    if (buffer_0 == null) {
      var array = Array_0(this.m_internalAllocatedCapacity_8be2vx$);
      var tmp$_0;
      tmp$_0 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_0; i++) {
        array[i] = newInstance();
      }
      buffer_0 = Kotlin.isArray(tmp$ = array) ? tmp$ : throwCCE();
    }return buffer_0;
  };
  ParticleSystem.prototype.requestParticleBuffer_bzstsi$ = function (buffer) {
    var buffer_0 = buffer;
    if (buffer_0 == null) {
      buffer_0 = new Float32Array(this.m_internalAllocatedCapacity_8be2vx$);
    }return buffer_0;
  };
  function ParticleSystem$ParticleBuffer(dataClass) {
    this.dataClass_8be2vx$ = dataClass;
    this.data = null;
    this.userSuppliedCapacity_8be2vx$ = 0;
  }
  ParticleSystem$ParticleBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParticleBuffer',
    interfaces: []
  };
  function ParticleSystem$ParticleBufferInt() {
    this.data = null;
    this.userSuppliedCapacity = 0;
  }
  ParticleSystem$ParticleBufferInt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParticleBufferInt',
    interfaces: []
  };
  function ParticleSystem$Proxy() {
    this.index_8be2vx$ = 0;
    this.tag_8be2vx$ = L0;
  }
  ParticleSystem$Proxy.prototype.compareTo_11rb$ = function (o) {
    return this.tag_8be2vx$.subtract(o.tag_8be2vx$).toNumber() < 0 ? -1 : equals(o.tag_8be2vx$, this.tag_8be2vx$) ? 0 : 1;
  };
  ParticleSystem$Proxy.prototype.equals = function (obj) {
    var tmp$, tmp$_0;
    if (this === obj)
      return true;
    if (obj == null)
      return false;
    if (!((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(obj)) : null))
      return false;
    var other = (tmp$_0 = obj) == null || Kotlin.isType(tmp$_0, ParticleSystem$Proxy) ? tmp$_0 : throwCCE();
    return !equals(this.tag_8be2vx$, ensureNotNull(other).tag_8be2vx$) ? false : true;
  };
  ParticleSystem$Proxy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Proxy',
    interfaces: [Comparable]
  };
  function ParticleSystem$Pair() {
    this.indexA_8be2vx$ = 0;
    this.indexB_8be2vx$ = 0;
    this.flags_8be2vx$ = 0;
    this.strength_8be2vx$ = 0;
    this.distance_8be2vx$ = 0;
  }
  ParticleSystem$Pair.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pair',
    interfaces: []
  };
  function ParticleSystem$Triad() {
    this.indexA_8be2vx$ = 0;
    this.indexB_8be2vx$ = 0;
    this.indexC_8be2vx$ = 0;
    this.flags_8be2vx$ = 0;
    this.strength_8be2vx$ = 0;
    this.pa_8be2vx$ = new Vec2();
    this.pb_8be2vx$ = new Vec2();
    this.pc_8be2vx$ = new Vec2();
    this.ka_8be2vx$ = 0;
    this.kb_8be2vx$ = 0;
    this.kc_8be2vx$ = 0;
    this.s_8be2vx$ = 0;
  }
  ParticleSystem$Triad.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Triad',
    interfaces: []
  };
  function ParticleSystem$CreateParticleGroupCallback() {
    this.system = null;
    this.def = null;
    this.firstIndex = 0;
  }
  function ParticleSystem$CreateParticleGroupCallback$callback$lambda() {
    return new ParticleSystem$Triad();
  }
  ParticleSystem$CreateParticleGroupCallback.prototype.callback_qt1dr2$ = function (a, b, c) {
    var pa = ensureNotNull(ensureNotNull(this.system).m_positionBuffer_8be2vx$.data)[a];
    var pb = ensureNotNull(ensureNotNull(this.system).m_positionBuffer_8be2vx$.data)[b];
    var pc = ensureNotNull(ensureNotNull(this.system).m_positionBuffer_8be2vx$.data)[c];
    var dabx = pa.x - pb.x;
    var daby = pa.y - pb.y;
    var dbcx = pb.x - pc.x;
    var dbcy = pb.y - pc.y;
    var dcax = pc.x - pa.x;
    var dcay = pc.y - pa.y;
    var maxDistanceSquared = Settings_getInstance().maxTriadDistanceSquared * ensureNotNull(this.system).m_squaredDiameter_8be2vx$;
    if (dabx * dabx + daby * daby < maxDistanceSquared && dbcx * dbcx + dbcy * dbcy < maxDistanceSquared && dcax * dcax + dcay * dcay < maxDistanceSquared) {
      if (ensureNotNull(this.system).m_triadCount_8be2vx$ >= ensureNotNull(this.system).m_triadCapacity_8be2vx$) {
        var oldCapacity = ensureNotNull(this.system).m_triadCapacity_8be2vx$;
        var newCapacity = ensureNotNull(this.system).m_triadCount_8be2vx$ !== 0 ? 2 * ensureNotNull(this.system).m_triadCount_8be2vx$ | 0 : Settings_getInstance().minParticleBufferCapacity;
        ensureNotNull(this.system).m_triadBuffer_8be2vx$ = BufferUtils_getInstance().reallocateBuffer_z72n54$(ParticleSystem$CreateParticleGroupCallback$callback$lambda, ensureNotNull(this.system).m_triadBuffer_8be2vx$, oldCapacity, newCapacity);
        ensureNotNull(this.system).m_triadCapacity_8be2vx$ = newCapacity;
      }var triad = ensureNotNull(this.system).m_triadBuffer_8be2vx$[ensureNotNull(this.system).m_triadCount_8be2vx$];
      triad.indexA_8be2vx$ = a;
      triad.indexB_8be2vx$ = b;
      triad.indexC_8be2vx$ = c;
      triad.flags_8be2vx$ = ensureNotNull(ensureNotNull(this.system).m_flagsBuffer_8be2vx$.data)[a] | ensureNotNull(ensureNotNull(this.system).m_flagsBuffer_8be2vx$.data)[b] | ensureNotNull(ensureNotNull(this.system).m_flagsBuffer_8be2vx$.data)[c];
      triad.strength_8be2vx$ = ensureNotNull(this.def).strength;
      var midPointx = 1 / 3 * (pa.x + pb.x + pc.x);
      var midPointy = 1 / 3 * (pa.y + pb.y + pc.y);
      triad.pa_8be2vx$.x = pa.x - midPointx;
      triad.pa_8be2vx$.y = pa.y - midPointy;
      triad.pb_8be2vx$.x = pb.x - midPointx;
      triad.pb_8be2vx$.y = pb.y - midPointy;
      triad.pc_8be2vx$.x = pc.x - midPointx;
      triad.pc_8be2vx$.y = pc.y - midPointy;
      triad.ka_8be2vx$ = -(dcax * dabx + dcay * daby);
      triad.kb_8be2vx$ = -(dabx * dbcx + daby * dbcy);
      triad.kc_8be2vx$ = -(dbcx * dcax + dbcy * dcay);
      triad.s_8be2vx$ = Vec2$Companion_getInstance().cross_xjacks$(pa, pb) + Vec2$Companion_getInstance().cross_xjacks$(pb, pc) + Vec2$Companion_getInstance().cross_xjacks$(pc, pa);
      var tmp$;
      tmp$ = ensureNotNull(this.system);
      tmp$.m_triadCount_8be2vx$ = tmp$.m_triadCount_8be2vx$ + 1 | 0;
    }};
  ParticleSystem$CreateParticleGroupCallback.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CreateParticleGroupCallback',
    interfaces: [VoronoiDiagram$VoronoiDiagramCallback]
  };
  function ParticleSystem$JoinParticleGroupsCallback() {
    this.system = null;
    this.groupA = null;
    this.groupB = null;
  }
  function ParticleSystem$JoinParticleGroupsCallback$callback$lambda() {
    return new ParticleSystem$Triad();
  }
  ParticleSystem$JoinParticleGroupsCallback.prototype.callback_qt1dr2$ = function (a, b, c) {
    var countA = (a < ensureNotNull(this.groupB).m_firstIndex ? 1 : 0) + (b < ensureNotNull(this.groupB).m_firstIndex ? 1 : 0) + (c < ensureNotNull(this.groupB).m_firstIndex ? 1 : 0) | 0;
    if (countA > 0 && countA < 3) {
      var af = ensureNotNull(ensureNotNull(this.system).m_flagsBuffer_8be2vx$.data)[a];
      var bf = ensureNotNull(ensureNotNull(this.system).m_flagsBuffer_8be2vx$.data)[b];
      var cf = ensureNotNull(ensureNotNull(this.system).m_flagsBuffer_8be2vx$.data)[c];
      if ((af & bf & cf & ParticleSystem$Companion_getInstance().k_triadFlags_0) !== 0) {
        var pa = ensureNotNull(ensureNotNull(this.system).m_positionBuffer_8be2vx$.data)[a];
        var pb = ensureNotNull(ensureNotNull(this.system).m_positionBuffer_8be2vx$.data)[b];
        var pc = ensureNotNull(ensureNotNull(this.system).m_positionBuffer_8be2vx$.data)[c];
        var dabx = pa.x - pb.x;
        var daby = pa.y - pb.y;
        var dbcx = pb.x - pc.x;
        var dbcy = pb.y - pc.y;
        var dcax = pc.x - pa.x;
        var dcay = pc.y - pa.y;
        var maxDistanceSquared = Settings_getInstance().maxTriadDistanceSquared * ensureNotNull(this.system).m_squaredDiameter_8be2vx$;
        if (dabx * dabx + daby * daby < maxDistanceSquared && dbcx * dbcx + dbcy * dbcy < maxDistanceSquared && dcax * dcax + dcay * dcay < maxDistanceSquared) {
          if (ensureNotNull(this.system).m_triadCount_8be2vx$ >= ensureNotNull(this.system).m_triadCapacity_8be2vx$) {
            var oldCapacity = ensureNotNull(this.system).m_triadCapacity_8be2vx$;
            var newCapacity = ensureNotNull(this.system).m_triadCount_8be2vx$ !== 0 ? 2 * ensureNotNull(this.system).m_triadCount_8be2vx$ | 0 : Settings_getInstance().minParticleBufferCapacity;
            ensureNotNull(this.system).m_triadBuffer_8be2vx$ = BufferUtils_getInstance().reallocateBuffer_z72n54$(ParticleSystem$JoinParticleGroupsCallback$callback$lambda, ensureNotNull(this.system).m_triadBuffer_8be2vx$, oldCapacity, newCapacity);
            ensureNotNull(this.system).m_triadCapacity_8be2vx$ = newCapacity;
          }var triad = ensureNotNull(this.system).m_triadBuffer_8be2vx$[ensureNotNull(this.system).m_triadCount_8be2vx$];
          triad.indexA_8be2vx$ = a;
          triad.indexB_8be2vx$ = b;
          triad.indexC_8be2vx$ = c;
          triad.flags_8be2vx$ = af | bf | cf;
          triad.strength_8be2vx$ = MathUtils$Companion_getInstance().min_dleff0$(ensureNotNull(this.groupA).m_strength_8be2vx$, ensureNotNull(this.groupB).m_strength_8be2vx$);
          var midPointx = 1 / 3 * (pa.x + pb.x + pc.x);
          var midPointy = 1 / 3 * (pa.y + pb.y + pc.y);
          triad.pa_8be2vx$.x = pa.x - midPointx;
          triad.pa_8be2vx$.y = pa.y - midPointy;
          triad.pb_8be2vx$.x = pb.x - midPointx;
          triad.pb_8be2vx$.y = pb.y - midPointy;
          triad.pc_8be2vx$.x = pc.x - midPointx;
          triad.pc_8be2vx$.y = pc.y - midPointy;
          triad.ka_8be2vx$ = -(dcax * dabx + dcay * daby);
          triad.kb_8be2vx$ = -(dabx * dbcx + daby * dbcy);
          triad.kc_8be2vx$ = -(dbcx * dcax + dbcy * dcay);
          triad.s_8be2vx$ = Vec2$Companion_getInstance().cross_xjacks$(pa, pb) + Vec2$Companion_getInstance().cross_xjacks$(pb, pc) + Vec2$Companion_getInstance().cross_xjacks$(pc, pa);
          var tmp$;
          tmp$ = ensureNotNull(this.system);
          tmp$.m_triadCount_8be2vx$ = tmp$.m_triadCount_8be2vx$ + 1 | 0;
        }}}};
  ParticleSystem$JoinParticleGroupsCallback.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JoinParticleGroupsCallback',
    interfaces: [VoronoiDiagram$VoronoiDiagramCallback]
  };
  function ParticleSystem$DestroyParticlesInShapeCallback() {
    this.system_s04xyv$_0 = this.system_s04xyv$_0;
    this.shape_sm5byz$_0 = this.shape_sm5byz$_0;
    this.xf_k374fe$_0 = this.xf_k374fe$_0;
    this.callDestructionListener = false;
    this.destroyed = 0;
  }
  Object.defineProperty(ParticleSystem$DestroyParticlesInShapeCallback.prototype, 'system', {
    get: function () {
      if (this.system_s04xyv$_0 == null)
        return throwUPAE('system');
      return this.system_s04xyv$_0;
    },
    set: function (system) {
      this.system_s04xyv$_0 = system;
    }
  });
  Object.defineProperty(ParticleSystem$DestroyParticlesInShapeCallback.prototype, 'shape', {
    get: function () {
      if (this.shape_sm5byz$_0 == null)
        return throwUPAE('shape');
      return this.shape_sm5byz$_0;
    },
    set: function (shape) {
      this.shape_sm5byz$_0 = shape;
    }
  });
  Object.defineProperty(ParticleSystem$DestroyParticlesInShapeCallback.prototype, 'xf', {
    get: function () {
      if (this.xf_k374fe$_0 == null)
        return throwUPAE('xf');
      return this.xf_k374fe$_0;
    },
    set: function (xf) {
      this.xf_k374fe$_0 = xf;
    }
  });
  ParticleSystem$DestroyParticlesInShapeCallback.prototype.init_1scalj$ = function (system, shape, xf, callDestructionListener) {
    this.system = system;
    this.shape = shape;
    this.xf = xf;
    this.destroyed = 0;
    this.callDestructionListener = callDestructionListener;
  };
  ParticleSystem$DestroyParticlesInShapeCallback.prototype.reportParticle_za3lpa$ = function (index) {
    if (!(index >= 0 && index < this.system.particleCount)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (this.shape.testPoint_v1llj6$(this.xf, ensureNotNull(this.system.m_positionBuffer_8be2vx$.data)[index])) {
      this.system.destroyParticle_fzusl$(index, this.callDestructionListener);
      this.destroyed = this.destroyed + 1 | 0;
    }return true;
  };
  ParticleSystem$DestroyParticlesInShapeCallback.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DestroyParticlesInShapeCallback',
    interfaces: [ParticleQueryCallback]
  };
  function ParticleSystem$UpdateBodyContactsCallback() {
    this.system = null;
    this.tempVec_0 = new Vec2();
  }
  function ParticleSystem$UpdateBodyContactsCallback$reportFixture$lambda() {
    return new ParticleBodyContact();
  }
  ParticleSystem$UpdateBodyContactsCallback.prototype.reportFixture_9p97b4$ = function (fixture) {
    if (fixture.isSensor) {
      return true;
    }var shape = fixture.getShape();
    var b = fixture.getBody();
    var bp = ensureNotNull(b).worldCenter;
    var bm = b.getMass();
    var bI = b.inertia - bm * b.localCenter.lengthSquared();
    var invBm = bm > 0 ? 1.0 / bm : 0.0;
    var invBI = bI > 0 ? 1.0 / bI : 0.0;
    var childCount = ensureNotNull(shape).getChildCount();
    for (var childIndex = 0; childIndex < childCount; childIndex++) {
      var aabb = fixture.getAABB_za3lpa$(childIndex);
      var aabblowerBoundx = aabb.lowerBound.x - ensureNotNull(this.system).m_particleDiameter_8be2vx$;
      var aabblowerBoundy = aabb.lowerBound.y - ensureNotNull(this.system).m_particleDiameter_8be2vx$;
      var aabbupperBoundx = aabb.upperBound.x + ensureNotNull(this.system).m_particleDiameter_8be2vx$;
      var aabbupperBoundy = aabb.upperBound.y + ensureNotNull(this.system).m_particleDiameter_8be2vx$;
      var firstProxy = ParticleSystem$Companion_getInstance().lowerBound_0(ensureNotNull(this.system).m_proxyBuffer_8be2vx$, ensureNotNull(this.system).m_proxyCount_8be2vx$, ParticleSystem$Companion_getInstance().computeTag_dob1fz$(ensureNotNull(this.system).m_inverseDiameter_8be2vx$ * aabblowerBoundx, ensureNotNull(this.system).m_inverseDiameter_8be2vx$ * aabblowerBoundy));
      var lastProxy = ParticleSystem$Companion_getInstance().upperBound_0(ensureNotNull(this.system).m_proxyBuffer_8be2vx$, ensureNotNull(this.system).m_proxyCount_8be2vx$, ParticleSystem$Companion_getInstance().computeTag_dob1fz$(ensureNotNull(this.system).m_inverseDiameter_8be2vx$ * aabbupperBoundx, ensureNotNull(this.system).m_inverseDiameter_8be2vx$ * aabbupperBoundy));
      for (var proxy = firstProxy; proxy < lastProxy; proxy++) {
        var a = ensureNotNull(this.system).m_proxyBuffer_8be2vx$[proxy].index_8be2vx$;
        var ap = ensureNotNull(ensureNotNull(this.system).m_positionBuffer_8be2vx$.data)[a];
        if (aabblowerBoundx <= ap.x && ap.x <= aabbupperBoundx && aabblowerBoundy <= ap.y && ap.y <= aabbupperBoundy) {
          var d;
          var n = this.tempVec_0;
          d = fixture.computeDistance_evt532$(ap, childIndex, n);
          if (d < ensureNotNull(this.system).m_particleDiameter_8be2vx$) {
            var invAm = (ensureNotNull(ensureNotNull(this.system).m_flagsBuffer_8be2vx$.data)[a] & ParticleType_getInstance().b2_wallParticle) !== 0 ? 0.0 : ensureNotNull(ensureNotNull(this.system).particleInvMass_8be2vx$);
            var rpx = ap.x - bp.x;
            var rpy = ap.y - bp.y;
            var rpn = rpx * n.y - rpy * n.x;
            if (ensureNotNull(this.system).m_bodyContactCount >= ensureNotNull(this.system).m_bodyContactCapacity_8be2vx$) {
              var oldCapacity = ensureNotNull(this.system).m_bodyContactCapacity_8be2vx$;
              var newCapacity = ensureNotNull(this.system).m_bodyContactCount !== 0 ? 2 * ensureNotNull(this.system).m_bodyContactCount | 0 : Settings_getInstance().minParticleBufferCapacity;
              ensureNotNull(this.system).m_bodyContactBuffer = BufferUtils_getInstance().reallocateBuffer_z72n54$(ParticleSystem$UpdateBodyContactsCallback$reportFixture$lambda, ensureNotNull(this.system).m_bodyContactBuffer, oldCapacity, newCapacity);
              ensureNotNull(this.system).m_bodyContactCapacity_8be2vx$ = newCapacity;
            }var contact = ensureNotNull(this.system).m_bodyContactBuffer[ensureNotNull(this.system).m_bodyContactCount];
            contact.index = a;
            contact.body = b;
            contact.weight_8be2vx$ = 1 - d * ensureNotNull(this.system).m_inverseDiameter_8be2vx$;
            contact.normal.x = -n.x;
            contact.normal.y = -n.y;
            contact.mass_8be2vx$ = 1 / (invAm + invBm + invBI * rpn * rpn);
            var tmp$;
            tmp$ = ensureNotNull(this.system);
            tmp$.m_bodyContactCount = tmp$.m_bodyContactCount + 1 | 0;
          }}}
    }
    return true;
  };
  ParticleSystem$UpdateBodyContactsCallback.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UpdateBodyContactsCallback',
    interfaces: [QueryCallback]
  };
  function ParticleSystem$SolveCollisionCallback() {
    this.system = null;
    this.step = null;
    this.input_0 = new RayCastInput();
    this.output_0 = new RayCastOutput();
    this.tempVec_0 = new Vec2();
    this.tempVec2_0 = new Vec2();
  }
  ParticleSystem$SolveCollisionCallback.prototype.reportFixture_9p97b4$ = function (fixture) {
    if (fixture.isSensor) {
      return true;
    }var shape = fixture.getShape();
    var body = fixture.getBody();
    var childCount = ensureNotNull(shape).getChildCount();
    for (var childIndex = 0; childIndex < childCount; childIndex++) {
      var aabb = fixture.getAABB_za3lpa$(childIndex);
      var aabblowerBoundx = aabb.lowerBound.x - ensureNotNull(this.system).m_particleDiameter_8be2vx$;
      var aabblowerBoundy = aabb.lowerBound.y - ensureNotNull(this.system).m_particleDiameter_8be2vx$;
      var aabbupperBoundx = aabb.upperBound.x + ensureNotNull(this.system).m_particleDiameter_8be2vx$;
      var aabbupperBoundy = aabb.upperBound.y + ensureNotNull(this.system).m_particleDiameter_8be2vx$;
      var firstProxy = ParticleSystem$Companion_getInstance().lowerBound_0(ensureNotNull(this.system).m_proxyBuffer_8be2vx$, ensureNotNull(this.system).m_proxyCount_8be2vx$, ParticleSystem$Companion_getInstance().computeTag_dob1fz$(ensureNotNull(this.system).m_inverseDiameter_8be2vx$ * aabblowerBoundx, ensureNotNull(this.system).m_inverseDiameter_8be2vx$ * aabblowerBoundy));
      var lastProxy = ParticleSystem$Companion_getInstance().upperBound_0(ensureNotNull(this.system).m_proxyBuffer_8be2vx$, ensureNotNull(this.system).m_proxyCount_8be2vx$, ParticleSystem$Companion_getInstance().computeTag_dob1fz$(ensureNotNull(this.system).m_inverseDiameter_8be2vx$ * aabbupperBoundx, ensureNotNull(this.system).m_inverseDiameter_8be2vx$ * aabbupperBoundy));
      for (var proxy = firstProxy; proxy < lastProxy; proxy++) {
        var a = ensureNotNull(this.system).m_proxyBuffer_8be2vx$[proxy].index_8be2vx$;
        var ap = ensureNotNull(ensureNotNull(this.system).m_positionBuffer_8be2vx$.data)[a];
        if (aabblowerBoundx <= ap.x && ap.x <= aabbupperBoundx && aabblowerBoundy <= ap.y && ap.y <= aabbupperBoundy) {
          var av = ensureNotNull(ensureNotNull(this.system).m_velocityBuffer_8be2vx$.data)[a];
          var temp = this.tempVec_0;
          Transform$Companion_getInstance().mulTransToOutUnsafe_r18ri2$(ensureNotNull(body).m_xf0, ap, temp);
          Transform$Companion_getInstance().mulToOutUnsafe_r18ri2$(body.m_xf, temp, this.input_0.p1);
          this.input_0.p2.x = ap.x + ensureNotNull(this.step).dt * av.x;
          this.input_0.p2.y = ap.y + ensureNotNull(this.step).dt * av.y;
          this.input_0.maxFraction = 1.0;
          if (fixture.raycast_rawvn5$(this.output_0, this.input_0, childIndex)) {
            var p = this.tempVec_0;
            p.x = (1 - this.output_0.fraction) * this.input_0.p1.x + this.output_0.fraction * this.input_0.p2.x + Settings_getInstance().linearSlop * this.output_0.normal.x;
            p.y = (1 - this.output_0.fraction) * this.input_0.p1.y + this.output_0.fraction * this.input_0.p2.y + Settings_getInstance().linearSlop * this.output_0.normal.y;
            var vx = ensureNotNull(this.step).inv_dt * (p.x - ap.x);
            var vy = ensureNotNull(this.step).inv_dt * (p.y - ap.y);
            av.x = vx;
            av.y = vy;
            var particleMass = ensureNotNull(this.system).particleMass_8be2vx$;
            var ax = particleMass * (av.x - vx);
            var ay = particleMass * (av.y - vy);
            var b = this.output_0.normal;
            var fdn = ax * b.x + ay * b.y;
            var f = this.tempVec2_0;
            f.x = fdn * b.x;
            f.y = fdn * b.y;
            body.applyLinearImpulse_34eqaj$(f, p, true);
          }}}
    }
    return true;
  };
  ParticleSystem$SolveCollisionCallback.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SolveCollisionCallback',
    interfaces: [QueryCallback]
  };
  function ParticleSystem$Test() {
    ParticleSystem$Test_instance = this;
  }
  ParticleSystem$Test.prototype.IsProxyInvalid_xid9ck$ = function (proxy) {
    return proxy.index_8be2vx$ < 0;
  };
  ParticleSystem$Test.prototype.IsContactInvalid_a7f52b$ = function (contact) {
    return contact.indexA < 0 || contact.indexB < 0;
  };
  ParticleSystem$Test.prototype.IsBodyContactInvalid_mj7hsx$ = function (contact) {
    return contact.index < 0;
  };
  ParticleSystem$Test.prototype.IsPairInvalid_speuqk$ = function (pair) {
    return pair.indexA_8be2vx$ < 0 || pair.indexB_8be2vx$ < 0;
  };
  ParticleSystem$Test.prototype.IsTriadInvalid_xg67zo$ = function (triad) {
    return triad.indexA_8be2vx$ < 0 || triad.indexB_8be2vx$ < 0 || triad.indexC_8be2vx$ < 0;
  };
  ParticleSystem$Test.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Test',
    interfaces: []
  };
  var ParticleSystem$Test_instance = null;
  function ParticleSystem$Test_getInstance() {
    if (ParticleSystem$Test_instance === null) {
      new ParticleSystem$Test();
    }return ParticleSystem$Test_instance;
  }
  function ParticleSystem$Companion() {
    ParticleSystem$Companion_instance = this;
    this.k_pairFlags_0 = ParticleType_getInstance().b2_springParticle;
    this.k_triadFlags_0 = ParticleType_getInstance().b2_elasticParticle;
    this.k_noPressureFlags_0 = ParticleType_getInstance().b2_powderParticle;
    this.xTruncBits_8be2vx$ = 12;
    this.yTruncBits_8be2vx$ = 12;
    this.tagBits_8be2vx$ = 31;
    this.yOffset_8be2vx$ = Kotlin.Long.fromInt(1 << this.yTruncBits_8be2vx$ - 1);
    this.yShift_8be2vx$ = this.tagBits_8be2vx$ - this.yTruncBits_8be2vx$ | 0;
    this.xShift_8be2vx$ = this.tagBits_8be2vx$ - this.yTruncBits_8be2vx$ - this.xTruncBits_8be2vx$ | 0;
    this.xScale_8be2vx$ = Kotlin.Long.fromInt(1 << this.xShift_8be2vx$);
    this.xOffset_8be2vx$ = this.xScale_8be2vx$.multiply(Kotlin.Long.fromInt(1 << this.xTruncBits_8be2vx$ - 1));
    this.xMask_8be2vx$ = (1 << this.xTruncBits_8be2vx$) - 1 | 0;
    this.yMask_8be2vx$ = (1 << this.yTruncBits_8be2vx$) - 1 | 0;
  }
  ParticleSystem$Companion.prototype.computeTag_dob1fz$ = function (x, y) {
    return Kotlin.Long.fromNumber(y + this.yOffset_8be2vx$.toNumber()).shiftLeft(this.yShift_8be2vx$).add(Kotlin.Long.fromNumber(this.xScale_8be2vx$.toNumber() * x).add(this.xOffset_8be2vx$));
  };
  ParticleSystem$Companion.prototype.computeRelativeTag_2cjn0$ = function (tag, x, y) {
    return tag.add(Kotlin.Long.fromInt(y << this.yShift_8be2vx$)).add(Kotlin.Long.fromInt(x << this.xShift_8be2vx$));
  };
  ParticleSystem$Companion.prototype.limitCapacity_6xvm5r$ = function (capacity, maxCount) {
    return maxCount !== 0 && capacity > maxCount ? maxCount : capacity;
  };
  ParticleSystem$Companion.prototype.lowerBound_0 = function (ray, length, tag) {
    var length_0 = length;
    var left = 0;
    var step;
    var curr;
    while (length_0 > 0) {
      step = length_0 / 2 | 0;
      curr = left + step | 0;
      if (ray[curr].tag_8be2vx$.compareTo_11rb$(tag) < 0) {
        left = curr + 1 | 0;
        length_0 = length_0 - (step + 1) | 0;
      } else {
        length_0 = step;
      }
    }
    return left;
  };
  ParticleSystem$Companion.prototype.upperBound_0 = function (ray, length, tag) {
    var length_0 = length;
    var left = 0;
    var step;
    var curr;
    while (length_0 > 0) {
      step = length_0 / 2 | 0;
      curr = left + step | 0;
      if (ray[curr].tag_8be2vx$.compareTo_11rb$(tag) <= 0) {
        left = curr + 1 | 0;
        length_0 = length_0 - (step + 1) | 0;
      } else {
        length_0 = step;
      }
    }
    return left;
  };
  ParticleSystem$Companion.prototype.reallocateBuffer_e8did$ = function (buffer, oldCapacity, newCapacity, deferred) {
    if (!(newCapacity > oldCapacity)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }return BufferUtils_getInstance().reallocateBuffer_8tm975$(buffer.dataClass_8be2vx$, buffer.data, buffer.userSuppliedCapacity_8be2vx$, oldCapacity, newCapacity, deferred);
  };
  ParticleSystem$Companion.prototype.reallocateBuffer_girg3n$ = function (buffer, oldCapacity, newCapacity, deferred) {
    if (!(newCapacity > oldCapacity)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }return BufferUtils_getInstance().reallocateBuffer_gtrz29$(buffer.data, buffer.userSuppliedCapacity, oldCapacity, newCapacity, deferred);
  };
  ParticleSystem$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ParticleSystem$Companion_instance = null;
  function ParticleSystem$Companion_getInstance() {
    if (ParticleSystem$Companion_instance === null) {
      new ParticleSystem$Companion();
    }return ParticleSystem$Companion_instance;
  }
  function ParticleSystem$m_positionBuffer$lambda() {
    return new Vec2();
  }
  function ParticleSystem$m_velocityBuffer$lambda() {
    return new Vec2();
  }
  function ParticleSystem$m_colorBuffer$lambda() {
    return ParticleColor_init();
  }
  function ParticleSystem$m_userDataBuffer$lambda() {
    return new Any();
  }
  ParticleSystem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParticleSystem',
    interfaces: []
  };
  function ParticleType() {
    ParticleType_instance = this;
    this.b2_waterParticle = 0;
    this.b2_zombieParticle = 2;
    this.b2_wallParticle = 4;
    this.b2_springParticle = 8;
    this.b2_elasticParticle = 16;
    this.b2_viscousParticle = 32;
    this.b2_powderParticle = 64;
    this.b2_tensileParticle = 128;
    this.b2_colorMixingParticle = 256;
    this.b2_destructionListener = 512;
  }
  ParticleType.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ParticleType',
    interfaces: []
  };
  var ParticleType_instance = null;
  function ParticleType_getInstance() {
    if (ParticleType_instance === null) {
      new ParticleType();
    }return ParticleType_instance;
  }
  var arraycopy$lambda_9 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function StackQueue() {
    this.m_buffer_0 = null;
    this.m_front_0 = 0;
    this.m_back_0 = 0;
    this.m_end_0 = 0;
  }
  StackQueue.prototype.reset_tfr4nt$ = function (buffer) {
    this.m_buffer_0 = buffer;
    this.m_front_0 = 0;
    this.m_back_0 = 0;
    this.m_end_0 = buffer.length;
  };
  StackQueue.prototype.push_11rb$ = function (task) {
    var tmp$;
    if (this.m_back_0 >= this.m_end_0) {
      var srcPos = this.m_front_0;
      arrayCopy(ensureNotNull(this.m_buffer_0), ensureNotNull(this.m_buffer_0), 0, srcPos, srcPos + (this.m_back_0 - this.m_front_0 | 0) | 0);
      this.m_back_0 = this.m_back_0 - this.m_front_0 | 0;
      this.m_front_0 = 0;
      if (this.m_back_0 >= this.m_end_0) {
        return;
      }}ensureNotNull(this.m_buffer_0)[tmp$ = this.m_back_0, this.m_back_0 = tmp$ + 1 | 0, tmp$] = task;
  };
  StackQueue.prototype.pop = function () {
    var tmp$;
    if (!(this.m_front_0 < this.m_back_0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }return ensureNotNull(this.m_buffer_0)[tmp$ = this.m_front_0, this.m_front_0 = tmp$ + 1 | 0, tmp$];
  };
  StackQueue.prototype.empty = function () {
    return this.m_front_0 >= this.m_back_0;
  };
  StackQueue.prototype.front = function () {
    return ensureNotNull(this.m_buffer_0)[this.m_front_0];
  };
  StackQueue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StackQueue',
    interfaces: []
  };
  function VoronoiDiagram(generatorCapacity) {
    var array = Array_0(generatorCapacity);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new VoronoiDiagram$Generator();
    }
    this.m_generatorBuffer_0 = array;
    this.m_generatorCount_0 = 0;
    this.m_countX_0 = 0;
    this.m_countY_0 = 0;
    this.m_diagram_0 = null;
    this.lower_0 = new Vec2();
    this.upper_0 = new Vec2();
    this.taskPool = new VoronoiDiagram$VoronoiDiagramTaskMutableStack();
    this.queue_0 = new StackQueue();
  }
  function VoronoiDiagram$VoronoiDiagramTaskMutableStack() {
    MutableStack.call(this, 50);
  }
  VoronoiDiagram$VoronoiDiagramTaskMutableStack.prototype.newInstance = function () {
    return VoronoiDiagram$VoronoiDiagram$VoronoiDiagramTask_init();
  };
  VoronoiDiagram$VoronoiDiagramTaskMutableStack.prototype.newArray_za3lpa$ = function (size) {
    var tmp$;
    return Kotlin.isArray(tmp$ = Kotlin.newArray(size, null)) ? tmp$ : throwCCE();
  };
  VoronoiDiagram$VoronoiDiagramTaskMutableStack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VoronoiDiagramTaskMutableStack',
    interfaces: [MutableStack]
  };
  function VoronoiDiagram$Generator() {
    this.center_8be2vx$ = new Vec2();
    this.tag_8be2vx$ = 0;
  }
  VoronoiDiagram$Generator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Generator',
    interfaces: []
  };
  function VoronoiDiagram$VoronoiDiagramTask() {
    this.m_x_8be2vx$ = 0;
    this.m_y_8be2vx$ = 0;
    this.m_i_8be2vx$ = 0;
    this.m_generator_8be2vx$ = null;
  }
  VoronoiDiagram$VoronoiDiagramTask.prototype.set_kpzimx$ = function (x, y, i, g) {
    this.m_x_8be2vx$ = x;
    this.m_y_8be2vx$ = y;
    this.m_i_8be2vx$ = i;
    this.m_generator_8be2vx$ = g;
    return this;
  };
  VoronoiDiagram$VoronoiDiagramTask.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VoronoiDiagramTask',
    interfaces: []
  };
  function VoronoiDiagram$VoronoiDiagram$VoronoiDiagramTask_init($this) {
    $this = $this || Object.create(VoronoiDiagram$VoronoiDiagramTask.prototype);
    VoronoiDiagram$VoronoiDiagramTask.call($this);
    return $this;
  }
  function VoronoiDiagram$VoronoiDiagram$VoronoiDiagramTask_init_0(x, y, i, g, $this) {
    $this = $this || Object.create(VoronoiDiagram$VoronoiDiagramTask.prototype);
    VoronoiDiagram$VoronoiDiagramTask.call($this);
    $this.m_x_8be2vx$ = x;
    $this.m_y_8be2vx$ = y;
    $this.m_i_8be2vx$ = i;
    $this.m_generator_8be2vx$ = g;
    return $this;
  }
  function VoronoiDiagram$VoronoiDiagramCallback() {
  }
  VoronoiDiagram$VoronoiDiagramCallback.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'VoronoiDiagramCallback',
    interfaces: []
  };
  VoronoiDiagram.prototype.getNodes_tx8s1w$ = function (callback) {
    var tmp$, tmp$_0;
    tmp$ = this.m_countY_0 - 1 | 0;
    for (var y = 0; y < tmp$; y++) {
      tmp$_0 = this.m_countX_0 - 1 | 0;
      for (var x = 0; x < tmp$_0; x++) {
        var i = x + Kotlin.imul(y, this.m_countX_0) | 0;
        var a = ensureNotNull(this.m_diagram_0)[i];
        var b = ensureNotNull(this.m_diagram_0)[i + 1 | 0];
        var c = ensureNotNull(this.m_diagram_0)[i + this.m_countX_0 | 0];
        var d = ensureNotNull(this.m_diagram_0)[i + 1 + this.m_countX_0 | 0];
        if (b !== c) {
          if (a !== b && a !== c) {
            callback.callback_qt1dr2$(ensureNotNull(a).tag_8be2vx$, ensureNotNull(b).tag_8be2vx$, ensureNotNull(c).tag_8be2vx$);
          }if (d !== b && d !== c) {
            callback.callback_qt1dr2$(ensureNotNull(b).tag_8be2vx$, ensureNotNull(d).tag_8be2vx$, ensureNotNull(c).tag_8be2vx$);
          }}}
    }
  };
  VoronoiDiagram.prototype.addGenerator_tu5csi$ = function (center, tag) {
    var tmp$;
    var g = this.m_generatorBuffer_0[tmp$ = this.m_generatorCount_0, this.m_generatorCount_0 = tmp$ + 1 | 0, tmp$];
    g.center_8be2vx$.x = center.x;
    g.center_8be2vx$.y = center.y;
    g.tag_8be2vx$ = tag;
  };
  VoronoiDiagram.prototype.generate_mx4ult$ = function (radius) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (!(this.m_diagram_0 == null)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }var inverseRadius = 1 / radius;
    this.lower_0.x = kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    this.lower_0.y = kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    this.upper_0.x = -kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    this.upper_0.y = -kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    tmp$ = this.m_generatorCount_0;
    for (var k = 0; k < tmp$; k++) {
      var g = this.m_generatorBuffer_0[k];
      Vec2$Companion_getInstance().minToOut_9ymoeo$(this.lower_0, g.center_8be2vx$, this.lower_0);
      Vec2$Companion_getInstance().maxToOut_9ymoeo$(this.upper_0, g.center_8be2vx$, this.upper_0);
    }
    this.m_countX_0 = 1 + numberToInt(inverseRadius * (this.upper_0.x - this.lower_0.x)) | 0;
    this.m_countY_0 = 1 + numberToInt(inverseRadius * (this.upper_0.y - this.lower_0.y)) | 0;
    this.m_diagram_0 = Kotlin.newArray(Kotlin.imul(this.m_countX_0, this.m_countY_0), null);
    this.queue_0.reset_tfr4nt$(Kotlin.isArray(tmp$_0 = Kotlin.newArray(Kotlin.imul(4 * this.m_countX_0 | 0, this.m_countX_0), null)) ? tmp$_0 : throwCCE());
    tmp$_1 = this.m_generatorCount_0;
    for (var k_0 = 0; k_0 < tmp$_1; k_0++) {
      var g_0 = this.m_generatorBuffer_0[k_0];
      g_0.center_8be2vx$.x = inverseRadius * (g_0.center_8be2vx$.x - this.lower_0.x);
      g_0.center_8be2vx$.y = inverseRadius * (g_0.center_8be2vx$.y - this.lower_0.y);
      var x = MathUtils$Companion_getInstance().max_vux9f0$(0, MathUtils$Companion_getInstance().min_vux9f0$(numberToInt(g_0.center_8be2vx$.x), this.m_countX_0 - 1 | 0));
      var y = MathUtils$Companion_getInstance().max_vux9f0$(0, MathUtils$Companion_getInstance().min_vux9f0$(numberToInt(g_0.center_8be2vx$.y), this.m_countY_0 - 1 | 0));
      this.queue_0.push_11rb$(this.taskPool.pop().set_kpzimx$(x, y, x + Kotlin.imul(y, this.m_countX_0) | 0, g_0));
    }
    while (!this.queue_0.empty()) {
      var front = this.queue_0.pop();
      var x_0 = front.m_x_8be2vx$;
      var y_0 = front.m_y_8be2vx$;
      var i = front.m_i_8be2vx$;
      var g_1 = front.m_generator_8be2vx$;
      if (ensureNotNull(this.m_diagram_0)[i] == null) {
        ensureNotNull(this.m_diagram_0)[i] = ensureNotNull(g_1);
        if (x_0 > 0) {
          this.queue_0.push_11rb$(this.taskPool.pop().set_kpzimx$(x_0 - 1 | 0, y_0, i - 1 | 0, g_1));
        }if (y_0 > 0) {
          this.queue_0.push_11rb$(this.taskPool.pop().set_kpzimx$(x_0, y_0 - 1 | 0, i - this.m_countX_0 | 0, g_1));
        }if (x_0 < (this.m_countX_0 - 1 | 0)) {
          this.queue_0.push_11rb$(this.taskPool.pop().set_kpzimx$(x_0 + 1 | 0, y_0, i + 1 | 0, g_1));
        }if (y_0 < (this.m_countY_0 - 1 | 0)) {
          this.queue_0.push_11rb$(this.taskPool.pop().set_kpzimx$(x_0, y_0 + 1 | 0, i + this.m_countX_0 | 0, g_1));
        }}this.taskPool.push_11rb$(front);
    }
    var maxIteration = this.m_countX_0 + this.m_countY_0 | 0;
    for (var iteration = 0; iteration < maxIteration; iteration++) {
      tmp$_2 = this.m_countY_0;
      for (var y_1 = 0; y_1 < tmp$_2; y_1++) {
        tmp$_3 = this.m_countX_0 - 1 | 0;
        for (var x_1 = 0; x_1 < tmp$_3; x_1++) {
          var i_0 = x_1 + Kotlin.imul(y_1, this.m_countX_0) | 0;
          var a = ensureNotNull(ensureNotNull(this.m_diagram_0)[i_0]);
          var b = ensureNotNull(ensureNotNull(this.m_diagram_0)[i_0 + 1 | 0]);
          if (a !== b) {
            this.queue_0.push_11rb$(this.taskPool.pop().set_kpzimx$(x_1, y_1, i_0, b));
            this.queue_0.push_11rb$(this.taskPool.pop().set_kpzimx$(x_1 + 1 | 0, y_1, i_0 + 1 | 0, a));
          }}
      }
      tmp$_4 = this.m_countY_0 - 1 | 0;
      for (var y_2 = 0; y_2 < tmp$_4; y_2++) {
        tmp$_5 = this.m_countX_0;
        for (var x_2 = 0; x_2 < tmp$_5; x_2++) {
          var i_1 = x_2 + Kotlin.imul(y_2, this.m_countX_0) | 0;
          var a_0 = ensureNotNull(ensureNotNull(this.m_diagram_0)[i_1]);
          var b_0 = ensureNotNull(ensureNotNull(this.m_diagram_0)[i_1 + this.m_countX_0 | 0]);
          if (a_0 !== b_0) {
            this.queue_0.push_11rb$(this.taskPool.pop().set_kpzimx$(x_2, y_2, i_1, b_0));
            this.queue_0.push_11rb$(this.taskPool.pop().set_kpzimx$(x_2, y_2 + 1 | 0, i_1 + this.m_countX_0 | 0, a_0));
          }}
      }
      var updated = false;
      while (!this.queue_0.empty()) {
        var front_0 = this.queue_0.pop();
        var x_3 = front_0.m_x_8be2vx$;
        var y_3 = front_0.m_y_8be2vx$;
        var i_2 = front_0.m_i_8be2vx$;
        var k_1 = front_0.m_generator_8be2vx$;
        var a_1 = ensureNotNull(this.m_diagram_0)[i_2];
        var b_1 = k_1;
        if (a_1 !== b_1) {
          var ax = ensureNotNull(a_1).center_8be2vx$.x - x_3;
          var ay = ensureNotNull(a_1).center_8be2vx$.y - y_3;
          var bx = ensureNotNull(b_1).center_8be2vx$.x - x_3;
          var by = b_1.center_8be2vx$.y - y_3;
          var a2 = ax * ax + ay * ay;
          var b2 = bx * bx + by * by;
          if (a2 > b2) {
            ensureNotNull(this.m_diagram_0)[i_2] = b_1;
            if (x_3 > 0) {
              this.queue_0.push_11rb$(this.taskPool.pop().set_kpzimx$(x_3 - 1 | 0, y_3, i_2 - 1 | 0, b_1));
            }if (y_3 > 0) {
              this.queue_0.push_11rb$(this.taskPool.pop().set_kpzimx$(x_3, y_3 - 1 | 0, i_2 - this.m_countX_0 | 0, b_1));
            }if (x_3 < (this.m_countX_0 - 1 | 0)) {
              this.queue_0.push_11rb$(this.taskPool.pop().set_kpzimx$(x_3 + 1 | 0, y_3, i_2 + 1 | 0, b_1));
            }if (y_3 < (this.m_countY_0 - 1 | 0)) {
              this.queue_0.push_11rb$(this.taskPool.pop().set_kpzimx$(x_3, y_3 + 1 | 0, i_2 + this.m_countX_0 | 0, b_1));
            }updated = true;
          }}this.taskPool.push_11rb$(front_0);
      }
      if (!updated) {
        break;
      }}
  };
  VoronoiDiagram.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VoronoiDiagram',
    interfaces: []
  };
  function IDynamicStack() {
  }
  IDynamicStack.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IDynamicStack',
    interfaces: []
  };
  function IOrderedStack() {
  }
  IOrderedStack.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IOrderedStack',
    interfaces: []
  };
  function IWorldPool() {
  }
  IWorldPool.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IWorldPool',
    interfaces: []
  };
  function FloatArrayPool() {
    this.map_0 = HashMap_init();
  }
  FloatArrayPool.prototype.get_za3lpa$ = function (argLength) {
    if (!(argLength > 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!this.map_0.containsKey_11rb$(argLength)) {
      var $receiver = this.map_0;
      var value = this.getInitializedArray_0(argLength);
      $receiver.put_xwzc9p$(argLength, value);
    }if (!(ensureNotNull(this.map_0.get_11rb$(argLength)).length === argLength)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }return ensureNotNull(this.map_0.get_11rb$(argLength));
  };
  FloatArrayPool.prototype.getInitializedArray_0 = function (argLength) {
    return new Float32Array(argLength);
  };
  FloatArrayPool.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FloatArrayPool',
    interfaces: []
  };
  function GeneratorArrayPool() {
    this.map_0 = HashMap_init();
  }
  GeneratorArrayPool.prototype.get_za3lpa$ = function (length) {
    if (!(length > 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!this.map_0.containsKey_11rb$(length)) {
      var $receiver = this.map_0;
      var value = this.getInitializedArray_0(length);
      $receiver.put_xwzc9p$(length, value);
    }if (!(ensureNotNull(this.map_0.get_11rb$(length)).length === length)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }return ensureNotNull(this.map_0.get_11rb$(length));
  };
  GeneratorArrayPool.prototype.getInitializedArray_0 = function (length) {
    var array = Array_0(length);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new VoronoiDiagram$Generator();
    }
    return array;
  };
  GeneratorArrayPool.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeneratorArrayPool',
    interfaces: []
  };
  function IntArrayPool() {
    this.map_0 = HashMap_init();
  }
  IntArrayPool.prototype.get_za3lpa$ = function (argLength) {
    if (!(argLength > 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!this.map_0.containsKey_11rb$(argLength)) {
      var $receiver = this.map_0;
      var value = this.getInitializedArray_0(argLength);
      $receiver.put_xwzc9p$(argLength, value);
    }if (!(ensureNotNull(this.map_0.get_11rb$(argLength)).length === argLength)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }return ensureNotNull(this.map_0.get_11rb$(argLength));
  };
  IntArrayPool.prototype.getInitializedArray_0 = function (argLength) {
    return new Int32Array(argLength);
  };
  IntArrayPool.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntArrayPool',
    interfaces: []
  };
  function Vec2ArrayPool() {
    this.map_0 = HashMap_init();
  }
  Vec2ArrayPool.prototype.get_za3lpa$ = function (argLength) {
    if (!(argLength > 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!this.map_0.containsKey_11rb$(argLength)) {
      var $receiver = this.map_0;
      var value = this.getInitializedArray_0(argLength);
      $receiver.put_xwzc9p$(argLength, value);
    }if (!(ensureNotNull(this.map_0.get_11rb$(argLength)).length === argLength)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }return ensureNotNull(this.map_0.get_11rb$(argLength));
  };
  Vec2ArrayPool.prototype.getInitializedArray_0 = function (argLength) {
    var array = Array_0(argLength);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Vec2();
    }
    return array;
  };
  Vec2ArrayPool.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vec2ArrayPool',
    interfaces: []
  };
  var arraycopy$lambda_10 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function CircleStack(size, argContainerSize) {
    this.size_i71kol$_0 = size;
    var array = Array_0(this.size_i71kol$_0);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var tmp$_0;
      array[i] = Kotlin.isType(tmp$_0 = this.newInstance(), Any) ? tmp$_0 : throwCCE();
    }
    this.pool_i5hsu2$_0 = array;
    this.index_8umvsk$_0 = 0;
    var array_0 = Array_0(argContainerSize);
    var tmp$_1;
    tmp$_1 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_1; i_0++) {
      array_0[i_0] = Unit;
    }
    this.container_a4depp$_0 = array_0;
  }
  CircleStack.prototype.pop = function () {
    var tmp$;
    this.index_8umvsk$_0 = this.index_8umvsk$_0 + 1 | 0;
    if (this.index_8umvsk$_0 >= this.size_i71kol$_0) {
      this.index_8umvsk$_0 = 0;
    }return (tmp$ = this.pool_i5hsu2$_0[this.index_8umvsk$_0]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  CircleStack.prototype.pop_za3lpa$ = function (argNum) {
    var tmp$;
    if (!(argNum <= this.container_a4depp$_0.length)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if ((this.index_8umvsk$_0 + argNum | 0) < this.size_i71kol$_0) {
      var srcPos = this.index_8umvsk$_0;
      arrayCopy(this.pool_i5hsu2$_0, this.container_a4depp$_0, 0, srcPos, srcPos + argNum | 0);
      this.index_8umvsk$_0 = this.index_8umvsk$_0 + argNum | 0;
    } else {
      var overlap = this.index_8umvsk$_0 + argNum - this.size_i71kol$_0 | 0;
      var srcPos_0 = this.index_8umvsk$_0;
      arrayCopy(this.pool_i5hsu2$_0, this.container_a4depp$_0, 0, srcPos_0, srcPos_0 + (argNum - overlap | 0) | 0);
      arrayCopy(this.pool_i5hsu2$_0, this.container_a4depp$_0, argNum - overlap | 0, 0, 0 + overlap | 0);
      this.index_8umvsk$_0 = overlap;
    }
    return Kotlin.isArray(tmp$ = this.container_a4depp$_0) ? tmp$ : throwCCE();
  };
  CircleStack.prototype.push_za3lpa$ = function (argNum) {
  };
  CircleStack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CircleStack',
    interfaces: [IOrderedStack]
  };
  function DefaultWorldPool(argSize, argContainerSize) {
    this.world_0 = this;
    this.vecs_0 = new LambdaOrderedStack(argSize, argContainerSize, DefaultWorldPool$vecs$lambda);
    this.vec3s_0 = new LambdaOrderedStack(argSize, argContainerSize, DefaultWorldPool$vec3s$lambda);
    this.mats_0 = new LambdaOrderedStack(argSize, argContainerSize, DefaultWorldPool$mats$lambda);
    this.mat33s_0 = new LambdaOrderedStack(argSize, argContainerSize, DefaultWorldPool$mat33s$lambda);
    this.aabbs_0 = new LambdaOrderedStack(argSize, argContainerSize, DefaultWorldPool$aabbs$lambda);
    this.rots_0 = new LambdaOrderedStack(argSize, argContainerSize, DefaultWorldPool$rots$lambda);
    this.afloats_0 = HashMap_init();
    this.aints_0 = HashMap_init();
    this.avecs_0 = HashMap_init();
    this.pcstack_0 = new ContactMutableStack(DefaultWorldPool$pcstack$lambda(this), DefaultWorldPool$pcstack$lambda_0);
    this.ccstack_0 = new ContactMutableStack(DefaultWorldPool$ccstack$lambda(this), DefaultWorldPool$ccstack$lambda_0);
    this.cpstack_0 = new ContactMutableStack(DefaultWorldPool$cpstack$lambda(this), DefaultWorldPool$cpstack$lambda_0);
    this.ecstack_0 = new ContactMutableStack(DefaultWorldPool$ecstack$lambda(this), DefaultWorldPool$ecstack$lambda_0);
    this.epstack_0 = new ContactMutableStack(DefaultWorldPool$epstack$lambda(this), DefaultWorldPool$epstack$lambda_0);
    this.chcstack_0 = new ContactMutableStack(DefaultWorldPool$chcstack$lambda(this), DefaultWorldPool$chcstack$lambda_0);
    this.chpstack_0 = new ContactMutableStack(DefaultWorldPool$chpstack$lambda(this), DefaultWorldPool$chpstack$lambda_0);
    this.collision_urbynv$_0 = new Collision(this);
    this.timeOfImpact_l92665$_0 = new TimeOfImpact(this);
    this.distance_q0cihe$_0 = new Distance();
  }
  Object.defineProperty(DefaultWorldPool.prototype, 'collision', {
    get: function () {
      return this.collision_urbynv$_0;
    }
  });
  Object.defineProperty(DefaultWorldPool.prototype, 'timeOfImpact', {
    get: function () {
      return this.timeOfImpact_l92665$_0;
    }
  });
  Object.defineProperty(DefaultWorldPool.prototype, 'distance', {
    get: function () {
      return this.distance_q0cihe$_0;
    }
  });
  Object.defineProperty(DefaultWorldPool.prototype, 'polyContactStack', {
    get: function () {
      return this.pcstack_0;
    }
  });
  Object.defineProperty(DefaultWorldPool.prototype, 'circleContactStack', {
    get: function () {
      return this.ccstack_0;
    }
  });
  Object.defineProperty(DefaultWorldPool.prototype, 'polyCircleContactStack', {
    get: function () {
      return this.cpstack_0;
    }
  });
  Object.defineProperty(DefaultWorldPool.prototype, 'edgeCircleContactStack', {
    get: function () {
      return this.ecstack_0;
    }
  });
  Object.defineProperty(DefaultWorldPool.prototype, 'edgePolyContactStack', {
    get: function () {
      return this.epstack_0;
    }
  });
  Object.defineProperty(DefaultWorldPool.prototype, 'chainCircleContactStack', {
    get: function () {
      return this.chcstack_0;
    }
  });
  Object.defineProperty(DefaultWorldPool.prototype, 'chainPolyContactStack', {
    get: function () {
      return this.chpstack_0;
    }
  });
  DefaultWorldPool.prototype.popVec2 = function () {
    return this.vecs_0.pop();
  };
  DefaultWorldPool.prototype.popVec2_za3lpa$ = function (argNum) {
    return this.vecs_0.pop_za3lpa$(argNum);
  };
  DefaultWorldPool.prototype.pushVec2_za3lpa$ = function (argNum) {
    this.vecs_0.push_za3lpa$(argNum);
  };
  DefaultWorldPool.prototype.popVec3 = function () {
    return this.vec3s_0.pop();
  };
  DefaultWorldPool.prototype.popVec3_za3lpa$ = function (argNum) {
    return this.vec3s_0.pop_za3lpa$(argNum);
  };
  DefaultWorldPool.prototype.pushVec3_za3lpa$ = function (argNum) {
    this.vec3s_0.push_za3lpa$(argNum);
  };
  DefaultWorldPool.prototype.popMat22 = function () {
    return this.mats_0.pop();
  };
  DefaultWorldPool.prototype.popMat22_za3lpa$ = function (argNum) {
    return this.mats_0.pop_za3lpa$(argNum);
  };
  DefaultWorldPool.prototype.pushMat22_za3lpa$ = function (argNum) {
    this.mats_0.push_za3lpa$(argNum);
  };
  DefaultWorldPool.prototype.popMat33 = function () {
    return this.mat33s_0.pop();
  };
  DefaultWorldPool.prototype.pushMat33_za3lpa$ = function (argNum) {
    this.mat33s_0.push_za3lpa$(argNum);
  };
  DefaultWorldPool.prototype.popAABB = function () {
    return this.aabbs_0.pop();
  };
  DefaultWorldPool.prototype.popAABB_za3lpa$ = function (argNum) {
    return this.aabbs_0.pop_za3lpa$(argNum);
  };
  DefaultWorldPool.prototype.pushAABB_za3lpa$ = function (argNum) {
    this.aabbs_0.push_za3lpa$(argNum);
  };
  DefaultWorldPool.prototype.popRot = function () {
    return this.rots_0.pop();
  };
  DefaultWorldPool.prototype.pushRot_za3lpa$ = function (num) {
    this.rots_0.push_za3lpa$(num);
  };
  DefaultWorldPool.prototype.getFloatArray_za3lpa$ = function (argLength) {
    if (!this.afloats_0.containsKey_11rb$(argLength)) {
      var $receiver = this.afloats_0;
      var value = new Float32Array(argLength);
      $receiver.put_xwzc9p$(argLength, value);
    }if (!(ensureNotNull(this.afloats_0.get_11rb$(argLength)).length === argLength)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }return ensureNotNull(this.afloats_0.get_11rb$(argLength));
  };
  DefaultWorldPool.prototype.getIntArray_za3lpa$ = function (argLength) {
    if (!this.aints_0.containsKey_11rb$(argLength)) {
      var $receiver = this.aints_0;
      var value = new Int32Array(argLength);
      $receiver.put_xwzc9p$(argLength, value);
    }if (!(ensureNotNull(this.aints_0.get_11rb$(argLength)).length === argLength)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }return ensureNotNull(this.aints_0.get_11rb$(argLength));
  };
  DefaultWorldPool.prototype.getVec2Array_za3lpa$ = function (argLength) {
    if (!this.avecs_0.containsKey_11rb$(argLength)) {
      var tmp$ = this.avecs_0;
      var array = Array_0(argLength);
      var tmp$_0;
      tmp$_0 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_0; i++) {
        array[i] = new Vec2();
      }
      tmp$.put_xwzc9p$(argLength, array);
    }if (!(ensureNotNull(this.avecs_0.get_11rb$(argLength)).length === argLength)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }return ensureNotNull(this.avecs_0.get_11rb$(argLength));
  };
  function DefaultWorldPool$vecs$lambda() {
    return new Vec2();
  }
  function DefaultWorldPool$vec3s$lambda() {
    return new Vec3();
  }
  function DefaultWorldPool$mats$lambda() {
    return Mat22_init();
  }
  function DefaultWorldPool$mat33s$lambda() {
    return Mat33_init();
  }
  function DefaultWorldPool$aabbs$lambda() {
    return AABB_init();
  }
  function DefaultWorldPool$rots$lambda() {
    return Rot_init();
  }
  function DefaultWorldPool$pcstack$lambda(this$DefaultWorldPool) {
    return function () {
      return new PolygonContact(this$DefaultWorldPool.world_0);
    };
  }
  function DefaultWorldPool$pcstack$lambda_0(it) {
    return Kotlin.newArray(it, null);
  }
  function DefaultWorldPool$ccstack$lambda(this$DefaultWorldPool) {
    return function () {
      return new CircleContact(this$DefaultWorldPool.world_0);
    };
  }
  function DefaultWorldPool$ccstack$lambda_0(it) {
    return Kotlin.newArray(it, null);
  }
  function DefaultWorldPool$cpstack$lambda(this$DefaultWorldPool) {
    return function () {
      return new PolygonAndCircleContact(this$DefaultWorldPool.world_0);
    };
  }
  function DefaultWorldPool$cpstack$lambda_0(it) {
    return Kotlin.newArray(it, null);
  }
  function DefaultWorldPool$ecstack$lambda(this$DefaultWorldPool) {
    return function () {
      return new EdgeAndCircleContact(this$DefaultWorldPool.world_0);
    };
  }
  function DefaultWorldPool$ecstack$lambda_0(it) {
    return Kotlin.newArray(it, null);
  }
  function DefaultWorldPool$epstack$lambda(this$DefaultWorldPool) {
    return function () {
      return new EdgeAndPolygonContact(this$DefaultWorldPool.world_0);
    };
  }
  function DefaultWorldPool$epstack$lambda_0(it) {
    return Kotlin.newArray(it, null);
  }
  function DefaultWorldPool$chcstack$lambda(this$DefaultWorldPool) {
    return function () {
      return new ChainAndCircleContact(this$DefaultWorldPool.world_0);
    };
  }
  function DefaultWorldPool$chcstack$lambda_0(it) {
    return Kotlin.newArray(it, null);
  }
  function DefaultWorldPool$chpstack$lambda(this$DefaultWorldPool) {
    return function () {
      return new ChainAndPolygonContact(this$DefaultWorldPool.world_0);
    };
  }
  function DefaultWorldPool$chpstack$lambda_0(it) {
    return Kotlin.newArray(it, null);
  }
  DefaultWorldPool.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultWorldPool',
    interfaces: [IWorldPool]
  };
  function LambdaOrderedStack(argSize, argContainerSize, newInstanceLambda) {
    OrderedStack.call(this, argSize, argContainerSize);
    this.newInstanceLambda = newInstanceLambda;
  }
  LambdaOrderedStack.prototype.newInstance = function () {
    return this.newInstanceLambda();
  };
  LambdaOrderedStack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LambdaOrderedStack',
    interfaces: [OrderedStack]
  };
  function ContactMutableStack(newInstanceLambda, newArrayLambda) {
    MutableStack.call(this, Settings_getInstance().CONTACT_STACK_INIT_SIZE);
    this.newInstanceLambda_0 = newInstanceLambda;
    this.newArrayLambda = newArrayLambda;
  }
  ContactMutableStack.prototype.newInstance = function () {
    return this.newInstanceLambda_0();
  };
  ContactMutableStack.prototype.newArray_za3lpa$ = function (size) {
    var tmp$;
    return Kotlin.isArray(tmp$ = this.newArrayLambda(size)) ? tmp$ : throwCCE();
  };
  ContactMutableStack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContactMutableStack',
    interfaces: [MutableStack]
  };
  var arraycopy$lambda_11 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function MutableStack(argInitSize) {
    this.argInitSize_37gehd$_0 = argInitSize;
    this.stack_dwtaeo$_0 = null;
    this.index_iqib5m$_0 = 0;
    this.size_r1ii4b$_0 = 0;
  }
  MutableStack.prototype.ensureInit_3x4rgy$_0 = function () {
    if (this.stack_dwtaeo$_0 == null) {
      this.extendStack_2jl54c$_0(this.argInitSize_37gehd$_0);
    }};
  MutableStack.prototype.extendStack_2jl54c$_0 = function (argSize) {
    var newStack = this.newArray_za3lpa$(argSize);
    if (this.stack_dwtaeo$_0 != null) {
      arrayCopy(ensureNotNull(this.stack_dwtaeo$_0), newStack, 0, 0, 0 + this.size_r1ii4b$_0 | 0);
    }for (var i = 0; i !== newStack.length; ++i) {
      newStack[i] = this.newInstance();
    }
    this.stack_dwtaeo$_0 = newStack;
    this.size_r1ii4b$_0 = newStack.length;
  };
  MutableStack.prototype.pop = function () {
    var tmp$;
    this.ensureInit_3x4rgy$_0();
    if (this.index_iqib5m$_0 >= this.size_r1ii4b$_0) {
      this.extendStack_2jl54c$_0(this.size_r1ii4b$_0 * 2 | 0);
    }return ensureNotNull(this.stack_dwtaeo$_0)[tmp$ = this.index_iqib5m$_0, this.index_iqib5m$_0 = tmp$ + 1 | 0, tmp$];
  };
  MutableStack.prototype.push_11rb$ = function (argObject) {
    this.ensureInit_3x4rgy$_0();
    if (!(this.index_iqib5m$_0 > 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }ensureNotNull(this.stack_dwtaeo$_0)[this.index_iqib5m$_0 = this.index_iqib5m$_0 - 1 | 0, this.index_iqib5m$_0] = argObject;
  };
  MutableStack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MutableStack',
    interfaces: [IDynamicStack]
  };
  var arraycopy$lambda_12 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function OrderedStack(size, argContainerSize) {
    this.size_b8gz8s$_0 = size;
    this.pool_ba0r3b$_minucc$_0 = lazy(OrderedStack$pool$lambda(this));
    this.index_26uo5p$_0 = 0;
    var array = Array_0(argContainerSize);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = Unit;
    }
    this.container_9bqa2q$_0 = array;
  }
  Object.defineProperty(OrderedStack.prototype, 'pool_ba0r3b$_0', {
    get: function () {
      return this.pool_ba0r3b$_minucc$_0.value;
    }
  });
  OrderedStack.prototype.pop = function () {
    var tmp$, tmp$_0;
    if (!(this.index_26uo5p$_0 < this.size_b8gz8s$_0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }return (tmp$_0 = this.pool_ba0r3b$_0[tmp$ = this.index_26uo5p$_0, this.index_26uo5p$_0 = tmp$ + 1 | 0, tmp$]) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  OrderedStack.prototype.pop_za3lpa$ = function (argNum) {
    var tmp$;
    if (!((this.index_26uo5p$_0 + argNum | 0) < this.size_b8gz8s$_0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }if (!(argNum <= this.container_9bqa2q$_0.length)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }var srcPos = this.index_26uo5p$_0;
    arrayCopy(this.pool_ba0r3b$_0, this.container_9bqa2q$_0, 0, srcPos, srcPos + argNum | 0);
    this.index_26uo5p$_0 = this.index_26uo5p$_0 + argNum | 0;
    return Kotlin.isArray(tmp$ = this.container_9bqa2q$_0) ? tmp$ : throwCCE();
  };
  OrderedStack.prototype.push_za3lpa$ = function (argNum) {
    this.index_26uo5p$_0 = this.index_26uo5p$_0 - argNum | 0;
    if (!(this.index_26uo5p$_0 >= 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }};
  function OrderedStack$pool$lambda(this$OrderedStack) {
    return function () {
      var size = this$OrderedStack.size_b8gz8s$_0;
      var array = Array_0(size);
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        var tmp$_0;
        array[i] = Kotlin.isType(tmp$_0 = this$OrderedStack.newInstance(), Any) ? tmp$_0 : throwCCE();
      }
      return array;
    };
  }
  OrderedStack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OrderedStack',
    interfaces: []
  };
  var arraycopy$lambda_13 = wrapFunction(function () {
    var arrayCopy = Kotlin.kotlin.collections.arrayCopy;
    return function (closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$size) {
      return function () {
        arrayCopy(closure$src, closure$dst, closure$dstPos, closure$srcPos, closure$srcPos + closure$size | 0);
        return Unit;
      };
    };
  });
  function DynamicIntStack(size) {
    this.size_0 = size;
    this.stack_0 = null;
    this.count_jo2sdx$_0 = 0;
    this.stack_0 = new Int32Array(this.size_0);
    this.count = 0;
  }
  Object.defineProperty(DynamicIntStack.prototype, 'count', {
    get: function () {
      return this.count_jo2sdx$_0;
    },
    set: function (count) {
      this.count_jo2sdx$_0 = count;
    }
  });
  DynamicIntStack.prototype.reset = function () {
    this.count = 0;
  };
  DynamicIntStack.prototype.pop = function () {
    if (!(this.count > 0)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }return ensureNotNull(this.stack_0)[this.count = this.count - 1 | 0, this.count];
  };
  DynamicIntStack.prototype.push_za3lpa$ = function (i) {
    var tmp$;
    if (this.count === this.size_0) {
      var old = this.stack_0;
      this.stack_0 = new Int32Array(this.size_0 * 2 | 0);
      this.size_0 = ensureNotNull(this.stack_0).length;
      arrayCopy(ensureNotNull(old), ensureNotNull(this.stack_0), 0, 0, 0 + old.length | 0);
    }ensureNotNull(this.stack_0)[tmp$ = this.count, this.count = tmp$ + 1 | 0, tmp$] = i;
  };
  DynamicIntStack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicIntStack',
    interfaces: []
  };
  function Box2dTypedUserData() {
  }
  function Box2dTypedUserData$Key() {
  }
  Box2dTypedUserData$Key.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Key',
    interfaces: []
  };
  function Box2dTypedUserData$Mixin() {
    this.typedUserData_0 = null;
  }
  Box2dTypedUserData$Mixin.prototype.contains_d2xgsj$ = function (key) {
    var tmp$;
    return ((tmp$ = this.typedUserData_0) != null ? tmp$.containsKey_11rb$(key) : null) === true;
  };
  Box2dTypedUserData$Mixin.prototype.get_d2xgsj$ = function (key) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.typedUserData_0) != null ? tmp$.get_11rb$(key) : null) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  Box2dTypedUserData$Mixin.prototype.set_kj97s6$ = function (key, value) {
    var tmp$, tmp$_0;
    if (value != null) {
      if (this.typedUserData_0 == null)
        this.typedUserData_0 = LinkedHashMap_init();
      if ((tmp$ = this.typedUserData_0) != null) {
        tmp$.put_xwzc9p$(key, value);
      }} else {
      (tmp$_0 = this.typedUserData_0) != null ? tmp$_0.remove_11rb$(key) : null;
    }
  };
  Box2dTypedUserData$Mixin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mixin',
    interfaces: [Box2dTypedUserData]
  };
  Box2dTypedUserData.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Box2dTypedUserData',
    interfaces: []
  };
  function System_nanoTime() {
    return Kotlin.Long.fromNumber(Date.now()).multiply(L1000000);
  }
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$kbox2d = package$soywiz.kbox2d || (package$soywiz.kbox2d = {});
  var package$internal = package$kbox2d.internal || (package$kbox2d.internal = {});
  Object.defineProperty(package$internal, 'KBOX2D_VERSION_8be2vx$', {
    get: function () {
      return KBOX2D_VERSION;
    }
  });
  var package$org = _.org || (_.org = {});
  var package$jbox2d = package$org.jbox2d || (package$org.jbox2d = {});
  Object.defineProperty(package$jbox2d, 'KBox2d', {
    get: KBox2d_getInstance
  });
  var package$callbacks = package$jbox2d.callbacks || (package$jbox2d.callbacks = {});
  package$callbacks.ContactFilter = ContactFilter;
  package$callbacks.ContactImpulse = ContactImpulse;
  package$callbacks.ContactListener = ContactListener;
  Object.defineProperty(DebugDraw, 'Companion', {
    get: DebugDraw$Companion_getInstance
  });
  package$callbacks.DebugDraw = DebugDraw;
  package$callbacks.DestructionListener = DestructionListener;
  package$callbacks.PairCallback = PairCallback;
  package$callbacks.ParticleDestructionListener = ParticleDestructionListener;
  package$callbacks.ParticleQueryCallback = ParticleQueryCallback;
  package$callbacks.ParticleRaycastCallback = ParticleRaycastCallback;
  package$callbacks.QueryCallback = QueryCallback;
  package$callbacks.RayCastCallback = RayCastCallback;
  package$callbacks.TreeCallback = TreeCallback;
  package$callbacks.TreeRayCastCallback = TreeRayCastCallback;
  Object.defineProperty(AABB, 'Companion', {
    get: AABB$Companion_getInstance
  });
  var package$collision = package$jbox2d.collision || (package$jbox2d.collision = {});
  package$collision.AABB_init = AABB_init;
  package$collision.AABB_init_lvg3qr$ = AABB_init_0;
  package$collision.AABB_init_xjacks$ = AABB_init_1;
  package$collision.AABB = AABB;
  $$importsForInline$$['kbox2d-root-kbox2d'] = _;
  Collision.EdgeResults = Collision$EdgeResults;
  Collision.ClipVertex = Collision$ClipVertex;
  Object.defineProperty(Collision$PointState, 'NULL_STATE', {
    get: Collision$PointState$NULL_STATE_getInstance
  });
  Object.defineProperty(Collision$PointState, 'ADD_STATE', {
    get: Collision$PointState$ADD_STATE_getInstance
  });
  Object.defineProperty(Collision$PointState, 'PERSIST_STATE', {
    get: Collision$PointState$PERSIST_STATE_getInstance
  });
  Object.defineProperty(Collision$PointState, 'REMOVE_STATE', {
    get: Collision$PointState$REMOVE_STATE_getInstance
  });
  Collision.PointState = Collision$PointState;
  Object.defineProperty(Collision$EPAxis$Type, 'UNKNOWN', {
    get: Collision$EPAxis$Type$UNKNOWN_getInstance
  });
  Object.defineProperty(Collision$EPAxis$Type, 'EDGE_A', {
    get: Collision$EPAxis$Type$EDGE_A_getInstance
  });
  Object.defineProperty(Collision$EPAxis$Type, 'EDGE_B', {
    get: Collision$EPAxis$Type$EDGE_B_getInstance
  });
  Collision$EPAxis.Type = Collision$EPAxis$Type;
  Collision.EPAxis = Collision$EPAxis;
  Collision.TempPolygon = Collision$TempPolygon;
  Collision.ReferenceFace = Collision$ReferenceFace;
  Object.defineProperty(Collision$EPCollider$VertexType, 'ISOLATED', {
    get: Collision$EPCollider$VertexType$ISOLATED_getInstance
  });
  Object.defineProperty(Collision$EPCollider$VertexType, 'CONCAVE', {
    get: Collision$EPCollider$VertexType$CONCAVE_getInstance
  });
  Object.defineProperty(Collision$EPCollider$VertexType, 'CONVEX', {
    get: Collision$EPCollider$VertexType$CONVEX_getInstance
  });
  Collision$EPCollider.VertexType = Collision$EPCollider$VertexType;
  Collision.EPCollider = Collision$EPCollider;
  Object.defineProperty(Collision, 'Companion', {
    get: Collision$Companion_getInstance
  });
  package$collision.Collision = Collision;
  Object.defineProperty(ContactID$Type, 'VERTEX', {
    get: ContactID$Type$VERTEX_getInstance
  });
  Object.defineProperty(ContactID$Type, 'FACE', {
    get: ContactID$Type$FACE_getInstance
  });
  ContactID.Type = ContactID$Type;
  package$collision.ContactID_init = ContactID_init;
  package$collision.ContactID_init_ejcfhu$ = ContactID_init_0;
  package$collision.ContactID = ContactID;
  Distance.SimplexCache = Distance$SimplexCache;
  Distance.DistanceProxy = Distance$DistanceProxy;
  Object.defineProperty(Distance, 'Companion', {
    get: Distance$Companion_getInstance
  });
  Distance.Stats = Distance$Stats;
  package$collision.Distance = Distance;
  package$collision.DistanceInput = DistanceInput;
  package$collision.DistanceOutput = DistanceOutput;
  Object.defineProperty(Manifold$ManifoldType, 'CIRCLES', {
    get: Manifold$ManifoldType$CIRCLES_getInstance
  });
  Object.defineProperty(Manifold$ManifoldType, 'FACE_A', {
    get: Manifold$ManifoldType$FACE_A_getInstance
  });
  Object.defineProperty(Manifold$ManifoldType, 'FACE_B', {
    get: Manifold$ManifoldType$FACE_B_getInstance
  });
  Manifold.ManifoldType = Manifold$ManifoldType;
  package$collision.Manifold_init = Manifold_init;
  package$collision.Manifold_init_6hrjtp$ = Manifold_init_0;
  package$collision.Manifold = Manifold;
  package$collision.ManifoldPoint_init = ManifoldPoint_init;
  package$collision.ManifoldPoint_init_zaruk3$ = ManifoldPoint_init_0;
  package$collision.ManifoldPoint = ManifoldPoint;
  package$collision.RayCastInput = RayCastInput;
  package$collision.RayCastOutput = RayCastOutput;
  TimeOfImpact.TOIInput = TimeOfImpact$TOIInput;
  Object.defineProperty(TimeOfImpact$TOIOutputState, 'UNKNOWN', {
    get: TimeOfImpact$TOIOutputState$UNKNOWN_getInstance
  });
  Object.defineProperty(TimeOfImpact$TOIOutputState, 'FAILED', {
    get: TimeOfImpact$TOIOutputState$FAILED_getInstance
  });
  Object.defineProperty(TimeOfImpact$TOIOutputState, 'OVERLAPPED', {
    get: TimeOfImpact$TOIOutputState$OVERLAPPED_getInstance
  });
  Object.defineProperty(TimeOfImpact$TOIOutputState, 'TOUCHING', {
    get: TimeOfImpact$TOIOutputState$TOUCHING_getInstance
  });
  Object.defineProperty(TimeOfImpact$TOIOutputState, 'SEPARATED', {
    get: TimeOfImpact$TOIOutputState$SEPARATED_getInstance
  });
  TimeOfImpact.TOIOutputState = TimeOfImpact$TOIOutputState;
  TimeOfImpact.TOIOutput = TimeOfImpact$TOIOutput;
  Object.defineProperty(TimeOfImpact, 'Companion', {
    get: TimeOfImpact$Companion_getInstance
  });
  TimeOfImpact.Stats = TimeOfImpact$Stats;
  package$collision.TimeOfImpact = TimeOfImpact;
  Object.defineProperty(Type, 'POINTS', {
    get: Type$POINTS_getInstance
  });
  Object.defineProperty(Type, 'FACE_A', {
    get: Type$FACE_A_getInstance
  });
  Object.defineProperty(Type, 'FACE_B', {
    get: Type$FACE_B_getInstance
  });
  package$collision.Type = Type;
  package$collision.SeparationFunction = SeparationFunction;
  package$collision.WorldManifold = WorldManifold;
  Object.defineProperty(BroadPhase, 'Companion', {
    get: BroadPhase$Companion_getInstance
  });
  var package$broadphase = package$collision.broadphase || (package$collision.broadphase = {});
  package$broadphase.BroadPhase = BroadPhase;
  package$broadphase.BroadPhaseStrategy = BroadPhaseStrategy;
  package$broadphase.DefaultBroadPhaseBuffer = DefaultBroadPhaseBuffer;
  Object.defineProperty(DynamicTree, 'Companion', {
    get: DynamicTree$Companion_getInstance
  });
  package$broadphase.DynamicTree = DynamicTree;
  Object.defineProperty(DynamicTreeFlatNodes, 'Companion', {
    get: DynamicTreeFlatNodes$Companion_getInstance
  });
  package$broadphase.DynamicTreeFlatNodes = DynamicTreeFlatNodes;
  package$broadphase.DynamicTreeNode = DynamicTreeNode;
  package$broadphase.Pair = Pair;
  var package$shapes = package$collision.shapes || (package$collision.shapes = {});
  package$shapes.ChainShape = ChainShape;
  Object.defineProperty(CircleShape, 'Companion', {
    get: CircleShape$Companion_getInstance
  });
  package$shapes.CircleShape = CircleShape;
  package$shapes.EdgeShape = EdgeShape;
  package$shapes.MassData_init = MassData_init;
  package$shapes.MassData_init_jo33oz$ = MassData_init_0;
  package$shapes.MassData = MassData;
  Object.defineProperty(PolygonShape, 'Companion', {
    get: PolygonShape$Companion_getInstance
  });
  package$shapes.PolygonShape = PolygonShape;
  package$shapes.Shape = Shape;
  Object.defineProperty(ShapeType, 'CIRCLE', {
    get: ShapeType$CIRCLE_getInstance
  });
  Object.defineProperty(ShapeType, 'EDGE', {
    get: ShapeType$EDGE_getInstance
  });
  Object.defineProperty(ShapeType, 'POLYGON', {
    get: ShapeType$POLYGON_getInstance
  });
  Object.defineProperty(ShapeType, 'CHAIN', {
    get: ShapeType$CHAIN_getInstance
  });
  package$shapes.ShapeType = ShapeType;
  var package$common = package$jbox2d.common || (package$jbox2d.common = {});
  Object.defineProperty(package$common, 'BufferUtils', {
    get: BufferUtils_getInstance
  });
  Object.defineProperty(Color3f, 'Companion', {
    get: Color3f$Companion_getInstance
  });
  package$common.Color3f_init = Color3f_init;
  package$common.Color3f_init_y2kzbl$ = Color3f_init_0;
  package$common.Color3f = Color3f;
  package$common.IViewportTransform = IViewportTransform;
  Object.defineProperty(Mat22, 'Companion', {
    get: Mat22$Companion_getInstance
  });
  package$common.Mat22_init = Mat22_init;
  package$common.Mat22_init_xjacks$ = Mat22_init_0;
  package$common.Mat22_init_7b5o5w$ = Mat22_init_1;
  package$common.Mat22 = Mat22;
  Object.defineProperty(Mat33, 'Companion', {
    get: Mat33$Companion_getInstance
  });
  package$common.Mat33_init = Mat33_init;
  package$common.Mat33_init_b32tf5$ = Mat33_init_0;
  package$common.Mat33_init_tkxhov$ = Mat33_init_1;
  package$common.Mat33 = Mat33;
  Object.defineProperty(MathUtils, 'Companion', {
    get: MathUtils$Companion_getInstance
  });
  package$common.MathUtils = MathUtils;
  OBBViewportTransform.OBB = OBBViewportTransform$OBB;
  package$common.OBBViewportTransform = OBBViewportTransform;
  Object.defineProperty(PlatformMathUtils, 'Companion', {
    get: PlatformMathUtils$Companion_getInstance
  });
  package$common.PlatformMathUtils = PlatformMathUtils;
  package$common.RaycastResult = RaycastResult;
  Object.defineProperty(Rot, 'Companion', {
    get: Rot$Companion_getInstance
  });
  package$common.Rot_init = Rot_init;
  package$common.Rot_init_mx4ult$ = Rot_init_0;
  package$common.Rot = Rot;
  Object.defineProperty(package$common, 'Settings', {
    get: Settings_getInstance
  });
  package$common.Sweep = Sweep;
  package$common.Timer = Timer;
  Object.defineProperty(Transform, 'Companion', {
    get: Transform$Companion_getInstance
  });
  package$common.Transform_init = Transform_init;
  package$common.Transform_init_m97ft2$ = Transform_init_0;
  package$common.Transform_init_x5rmyx$ = Transform_init_1;
  package$common.Transform = Transform;
  Object.defineProperty(Vec2, 'Companion', {
    get: Vec2$Companion_getInstance
  });
  package$common.Vec2_init_z1lo5s$ = Vec2_init;
  package$common.Vec2 = Vec2;
  Object.defineProperty(Vec3, 'Companion', {
    get: Vec3$Companion_getInstance
  });
  package$common.Vec3_init_z1lo5t$ = Vec3_init;
  package$common.Vec3 = Vec3;
  Object.defineProperty(Body, 'Companion', {
    get: Body$Companion_getInstance
  });
  var package$dynamics = package$jbox2d.dynamics || (package$jbox2d.dynamics = {});
  package$dynamics.Body = Body;
  package$dynamics.BodyDef = BodyDef;
  package$dynamics.forEachFixture_t7c22d$ = forEachFixture;
  Object.defineProperty(BodyType, 'STATIC', {
    get: BodyType$STATIC_getInstance
  });
  Object.defineProperty(BodyType, 'KINEMATIC', {
    get: BodyType$KINEMATIC_getInstance
  });
  Object.defineProperty(BodyType, 'DYNAMIC', {
    get: BodyType$DYNAMIC_getInstance
  });
  package$dynamics.BodyType = BodyType;
  package$dynamics.ContactManager = ContactManager;
  package$dynamics.Filter = Filter;
  package$dynamics.Fixture = Fixture;
  package$dynamics.FixtureDef = FixtureDef;
  package$dynamics.FixtureProxy = FixtureProxy;
  package$dynamics.Island = Island;
  Profile.ProfileEntry = Profile$ProfileEntry;
  Object.defineProperty(Profile, 'Companion', {
    get: Profile$Companion_getInstance
  });
  package$dynamics.Profile = Profile;
  package$dynamics.SolverData = SolverData;
  package$dynamics.TimeStep = TimeStep;
  Object.defineProperty(World, 'Companion', {
    get: World$Companion_getInstance
  });
  package$dynamics.World_init_vv9y7y$ = World_init;
  package$dynamics.World = World;
  package$dynamics.WorldQueryWrapper = WorldQueryWrapper;
  package$dynamics.WorldRayCastWrapper = WorldRayCastWrapper;
  package$dynamics.WorldRef = WorldRef;
  package$dynamics.forEachBody_5y2dax$ = forEachBody;
  package$dynamics.forEachJoint_5lmoxw$ = forEachJoint;
  var package$contacts = package$dynamics.contacts || (package$dynamics.contacts = {});
  package$contacts.ChainAndCircleContact = ChainAndCircleContact;
  package$contacts.ChainAndPolygonContact = ChainAndPolygonContact;
  package$contacts.CircleContact = CircleContact;
  Object.defineProperty(Contact, 'Companion', {
    get: Contact$Companion_getInstance
  });
  package$contacts.Contact = Contact;
  package$contacts.ContactCreator = ContactCreator;
  package$contacts.ContactEdge = ContactEdge;
  package$contacts.ContactPositionConstraint = ContactPositionConstraint;
  package$contacts.ContactRegister = ContactRegister;
  ContactSolver.ContactSolverDef = ContactSolver$ContactSolverDef;
  Object.defineProperty(ContactSolver, 'Companion', {
    get: ContactSolver$Companion_getInstance
  });
  package$contacts.ContactSolver = ContactSolver;
  ContactVelocityConstraint.VelocityConstraintPoint = ContactVelocityConstraint$VelocityConstraintPoint;
  package$contacts.ContactVelocityConstraint = ContactVelocityConstraint;
  package$contacts.EdgeAndCircleContact = EdgeAndCircleContact;
  package$contacts.EdgeAndPolygonContact = EdgeAndPolygonContact;
  package$contacts.PolygonAndCircleContact = PolygonAndCircleContact;
  package$contacts.PolygonContact = PolygonContact;
  package$contacts.Position = Position;
  package$contacts.PositionSolverManifold = PositionSolverManifold;
  package$contacts.Velocity = Velocity;
  var package$joints = package$dynamics.joints || (package$dynamics.joints = {});
  package$joints.ConstantVolumeJoint = ConstantVolumeJoint;
  package$joints.ConstantVolumeJointDef = ConstantVolumeJointDef;
  package$joints.DistanceJoint = DistanceJoint;
  package$joints.DistanceJointDef = DistanceJointDef;
  package$joints.FrictionJoint = FrictionJoint;
  package$joints.FrictionJointDef = FrictionJointDef;
  package$joints.GearJoint = GearJoint;
  package$joints.GearJointDef = GearJointDef;
  package$joints.Jacobian = Jacobian;
  Object.defineProperty(Joint, 'Companion', {
    get: Joint$Companion_getInstance
  });
  package$joints.Joint = Joint;
  package$joints.JointDef = JointDef;
  package$joints.JointEdge = JointEdge;
  Object.defineProperty(JointType, 'UNKNOWN', {
    get: JointType$UNKNOWN_getInstance
  });
  Object.defineProperty(JointType, 'REVOLUTE', {
    get: JointType$REVOLUTE_getInstance
  });
  Object.defineProperty(JointType, 'PRISMATIC', {
    get: JointType$PRISMATIC_getInstance
  });
  Object.defineProperty(JointType, 'DISTANCE', {
    get: JointType$DISTANCE_getInstance
  });
  Object.defineProperty(JointType, 'PULLEY', {
    get: JointType$PULLEY_getInstance
  });
  Object.defineProperty(JointType, 'MOUSE', {
    get: JointType$MOUSE_getInstance
  });
  Object.defineProperty(JointType, 'GEAR', {
    get: JointType$GEAR_getInstance
  });
  Object.defineProperty(JointType, 'WHEEL', {
    get: JointType$WHEEL_getInstance
  });
  Object.defineProperty(JointType, 'WELD', {
    get: JointType$WELD_getInstance
  });
  Object.defineProperty(JointType, 'FRICTION', {
    get: JointType$FRICTION_getInstance
  });
  Object.defineProperty(JointType, 'ROPE', {
    get: JointType$ROPE_getInstance
  });
  Object.defineProperty(JointType, 'CONSTANT_VOLUME', {
    get: JointType$CONSTANT_VOLUME_getInstance
  });
  Object.defineProperty(JointType, 'MOTOR', {
    get: JointType$MOTOR_getInstance
  });
  package$joints.JointType = JointType;
  Object.defineProperty(LimitState, 'INACTIVE', {
    get: LimitState$INACTIVE_getInstance
  });
  Object.defineProperty(LimitState, 'AT_LOWER', {
    get: LimitState$AT_LOWER_getInstance
  });
  Object.defineProperty(LimitState, 'AT_UPPER', {
    get: LimitState$AT_UPPER_getInstance
  });
  Object.defineProperty(LimitState, 'EQUAL', {
    get: LimitState$EQUAL_getInstance
  });
  package$joints.LimitState = LimitState;
  package$joints.MotorJoint = MotorJoint;
  package$joints.MotorJointDef = MotorJointDef;
  package$joints.MouseJoint = MouseJoint;
  package$joints.MouseJointDef = MouseJointDef;
  package$joints.PrismaticJoint = PrismaticJoint;
  package$joints.PrismaticJointDef = PrismaticJointDef;
  Object.defineProperty(PulleyJoint, 'Companion', {
    get: PulleyJoint$Companion_getInstance
  });
  package$joints.PulleyJoint = PulleyJoint;
  package$joints.PulleyJointDef = PulleyJointDef;
  package$joints.RevoluteJoint = RevoluteJoint;
  package$joints.RevoluteJointDef = RevoluteJointDef;
  package$joints.RopeJoint = RopeJoint;
  package$joints.RopeJointDef = RopeJointDef;
  package$joints.WeldJoint = WeldJoint;
  package$joints.WeldJointDef = WeldJointDef;
  package$joints.WheelJoint = WheelJoint;
  package$joints.WheelJointDef = WheelJointDef;
  var package$internal_0 = package$jbox2d.internal || (package$jbox2d.internal = {});
  package$internal_0.arraycopy_t6l26v$ = arraycopy;
  package$internal_0.arraycopy_66j11b$ = arraycopy_0;
  package$internal_0.arraycopy_kho0rf$ = arraycopy_1;
  package$internal_0.arraycopy_lwkm2r$ = arraycopy_2;
  package$internal_0.arraycopy_6oq96n$ = arraycopy_3;
  package$internal_0.arraycopy_3jsevz$ = arraycopy_4;
  package$internal_0.arraycopy_215ibj$ = arraycopy_5;
  package$internal_0.arraycopy_wkn64v$ = arraycopy_6;
  package$internal_0.assert_vft4zs$ = assert;
  package$internal_0.assert_sui5oy$ = assert_0;
  package$internal_0.Arrays_sort_60jev7$ = Arrays_sort;
  var package$particle = package$jbox2d.particle || (package$jbox2d.particle = {});
  package$particle.ParticleBodyContact = ParticleBodyContact;
  package$particle.ParticleColor_init = ParticleColor_init;
  package$particle.ParticleColor_init_sz6or4$ = ParticleColor_init_0;
  package$particle.ParticleColor_init_8kej5w$ = ParticleColor_init_1;
  package$particle.ParticleColor = ParticleColor;
  package$particle.ParticleContact = ParticleContact;
  package$particle.ParticleDef = ParticleDef;
  package$particle.ParticleGroup = ParticleGroup;
  package$particle.ParticleGroupDef = ParticleGroupDef;
  Object.defineProperty(package$particle, 'ParticleGroupType', {
    get: ParticleGroupType_getInstance
  });
  ParticleSystem.ParticleBuffer = ParticleSystem$ParticleBuffer;
  ParticleSystem.ParticleBufferInt = ParticleSystem$ParticleBufferInt;
  ParticleSystem.Proxy = ParticleSystem$Proxy;
  ParticleSystem.Pair = ParticleSystem$Pair;
  ParticleSystem.Triad = ParticleSystem$Triad;
  ParticleSystem.CreateParticleGroupCallback = ParticleSystem$CreateParticleGroupCallback;
  ParticleSystem.JoinParticleGroupsCallback = ParticleSystem$JoinParticleGroupsCallback;
  ParticleSystem.DestroyParticlesInShapeCallback = ParticleSystem$DestroyParticlesInShapeCallback;
  ParticleSystem.UpdateBodyContactsCallback = ParticleSystem$UpdateBodyContactsCallback;
  ParticleSystem.SolveCollisionCallback = ParticleSystem$SolveCollisionCallback;
  Object.defineProperty(ParticleSystem, 'Test', {
    get: ParticleSystem$Test_getInstance
  });
  Object.defineProperty(ParticleSystem, 'Companion', {
    get: ParticleSystem$Companion_getInstance
  });
  package$particle.ParticleSystem = ParticleSystem;
  Object.defineProperty(package$particle, 'ParticleType', {
    get: ParticleType_getInstance
  });
  package$particle.StackQueue = StackQueue;
  VoronoiDiagram.VoronoiDiagramTaskMutableStack = VoronoiDiagram$VoronoiDiagramTaskMutableStack;
  VoronoiDiagram.Generator = VoronoiDiagram$Generator;
  VoronoiDiagram.VoronoiDiagramTask_init = VoronoiDiagram$VoronoiDiagram$VoronoiDiagramTask_init;
  VoronoiDiagram.VoronoiDiagramTask_init_kpzimx$ = VoronoiDiagram$VoronoiDiagram$VoronoiDiagramTask_init_0;
  VoronoiDiagram.VoronoiDiagramTask = VoronoiDiagram$VoronoiDiagramTask;
  VoronoiDiagram.VoronoiDiagramCallback = VoronoiDiagram$VoronoiDiagramCallback;
  package$particle.VoronoiDiagram = VoronoiDiagram;
  var package$pooling = package$jbox2d.pooling || (package$jbox2d.pooling = {});
  package$pooling.IDynamicStack = IDynamicStack;
  package$pooling.IOrderedStack = IOrderedStack;
  package$pooling.IWorldPool = IWorldPool;
  var package$arrays = package$pooling.arrays || (package$pooling.arrays = {});
  package$arrays.FloatArrayPool = FloatArrayPool;
  package$arrays.GeneratorArrayPool = GeneratorArrayPool;
  package$arrays.IntArrayPool = IntArrayPool;
  package$arrays.Vec2ArrayPool = Vec2ArrayPool;
  var package$normal = package$pooling.normal || (package$pooling.normal = {});
  package$normal.CircleStack = CircleStack;
  package$normal.DefaultWorldPool = DefaultWorldPool;
  package$normal.LambdaOrderedStack = LambdaOrderedStack;
  package$normal.ContactMutableStack = ContactMutableStack;
  package$normal.MutableStack = MutableStack;
  package$normal.OrderedStack = OrderedStack;
  var package$stacks = package$pooling.stacks || (package$pooling.stacks = {});
  package$stacks.DynamicIntStack = DynamicIntStack;
  Box2dTypedUserData.Key = Box2dTypedUserData$Key;
  Box2dTypedUserData.Mixin = Box2dTypedUserData$Mixin;
  var package$userdata = package$jbox2d.userdata || (package$jbox2d.userdata = {});
  package$userdata.Box2dTypedUserData = Box2dTypedUserData;
  package$internal_0.System_nanoTime = System_nanoTime;
  KBOX2D_VERSION = '0.6.1';
  Kotlin.defineModule('kbox2d-root-kbox2d', _);
  return _;
}));

//# sourceMappingURL=kbox2d-root-kbox2d.js.map
