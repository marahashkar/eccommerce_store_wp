;(function($){
"use strict";

    // Tab Menu
    function woolentor_admin_tabs( $tabmenus, $tabpane ){
        $tabmenus.on('click', 'a', function(e){
            e.preventDefault();
            var $this = $(this),
                $target = $this.attr('href');
            $this.addClass('wlactive').parent().siblings().children('a').removeClass('wlactive');
            $( $tabpane + $target ).addClass('wlactive').siblings().removeClass('wlactive');
        });
    }
    woolentor_admin_tabs( $(".woolentor-admin-tabs"), '.woolentor-admin-tab-pane' );

    // Check Save data wise
    WooLentorConditionField( admin_wllocalize_data.option_data['contenttype'], 'fakes', '.notification_fake' );
    WooLentorConditionField( admin_wllocalize_data.option_data['contenttype'], 'actual', '.notification_real' );
    WooLentorConditionField( admin_wllocalize_data.option_data['side_mini_cart'], 'on', '.side_mini_cart_field' );

    // After On change
    WooLentorOnChangeField('.notification_content_type .radio', 'radio', '.notification_fake', 'fakes' );
    WooLentorOnChangeField('.notification_content_type .radio', 'radio', '.notification_real', 'actual' );
    WooLentorOnChangeField('.side_mini_cart .checkbox', 'radio', '.side_mini_cart_field', 'on' );

    function WooLentorOnChangeField( field, type = 'select', selector, condition_value ){
        $(field).on('change',function(){
            var change_value = '';
            if( type === 'radio' ){
                if( $(this).is(":checked") ){
                    change_value = $(this).val();
                }
            }else{
                change_value = $(this).val();
            }
            WooLentorConditionField( change_value, condition_value, selector );
        });
    }

    // Hide || Show
    function WooLentorConditionField( value, condition_value, selector ){
        if( value === condition_value ){
            $(selector).show();
        }else{
            $(selector).hide();
        }
    }
    
})(jQuery);