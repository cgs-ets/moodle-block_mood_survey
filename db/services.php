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
defined('MOODLE_INTERNAL') || die();

$functions = [
    'block_mood_survey_save_survey_response' => [
    'classname'   => 'block_mood_survey\external\api',
    'methodname'  => 'save_survey_response',
    'classpath'   => '',
    'description' => 'Saves the mood registered by the user.',
    'type'        => 'write',
    'loginrequired' => true,
    'ajax' => true,
    ],

    'block_mood_survey_save_opt_out' => [
    'classname'   => 'block_mood_survey\external\api',
    'methodname'  => 'save_opt_out',
    'classpath'   => '',
    'description' => 'Saves opt out for the user.',
    'type'        => 'write',
    'loginrequired' => true,
    'ajax' => true,
    ],
];

