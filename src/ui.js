/**
 *  vars.js
 *  (c) VARIANTE (http://variante.io)
 *
 *  UI classes.
 *
 *  This software is released under the MIT License:
 *  http://www.opensource.org/licenses/mit-license.php
 */
define
(
    [
        'ui/translate',
        'ui/translate3d',
        'ui/transform',
        'ui/getviewportrect',
        'ui/getrect',
        'ui/getintersectrect',
        'ui/element',
        'ui/video',
        'ui/elementupdatedelegate'
    ],
    function
    (
        translate,
        translate3d,
        transform,
        getViewportRect,
        getRect,
        getIntersectRect,
        Element,
        Video,
        ElementUpdateDelegate
    )
    {
        var api = function(obj) { return obj; };

        Object.defineProperty(api, 'translate', { value: translate, writable: false, enumerable: true });
        Object.defineProperty(api, 'translate3d', { value: translate3d, writable: false, enumerable: true });
        Object.defineProperty(api, 'transform', { value: transform, writable: false, enumerable: true });
        Object.defineProperty(api, 'getViewportRect', { value: getViewportRect, writable: false, enumerable: true });
        Object.defineProperty(api, 'getRect', { value: getRect, writable: false, enumerable: true });
        Object.defineProperty(api, 'getIntersectRect', { value: getIntersectRect, writable: false, enumerable: true });
        Object.defineProperty(api, 'Element', { value: Element, writable: false, enumerable: true });
        Object.defineProperty(api, 'Video', { value: Video, writable: false, enumerable: true });
        Object.defineProperty(api, 'ElementUpdateDelegate', { value: ElementUpdateDelegate, writable: false, enumerable: true });

        return api;
    }
);
