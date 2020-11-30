/*!
 * Custom JS Functionality
 * Author: Jasel Cartagena
 * Date: November 23, 2020
*/
$(window).on('load', function(){
    setTimeout(removeLoader, 3000);
});

$(function() {
    var loading = loading_spinner('Processing');
    $('[data-tooltip="tooltip"]').tooltip();

    $(document.body).on("change", "#ideas_checkbox", function() {
        var btn = $(this),
            m_btn = $('#m_ideas_checkbox'),
            ideas_check_val = $('#ideas_check_val');
        if (btn.is(':checked')) {
            m_btn.prop('checked', true);
            ideas_check_val.val(1);
            populate_ideas(1,1);
        } else {
            m_btn.prop('checked', false);
            ideas_check_val.val('');
            populate_ideas(1,0);
        }
    }).on("change", "#m_ideas_checkbox", function() {
        var m_btn = $(this),
            btn = $('#ideas_checkbox');
            ideas_check_val = $('#ideas_check_val');
        if (m_btn.is(':checked')) {
            btn.prop('checked', true);
            ideas_check_val.val(1);
            populate_ideas(1,1);
        } else {
            btn.prop('checked', false);
            ideas_check_val.val('');
            populate_ideas(1,0);
        }
    });

    $(document.body).on("change", "#made_checkbox", function() {
        var btn = $(this),
            m_btn = $('#m_made_checkbox'),
            made_check_val = $('#made_check_val');
        if (btn.is(':checked')) {
            m_btn.prop('checked', true);
            made_check_val.val(1);
            populate_ideas(2,1);
        } else {
            m_btn.prop('checked', false);
            made_check_val.val('');
            populate_ideas(2,0);
        }
    }).on("change", "#m_made_checkbox", function() {
        var m_btn = $(this),
            btn = $('#made_checkbox');
            made_check_val = $('#made_check_val');
        if (m_btn.is(':checked')) {
            btn.prop('checked', true);
            made_check_val.val(1);
            populate_ideas(2,1);
        } else {
            btn.prop('checked', false);
            made_check_val.val('');
            populate_ideas(2,0);
        }
    });

    $(document.body).on("change", "#real_checkbox", function() {
        var btn = $(this),
            m_btn = $('#m_real_checkbox'),
            real_check_val = $('#real_check_val');
        if (btn.is(':checked')) {
            m_btn.prop('checked', true);
            real_check_val.val(1);
            populate_ideas(3,1);
        } else {
            m_btn.prop('checked', false);
            real_check_val.val('');
            populate_ideas(3,0);
        }
    }).on("change", "#m_real_checkbox", function() {
        var m_btn = $(this),
            btn = $('#real_checkbox');
            real_check_val = $('#real_check_val');
        if (m_btn.is(':checked')) {
            btn.prop('checked', true);
            real_check_val.val(1);
            populate_ideas(3,1);
        } else {
            btn.prop('checked', false);
            real_check_val.val('');
            populate_ideas(3,0);
        }
    });
    
    var bsDefaults = {
        offset: false,
        overlay: true,
        width: '330px'
    },
    bsMain = $('.bs-offset-main'),
    bsOverlay = $('.bs-canvas-overlay');
     
    $('[data-toggle="canvas"][aria-expanded="false"]').on('click', function() {
        var canvas = $(this).data('target'),
            opts = $.extend({}, bsDefaults, $(canvas).data()),
            prop = $(canvas).hasClass('bs-canvas-right') ? 'margin-right' : 'margin-left';
    
        if (opts.width === '100%') {
            opts.offset = false;
        }
          
       
        $(canvas).css('width', opts.width);
        if (opts.offset && bsMain.length) {
            bsMain.css(prop, opts.width);
        }

        $(canvas + ' .bs-canvas-close').attr('aria-expanded', "true");
        $('[data-toggle="canvas"][data-target="' + canvas + '"]').attr('aria-expanded', "true");

        if (opts.overlay && bsOverlay.length) {
           bsOverlay.addClass('show');
        }

        return false;
    });
     
    $('.bs-canvas-close, .bs-canvas-overlay').on('click', function() {
        close_sidebar();
        return false;
    });

    function close_sidebar() {
        var canvas, aria;
        if ($(this).hasClass('bs-canvas-close')) {
            canvas = $(this).closest('.bs-canvas');
            aria = $(this).add($('[data-toggle="canvas"][data-target="#' + canvas.attr('id') + '"]'));
            if (bsMain.length)
                bsMain.css(($(canvas).hasClass('bs-canvas-right') ? 'margin-right' : 'margin-left'), '');
        } else {
            canvas = $('.bs-canvas');
            aria = $('.bs-canvas-close, [data-toggle="canvas"]');
            if (bsMain.length)
            bsMain.css({
               'margin-left': '',
               'margin-right': ''
            });
        }

        canvas.css('width', '');
        aria.attr('aria-expanded', "false");

        if (bsOverlay.length)
            bsOverlay.removeClass('show');
    }

    $(document.body).on("click", ".dropdown-item-change-profile", function() {
        console.log('Front clicked!');

        var btn = $(this)
            front = $('.dropdown-item-front')
            back = $('.dropdown-item-back');
        
        back.removeClass('d-none');
        front.addClass('d-none');
        
        return false;
    });
    
    $(document.body).on("click", ".dropdown-item-change-profile-back", function() {
        console.log('Back clicked!');

        var btn = $(this)
            front = $('.dropdown-item-front')
            back = $('.dropdown-item-back');
        
        back.addClass('d-none');
        front.removeClass('d-none');
        
        return false;
    });

    $(document.body).on("click", "#create_idea", function() {
        var btn = $(this),
            search_parent = btn.closest('.search-content'),
            search_input = search_parent.find('#search-input'),

            card_parent = btn.closest('.card'),
            car_top_header = card_parent.find('.card-top-header'),
            progress_bar = car_top_header.find('.progress-bar'),
            progress_value = car_top_header.find('.progress-value'),
            card_body = card_parent.find('.card-body');
            notes = card_parent.find('.notes p');
        
        if (search_input.val() == '') {
            search_input.focus();
            return false;
        } else {
            var idea_count = $('div#idea-content').length;

            show_loading_ideas(2);
            
            $('#ideas-container').prepend(idea_content_html(search_input.val(), idea_count + 1));
            search_input.val('');
            $(".new-idea").hide();
            $( "#loadingDiv" ).remove();
            setTimeout(function(){
                $(".new-idea").fadeIn().removeClass('new-idea');
            }, 1500);
        }
    });
    
    $(document.body).on("click", ".card-title", function() {
        var btn = $(this);
            card_parent = btn.closest('.card');
            card_angle_icon = card_parent.find('i.angle-icon');
            card_body = card_parent.find('.card-body');
        
        if (card_body.hasClass('d-none')) {
            card_body.removeClass('d-none');
            card_angle_icon.removeClass('fa-angle-right').addClass('fa-angle-down');
        } else {
            card_body.addClass('d-none');
            card_angle_icon.removeClass('fa-angle-down').addClass('fa-angle-right');
        }
        return false;
    });
    
    $(document.body).on("click", "#add_notes", function() {
        var btn = $(this),
            card_parent = btn.closest('.card'),
            card_body = card_parent.find('.card-body'),
            input_content = card_parent.find('.input-content'),
            textarea = card_parent.find('textarea.notes-texts'),
            delete_idea = card_parent.find('#delete_idea');
        
        btn.html('Save Notes').attr('disabled', 'disabled').attr('id', 'save_notes');
        delete_idea.html('Cancel').removeAttr('id').removeAttr('disabled').attr('id', 'cancel');
        input_content.removeClass('d-none');
        textarea.removeClass('d-none').focus();
        return false;
    });

    $(document.body).on("keyup", ".notes-texts", function() {
        var textarea = $(this),
            card_parent = textarea.closest('.card'),
            card_body = card_parent.find('.card-body'),
            save_notes_btn = card_body.find('#save_notes');
        
        if (textarea.val() != '') {
            save_notes_btn.removeAttr('disabled');
        } else {
            save_notes_btn.attr('disabled', 'disabled');
        }
    });
    
    $(document.body).on("click", "#cancel", function() {
        var btn = $(this),
            card_parent = btn.closest('.card'),
            card_body = card_parent.find('.card-body'),
            input_content = card_body.find('.input-content'),
            notes = card_body.find('.notes p'),
            textarea = card_body.find('textarea.notes-texts'),
            save_notes = card_body.find('#save_notes'),
            edit_notes = card_body.find('#edit_notes');

        textarea.addClass('d-none').val('');
        notes.removeClass('d-none');

        if (notes.length) {
            save_notes.html('Edit Notes').removeAttr('id').removeAttr('disabled').attr('id', 'edit_notes');
        } else {
            save_notes.html('Add Notes').removeAttr('id').removeAttr('disabled').attr('id', 'add_notes');
        }
        
        btn.html('Delete Idea').removeAttr('id').attr('id', 'delete_idea').attr('disabled', 'disabled');
    });
    
    $(document.body).on("click", "#save_notes", function() {
        var btn = $(this),
            card_parent = btn.closest('.card'),
            card_body = card_parent.find('.card-body'),
            input_content = card_body.find('.input-content'),
            notes = card_body.find('.notes'),
            textarea = card_body.find('textarea.notes-texts'),
            notes_val = textarea.val(),
            btn_cancel = card_body.find('#cancel');

        var data = {
            cicsrftoken: cicsrftoken,
            notes : notes_val
        };

        $.ajax({
            url: base_url+"ajax/submit/add_notes",
            type: "POST",
            dataType: 'json',
            data: data,
            beforeSend: function() {
                btn.prop('disabled', true).html(loading);
            },
            success: function(res) {
                if (res.success) {
                    setTimeout(function(){
                        notes.html('<p>'+res.data.notes.replace(/\n/g,"<br>")+'</p>').removeClass('d-none');
                        textarea.val('').addClass('d-none');
                        btn.html('Edit Notes').removeAttr('id').removeAttr('disabled').attr('id', 'edit_notes');
                        btn_cancel.html('Delete Idea').removeAttr('id').attr('id', 'delete_idea').attr('disabled', 'disabled');
                        setTimeout(function(){
                            show_toast_notification('success', res.title, res.message);
                        }, 500);
                    }, 1000);
                } else {
                    show_toast_notification('danger', res.title, res.message);
                    btn.prop('disabled', false).html('Add Notes');
                }
            }
        });
    });

    $(document.body).on("click", "#edit_notes", function() {
        var btn = $(this),
            card_parent = btn.closest('.card'),
            card_body = card_parent.find('.card-body'),
            input_content = card_parent.find('.input-content'),
            notes_p = card_body.find('.notes p'),
            textarea = card_parent.find('textarea.notes-texts'),
            delete_idea = card_parent.find('#delete_idea');

        btn.html('Save Notes').attr('disabled', 'disabled').attr('id', 'save_notes');
        delete_idea.html('Cancel').removeAttr('id').removeAttr('disabled').attr('id', 'cancel');
        notes_p.addClass('d-none');
        
        var notes = br2nl(notes_p.html());
        textarea.val(notes);
        textarea.removeClass('d-none').focus();
        return false;
    });

    $(document.body).on("click", "#make_it_real", function() {
        var btn = $(this),
            card_parent = btn.closest('.card'),
            car_top_header = card_parent.find('.card-top-header'),
            progress_bar = car_top_header.find('.progress-bar'),
            progress_value = car_top_header.find('.progress-value'),
            
            card_body = card_parent.find('.card-body');
            notes = card_parent.find('.notes p');
        
        if (notes.length) {
            car_top_header.removeClass('d-none');
            progress_bar.animate({
                width: "10%"
            },  {
                duration: 1000,
                easing: 'swing',
                step: function (now) {
                    progress_value.text(Math.ceil(now)+'%');
                }
            });

            setTimeout(function(){
                show_toast_notification('success', 'Success', 'Idea successfully updated.');
            }, 500);
        }
    });

	$(document.body).on('click', '#delete_idea_modal', function() {
        var btn = $(this),
            card_parent = btn.closest('.card'),
            title_content = card_parent.find('.title-content'),
            idea_id = card_parent.attr('data-idea'),
            deleteModal = $('#deleteModal'),
            idea_delete = deleteModal.find('#idea_delete');

		$('.delete_modal').detach().appendTo('#myglobalModal');
        $('#deleteModal').modal().fadeIn();

        $('.idea-title-content').html(title_content.text());
        
        idea_delete.attr('rel', idea_id);
    });

    $(document.body).on('click', '#idea_delete', function() {
        var btn = $(this),
            rel_id = btn.attr('rel'),
            main_container = $('#main_container');
            card_parent = main_container.find('#idea_'+rel_id),
            row_parent = card_parent.closest('.row'),
            
        idea_id = card_parent.attr('data-idea');

        var data = {
            cicsrftoken: cicsrftoken,
            idea_id : idea_id
        };

        $.ajax({
            url: base_url+"ajax/submit/delete_idea",
            type: "POST",
            dataType: 'json',
            data: data,
            beforeSend: function() {
                btn.prop('disabled', true).html(loading);
            },
            success: function(res) {
                if (res.success) {
                    setTimeout(function(){
                        $('.modal').modal('hide');
                        card_parent.addClass('border-danger');
                        setTimeout(function(){
                            btn.prop('disabled', false).html('Delete Idea');
                            row_parent.fadeOut('slow');
                            setTimeout(function(){
                                show_toast_notification('success', res.title, res.message);
                            }, 1000);
                        }, 500);
                    }, 1000);
                    
                } else {
                    show_toast_notification('danger', res.title, res.message);
                    btn.prop('disabled', false).html('Delete Idea');
                }
            }
        });
		return false;
    });

    $(document.body).on("click", "#discuss_in_chat", function(e) {
        $('#chatbox').addClass('popup-box-on');
    });

    $(document.body).on('click', '#addClass', function () {
        close_sidebar();
        setTimeout(function(){
            $('#chatbox').addClass('popup-box-on');
        }, 500);
    });

    $(document.body).on('click', '#hide_chat', function () {
        $('#chatbox').removeClass('popup-box-on');
    });
});

