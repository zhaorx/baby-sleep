
var window = window || {};

window["webpackJsonp"] = require("../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* mpx inject */ global.currentModuleId = "1b4417fa";
global.currentResource = "D:\\workspace_zhaorx\\baby-sleep\\src\\pages\\pick-time.mpx";
global.currentCtor = Component;
global.currentSrcMode = "wx";
/* mpx inject */ global.currentInject = {
  moduleId: "1b4417fa",
  render: function () {
    var __seen = [];
    var renderData = {};
    renderData["desc"] = [this.desc, "desc"], this.desc;
    renderData["startTime"] = [this.startTime, "startTime"], this.startTime;
    "--" + (renderData["startTime"] = [this.startTime, "startTime"], this.startTime) + "--";
    if ((renderData["type"] = [this.type, "type"], this.type) === 'sleep') {
      renderData["desc2"] = [this.desc2, "desc2"], this.desc2;
      renderData["endTime"] = [this.endTime, "endTime"], this.endTime;
      "--" + (renderData["endTime"] = [this.endTime, "endTime"], this.endTime) + "--";
    }
    return renderData;
  }
};
/* harmony import */ var _babel_loader_node_modules_mpxjs_webpack_plugin_lib_selector_type_script_index_0_pick_time_mpx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(193);
/* empty/unused harmony star reexport */global.currentModuleId;
/* script */


/* styles */


/* json */


/* template */



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(197);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var typeMap = {
    getup: { name: '起床', desc: '宝宝睡醒了' },
    sleep: { name: '睡觉', desc: '开始时间', desc2: '结束时间' },
    eat: { name: '喂奶', desc: '宝宝喝奶时间' },
    night: { name: '入夜', desc: '宝宝开始入夜了' }
};

var fmt = 'HH:mm';

Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_0__["createPage"])({
    data: {
        canPick: true,
        type: 'sleep',
        startTime: dayjs__WEBPACK_IMPORTED_MODULE_1___default()().format(fmt),
        endTime: dayjs__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'hour').format(fmt)
    },
    onLoad: function onLoad(option) {
        var _this = this;

        this.type = option.type;
        wx.setNavigationBarTitle({
            title: typeMap[this.type].name
        });

        var eventChannel = this.getOpenerEventChannel();
        eventChannel.on('timeList', function (data) {
            _this.timeList = data;
        });
    },
    onShow: function onShow() {},

    computed: {
        desc: function desc() {
            return typeMap[this.type].desc;
        },
        desc2: function desc2() {
            return typeMap[this.type].desc2;
        },
        now: function now() {
            return dayjs__WEBPACK_IMPORTED_MODULE_1___default()().format(fmt);
        }
    },
    methods: {
        confirm: function confirm() {
            if (this.verifyTime(this.startTime, this.endTime)) {
                var eventChannel = this.getOpenerEventChannel();
                var time = this.type === 'sleep' ? [this.startTime, this.endTime] : [this.startTime];
                eventChannel.emit('pickDone', { type: this.type, text: typeMap[this.type].name, time: time });
                wx.navigateBack({
                    delta: 1
                });
            } else {
                wx.showToast({
                    title: '结束时间不能早于开始时间',
                    icon: 'none',
                    duration: 1500
                });
            }
        },
        cancel: function cancel() {
            wx.navigateBack({
                delta: 1
            });
        },
        bindStartChange: function bindStartChange(e) {
            this.startTime = e.detail.value;
        },
        bindEndChange: function bindEndChange(e) {
            this.endTime = e.detail.value;
        },
        verifyTime: function verifyTime(start, end) {
            var timeA = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().hour(start.split(':')[0]).minute(start.split(':')[1]);
            var timeB = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().hour(end.split(':')[0]).minute(end.split(':')[1]);
            return timeB.diff(timeA) >= 0;
        }
    }
});

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

// removed by extractor

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

// removed by extractor

/***/ })

},[[192,1]]]);