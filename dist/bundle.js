/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/normalize.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./js/main */ \"./src/js/main.js\");\n\n__webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n\n__webpack_require__(/*! ./css/normalize.css */ \"./src/css/normalize.css\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//заглушки (имитация базы данных)\nvar image = 'https://placehold.it/200x150';\nvar cartImage = 'https://placehold.it/100x80';\nvar items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];\nvar prices = [1000, 200, 20, 10, 25, 30, 18, 24];\nvar ids = [1, 2, 3, 4, 5, 6, 7, 8];\n\n//глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)\nvar userCart = [];\nvar list = fetchData();\n\n//кнопка скрытия и показа корзины\ndocument.querySelector('.btn-cart').addEventListener('click', function () {\n    document.querySelector('.cart-block').classList.toggle('invisible');\n});\n\n//кнопки удаления товара (добавляется один раз)\ndocument.querySelector('.cart-block').addEventListener('click', function (evt) {\n    if (evt.target.classList.contains('del-btn')) {\n        removeProduct(evt.target);\n    }\n});\n\n//кнопки покупки товара (добавляется один раз)\ndocument.querySelector('.products').addEventListener('click', function (evt) {\n    if (evt.target.classList.contains('buy-btn')) {\n        addProduct(evt.target);\n    }\n});\n\n//создание массива объектов - имитация загрузки данных с сервера\nfunction fetchData() {\n    var arr = [];\n    for (var i = 0; i < items.length; i++) {\n        arr.push(createProduct(i));\n    }\n    return arr;\n};\n\n//создание товара\nfunction createProduct(i) {\n    return {\n        id: ids[i],\n        name: items[i],\n        price: prices[i],\n        img: image,\n        quantity: 0,\n        createTemplate: function createTemplate() {\n            return '<div class=\"product-item\" data-id=\"' + this.id + '\">\\n                        <img src=\"' + this.img + '\" alt=\"Some img\">\\n                        <div class=\"desc\">\\n                            <h3>' + this.name + '</h3>\\n                            <p>' + this.price + ' $</p>\\n                            <button class=\"buy-btn\" \\n                            data-id=\"' + this.id + '\"\\n                            data-name=\"' + this.name + '\"\\n                            data-image=\"' + this.img + '\"\\n                            data-price=\"' + this.price + '\">\\u041A\\u0443\\u043F\\u0438\\u0442\\u044C</button>\\n                        </div>\\n                    </div>';\n        },\n\n        add: function add() {\n            this.quantity++;\n        }\n    };\n};\n\n//рендер списка товаров (каталога)\nfunction renderProducts() {\n    var arr = [];\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            item = _step.value;\n\n            arr.push(item.createTemplate());\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    document.querySelector('.products').innerHTML = arr.join('');\n}\n\nrenderProducts();\n\n//CART\n\n// Добавление продуктов в корзину\nfunction addProduct(product) {\n    var productId = +product.dataset['id'];\n    var find = userCart.find(function (element) {\n        return element.id === productId;\n    });\n    if (!find) {\n        userCart.push({\n            name: product.dataset['name'],\n            id: productId,\n            img: cartImage,\n            price: +product.dataset['price'],\n            quantity: 1\n        });\n    } else {\n        find.quantity++;\n    }\n    renderCart();\n}\n\n//удаление товаров\nfunction removeProduct(product) {\n    var productId = +product.dataset['id'];\n    var find = userCart.find(function (element) {\n        return element.id === productId;\n    });\n    if (find.quantity > 1) {\n        find.quantity--;\n    } else {\n        userCart.splice(userCart.indexOf(find), 1);\n        document.querySelector('.cart-item[data-id=\"' + productId + '\"]').remove();\n    }\n    renderCart();\n}\n\n//перерендер корзины\nfunction renderCart() {\n    var allProducts = '';\n    var _iteratorNormalCompletion2 = true;\n    var _didIteratorError2 = false;\n    var _iteratorError2 = undefined;\n\n    try {\n        for (var _iterator2 = userCart[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n            el = _step2.value;\n\n            allProducts += '<div class=\"cart-item\" data-id=\"' + el.id + '\">\\n                            <div class=\"product-bio\">\\n                                <img src=\"' + el.img + '\" alt=\"Some image\">\\n                                <div class=\"product-desc\">\\n                                    <p class=\"product-title\">' + el.name + '</p>\\n                                    <p class=\"product-quantity\">Quantity: ' + el.quantity + '</p>\\n                                    <p class=\"product-single-price\">$' + el.price + ' each</p>\\n                                </div>\\n                            </div>\\n                            <div class=\"right-block\">\\n                                <p class=\"product-price\">' + el.quantity * el.price + '</p>\\n                                <button class=\"del-btn\" data-id=\"' + el.id + '\">&times;</button>\\n                            </div>\\n                        </div>';\n        }\n    } catch (err) {\n        _didIteratorError2 = true;\n        _iteratorError2 = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion2 && _iterator2.return) {\n                _iterator2.return();\n            }\n        } finally {\n            if (_didIteratorError2) {\n                throw _iteratorError2;\n            }\n        }\n    }\n\n    document.querySelector('.cart-block').innerHTML = allProducts;\n}\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });