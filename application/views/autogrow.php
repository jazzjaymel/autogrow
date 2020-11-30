<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    	<meta name="description" content="">
		<meta name="author" content="">
		
		<link rel="icon" href="<?=base_url('assets/img/autogrow.png');?>" type="image/x-icon">
		<title>AutoGrow | SKILL TEST - FRONT-END DEVELOPER - JASEL_CARTAGENA</title>
		
    	<!-- Bootstrap core CSS
		<link href="<?=base_url('assets/css/bootstrap.min.css');?>" rel="stylesheet">
		-->

		<link href="<?=base_url('assets/vendor/bootstrap/css/bootstrap.min.css');?>" rel="stylesheet"> 
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" referrerpolicy="no-referrer">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
		
    	<!-- Custom styles for this template -->
		<link href="<?=base_url('assets/css/autogrow/custom-style.css');?>" rel="stylesheet">

		<script type="text/javascript">
			var cicsrftoken = "<?=csrf_token();?>";
			var base_url = "<?=base_url();?>";
		</script>
	</head>

	<body>
		<div id="loadingDiv">
			<div class="loader">Loading...</div>
			<div class="text-center" style="margin-top: -45px;">
				<img src="<?=base_url('assets/img/autogrow.png');?>" style="width: 52px;">
			</div>
		</div>
		<?php $this->load->view('autogrow/toast/toast');?>
		<div class="bs-canvas-overlay bs-canvas-anim bg-dark position-fixed w-100 h-100"></div>

    	<nav class="navbar navbar-expand-md navbar navbar-white bg-white mb-4 mb-4">
			<div class="dropdown profile-dropdown">
			  	<div class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<img class="" src="<?=base_url('assets/img/autogrow.png')?>" /> AutoGrow <i class="fa fa-angle-down"></i>
				</div>
			  	<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<span class="dropdown-menu-arrow"></span>
					<div class="dropdown-item-front">
						<a class="dropdown-item dropdown-item-change-profile text-center" href="javascript:(void(0));">Change Profile&nbsp;&nbsp;<i class="fa fa-angle-right"></i></a>
						<div class="dropdown-divider"></div>
			  			<a class="dropdown-item" href="javascript:(void(0));"><i class="fa fa-cog icon-circle-bg"></i>&nbsp;&nbsp;Settings</a>
			  			<a class="dropdown-item" href="javascript:(void(0));"><i class="fa fa-sign-out icon-circle-bg"></i>&nbsp;&nbsp;Profile</a>
					</div>
					<div class="dropdown-item-back d-none">
						<a class="dropdown-item dropdown-item-change-profile-back text-left" href="javascript:(void(0));"><i class="fa fa-long-arrow-left"></i></a>
						<div class="dropdown-divider"></div>
			  			<a class="dropdown-item" href="javascript:(void(0));">Hardnut Advertising</a>
						<a class="dropdown-item" href="javascript:(void(0));">GP Group</a>
						<a class="dropdown-item" href="javascript:(void(0));">AutoGrow</a>
					</div>
				</div>
			</div>

			<div class="collapse navbar-collapse justify-content-md-center" id="navbar_checkbox">
        	  	<ul class="navbar-nav m-auto">
        	  	  	<li class="nav-item">
						<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="ideas_checkbox" checked>
							<label class="custom-control-label" for="ideas_checkbox"><span>Ideas</span></label>
						</div>
        	  	  	</li>
        	  	  	<li class="nav-item nav-item-middle">
						<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="made_checkbox" checked>
							<label class="custom-control-label" for="made_checkbox"><span>Made</span></label>
						</div>
        	  	  	</li>
        	  	  	<li class="nav-item">
						<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="real_checkbox" checked>
							<label class="custom-control-label" for="real_checkbox"><span>Real</span></label>
						</div>
        	  	  	</li>
        	  	</ul>
			</div>
			
			<div class="tools">
			  	<div class="tools-toggle" href="#" role="button" id="toolsMenuLink" data-toggle="canvas" data-target="#bs-canvas-right" aria-expanded="false" aria-controls="bs-canvas-right">
					<span class="span-tool">Tools</span> <i class="fa fa-crosshairs"></i>
				</div>
			</div>
		</nav>
        
    	<div id="bs-canvas-right" class="bs-canvas bs-canvas-anim bs-canvas-right position-fixed bg-light h-100">
    	    <header class="bs-canvas-header p-3 bg-dark overflow-auto" style="height: 75px;">
    	        <button type="button" class="bs-canvas-close float-left close" aria-label="Close"><span aria-hidden="true" class="close-sidebar text-light">&times;</span></button>
    	        <h4 class="d-inline-block text-light mb-0 float-right">Tools Sidebar</h4>
    	    </header>
    	    <div class="bs-canvas-content px-3 py-5">
				<div class="round hollow text-center">
        			<a href="#" id="addClass"><span class="glyphicon glyphicon-comment"></span> Open Chat </a>
       			</div>
    	    </div>    
		</div>
    	<main role="main" class="container mb-5" id="main_container">
			<div class="row m-content d-none">
				<div class="col p-0">
					<div class="m-nav m-auto">
						<ul class="m-auto">
        	  			  	<li class="nav-item">
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="m_ideas_checkbox" checked>
									<input type="hidden" id="ideas_check_val">
									<label class="custom-control-label" for="m_ideas_checkbox"><span>Ideas</span></label>
								</div>
        	  			  	</li>
        	  			  	<li class="nav-item nav-item-middle">
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="m_made_checkbox" checked>
									<input type="hidden" id="made_check_val">
									<label class="custom-control-label" for="m_made_checkbox"><span>Made</span></label>
								</div>
        	  			  	</li>
        	  			  	<li class="nav-item">
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="m_real_checkbox" checked>
									<input type="hidden" id="real_check_val">
									<label class="custom-control-label" for="m_real_checkbox"><span>Real</span></label>
								</div>
        	  			  	</li>
        	  			</ul>
					</div>
				</div>
			</div>
			<br>
			<div class="row search-content">
    			<div class="col">
					<div class="row no-gutters">
    			    	<div class="col">
    			        	<input class="form-control border-right-0 rounded-0" type="text" id="search-input" placeholder="Search or add new Idea">
    			    	</div>
    			    	<div class="col-auto">
    			    	    <span class="border-left-0 rounded-0 rounded-right"><i class="fa fa-search"></i></span>
    			    	</div>
    			    	<div class="col-auto">
    			    	    <button class="btn btn-outline-secondary border-left-0 rounded-0 rounded-right" id="create_idea" type="button">
								<b class="search-create">Create</b><b class="search-add d-none"><i class="fa fa-plus"></i></b>
							</button>
    			    	</div>
					</div>
				</div>
			</div>
			<br>
			<div class="loading-content text-center text-success" style="font-size:32px; height: 40px;margin-top: -60px;margin-bottom: 30px;"></div>
			
			<div id="ideas-container">
				<?php $this->load->view('autogrow/ideas/index');?>
			</div>
		</main>

		<?php $this->load->view('autogrow/modals/delete_idea');?>

		<script type="text/javascript" src="<?=base_url('assets/vendor/jquery/jquery.min.js');?>"></script>
		<script type="text/javascript" src="<?=base_url('assets/vendor/bootstrap/js/bootstrap.bundle.js');?>"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>

		<script type="text/javascript" src="<?=base_url('assets/js/autogrow/custom.js');?>"></script>
	</body>
	<div id="myglobalModal"></div>
	<?php $this->load->view('autogrow/chat/index');?>
</html>