(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(9),i=(n(0),n(188)),s={id:"about-handlers",title:"About Gesture Handlers",sidebar_label:"About Gesture Handlers"},o={id:"about-handlers",title:"About Gesture Handlers",description:"Gesture handlers are the core building blocks of this library.",source:"@site/docs/about-handlers.md",permalink:"/react-native-gesture-handler/docs/next/about-handlers",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/about-handlers.md",version:"next",sidebar_label:"About Gesture Handlers",sidebar:"docs",previous:{title:"Getting Started",permalink:"/react-native-gesture-handler/docs/next/getting-started"},next:{title:"Handler State",permalink:"/react-native-gesture-handler/docs/next/state"}},l=[{value:"Available gesture handlers",id:"available-gesture-handlers",children:[]},{value:"Discrete vs continuous",id:"discrete-vs-continuous",children:[]},{value:"Nesting handlers",id:"nesting-handlers",children:[]},{value:"Using native components",id:"using-native-components",children:[]},{value:"Events with <code>useNativeDriver</code>",id:"events-with-usenativedriver",children:[]}],c={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Gesture handlers are the core building blocks of this library.\nWe use this term to describe elements of the native touch system that the library allows us to instantiate and control from Javascript using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/react-component.html"}),"React's Component")," interface."),Object(i.b)("p",null,"Each handler type is capable of recognizing one type of gesture (pan, pinch, etc.) and provides gesture-specific information via events (translation, scale, etc.)."),Object(i.b)("p",null,"Handlers analyse touch stream synchronously in the UI thread. This allows for the interactions to be uninterrupted even when Javascript thread is blocked."),Object(i.b)("p",null,"Each handler works as an isolated state machine. It takes touch stream as an input and based on in it can flip between ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/state"}),"states"),".\nWhen a gesture starts, based on the position where the finger was placed, a set of handlers that may be interested in recognizing the gesture is selected.\nAll the touch events (touch down, move, up, or when other fingers are placed or lifted) are delivered to all of the handlers selected initially.\nWhen one gesture becomes ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/state#active"}),"active"),", it cancels all the other gestures (read more about how to influence this process in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/interactions"}),'"Cross handler interactions"')," section)."),Object(i.b)("p",null,"Gesture handler components do not instantiate a native view in the view hierarchy. Instead, they are kept in library's own registry and are only connected to native views. When using any of the gesture handler components, it is important for it to have a native view rendered as a child.\nSince handler components don't have corresponding views in the hierarchy, the events registered with them are actually hooked into the underlying view."),Object(i.b)("h3",{id:"available-gesture-handlers"},"Available gesture handlers"),Object(i.b)("p",null,"Currently, the library provides the following list of gestures. Their parameters and attributes they provide to gesture events are documented under each gesture page:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/react-native-gesture-handler/docs/next/handler-pan"}),Object(i.b)("inlineCode",{parentName:"a"},"PanGestureHandler"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/react-native-gesture-handler/docs/next/handler-tap"}),Object(i.b)("inlineCode",{parentName:"a"},"TapGestureHandler"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/react-native-gesture-handler/docs/next/handler-longpress"}),Object(i.b)("inlineCode",{parentName:"a"},"LongPressGestureHandler"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/react-native-gesture-handler/docs/next/handler-rotation"}),Object(i.b)("inlineCode",{parentName:"a"},"RotationGestureHandler"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/react-native-gesture-handler/docs/next/handler-fling"}),Object(i.b)("inlineCode",{parentName:"a"},"FlingGestureHandler"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/react-native-gesture-handler/docs/next/handler-pinch"}),Object(i.b)("inlineCode",{parentName:"a"},"PinchGestureHandler"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/react-native-gesture-handler/docs/next/handler-force"}),Object(i.b)("inlineCode",{parentName:"a"},"ForceTouchGestureHandler")))),Object(i.b)("h3",{id:"discrete-vs-continuous"},"Discrete vs continuous"),Object(i.b)("p",null,"We distinguish two types of gestures: discrete and continuous."),Object(i.b)("p",null,"Continuous gesture handlers can be ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/state#active"}),"active")," for a long period of time and will generate a stream of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/handler-common#ongestureevent"}),"gesture events")," until the gesture is ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/state#ended"}),"over"),".\nAn example of continuous handler is ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/handler-pan"}),Object(i.b)("inlineCode",{parentName:"a"},"PanGestureHandler"))," that once ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/state#active"}),"activated"),", will start providing updates about ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/handler-pan#translationx"}),"translation")," and other properties."),Object(i.b)("p",null,"On the other hand, discrete gesture handlers once ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/state#active"}),"activated")," will not stay in the active state but will ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/state#ended"}),"end")," immediately.\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/handler-longpress"}),Object(i.b)("inlineCode",{parentName:"a"},"LongPressGestureHandler"))," is a discrete handler, as it only detects if the finger is placed for a sufficiently long period of time, it does not track finger movements (as that's the responsibility of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/handler-pan"}),Object(i.b)("inlineCode",{parentName:"a"},"PanGestureHandler")),")."),Object(i.b)("h3",{id:"nesting-handlers"},"Nesting handlers"),Object(i.b)("p",null,"Handlers component can be nested. In any case it is recommended that the innermost handler renders a native view component. There are some limitations that apply when ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#events-with-usenativedriver"}),"using ",Object(i.b)("inlineCode",{parentName:"a"},"useNativeDriver")," flag"),". An example of nested handlers:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Multitap extends Component {\n  render() {\n    return (\n      <LongPressGestureHandler\n        onHandlerStateChange={this._onLongpress}\n        minDurationMs={800}>\n        <TapGestureHandler\n          onHandlerStateChange={this._onSingleTap}\n          waitFor={this.doubleTapRef}>\n          <TapGestureHandler\n            ref={this.doubleTapRef}\n            onHandlerStateChange={this._onDoubleTap}\n            numberOfTaps={2}>\n            <View style={styles.box} />\n          </TapGestureHandler>\n        </TapGestureHandler>\n      </LongPressGestureHandler>\n    );\n  }\n}\n")),Object(i.b)("h3",{id:"using-native-components"},"Using native components"),Object(i.b)("p",null,"Gesture handler library exposes a set of components normally available in React Native that are wrapped in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/handlers"}),Object(i.b)("inlineCode",{parentName:"a"},"NativeViewGestureHandler")),".\nHere is a list of exposed components:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ScrollView")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"FlatList")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Switch")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TextInput")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DrawerLayoutAndroid")," (",Object(i.b)("strong",{parentName:"li"},"Android only"),")")),Object(i.b)("p",null,"If you want to use other handlers or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"component-buttons.md"}),"buttons")," nested in a ",Object(i.b)("inlineCode",{parentName:"p"},"ScrollView")," or you want to use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/handler-common#waitfor"}),Object(i.b)("inlineCode",{parentName:"a"},"waitFor"))," property to define interaction between a handler and ",Object(i.b)("inlineCode",{parentName:"p"},"ScrollView")),Object(i.b)("h3",{id:"events-with-usenativedriver"},"Events with ",Object(i.b)("inlineCode",{parentName:"h3"},"useNativeDriver")),Object(i.b)("p",null,"Because handler components does not instantiate native views but instead hook up under their child views when using ",Object(i.b)("inlineCode",{parentName:"p"},"Animated.event")," it is not supported currently for two gestures to be directly nested.\nTo workaround this limitation we recommend that a ",Object(i.b)("inlineCode",{parentName:"p"},"<Animated.View>")," component is placed in between the handlers."),Object(i.b)("p",null,"Instead of doing:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const PanAndRotate = () => (\n  <PanGestureHandler onGestureEvent={Animated.event({ ... }, { useNativeDriver: true })}>\n    <RotationGestureHandler onGestureEvent={Animated.event({ ... }, { useNativeDriver: true })}>\n      <Animated.View style={animatedStyles}/>\n    </RotationGestureHandler>\n  </PanGestureHandler>\n);\n")),Object(i.b)("p",null,"You need to place an ",Object(i.b)("inlineCode",{parentName:"p"},"<Animated.View>")," in between the handlers:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const PanAndRotate = () => (\n  <PanGestureHandler onGestureEvent={Animated.event({ ... }, { useNativeDriver: true })}>\n    <Animated.View>\n      <RotationGestureHandler onGestureEvent={Animated.event({ ... }, { useNativeDriver: true })}>\n        <Animated.View style={animatedStyles}/>\n      </RotationGestureHandler>\n    </Animated.View>\n  </PanGestureHandler>\n);\n")),Object(i.b)("p",null,"Another consequence of the fact that events are hooked into the children node is that when using ",Object(i.b)("inlineCode",{parentName:"p"},"useNativeDriver")," flag with ",Object(i.b)("inlineCode",{parentName:"p"},"Animated.event")," the children node needs to be a view wrapped by ",Object(i.b)("inlineCode",{parentName:"p"},"Animated.API")," e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"<Animated.View>")," instead of a ",Object(i.b)("inlineCode",{parentName:"p"},"<View>"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Draggable extends Component {\n  render() {\n    return (\n      <PanGestureHandler onGestureEvent={Animated.event({ ... }, { useNativeDriver: true })}>\n        <Animated.View style={animatedStyles} /> {/* <-- NEEDS TO BE Animated.View */}\n      </PanGestureHandler>\n    );\n  }\n};\n")))}d.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(n),p=a,h=b["".concat(s,".").concat(p)]||b[p]||u[p]||i;return n?r.a.createElement(h,o(o({ref:t},c),{},{components:n})):r.a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);