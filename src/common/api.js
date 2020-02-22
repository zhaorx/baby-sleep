// * api列表
export default function install(proxyMPX) {
  proxyMPX.prototype.api = {
    // common
    ip: '/common/ip', // ip地址
    appversion: '/common/appversion' // app版本
  };
}
