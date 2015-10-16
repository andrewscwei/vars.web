/**
 * vars
 * (c) VARIANTE (http://variante.io)
 *
 * This software is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Event dispatcher object.
 *
 * @type {Class}
 */

'use strict';

define(
  [
    'utils/assert',
    'utils/log'
  ],
  function(
    assert,
    log
  ) {
    /**
     * @constructor
     *
     * Creates a new EventDispatcher instance.
     */
    function EventDispatcher(element) {
      this.__define_properties();
    }

    /**
     * Adds an event listener to this EventDispatcher instance.
     *
     * @param  {String} type
     * @param  {Function} listener
     */
    EventDispatcher.prototype.addEventListener = function(type, listener) {
      assert(type, 'Event type must be specified.');
      assert(listener, 'Listener must be specified.');

      if (!type) return;
      if (!listener) return;

      log('[EventDispatcher]::addEventListener(' + type + ')');

      if (!this._listenerMap) {
        Object.defineProperty(this, '_listenerMap', {
          value: {},
          writable: true
        });
      }

      if (!this._listenerMap[type]) {
        this._listenerMap[type] = [];
      }

      this._listenerMap[type].push(listener);
    };

    /**
     * Removes an event listener from this EventDispatcher instance. If no listener method is
     * specified, all the listeners of the specified type will be removed.
     *
     * @param  {String} type
     * @param  {Function} listener (Optional)
     */
    EventDispatcher.prototype.removeEventListener = function(type, listener) {
      assert(type, 'Event type must be specified.');
      assert(this._listenerMap, 'Listener map is null.');
      assert(this._listenerMap[type], 'There are no listeners registered for event type: ' + type);

      if (!type) return;
      if (!this._listenerMap) return;
      if (!this._listenerMap[type]) return;

      log('[EventDispatcher]::removeEventListener(' + type + ')');

      if (listener) {
        var index = this._listenerMap[type].indexOf(listener);

        if (index > -1) {
          this._listenerMap[type].splice(index, 1);
        }
      } else {
        delete this._listenerMap[type];
      }
    };

    /**
     * Determines whether this EventDispatcher instance has a specific event listener registered.
     * If no listener is specified, it will check if any listener of the specified event type
     * is registered.
     *
     * @param  {String} type
     * @param  {Function} listener (Optional)
     *
     * @return {Boolean}
     */
    EventDispatcher.prototype.hasEventListener = function(type, listener) {
      assert(type, 'Event type must be specified.');
      assert(this._listenerMap, 'Listener map is null.');
      assert(this._listenerMap[type], 'There are no listeners registered for event type: ' + type);

      if (!type) return false;
      if (!this._listenerMap) return false;
      if (!this._listenerMap[type]) return false;

      if (listener) {
        var index = this._listenerMap[type].indexOf(listener);

        return (index > -1);
      } else {
        return true;
      }
    };

    /**
     * Dispatches the specified event.
     *
     * @param  {String} event
     */
    EventDispatcher.prototype.dispatchEvent = function(event) {
      assert(event, 'Event must be specified.');
      assert(this._listenerMap, 'Listener map is null.');

      if (!event) return;
      if (!this._listenerMap) return false;
      if (!this._listenerMap[event.type]) return false;

      log('[EventDispatcher]::dispatchEvent(' + event.type + ')');

      event.target = this;
      event.currentTarget = this;
      event.customTarget = this;

      var arrlen = this._listenerMap[event.type].length;

      for (var i = 0; i < arrlen; i++) {
        var listener = this._listenerMap[event.type][i];

        listener.call(this, event);
      }
    };

    /**
     * @private
     *
     * Defines all properties.
     */
    EventDispatcher.prototype.__define_properties = function() {

    };

    return EventDispatcher;
  }
);
