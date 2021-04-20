'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pawelnawrocki/Documents/WebDevelopment/Ethereum/kickstart/components/RequestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            loading1: false,
            loading2: false,
            errorMessage: ''
        }, _this.onApprove = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this.setState({ loading1: true });
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context.next = 4;
                                return _web2.default.eth.getAccounts();

                            case 4:
                                accounts = _context.sent;
                                _context.next = 7;
                                return campaign.methods.approveRequest(_this.props.id).send({
                                    from: accounts[0]
                                });

                            case 7:
                                _this.setState({ loading1: false });

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _this.setState({ loading2: true });
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context2.next = 4;
                            return _web2.default.eth.getAccounts();

                        case 4:
                            accounts = _context2.sent;
                            _context2.prev = 5;
                            _context2.next = 8;
                            return campaign.methods.finalizeRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 8:
                            _context2.next = 13;
                            break;

                        case 10:
                            _context2.prev = 10;
                            _context2.t0 = _context2['catch'](5);

                            _this.setState({ errorMessage: errorMessage });

                        case 13:
                            _this.setState({ loading2: false });

                        case 14:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2, [[5, 10]]);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                approversCount = _props.approversCount;

            var readyToFinalize = request.approalCount > approversCount / 2;
            return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, request.recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, request.approalCount, '/', approversCount), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
                color: 'green',
                basic: true,
                onClick: this.onApprove,
                loading: this.state.loading1,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Approve')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
                color: 'red',
                basic: true,
                onClick: this.onFinalize,
                loading: this.state.loading2,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Finalize')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsInN0YXRlIiwibG9hZGluZzEiLCJsb2FkaW5nMiIsImVycm9yTWVzc2FnZSIsIm9uQXBwcm92ZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib25GaW5hbGl6ZSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJyZWFkeVRvRmluYWxpemUiLCJhcHByb2FsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPOztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SSxBQUVBOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFDakI7c0JBQVEsQUFDTSxBQUNWO3NCQUZJLEFBRU0sQUFDVjswQixBQUhJLEFBR1U7QUFIVixBQUNKLGlCLEFBS0o7aUdBQVksaUJBQUEsQUFBTSxPQUFOOzhCQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNSO3NDQUFBLEFBQUssU0FBUyxFQUFFLFVBQWhCLEFBQWMsQUFBWSxBQUNwQjtBQUZFLDJDQUVTLHdCQUFTLE1BQUEsQUFBSyxNQUZ2QixBQUVTLEFBQW9CO2dEQUY3Qjt1Q0FHZSxjQUFBLEFBQUssSUFIcEIsQUFHZSxBQUFTOztpQ0FBMUI7QUFIRSxvREFBQTtnREFBQTtn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