
///////////////////////////////////////////////
// Extracted from jQuery.js
///////////////////////////////////////////////

var rclass = /[\t\r\n\f]/g;
// Used for splitting on whitespace
var rnotwhite = /\S+/g;

function getClass( elem ) {
    return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function removeClass( elem, value ) {
    var classes, cur, curValue, clazz, j, finalValue, i = 0;


    if ( !arguments.length ) {
        return this.attr( "class", "" );
    }

    if ( typeof value === "string" && value ) {
        classes = value.match( rnotwhite ) || [];

        curValue = getClass( elem );

        // This expression is here for better compressibility (see addClass)
        cur = elem.nodeType === 1 &&
            ( " " + curValue + " " ).replace( rclass, " " );

        if ( cur ) {
            j = 0;
            while ( ( clazz = classes[ j++ ] ) ) {

                // Remove *all* instances
                while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
                    cur = cur.replace( " " + clazz + " ", " " );
                }
            }

            // Only assign if different to avoid unneeded rendering.
            finalValue = trim( cur );
            if ( curValue !== finalValue ) {
                elem.setAttribute( "class", finalValue );
            }
        }
    }
}

// Support: Android<4.1
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

function trim(text) {
    return text == null ?
        "" :
        ( text + "" ).replace( rtrim, "" );
}

// End of jQuery extract