/* Custom Toast */
$(function(b) {
    b.toast = function(a, h, g, l, k) {
        b("#toast-container").length || (b("body").prepend('<div id="toast-container" aria-live="polite" aria-atomic="true"></div>'), b("#toast-container").append('<div id="toast-wrapper"></div>'));
        var c = "",
            d = "",
            e = "text-muted",
            f = "",
            m = "object" === typeof a ? a.title || "" : a || "Notice!";
        h = "object" === typeof a ? a.subtitle || "" : h || "";
        g = "object" === typeof a ? a.content || "" : g || "";
        k = "object" === typeof a ? a.delay || 3E3 : k || 3E3;
        switch ("object" === typeof a ? a.type || "" : l || "info") {
            case "info":
                c = "bg-info";
                f = e = d = "text-white";
                break;
            case "success":
                c = "bg-success";
                f = e = d = "text-white";
                break;
            case "warning":
            case "warn":
                c = "bg-warning";
                f = e = d = "text-white";
                break;
            case "error":
            case "danger":
                c = "bg-danger", f = e = d = "text-white"
        }
        a = '<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="' + k + '">' + ('<div class="toast-header ' + c + " " + d + '">') + ('<strong class="mr-auto">' + m + "</strong>");
        a += '<small class="' + e + '">' + h + "</small>";
        a += '<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">';
        a += '<span aria-hidden="true" class="' + f + '">&times;</span>';
        a += "</button>";
        a += "</div>";
        "" !== g && (a += '<div class="toast-body">', a += g, a += "</div>");
        a += "</div>";
        b("#toast-wrapper").append(a);
        b("#toast-wrapper .toast:last").toast("show")
    }
});

