<div class="popup-box chat-popup" id="chatbox">
    <div class="popup-head">
		<div class="popup-head-left pull-left"><img src="<?=base_url('assets/img/autogrow.png');?>" alt="autogrow"> AutoGrow</div>
		<div class="popup-head-right pull-right">
			<button data-widget="remove" id="hide_chat" class="chat-header-button pull-right" type="button">
				<i class="fa fa-close"></i>
			</button>
        </div>
	</div>
	<div class="popup-messages">
		<div class="direct-chat-messages">
			<div class="chat-box-single-line">
				<abbr class="timestamp">November 30, 2020</abbr>
			</div>
            <div class="direct-chat-msg doted-border">
            	<div class="direct-chat-info clearfix">
                	<span class="direct-chat-name pull-left">AutoGrow</span>
                </div>
                <img alt="message user image" src="<?=base_url('assets/img/autogrow.png');?>" class="direct-chat-img">
                <div class="direct-chat-text">Hello! Anything you want to discuss about your idea?</div>
				<div class="direct-chat-info clearfix">
                    <span class="direct-chat-timestamp pull-right"><i class="fa fa-clock-o"></i> Just now</span>
                </div>
            </div>
        </div>
	</div>
	<div class="popup-messages-footer">
		<textarea id="status_message" placeholder="Type a message..." rows="10" cols="40" name="message"></textarea>
	</div>
</div>