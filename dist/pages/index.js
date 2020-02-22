
var window = window || {};

window["webpackJsonp"] = require("../bundle.js");
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* mpx inject */ global.currentModuleId = "6be47853";
global.currentResource = "D:\\workspace_zhaorx\\baby-sleep\\src\\pages\\index.mpx";
global.currentCtor = Component;
global.currentSrcMode = "wx";
/* mpx inject */ global.currentInject = {
  moduleId: "6be47853",
  render: function () {
    var __seen = [];
    var renderData = {};
    ({ tap: [["toPickTime", 'getup']] });
    ({ tap: [["toPickTime", 'sleep']] });
    ({ tap: [["toPickTime", 'eat']] });
    ({ tap: [["toPickTime", 'night']] });
    if ((renderData["timeList"] = [this.timeList, "timeList"], this.timeList).length) {
      this.__iterate((renderData["timeList"] = [this.timeList, "timeList"], this.timeList), function (item, index) {
        index;
        if (this.__get(item, "type") === 'sleep') {
          this.__get(this.__get(item, "time"), 0) + " - " + this.__get(this.__get(item, "time"), 1);
        } else {
          this.__get(this.__get(item, "time"), 0);
        }
        this.__get(item, "text");
      }.bind(this));
    } else {}
    return renderData;
  }
};
/* harmony import */ var _babel_loader_node_modules_mpxjs_webpack_plugin_lib_selector_type_script_index_0_index_mpx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(188);
/* empty/unused harmony star reexport */global.currentModuleId;
/* script */


/* styles */


/* json */


/* template */



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mpxjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(197);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);

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




Object(_mpxjs_core__WEBPACK_IMPORTED_MODULE_1__["createPage"])({
    data: {
        timeList: []
    },
    onLoad: function onLoad(option) {
        // 缓存取timeList
        try {
            this.timeList = wx.getStorageSync('timeList') || [];
        } catch (error) {
            this.timeList = [];
        }
    },
    onShow: function onShow() {},

    methods: {
        deleteItem: function deleteItem(e) {
            wx.showModal({
                title: '提示',
                content: '是否删除该条作息时间',
                success: function success(res) {
                    if (res.confirm) {
                        var index = e.target.dataset.index;
                        this.timeList.splice(index, 1);
                    }
                }
            });
        },
        toPickTime: function toPickTime(type) {
            var _this = this;

            wx.navigateTo({
                url: 'pick-time?type=' + type,
                success: function success(res) {
                    // 通过eventChannel向被打开页面传送数据
                    res.eventChannel.emit('timeList', _this.timeList);
                },
                events: {
                    pickDone: function pickDone(data) {
                        console.log(data);
                        _this.timeList.push(data);
                        _this.sortTimeLine();
                    }
                }
            });
        },

        // 时间线排序
        sortTimeLine: function sortTimeLine() {
            var _timeList = [].concat(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.timeList));
            _timeList.sort(function (a, b) {
                var timeA = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().hour(a.time[0].split(':')[0]).minute(a.time[0].split(':')[1]);
                var timeB = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().hour(b.time[0].split(':')[0]).minute(b.time[0].split(':')[1]);
                return timeA.diff(timeB);
            });

            this.timeList = _timeList;

            wx.setStorage({
                key: 'timeList',
                data: this.timeList
            });
        },
        clear: function clear() {
            var _this2 = this;

            wx.showModal({
                title: '提示',
                content: '是否清空作息记录',
                success: function success(res) {
                    if (res.confirm) {
                        _this2.timeList = [];
                    }
                }
            });
        }
    }
});

/***/ })

},[[187,1]]]);