function removeLoader() {
    $('html, body').css({'overflow':'auto'})
    $( "#loadingDiv" ).fadeOut(500, function() {
        $( "#loadingDiv" ).remove();
    });  
}

function populate_ideas(cat, val) {
    show_loading_ideas(1);
    if (cat == 1) {
        var idea_content = $('.idea-content-1');
        idea_content.each(function() {
            var cont = $(this),
                data_cat = cont.attr('data-cat');
            console.log(data_cat);
            
            if (val == 1) {
                cont.removeClass('d-none');
            } else {
                cont.addClass('d-none');
            }
        });
    }
    if (cat == 2) {
        var idea_content = $('.idea-content-2');
        idea_content.each(function() {
            var cont = $(this);
            if (val == 1) {
                cont.removeClass('d-none');
            } else {
                cont.addClass('d-none');
            }
        });
    }
    if (cat == 3) {
        var idea_content = $('.idea-content-3');
        idea_content.each(function() {
            var cont = $(this);
            
            if (val == 1) {
                cont.removeClass('d-none');
            } else {
                cont.addClass('d-none');
            }
        });
    }
}

function show_loading_ideas(v) {
    var ideas_container = $('#ideas-container');
        loading_content = $('.loading-content');

    loading_content.show();
    loading_content.html('<div class="loadingDiv"><div class="loader">Loading...</div></div>');

    if (v == 1) {
        ideas_container.hide();
        setTimeout(function() {
            loading_content.fadeOut(function(){
                ideas_container.fadeIn(function(){
                    loading_content.html('');
                });
            });
        }, 1500);
    }

    if (v == 2) {
        // ideas_container.hide();
        setTimeout(function() {
            loading_content.fadeOut(function(){
                ideas_container.fadeIn(function(){
                    loading_content.html('');
                });
            });
        }, 1500);
    }

    
}

