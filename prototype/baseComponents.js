import fetch from 'node-fetch'
import formidable from 'formidable' // 文件上传
import path from 'path' // 对windows 与 mac 路径
import fs from 'fs' // filesystem 
import qiniu from 'qiniu' // 七牛存储
import gm from 'gm'
qiniu.conf.ACCESS_KEY = 'U47bx0fhQwcREuR9oShdUzJHcsoPR_XuzA9LAjVM'
qiniu.conf.SECRET_KEY = 'm6ojp-avvd0R-6BJECAdFEGYyI9t9TLuZ8l6mwMi'

export default class BaseComponent {
	constructor() {
	  this.idList = ['restaurant_id', 'food_id', 'order_id', 'user_id', 'address_id', 'cart_id', 'img_id', 'category_id','item_id','sku_id', 'admin_id', 'statis_id']
	  this.imgTypeList = ['shop', 'food', 'avatar', 'default'];
	  this.uploadImg = this.uploadImg.bind(this)
	  this.qiniu = this.qiniu.bind(this)
	}
	async fetch(url = '', data = {}, type = 'GET', resType = 'JSON') {
		type = type.toUpperCase();
		resType = resType.toUpperCase();
		if (type == 'GET') {
			let dataStr = ''; //数据拼接字符串
			Object.keys(data).forEach(key => {
				dataStr += key + '=' + data[key] + '&';
			})
		}
	}
}