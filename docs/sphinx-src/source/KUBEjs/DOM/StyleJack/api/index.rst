StyleJack
=========

.. js:class:: StyleJack(context)

   :param HTMLElement/String context:
        Either a HTMLElement or a string containing a style rule (ex. "div.class" or HTMLDivElement)
        StyleJack also supports @font-face rules and @keyframes.
        These return their own APIs instead of StyleJack API.

       :returns: :js:class:`StyleJackAPI` or :js:class:`StyleJackFontFaceAPI` or :js:class:`StyleJackCSSKeyFrameAPI`


StyleJack API
^^^^^^^^^^^^^

StyleJack API is simply a representation of the Object that you are returned after initializing
a new StyleJack with a Node/StyleRule

You cannot instantiate this manually, as it's the return value from StyleJack


StyleJack is a fairly fluid API. For most contexts, if you are setting a value, you will receive the relevant API back.
This means that if you're on the level 1 API (StyleJackAPI), you will receive the StyleJack API back to allow chaining.
If you are on a level 2 API (StyleJackBackgroundAPI), you will receive that API back. The property .api will allow you
to return to the level 1 API

    .. note::
        The `String` "$" Is a special value that you can pass into all of the StyleJackAPI methods to get the raw value back. Else, StyleJack will
        attempt to parse the value from px to a programatically usable value (eg: String("16px") => Number(16).
        If the value is in any other format (eg: em, pt, cm) it will be returned as a String.

        This is convenient in the cases where the Style returns a Level 2 API (ex: Background), as you can simply call::

            KUBE.Class('/Library/DOM/StyleJack')(document.body).Background('$');

        instead of::

            KUBE.Class('/Library/DOM/StyleJack')(document.body).Background().Get();

.. js:class:: StyleJackAPI


.. js:function:: StyleJackAPI.Delete()

    Deletes the current style rule from the stylesheet.

    :returns: `void`

.. js:function:: StyleJackAPI.GetStyleObj()

    Returns the CSSStyleRule that this current StyleJack represents

    :returns: :js:class:`CSSStyleRule`

.. js:function:: StyleJackAPI.Appearance([_value])

    Used for getting/setting the appearance property.

    :returns: :js:class:`StyleJackAPI`

   .. todo::
        Appearance property has some flaws. It's prefixed everywhere, and the values are prefixed as well
        We might need to re-assess it and possibly remove it from StyleJack for the time being.

.. js:function:: StyleJackAPI.BackfaceVisibility([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

     :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Background([_value])

    :param String _value:
        If no value passed in, returns `StyleJackBackgroundAPI`. Any value other than "$" attempts to set the passed value to the property
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBackgroundAPI`

.. js:function:: StyleJackAPI.Border([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBorderAPI`

.. js:function:: StyleJackAPI.Bottom([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Box([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBoxAPI`

.. js:function:: StyleJackAPI.CaptionSide([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Clear([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Clip([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Color([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Content([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Cursor([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Direction([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Display([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property


    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.EmptyCells([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Float([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Font([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Height([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Left([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.LetterSpacing([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.LineHeight([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Margin([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.MinHeight([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.MinWidth([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.MaxHeight([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.MaxWidth([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Opacity([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Outline([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Overflow([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Padding([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Position([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Resize([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Right([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.TableLayout([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Text([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Top([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Transform([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Transition([_value])

    :param String _value:
    	If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.VerticalAlign([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Visibility([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property


    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.Width([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property


    :returns: :js:class:`StyleJackAPI` Or Number

.. js:function:: StyleJackAPI.WhiteSpace([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property


    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.WordSpacing([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property


    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.WordBreak([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.WordWrap([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

.. js:function:: StyleJackAPI.ZIndex([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackAPI`

StyleJack Background API
^^^^^^^^^^^^^^^^^^^^^^^^

.. js:class:: StyleJackBackgroundAPI

.. js:function:: StyleJackBackgroundAPI.Set([_value])

    :param String _value:
        Equivalent to calling Set on the level 1 API. Only difference is that '$' is not a valid input value,
        as set will always return  :js:class:`StyleJackBackground`

    :returns: :js:class:`StyleJackBackgroundAPI`

.. js:function:: StyleJackBackgroundAPI.Get()

        The object that's returned has both numerical and string keys.  The object returned looks like: ::

            {
                0:color,1:position,2:size,3:repeat,4:origin,5:clip,6:attachment,7:image,
                'color':color, 'position':position, 'size':size, 'repeat':repeat,
                'origin':origin,'clip':clip, 'attachment':attachment, 'image':image
            };

    :returns: `Object`

.. js:function:: StyleJackBackgroundAPI.Color([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBackgroundAPI`

.. js:function:: StyleJackBackgroundAPI.Attachment()

    :param String _value:
            If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
            "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBackgroundAPI`

.. js:function:: StyleJackBackgroundAPI.Image()

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBackgroundAPI`

.. js:function:: StyleJackBackgroundAPI.Position()

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBackgroundAPI`

.. js:function:: StyleJackBackgroundAPI.Repeat()

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBackgroundAPI`

.. js:function:: StyleJackBackgroundAPI.Clip()

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property
    :returns: :js:class:`StyleJackBackgroundAPI`

.. js:function:: StyleJackBackgroundAPI.Origin()

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBackgroundAPI`

.. js:function:: StyleJackBackgroundAPI.Size()

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBackgroundAPI`

.. js:attribute:: StyleJackBackgroundAPI.api

    :returns: :js:class:`StyleJackAPI`

StyleJack Border API
^^^^^^^^^^^^^^^^^^^^

.. js:class:: StyleJackBorderAPI

.. js:function:: StyleJackBorderAPI.Get()

        The object that's returned has both numerical and string keys. ::

            { 0:width, 1:style, 2:color, 'width':width, 'style':style, 'color':color,'length':3 };



    :returns: `Object`

.. js:function:: StyleJackBorderAPI.Set([_value])

    :param String/Object/Array _value:
            Any value attempts to set the passed value to the property.

            .. note:: _value can be in the form of an object, with the keys "width","style" and "color". It can be also in an array,
                with index 0 being width, index 1 being style and index 2 being color

    :returns: :js:class:`StyleJackBorderAPI`

.. js:function:: StyleJackBorderAPI.Top([_value])

    :param String/Object/Array _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property.

        .. note:: _value can be in the form of an object, with the keys "width","style" and "color". It can be also in an array,
            with index 0 being width, index 1 being style and index 2 being color


    :returns: :js:class:`StyleJackBorderAPI`

.. js:function:: StyleJackBorderAPI.Right([_value])

    :param String/Object/Array _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property.

        .. note:: _value can be in the form of an object, with the keys "width","style" and "color". It can be also in an array,
            with index 0 being width, index 1 being style and index 2 being color

    :returns: :js:class:`StyleJackBorderAPI`

.. js:function:: StyleJackBorderAPI.Bottom([_value])

    :param String/Object/Array _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property.

        .. note:: _value can be in the form of an object, with the keys "width","style" and "color". It can be also in an array,
            with index 0 being width, index 1 being style and index 2 being color

    :returns: :js:class:`StyleJackBorderAPI`

.. js:function:: StyleJackBorderAPI.Left([_value])

    :param String/Object/Array _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property.

        .. note:: _value can be in the form of an object, with the keys "width","style" and "color". It can be also in an array,
            with index 0 being width, index 1 being style and index 2 being color

    :returns: :js:class:`StyleJackBorderAPI`

.. js:function:: StyleJackBorderAPI.Radius()

    Returns the Border Radius API for manipulating the Border Radius property

    :returns: :js:class:`StyleJackBorderRadiusAPI`

StyleJack Border Radius API
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. js:class:: StyleJackBorderRadiusAPI

.. js:function:: StyleJackBorderRadiusAPI.Set([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBorderRadiusAPI`

.. js:function:: StyleJackBorderRadiusAPI.Get()

        The object that's returned has both numerical and string keys. ::

            {
                0:topLeft, 1:topRight, 2:bottomRight, 3:bottomLeft,
                'topLeft':topLeft, 'topRight':topRight, 'bottomRight':bottomRight,
                'bottomLeft':bottomLeft
            }

   :returns: `Object`

.. js:function:: StyleJackBorderRadiusAPI.TopLeft([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBorderRadiusAPI`

.. js:function:: StyleJackBorderRadiusAPI.TopRight([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBorderRadiusAPI`

.. js:function:: StyleJackBorderRadiusAPI.BottomRight([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBorderRadiusAPI`

.. js:function:: StyleJackBorderRadiusAPI.BottomLeft([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBorderRadiusAPI`

.. js:attribute:: StyleJackBorderRadiusAPI.api

   :returns: :js:class:`StyleJackAPI`

StyleJack Box API
^^^^^^^^^^^^^^^^^

.. js:class:: StyleJackBoxAPI

.. js:function:: StyleJackBoxAPI.Align([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBoxAPI`

.. js:function:: StyleJackBoxAPI.Direction([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBoxAPI`

.. js:function:: StyleJackBoxAPI.Flex([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBoxAPI`

.. js:function:: StyleJackBoxAPI.FlexGroup([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBoxAPI`

.. js:function:: StyleJackBoxAPI.Lines([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBoxAPI`

.. js:function:: StyleJackBoxAPI.OrdinalGroup([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBoxAPI`

.. js:function:: StyleJackBoxAPI.Orient([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBoxAPI`

.. js:function:: StyleJackBoxAPI.Pack([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBoxAPI`

.. js:function:: StyleJackBoxAPI.Sizing([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBoxAPI`

.. js:function:: StyleJackBoxAPI.Shadow([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBoxShadowAPI`

.. js:attribute:: StyleJackBoxAPI.api

    :returns: :js:class:`StyleJackAPI`



StyleJack Box Shadow API
^^^^^^^^^^^^^^^^^^^^^^^^

.. js:class:: StyleJackBoxShadowAPI

.. js:function:: StyleJackBoxShadowAPI.Get()

     The object that's returned has both numerical and string keys. ::

            {
                'horizontal':horizontal, 'vertical':vertical, 'blur':blur,
                'color':color,'inset': inset
            }

    :returns: `Object`

.. js:function:: StyleJackBoxShadowAPI.Set([_value])

    Any value attempts to set the passed value to the property.

    .. note:: _value can be in the form of an object, with the keys "width","style" and "color". It can be also in an array,
        with index 0 being width, index 1 being style and index 2 being color

.. js:function:: StyleJackBoxShadowAPI.Horizontal([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBoxShadowAPI`

.. js:function:: StyleJackBoxShadowAPI.Vertical([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBoxShadowAPI`

.. js:function:: StyleJackBoxShadowAPI.H([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

        An alias for Horizontal

    :returns: :js:class:`StyleJackBoxShadowAPI`

.. js:function:: StyleJackBoxShadowAPI.V([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

        An alias for Vertical

    :returns: :js:class:`StyleJackBoxShadowAPI`

.. js:function:: StyleJackBoxShadowAPI.Blur([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBoxShadowAPI`

.. js:function:: StyleJackBoxShadowAPI.Spread([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBoxShadowAPI`

.. js:function:: StyleJackBoxShadowAPI.Color([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBoxShadowAPI`

.. js:function:: StyleJackBoxShadowAPI.Inset([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackBoxShadowAPI`

.. js:attribute:: StyleJackBoxShadowAPI.api

    :returns: :js:class:`StyleJackAPI`

StyleJack Font API
^^^^^^^^^^^^^^^^^^

.. js:class:: StyleJackFontAPI

.. js:function:: StyleJackFontAPI.Get([asArray])

    If passed a truthy value, it will return an array with the order of Style, Variant, Weight, Size, Family.
    else, it'll simply return the string that the font property represents.

    :returns: `Array`/`String`

.. js:function:: StyleJackFontAPI.Set([_value])

    Any value attempts to set the passed value to the property.

    .. note:: _value can be a string, which will attempt to set the font property directly.

            It may also be a 5 element array in the order of Style, Variant, Weight, Size and Family, which will automatically set the various font properties.

    :returns: :js:class:`StyleJackFontAPI`

.. js:function:: StyleJackFontAPI.Family([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackFontAPI`

.. js:function:: StyleJackFontAPI.Size([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackFontAPI`

.. js:function:: StyleJackFontAPI.Style([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackFontAPI`

.. js:function:: StyleJackFontAPI.Variant([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackFontAPI`

.. js:function:: StyleJackFontAPI.Weight([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackFontAPI`

.. js:attribute:: StyleJackFontAPI.api

    :returns: :js:class:`StyleJackAPI`

StyleJack Margin API
^^^^^^^^^^^^^^^^^^^^

.. js:class:: StyleJackMarginAPI

.. js:function:: StyleJackMarginAPI.Get()

    :returns: `Object`

.. js:function:: StyleJackMarginAPI.Set([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property


    .. note:: You can also pass in an array or object as a value. The format for an object simply has "top","right","bottom","left" keys
            which then sets the according value for that key. Keys may be omitted.  If you use an array, it can be any length between 1 and 4.

            This follows normal CSS behaviour. Where a 1 length array sets all sides to the same value. 2 length array sets top and bottom to same value
            and left and right to same value.


    :returns: :js:class:`StyleJackMarginAPI`

.. js:function:: StyleJackMarginAPI.Top([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackMarginAPI`

.. js:function:: StyleJackMarginAPI.Right([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackMarginAPI`


.. js:function:: StyleJackMarginAPI.Bottom([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

        :returns: :js:class:`StyleJackMarginAPI`

.. js:function:: StyleJackMarginAPI.Left([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackMarginAPI`

.. js:function:: StyleJackMarginAPI.Center()

        Automatically sets margin left and right to "auto".

    :returns: :js:class:`StyleJackMarginAPI`

.. js:attribute:: StyleJackMarginAPI.api

    :returns: :js:class:`StyleJackAPI`


StyleJack Outline API
^^^^^^^^^^^^^^^^^^^^^

.. js:class:: StyleJackOutlineAPI

.. js:function:: StyleJackOutlineAPI.Width([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackMarginAPI`

.. js:function:: StyleJackOutlineAPI.Style([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackMarginAPI`

.. js:function:: StyleJackOutlineAPI.Color([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackMarginAPI`

.. js:function:: StyleJackOutlineAPI.Offset([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackMarginAPI`

.. js:attribute:: StyleJackOutlineAPI.api

    :returns: :js:class:`StyleJackAPI`

StyleJack OverFlow API
^^^^^^^^^^^^^^^^^^^^^^

.. js:class:: StyleJackOverflowAPI

.. js:function:: StyleJackOverflowAPI.Get()

    Returns a 2 index array containing the X and Y value of the overflow property

    :returns: `array`

.. js:function:: StyleJackOverflowAPI.Set(_value)

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackOverflowAPI`

.. js:function:: StyleJackOverflowAPI.X(_value)

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackOverflowAPI`

.. js:function:: StyleJackOverflowAPI.Y(_value)

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackOverflowAPI`

.. js:attribute:: StyleJackOverflowAPI.api

    :returns: :js:class:`StyleJackAPI`

StyleJack Padding API
^^^^^^^^^^^^^^^^^^^^^

.. js:class:: StyleJackPaddingAPI

.. js:function:: StyleJackPaddingAPI.Get()

    :returns: `Object`

.. js:function:: StyleJackPaddingAPI.Set([_value])

    :param String _value:
            If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
            "$" as a value returns the raw value of the property


        .. note:: You can also pass in an array or object as a value. The format for an object simply has "top","right","bottom","left" keys
            which then sets the according value for that key. Keys may be omitted.  If you use an array, it can be any length between 1 and 4.

            This follows normal CSS behaviour. Where a 1 length array sets all sides to the same value. 2 length array sets top and bottom to same value
            and left and right to same value.


    :returns: :js:class:`StyleJackPaddingAPI`

.. js:function:: StyleJackPaddingAPI.Top([_value])

    :param String _value:
            If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
            "$" as a value returns the raw value of the property

        :returns: :js:class:`StyleJackPaddingAPI`

.. js:function:: StyleJackPaddingAPI.Right([_value])

    :param String _value:
            If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
            "$" as a value returns the raw value of the property

        :returns: :js:class:`StyleJackPaddingAPI`


.. js:function:: StyleJackPaddingAPI.Bottom([_value])

    :param String _value:
            If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
            "$" as a value returns the raw value of the property

            :returns: :js:class:`StyleJackPaddingAPI`

.. js:function:: StyleJackPaddingAPI.Left([_value])

    :param String _value:
            If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
            "$" as a value returns the raw value of the property

        :returns: :js:class:`StyleJackPaddingAPI`

.. js:function:: StyleJackPaddingAPI.Center()

        Automatically sets margin left and right to "auto".

    :returns: :js:class:`StyleJackPaddingAPI`

.. js:attribute:: StyleJackPaddingAPI.api

    :returns: :js:class:`StyleJackAPI`

StyleJack Text API
^^^^^^^^^^^^^^^^^^

.. js:class:: StyleJackTextAPI

.. js:function:: StyleJackTextAPI.Align([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackTextAPI`

.. js:function:: StyleJackTextAPI.Decoration([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackTextAPI`

.. js:function:: StyleJackTextAPI.Indent([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackTextAPI`

.. js:function:: StyleJackTextAPI.Overflow([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackTextAPI`

.. js:function:: StyleJackTextAPI.Shadow([_value])

    :returns: :js:class:`StyleJackTextAPI`

.. js:function:: StyleJackTextAPI.Transform([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackTextAPI`

.. js:attribute:: StyleJackTextAPI.api

    :returns: :js:class:`StyleJackAPI`


StyleJack Text Shadow API
^^^^^^^^^^^^^^^^^^^^^^^^^

.. js:class:: StyleJackTextShadowAPI

.. js:function:: StyleJackTextShadowAPI.Get()

     The object that's returned contains the following string keys. ::

            {
                'horizontal':horizontal, 'vertical':vertical, 'blur':blur,
                'color':color
            }

    :returns: `Object`

.. js:function:: StyleJackTextShadowAPI.Set([_value])

    Any value attempts to set the passed value to the property.

    .. note:: _value can be in the form of an object, with the keys "width","style" and "color". It can be also in an array,
        with index 0 being width, index 1 being style and index 2 being color

.. js:function:: StyleJackTextShadowAPI.Horizontal([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackTextShadowAPI`

.. js:function:: StyleJackTextShadowAPI.Vertical([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackTextShadowAPI`

.. js:function:: StyleJackTextShadowAPI.H([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

        An alias for Horizontal

    :returns: :js:class:`StyleJackTextShadowAPI`

.. js:function:: StyleJackTextShadowAPI.V([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

        An alias for Vertical

    :returns: :js:class:`StyleJackTextShadowAPI`

.. js:function:: StyleJackTextShadowAPI.Blur([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackTextShadowAPI`

.. js:function:: StyleJackTextShadowAPI.Color([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackTextShadowAPI`

.. js:attribute:: StyleJackTextShadowAPI.api

    :returns: :js:class:`StyleJackAPI`

StyleJack Transform API
^^^^^^^^^^^^^^^^^^^^^^^

    Supports 2D transforms currently.

.. js:class:: StyleJackTransformAPI

.. js:function:: StyleJackTransformAPI.Matrix([_value])

    :param Array/String _value:
        If no value or "$" passed in, returns the current value (as an array).  To set, you must pass in a 6 index array
        containing the matrix you're attempting to set.

    :returns: :js:class:`StyleJackTransformAPI`

.. js:function:: StyleJackTransformAPI.Translate([_value])

    :param Array/String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        If this value is not an Array, nothing will happen.  The value should be a 2 index array, representing x and y
        "$" as a value returns the raw value of the property.  The values array should be numbers, which will become pixels

    :returns: :js:class:`StyleJackTransformAPI`

.. js:function:: StyleJackTransformAPI.TranslateX([_value])

    :param String/Number _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property.  The value passed in should be an number which will become a pixel offset

    :returns: :js:class:`StyleJackTransformAPI`

.. js:function:: StyleJackTransformAPI.TranslateY([_value])

    :param String/Number _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property. The value passed in should be an number which will become a pixel offset

    :returns: :js:class:`StyleJackTransformAPI`

.. js:function:: StyleJackTransformAPI.Scale([_value])

    :param Array/String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        If this value is not an Array, nothing will happen.  The value should be a 2 index array, representing x and y
        "$" as a value returns the raw value of the property.  The values array should be numbers, which will become a scale ratio

    :returns: :js:class:`StyleJackTransformAPI`

.. js:function:: StyleJackTransformAPI.ScaleX([_value])

    :param String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property.  The value passed in should be an number

    :returns: :js:class:`StyleJackTransformAPI`

.. js:function:: StyleJackTransformAPI.ScaleY([_value])

    :param String/Number _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property.  The value passed in should be an number

    :returns: :js:class:`StyleJackTransformAPI`

.. js:function:: StyleJackTransformAPI.Rotate([_value])

    :param String/Number _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property.  The value passed in should be an number, which will get converted to degrees

    :returns: :js:class:`StyleJackTransformAPI`

.. js:function:: StyleJackTransformAPI.Skew([_value])

    :param Array/String _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        If this value is not an Array, nothing will happen.  The value should be a 2 index array, representing x and y
        "$" as a value returns the raw value of the property. The values passed in should be numbers, which will get converted to degrees

    :returns: :js:class:`StyleJackTransformAPI`

.. js:function:: StyleJackTransformAPI.SkewX([_value])

    :param String/Number _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property. The value passed in should be an number, which will get converted to degrees

    :returns: :js:class:`StyleJackTransformAPI`

.. js:function:: StyleJackTransformAPI.SkewY([_value])

    :param String/Number _value:
        If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
        "$" as a value returns the raw value of the property. The value passed in should be an number, which will get converted to degrees

    :returns: :js:class:`StyleJackTransformAPI`

.. js:attribute:: StyleJackTransformAPI.api

    :returns: :js:class:`StyleJackAPI`

StyleJack Transition API
^^^^^^^^^^^^^^^^^^^^^^^^

.. js:class:: StyleJackTransitionAPI

.. js:function:: StyleJackTransitionAPI.Get()

        The object that's returned has both numerical and string keys. ::

            {
                0:property,1:duration,2:timing,3:delay,
                'property':property,
                'duration':duration,
                'timing':timing,
                'delay':delay
            }

    :returns: `Object`

.. js:function:: StyleJackTransitionAPI.Set([_value])

    :param String _value:
            If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
            "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackTransitionAPI`

.. js:function:: StyleJackTransitionAPI.Property([_value])

    :param String _value:
            If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
            "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackTransitionAPI`

.. js:function:: StyleJackTransitionAPI.Duration([_value])

    :param String _value:
            If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
            "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackTransitionAPI`

.. js:function:: StyleJackTransitionAPI.Timing([_value])

    :param String _value:
            If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
            "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackTransitionAPI`

.. js:function:: StyleJackTransitionAPI.Delay([_value])

    :param String _value:
            If no value passed in, returns the current value. Any value other than "$", attempts to set the passed value to the property.
            "$" as a value returns the raw value of the property

    :returns: :js:class:`StyleJackTransitionAPI`

.. js:function:: StyleJackTransitionAPI.api

    :returns: :js:class:`StyleJackAPI`

StyleJack FontFace API
^^^^^^^^^^^^^^^^^^^^^^

    The FontFace API will always return the API. It's not designed to be used as a getter, only for creating
    font-face rules entirely in JavaScript.  The rule will get initialized into the Stylesheet once both Family and Src
    are set.  You do not have to call any method to "commit" the rule into the Stylesheet.

.. js:class::StyleJackFontFaceAPI

.. js:function:: StyleJackFontFaceAPI.Family(_family)

    :param String _family:
            The name of the font family that you're registering. This can be any string, and provides the name
            that you access your font-face with (in a font-family in CSS or Font().Family() in StyleJack)

        :returns: :js:class:`StyleJackFontFaceAPI`

.. js:function:: StyleJackFontFaceAPI.Src(_src)

    :param String _src:
            The src of your font. This can be pre-formatted as url('') or the straight string.
            It doesn't check for http, so data URIs work as well.

        :returns: :js:class:`StyleJackFontFaceAPI`

.. js:function:: StyleJackFontFaceAPI.Stretch(_stretch)

    :param String _stretch:
            The stretch value that your font-face implements.

            **Permissible Values**: "normal","condensed","ultra-condensed","extra-condensed","semi-condensed","expanded","ultra-expanded","extra-expanded","semi-expanded"
    :throws `console.log`: Logs a message if you try to set an invalid value

        :returns: :js:class:`StyleJackFontFaceAPI`

.. js:function:: StyleJackFontFaceAPI.Style(_style)

    :param String _style:
            The font style that this font-face implements.

            **Permissible Values**: "normal","italic","oblique"

    :throws `console.log`: Logs a message if you try to set an invalid value
        :returns: :js:class:`StyleJackFontFaceAPI`

.. js:function:: StyleJackFontFaceAPI.UnicodeRange(_unicodeRange)

    :param String _unicodeRange:
            The unicode range that you want to use from the font file.
            This allows you to only import specific characters from a font into this custom font-family

        :throws `console.log`: Logs a message if you try to set an invalid value

        :returns: :js:class:`StyleJackFontFaceAPI`

.. js:function:: StyleJackFontFaceAPI.Weight(_weight)

    :param String/Number _weight:
            The font-weight for this font-family. This allows you to actually define what the weight of this @font-face is

            **Permissible values**: "normal", "bold", "lighter", "bolder", 100, 200, 300, 400, 500, 600, 700, 800, 900

    :throws `console.log`: Logs a message if you try to set an invalid value

        :returns: :js:class:`StyleJackFontFaceAPI`



StyleJack CSSKeyFrame API
^^^^^^^^^^^^^^^^^^^^^^^^^

.. js:class::StyleJackCSSKeyFrameAPI

.. js:function:: StyleJackCSSKeyFrameAPI.Index(_index)

    This is for inserting a new Keyframe at the given index. This returns the Stylejack
    representing the given index. Indexes should be 0-100 as they're percentages along the animations duration.

    :param Number _index:
                The percentage (0-100) of the animation where you want
                to create a new keyframe

            :returns: :js:class:`StyleJackAPI`


.. js:function:: StyleJackCSSKeyFrameAPI.Delete()

    Deletes the Keyframe rule entirely.

    :returns: `Boolean` Represents success/failure of removing the given keyframe rule.

.. js:function:: StyleJackCSSKeyFrameAPI.Debug()

    :returns: `CSSKeyFramesRule` Returns the raw DOM CSSKeyFramesRule object for debugging

.. todo::

    StyleJack Method Implementation. These methods require implementation still.

        .. js:function:: StyleJackCSSKeyFrameAPI.Clear(_index)
.. js:function:: StyleJackCSSKeyFrameAPI.Each()

        Event Methods as well do nothing (Events are never emitted)


