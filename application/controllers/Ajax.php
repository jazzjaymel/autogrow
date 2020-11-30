<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Ajax extends CI_Controller {

	function __construct() {
		parent::__construct();

    }

	public function submit($action = "") {
		header('Content-type: text/json');

		$success = false;
		$message = "Access denied!";
		if (!$this->input->is_ajax_request()) {
			$response = array("success" => $success, "message" => $message);
			exit(json_encode($response));
		}

		switch ($action) {
			case 'add_notes':
				$response = $this->action_add_notes();
				break;
			case 'delete_idea':
				$response = $this->action_delete_idea();
				break;
		}

		exit(json_encode($response));
	}

	private function action_add_notes() {
		$success = false;
		try {
			extract($this->input->post());
			//$notes = xss_clean($notes);

			if ($notes) {
				$success = false;

				if ($notes != '') {
					$success = true;
					$title = 'Success';
					$message = 'Notes added successfuly.';
					$data = array(
						'notes' => $notes
					);
				} else {
					$success = false;
					$title = 'Error';
					$message = 'Please add some notes.';
					$data = '';
				}

			} else {
				$success = false;
				$message = "Sytem Error";
				$data = '';
			}
			
		} catch (Exception $e) {
			$message = $e->getMessage();
		}

		return array('success' => $success, 'title' => $title, 'message' => $message, 'data' => $data);
	}

	private function action_delete_idea() {
		$success = false;
		try {
			extract($this->input->post());

			if ($idea_id) {
				$success = false;

				if ($idea_id != '') {
					$success = true;
					$title = 'Success';
					$message = 'Idea deleted successfuly.';
					$data = array(
						'notes' => $idea_id
					);
				} else {
					$success = false;
					$title = 'Error';
					$message = 'Invalid idea.';
					$data = '';
				}

			} else {
				$success = false;
				$message = "Sytem Error";
				$data = '';
			}
			
		} catch (Exception $e) {
			$message = $e->getMessage();
		}

		return array('success' => $success, 'title' => $title, 'message' => $message, 'data' => $data);
	}
}