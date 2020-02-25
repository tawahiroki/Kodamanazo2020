var TARGET_CLASS = 'highlighting';
var CELL_COLOR = 'grey';

var tables = document.body.getElementsByTagName( 'table' );
for( var i = 0; i < tables.length; i++ )
{
    if( tables[ i ].className.indexOf( TARGET_CLASS ) != -1 )
    {
        AttachHighlighting( tables[ i ] );
    }
}


function AttachHighlighting( table )
{
    for( var i = 0; i < table.rows.length; i++ )
    {
        var cells = table.rows[ i ].cells;
        for( var k = 0; k < cells.length; k++ )
        {
            var cell = cells[ k ];
            if( cell.tagName != 'TH' )
            {
                cell.onmouseover = function()
                {
                    var row = this.parentNode;
                    var table = row.parentNode.parentNode;
                    var cols = table.getElementsByTagName( 'col' );

                    for( var i = 0; i < row.cells.length; i++ )
                    {
                        cols[ i ].style.backgroundColor
                        = ( row.cells[ i ] == this )? CELL_COLOR : '';
                    }

                    for( var i = 0; i < table.rows.length; i++ )
                    {
                        table.rows[ i ].style.backgroundColor
                        = ( table.rows[ i ] == row )? CELL_COLOR : '';
                    }
                }
            }
        }
    }

    var colgroups = table.getElementsByTagName( 'colgroup' );
    for( var i = 0; i < colgroups.length; i++ )
    {
        var colgroup = colgroups[ i ];
        var cols = colgroup.getElementsByTagName( 'col' );

        for( var k = cols.length; k < colgroup.span; k++ )
        {
            var col = document.createElement( 'col' );
            colgroup.appendChild( col );
        }
    }

    table.onmouseout = function()
    {
        var cols = this.getElementsByTagName( 'col' );
        for( var i = 0; i < cols.length; i++ )
        {
            cols[ i ].style.backgroundColor = '';
        }

        for( var i = 0; i < this.rows.length; i++ )
        {
            this.rows[ i ].style.backgroundColor = '';
        }
    }
}
