import { isNull } from './index.js';

const storage = {
  /**
   * 缓存数据
   * @param {string} name 存储字段名
   * @param {*} content 存储数据内容
   * @param {string} type 存储类型，默认localStorage
   */
  set: (name, content, type = 'local') => {
    let saveObj = {
      dataType: typeof (value),
      content,
      datetime: new Date().getTime(), 
    }
    if (type == 'session') {
      window.sessionStorage.setItem(name, JSON.stringify(saveObj));
    } else {
      window.localStorage.setItem(name, JSON.stringify(saveObj));
    }
  },
  /**
   * 根据名称获取缓存数据
   * @param {string} name 存储字段名
   * @param {string} type 存储类型，默认localStorage
   */
  get: (name, type = 'local') => {
    let obj;
    if (type == 'session') {
      obj = window.sessionStorage.getItem(name);
    } else {
      obj = window.localStorage.getItem(name);
    }
    if (isNull(obj)) {
      return obj;
    }
    try {
      obj = JSON.parse(obj);
    } catch(err) {
      return obj;
    }
    if (obj.dataType == 'string') {
      return obj.content;
    } else if (obj.dataType == 'number') {
      return Number(obj.content);
    } else if (obj.dataType == 'boolean') {
      return eval(obj.content);
    } else if (obj.dataType == 'object') {
      return obj.content;
    }
    return obj.content;
  },
  /**
   * 删除session或localsto
   * @param {string} name 存储字段名
   * @param {string} type 存储类型，默认localStorage
   */
  remove: (name, type = 'local') => {
    if (type == 'session') {
      obj = window.sessionStorage.removeItem(name);
    } else {
      obj = window.localStorage.removeItem(name);
    }
  },
  /**
   * 清空存储
   * @param {string} type 存储类型，默认localStorage
   */
  clear: (type = 'local') => {
    if (type == 'session') {
      obj = window.sessionStorage.clear();
    } else {
      obj = window.localStorage.clear();
    }
  }
}

export default storage;