function animate_count(el) {
    var el = $(this);
    el.prop('Counter',0).animate({
        Counter: el.text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            el.text(Math.ceil(now));
        }
    });
}

function show_toast_notification(type, title, content) {

    $.toast({
        title: title,
        subtitle: '<i class="fa fa-clock-o"></i> Just now',
        content: content,
        type: type,
        delay: 5000
    });
}

function loading_spinner(text) {
    var spinner = '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>';
    return typeof text != 'undefined' && text != '' ? text+' '+spinner : spinner;
}

function br2nl(str) {
    return str.replace(/<br\s*[\/]?>/gi, "\n");
}

function idea_content_html(input, idea_count) {
    var content = '<div class="idea-content-1 new-idea row" id="idea-content" data-cat="1" data-id="'+idea_count+'">\
    	<div class="col">\
    		<div class="card card-header-actions box-shadow mx-auto" id="idea_'+idea_count+'" data-idea="'+idea_count+'">\
    			<div class="card-top-header d-none">\
    				<div class="progress-custom">\
    					<div class="row justify-content-md-center">\
    						<div class="col">\
    							<div class="progress">\
    								<div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 00%;"></div>\
    							</div>\
    						</div>\
    						<div class="col-xs-auto">\
    							<div class="progress-value">0%</div>\
    						</div>\
    					</div>\
    				</div>\
    			</div>\
    			<div class="card-header">\
    				<div class="card-title">\
    					<i class="angle-icon fa fa-angle-right"></i>&nbsp;&nbsp;<span class="title-content">'+input+'</span>\
    				</div>\
    				<div class="heading-element">\
    					<ul class="list-inline mb-0">\
    						<li><i class="fa fa-gavel"></i><a href="javascript:(void(0));" class="make-it-real" id="make_it_real"><i>Make it Real</i></a></li>\
    						<li><i class="fa fa-commenting"></i><a href="javascript:(void(0));" class="discuss-in-chat" id="discuss_in_chat"><i>Discuss in chat</i></a></li>\
    						<li><i class="fa fa-times"></i><a href="javascript:(void(0));" class="delete" id="delete_idea_modal"><i>Delete</i></a></li>\
    					</ul>\
    					<div class="dot-icon">\
    						<div class="dropdown">\
    							<div class="dropdown-toggle" href="#" role="button" id="dropdownDots" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
    							<i class="fa fa-ellipsis-v fa-2x" style="opacity:0.6;"></i>\
    							</div>\
    							<div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left" aria-labelledby="dropdownDots">\
    								<div class="dropdown-item-front">\
    									<a class="dropdown-item" href="javascript:(void(0));" id="make_it_real"><i class="fa fa-gavel icon-circle-bg"></i>&nbsp;&nbsp;Make it Real</a>\
    									<a class="dropdown-item" href="javascript:(void(0));"  id="discuss_in_chat"><i class="fa fa-commenting icon-circle-bg"></i>&nbsp;&nbsp;Discuss in chat</a>\
    									<a class="dropdown-item" href="javascript:(void(0));" id="delete_idea_modal"><i class="fa fa-times icon-circle-bg"></i>&nbsp;&nbsp;Delete</a>\
    								</div>\
    							</div>\
    						</div>\
    					</div>\
    				</div>\
    			</div>\
    		    <div class="card-body d-none">\
    		        <div class="d-block pt-4 pr-4 pb-0 pl-4">\
    					<div class="input-content d-none">\
    						<div class="notes"></div>\
    							<textarea type="text" class="form-control notes-texts" name="notes-texts" rows="5" placeholder="Add Notes"></textarea>\
    						<br>\
    					</div>\
    					<button class="btn btn-outline-secondary border-left-0 rounded-0 rounded-right" id="add_notes" type="button">Add Notes</button>\
    					<button class="btn btn-outline-secondary border-left-0 rounded-0 rounded-right" id="delete_idea" type="button" disabled>Delete Idea</button>\
    				</div>\
    		    </div>\
    		</div>\
    	</div>\
    </div>';

    return content;
}