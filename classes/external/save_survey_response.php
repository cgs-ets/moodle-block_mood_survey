<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * A block to check staff and students overall mood.
 *
 * @package     block_mood_survey
 * @copyright   2020 Veronica Bermegui
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace block_mood_survey\external;

defined('MOODLE_INTERNAL') || die();

use external_function_parameters;

require_once($CFG->libdir . "/externallib.php");

trait save_survey_response {

    /**
     * Returns description of method parameters
     * @return external_function_parameters
     */
    public static function save_survey_response_parameters() {
        return new external_function_parameters(
            array(
                'questionid' => new \external_value(PARAM_INT, 'Question ID'),
                'questiontitle' => new \external_value(PARAM_TEXT, 'Question title'),
                'response' => new \external_value(PARAM_RAW, 'Answer value'),
            )
        );
    }

    public static function save_survey_response($questionid, $questiontitle, $response) {
        global $DB, $USER;

        self::validate_parameters(self::save_survey_response_parameters(), compact('questionid', 'questiontitle', 'response'));

        // Insert the response.
        $record = new \stdClass();
        $record->username = $USER->username;
        $record->responsetime = time();
        $record->questionid = $questionid;
        $record->questiontitle = $questiontitle;
        $record->response = $response;
        $id = $DB->insert_record('block_mood_survey_responses', $record);

        // Insert status.
        $record = new \stdClass();
        $record->surveyday = date('Y-m-d', time());
        $record->surveystatus = 1;
        $record->username = $USER->username;
        $record->timecreated = time();

        $DB->insert_record('block_mood_survey_roll', $record);

        return array(
            'result' => $id,
            'completed' => true,
            'message' => get_string('surveycomplete', 'block_mood_survey'),
        );
    }

    /**
     * Returns description of method result value
     * @return external_description
     */
    public static function save_survey_response_returns() {
        return new \external_single_structure(
            array(
                'result' => new \external_value(PARAM_RAW, 'Id of the saved record.'),
                'completed' => new \external_value(PARAM_BOOL, 'Whether the survey is completed.'),
                'message' => new \external_value(PARAM_RAW, 'A message for the result.'),
            )
        );
    }

}
