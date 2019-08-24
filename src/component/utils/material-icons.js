const fonts = [
  { name: '3d_rotation' },
  { name: 'ac_unit' },
  { name: 'access_alarm' },
  { name: 'access_alarms' },
  { name: 'access_time' },
  { name: 'accessibility' },
  { name: 'accessible' },
  { name: 'account_balance' },
  { name: 'account_balance_wallet' },
  { name: 'account_box' },
  { name: 'account_circle' },
  { name: 'adb' },
  { name: 'add' },
  { name: 'add_a_photo' },
  { name: 'add_alarm' },
  { name: 'add_alert' },
  { name: 'add_box' },
  { name: 'add_circle' },
  { name: 'add_circle_outline' },
  { name: 'add_location' },
  { name: 'add_shopping_cart' },
  { name: 'add_to_photos' },
  { name: 'add_to_queue' },
  { name: 'adjust' },
  { name: 'airline_seat_flat' },
  { name: 'airline_seat_flat_angled' },
  { name: 'airline_seat_individual_suite' },
  { name: 'airline_seat_legroom_extra' },
  { name: 'airline_seat_legroom_normal' },
  { name: 'airline_seat_legroom_reduced' },
  { name: 'airline_seat_recline_extra' },
  { name: 'airline_seat_recline_normal' },
  { name: 'airplanemode_active' },
  { name: 'airplanemode_inactive' },
  { name: 'airplay' },
  { name: 'airport_shuttle' },
  { name: 'alarm' },
  { name: 'alarm_add' },
  { name: 'alarm_off' },
  { name: 'alarm_on' },
  { name: 'album' },
  { name: 'all_inclusive' },
  { name: 'all_out' },
  { name: 'android' },
  { name: 'announcement' },
  { name: 'apps' },
  { name: 'archive' },
  { name: 'arrow_back' },
  { name: 'arrow_downward' },
  { name: 'arrow_drop_down' },
  { name: 'arrow_drop_down_circle' },
  { name: 'arrow_drop_up' },
  { name: 'arrow_forward' },
  { name: 'arrow_upward' },
  { name: 'art_track' },
  { name: 'aspect_ratio' },
  { name: 'assessment' },
  { name: 'assignment' },
  { name: 'assignment_ind' },
  { name: 'assignment_late' },
  { name: 'assignment_return' },
  { name: 'assignment_returned' },
  { name: 'assignment_turned_in' },
  { name: 'assistant' },
  { name: 'assistant_photo' },
  { name: 'attach_file' },
  { name: 'attach_money' },
  { name: 'attachment' },
  { name: 'audiotrack' },
  { name: 'autorenew' },
  { name: 'av_timer' },
  { name: 'backspace' },
  { name: 'backup' },
  { name: 'battery_alert' },
  { name: 'battery_charging_full' },
  { name: 'battery_full' },
  { name: 'battery_std' },
  { name: 'battery_unknown' },
  { name: 'beach_access' },
  { name: 'beenhere' },
  { name: 'block' },
  { name: 'bluetooth' },
  { name: 'bluetooth_audio' },
  { name: 'bluetooth_connected' },
  { name: 'bluetooth_disabled' },
  { name: 'bluetooth_searching' },
  { name: 'blur_circular' },
  { name: 'blur_linear' },
  { name: 'blur_off' },
  { name: 'blur_on' },
  { name: 'book' },
  { name: 'bookmark' },
  { name: 'bookmark_border' },
  { name: 'border_all' },
  { name: 'border_bottom' },
  { name: 'border_clear' },
  { name: 'border_color' },
  { name: 'border_horizontal' },
  { name: 'border_inner' },
  { name: 'border_left' },
  { name: 'border_outer' },
  { name: 'border_right' },
  { name: 'border_style' },
  { name: 'border_top' },
  { name: 'border_vertical' },
  { name: 'branding_watermark' },
  { name: 'brightness_1' },
  { name: 'brightness_2' },
  { name: 'brightness_3' },
  { name: 'brightness_4' },
  { name: 'brightness_5' },
  { name: 'brightness_6' },
  { name: 'brightness_7' },
  { name: 'brightness_auto' },
  { name: 'brightness_high' },
  { name: 'brightness_low' },
  { name: 'brightness_medium' },
  { name: 'broken_image' },
  { name: 'brush' },
  { name: 'bubble_chart' },
  { name: 'bug_report' },
  { name: 'build' },
  { name: 'burst_mode' },
  { name: 'business' },
  { name: 'business_center' },
  { name: 'cached' },
  { name: 'cake' },
  { name: 'call' },
  { name: 'call_end' },
  { name: 'call_made' },
  { name: 'call_merge' },
  { name: 'call_missed' },
  { name: 'call_missed_outgoing' },
  { name: 'call_received' },
  { name: 'call_split' },
  { name: 'call_to_action' },
  { name: 'camera' },
  { name: 'camera_alt' },
  { name: 'camera_enhance' },
  { name: 'camera_front' },
  { name: 'camera_rear' },
  { name: 'camera_roll' },
  { name: 'cancel' },
  { name: 'card_giftcard' },
  { name: 'card_membership' },
  { name: 'card_travel' },
  { name: 'casino' },
  { name: 'cast' },
  { name: 'cast_connected' },
  { name: 'center_focus_strong' },
  { name: 'center_focus_weak' },
  { name: 'change_history' },
  { name: 'chat' },
  { name: 'chat_bubble' },
  { name: 'chat_bubble_outline' },
  { name: 'check' },
  { name: 'check_box' },
  { name: 'check_box_outline_blank' },
  { name: 'check_circle' },
  { name: 'chevron_left' },
  { name: 'chevron_right' },
  { name: 'child_care' },
  { name: 'child_friendly' },
  { name: 'chrome_reader_mode' },
  { name: 'class' },
  { name: 'clear' },
  { name: 'clear_all' },
  { name: 'close' },
  { name: 'closed_caption' },
  { name: 'cloud' },
  { name: 'cloud_circle' },
  { name: 'cloud_done' },
  { name: 'cloud_download' },
  { name: 'cloud_off' },
  { name: 'cloud_queue' },
  { name: 'cloud_upload' },
  { name: 'code' },
  { name: 'collections' },
  { name: 'collections_bookmark' },
  { name: 'color_lens' },
  { name: 'colorize' },
  { name: 'comment' },
  { name: 'compare' },
  { name: 'compare_arrows' },
  { name: 'computer' },
  { name: 'confirmation_number' },
  { name: 'contact_mail' },
  { name: 'contact_phone' },
  { name: 'contacts' },
  { name: 'content_copy' },
  { name: 'content_cut' },
  { name: 'content_paste' },
  { name: 'control_point' },
  { name: 'control_point_duplicate' },
  { name: 'copyright' },
  { name: 'create' },
  { name: 'create_new_folder' },
  { name: 'credit_card' },
  { name: 'crop' },
  { name: 'crop_16_9' },
  { name: 'crop_3_2' },
  { name: 'crop_5_4' },
  { name: 'crop_7_5' },
  { name: 'crop_din' },
  { name: 'crop_free' },
  { name: 'crop_landscape' },
  { name: 'crop_original' },
  { name: 'crop_portrait' },
  { name: 'crop_rotate' },
  { name: 'crop_square' },
  { name: 'dashboard' },
  { name: 'data_usage' },
  { name: 'date_range' },
  { name: 'dehaze' },
  { name: 'delete' },
  { name: 'delete_forever' },
  { name: 'delete_sweep' },
  { name: 'description' },
  { name: 'desktop_mac' },
  { name: 'desktop_windows' },
  { name: 'details' },
  { name: 'developer_board' },
  { name: 'developer_mode' },
  { name: 'device_hub' },
  { name: 'devices' },
  { name: 'devices_other' },
  { name: 'dialer_sip' },
  { name: 'dialpad' },
  { name: 'directions' },
  { name: 'directions_bike' },
  { name: 'directions_boat' },
  { name: 'directions_bus' },
  { name: 'directions_car' },
  { name: 'directions_railway' },
  { name: 'directions_run' },
  { name: 'directions_subway' },
  { name: 'directions_transit' },
  { name: 'directions_walk' },
  { name: 'disc_full' },
  { name: 'dns' },
  { name: 'do_not_disturb' },
  { name: 'do_not_disturb_alt' },
  { name: 'do_not_disturb_off' },
  { name: 'do_not_disturb_on' },
  { name: 'dock' },
  { name: 'domain' },
  { name: 'done' },
  { name: 'done_all' },
  { name: 'donut_large' },
  { name: 'donut_small' },
  { name: 'drafts' },
  { name: 'drag_handle' },
  { name: 'drive_eta' },
  { name: 'dvr' },
  { name: 'edit' },
  { name: 'edit_location' },
  { name: 'eject' },
  { name: 'email' },
  { name: 'enhanced_encryption' },
  { name: 'equalizer' },
  { name: 'error' },
  { name: 'error_outline' },
  { name: 'euro_symbol' },
  { name: 'ev_station' },
  { name: 'event' },
  { name: 'event_available' },
  { name: 'event_busy' },
  { name: 'event_note' },
  { name: 'event_seat' },
  { name: 'exit_to_app' },
  { name: 'expand_less' },
  { name: 'expand_more' },
  { name: 'explicit' },
  { name: 'explore' },
  { name: 'exposure' },
  { name: 'exposure_neg_1' },
  { name: 'exposure_neg_2' },
  { name: 'exposure_plus_1' },
  { name: 'exposure_plus_2' },
  { name: 'exposure_zero' },
  { name: 'extension' },
  { name: 'face' },
  { name: 'fast_forward' },
  { name: 'fast_rewind' },
  { name: 'favorite' },
  { name: 'favorite_border' },
  { name: 'featured_play_list' },
  { name: 'featured_video' },
  { name: 'feedback' },
  { name: 'fiber_dvr' },
  { name: 'fiber_manual_record' },
  { name: 'fiber_new' },
  { name: 'fiber_pin' },
  { name: 'fiber_smart_record' },
  { name: 'file_download' },
  { name: 'file_upload' },
  { name: 'filter' },
  { name: 'filter_1' },
  { name: 'filter_2' },
  { name: 'filter_3' },
  { name: 'filter_4' },
  { name: 'filter_5' },
  { name: 'filter_6' },
  { name: 'filter_7' },
  { name: 'filter_8' },
  { name: 'filter_9' },
  { name: 'filter_9_plus' },
  { name: 'filter_b_and_w' },
  { name: 'filter_center_focus' },
  { name: 'filter_drama' },
  { name: 'filter_frames' },
  { name: 'filter_hdr' },
  { name: 'filter_list' },
  { name: 'filter_none' },
  { name: 'filter_tilt_shift' },
  { name: 'filter_vintage' },
  { name: 'find_in_page' },
  { name: 'find_replace' },
  { name: 'fingerprint' },
  { name: 'first_page' },
  { name: 'fitness_center' },
  { name: 'flag' },
  { name: 'flare' },
  { name: 'flash_auto' },
  { name: 'flash_off' },
  { name: 'flash_on' },
  { name: 'flight' },
  { name: 'flight_land' },
  { name: 'flight_takeoff' },
  { name: 'flip' },
  { name: 'flip_to_back' },
  { name: 'flip_to_front' },
  { name: 'folder' },
  { name: 'folder_open' },
  { name: 'folder_shared' },
  { name: 'folder_special' },
  { name: 'font_download' },
  { name: 'format_align_center' },
  { name: 'format_align_justify' },
  { name: 'format_align_left' },
  { name: 'format_align_right' },
  { name: 'format_bold' },
  { name: 'format_clear' },
  { name: 'format_color_fill' },
  { name: 'format_color_reset' },
  { name: 'format_color_text' },
  { name: 'format_indent_decrease' },
  { name: 'format_indent_increase' },
  { name: 'format_italic' },
  { name: 'format_line_spacing' },
  { name: 'format_list_bulleted' },
  { name: 'format_list_numbered' },
  { name: 'format_paint' },
  { name: 'format_quote' },
  { name: 'format_shapes' },
  { name: 'format_size' },
  { name: 'format_strikethrough' },
  { name: 'format_textdirection_l_to_r' },
  { name: 'format_textdirection_r_to_l' },
  { name: 'format_underlined' },
  { name: 'forum' },
  { name: 'forward' },
  { name: 'forward_10' },
  { name: 'forward_30' },
  { name: 'forward_5' },
  { name: 'free_breakfast' },
  { name: 'fullscreen' },
  { name: 'fullscreen_exit' },
  { name: 'functions' },
  { name: 'g_translate' },
  { name: 'gamepad' },
  { name: 'games' },
  { name: 'gavel' },
  { name: 'gesture' },
  { name: 'get_app' },
  { name: 'gif' },
  { name: 'golf_course' },
  { name: 'gps_fixed' },
  { name: 'gps_not_fixed' },
  { name: 'gps_off' },
  { name: 'grade' },
  { name: 'gradient' },
  { name: 'grain' },
  { name: 'graphic_eq' },
  { name: 'grid_off' },
  { name: 'grid_on' },
  { name: 'group' },
  { name: 'group_add' },
  { name: 'group_work' },
  { name: 'hd' },
  { name: 'hdr_off' },
  { name: 'hdr_on' },
  { name: 'hdr_strong' },
  { name: 'hdr_weak' },
  { name: 'headset' },
  { name: 'headset_mic' },
  { name: 'healing' },
  { name: 'hearing' },
  { name: 'help' },
  { name: 'help_outline' },
  { name: 'high_quality' },
  { name: 'highlight' },
  { name: 'highlight_off' },
  { name: 'history' },
  { name: 'home' },
  { name: 'hot_tub' },
  { name: 'hotel' },
  { name: 'hourglass_empty' },
  { name: 'hourglass_full' },
  { name: 'http' },
  { name: 'https' },
  { name: 'image' },
  { name: 'image_aspect_ratio' },
  { name: 'import_contacts' },
  { name: 'import_export' },
  { name: 'important_devices' },
  { name: 'inbox' },
  { name: 'indeterminate_check_box' },
  { name: 'info' },
  { name: 'info_outline' },
  { name: 'input' },
  { name: 'insert_chart' },
  { name: 'insert_comment' },
  { name: 'insert_drive_file' },
  { name: 'insert_emoticon' },
  { name: 'insert_invitation' },
  { name: 'insert_link' },
  { name: 'insert_photo' },
  { name: 'invert_colors' },
  { name: 'invert_colors_off' },
  { name: 'iso' },
  { name: 'keyboard' },
  { name: 'keyboard_arrow_down' },
  { name: 'keyboard_arrow_left' },
  { name: 'keyboard_arrow_right' },
  { name: 'keyboard_arrow_up' },
  { name: 'keyboard_backspace' },
  { name: 'keyboard_capslock' },
  { name: 'keyboard_hide' },
  { name: 'keyboard_return' },
  { name: 'keyboard_tab' },
  { name: 'keyboard_voice' },
  { name: 'kitchen' },
  { name: 'label' },
  { name: 'label_outline' },
  { name: 'landscape' },
  { name: 'language' },
  { name: 'laptop' },
  { name: 'laptop_chromebook' },
  { name: 'laptop_mac' },
  { name: 'laptop_windows' },
  { name: 'last_page' },
  { name: 'launch' },
  { name: 'layers' },
  { name: 'layers_clear' },
  { name: 'leak_add' },
  { name: 'leak_remove' },
  { name: 'lens' },
  { name: 'library_add' },
  { name: 'library_books' },
  { name: 'library_music' },
  { name: 'lightbulb_outline' },
  { name: 'line_style' },
  { name: 'line_weight' },
  { name: 'linear_scale' },
  { name: 'link' },
  { name: 'linked_camera' },
  { name: 'list' },
  { name: 'live_help' },
  { name: 'live_tv' },
  { name: 'local_activity' },
  { name: 'local_airport' },
  { name: 'local_atm' },
  { name: 'local_bar' },
  { name: 'local_cafe' },
  { name: 'local_car_wash' },
  { name: 'local_convenience_store' },
  { name: 'local_dining' },
  { name: 'local_drink' },
  { name: 'local_florist' },
  { name: 'local_gas_station' },
  { name: 'local_grocery_store' },
  { name: 'local_hospital' },
  { name: 'local_hotel' },
  { name: 'local_laundry_service' },
  { name: 'local_library' },
  { name: 'local_mall' },
  { name: 'local_movies' },
  { name: 'local_offer' },
  { name: 'local_parking' },
  { name: 'local_pharmacy' },
  { name: 'local_phone' },
  { name: 'local_pizza' },
  { name: 'local_play' },
  { name: 'local_post_office' },
  { name: 'local_printshop' },
  { name: 'local_see' },
  { name: 'local_shipping' },
  { name: 'local_taxi' },
  { name: 'location_city' },
  { name: 'location_disabled' },
  { name: 'location_off' },
  { name: 'location_on' },
  { name: 'location_searching' },
  { name: 'lock' },
  { name: 'lock_open' },
  { name: 'lock_outline' },
  { name: 'looks' },
  { name: 'looks_3' },
  { name: 'looks_4' },
  { name: 'looks_5' },
  { name: 'looks_6' },
  { name: 'looks_one' },
  { name: 'looks_two' },
  { name: 'loop' },
  { name: 'loupe' },
  { name: 'low_priority' },
  { name: 'loyalty' },
  { name: 'mail' },
  { name: 'mail_outline' },
  { name: 'map' },
  { name: 'markunread' },
  { name: 'markunread_mailbox' },
  { name: 'memory' },
  { name: 'menu' },
  { name: 'merge_type' },
  { name: 'message' },
  { name: 'mic' },
  { name: 'mic_none' },
  { name: 'mic_off' },
  { name: 'mms' },
  { name: 'mode_comment' },
  { name: 'mode_edit' },
  { name: 'monetization_on' },
  { name: 'money_off' },
  { name: 'monochrome_photos' },
  { name: 'mood' },
  { name: 'mood_bad' },
  { name: 'more' },
  { name: 'more_horiz' },
  { name: 'more_vert' },
  { name: 'motorcycle' },
  { name: 'mouse' },
  { name: 'move_to_inbox' },
  { name: 'movie' },
  { name: 'movie_creation' },
  { name: 'movie_filter' },
  { name: 'multiline_chart' },
  { name: 'music_note' },
  { name: 'music_video' },
  { name: 'my_location' },
  { name: 'nature' },
  { name: 'nature_people' },
  { name: 'navigate_before' },
  { name: 'navigate_next' },
  { name: 'navigation' },
  { name: 'near_me' },
  { name: 'network_cell' },
  { name: 'network_check' },
  { name: 'network_locked' },
  { name: 'network_wifi' },
  { name: 'new_releases' },
  { name: 'next_week' },
  { name: 'nfc' },
  { name: 'no_encryption' },
  { name: 'no_sim' },
  { name: 'not_interested' },
  { name: 'note' },
  { name: 'note_add' },
  { name: 'notifications' },
  { name: 'notifications_active' },
  { name: 'notifications_none' },
  { name: 'notifications_off' },
  { name: 'notifications_paused' },
  { name: 'offline_pin' },
  { name: 'ondemand_video' },
  { name: 'opacity' },
  { name: 'open_in_browser' },
  { name: 'open_in_new' },
  { name: 'open_with' },
  { name: 'pages' },
  { name: 'pageview' },
  { name: 'palette' },
  { name: 'pan_tool' },
  { name: 'panorama' },
  { name: 'panorama_fish_eye' },
  { name: 'panorama_horizontal' },
  { name: 'panorama_vertical' },
  { name: 'panorama_wide_angle' },
  { name: 'party_mode' },
  { name: 'pause' },
  { name: 'pause_circle_filled' },
  { name: 'pause_circle_outline' },
  { name: 'payment' },
  { name: 'people' },
  { name: 'people_outline' },
  { name: 'perm_camera_mic' },
  { name: 'perm_contact_calendar' },
  { name: 'perm_data_setting' },
  { name: 'perm_device_information' },
  { name: 'perm_identity' },
  { name: 'perm_media' },
  { name: 'perm_phone_msg' },
  { name: 'perm_scan_wifi' },
  { name: 'person' },
  { name: 'person_add' },
  { name: 'person_outline' },
  { name: 'person_pin' },
  { name: 'person_pin_circle' },
  { name: 'personal_video' },
  { name: 'pets' },
  { name: 'phone' },
  { name: 'phone_android' },
  { name: 'phone_bluetooth_speaker' },
  { name: 'phone_forwarded' },
  { name: 'phone_in_talk' },
  { name: 'phone_iphone' },
  { name: 'phone_locked' },
  { name: 'phone_missed' },
  { name: 'phone_paused' },
  { name: 'phonelink' },
  { name: 'phonelink_erase' },
  { name: 'phonelink_lock' },
  { name: 'phonelink_off' },
  { name: 'phonelink_ring' },
  { name: 'phonelink_setup' },
  { name: 'photo' },
  { name: 'photo_album' },
  { name: 'photo_camera' },
  { name: 'photo_filter' },
  { name: 'photo_library' },
  { name: 'photo_size_select_actual' },
  { name: 'photo_size_select_large' },
  { name: 'photo_size_select_small' },
  { name: 'picture_as_pdf' },
  { name: 'picture_in_picture' },
  { name: 'picture_in_picture_alt' },
  { name: 'pie_chart' },
  { name: 'pie_chart_outlined' },
  { name: 'pin_drop' },
  { name: 'place' },
  { name: 'play_arrow' },
  { name: 'play_circle_filled' },
  { name: 'play_circle_outline' },
  { name: 'play_for_work' },
  { name: 'playlist_add' },
  { name: 'playlist_add_check' },
  { name: 'playlist_play' },
  { name: 'plus_one' },
  { name: 'poll' },
  { name: 'polymer' },
  { name: 'pool' },
  { name: 'portable_wifi_off' },
  { name: 'portrait' },
  { name: 'power' },
  { name: 'power_input' },
  { name: 'power_settings_new' },
  { name: 'pregnant_woman' },
  { name: 'present_to_all' },
  { name: 'print' },
  { name: 'priority_high' },
  { name: 'public' },
  { name: 'publish' },
  { name: 'query_builder' },
  { name: 'question_answer' },
  { name: 'queue' },
  { name: 'queue_music' },
  { name: 'queue_play_next' },
  { name: 'radio' },
  { name: 'radio_button_checked' },
  { name: 'radio_button_unchecked' },
  { name: 'rate_review' },
  { name: 'receipt' },
  { name: 'recent_actors' },
  { name: 'record_voice_over' },
  { name: 'redeem' },
  { name: 'redo' },
  { name: 'refresh' },
  { name: 'remove' },
  { name: 'remove_circle' },
  { name: 'remove_circle_outline' },
  { name: 'remove_from_queue' },
  { name: 'remove_red_eye' },
  { name: 'remove_shopping_cart' },
  { name: 'reorder' },
  { name: 'repeat' },
  { name: 'repeat_one' },
  { name: 'replay' },
  { name: 'replay_10' },
  { name: 'replay_30' },
  { name: 'replay_5' },
  { name: 'reply' },
  { name: 'reply_all' },
  { name: 'report' },
  { name: 'report_problem' },
  { name: 'restaurant' },
  { name: 'restaurant_menu' },
  { name: 'restore' },
  { name: 'restore_page' },
  { name: 'ring_volume' },
  { name: 'room' },
  { name: 'room_service' },
  { name: 'rotate_90_degrees_ccw' },
  { name: 'rotate_left' },
  { name: 'rotate_right' },
  { name: 'rounded_corner' },
  { name: 'router' },
  { name: 'rowing' },
  { name: 'rss_feed' },
  { name: 'rv_hookup' },
  { name: 'satellite' },
  { name: 'save' },
  { name: 'scanner' },
  { name: 'schedule' },
  { name: 'school' },
  { name: 'screen_lock_landscape' },
  { name: 'screen_lock_portrait' },
  { name: 'screen_lock_rotation' },
  { name: 'screen_rotation' },
  { name: 'screen_share' },
  { name: 'sd_card' },
  { name: 'sd_storage' },
  { name: 'search' },
  { name: 'security' },
  { name: 'select_all' },
  { name: 'send' },
  { name: 'sentiment_dissatisfied' },
  { name: 'sentiment_neutral' },
  { name: 'sentiment_satisfied' },
  { name: 'sentiment_very_dissatisfied' },
  { name: 'sentiment_very_satisfied' },
  { name: 'settings' },
  { name: 'settings_applications' },
  { name: 'settings_backup_restore' },
  { name: 'settings_bluetooth' },
  { name: 'settings_brightness' },
  { name: 'settings_cell' },
  { name: 'settings_ethernet' },
  { name: 'settings_input_antenna' },
  { name: 'settings_input_component' },
  { name: 'settings_input_composite' },
  { name: 'settings_input_hdmi' },
  { name: 'settings_input_svideo' },
  { name: 'settings_overscan' },
  { name: 'settings_phone' },
  { name: 'settings_power' },
  { name: 'settings_remote' },
  { name: 'settings_system_daydream' },
  { name: 'settings_voice' },
  { name: 'share' },
  { name: 'shop' },
  { name: 'shop_two' },
  { name: 'shopping_basket' },
  { name: 'shopping_cart' },
  { name: 'short_text' },
  { name: 'show_chart' },
  { name: 'shuffle' },
  { name: 'signal_cellular_4_bar' },
  { name: 'signal_cellular_connected_no_internet_4_bar' },
  { name: 'signal_cellular_no_sim' },
  { name: 'signal_cellular_null' },
  { name: 'signal_cellular_off' },
  { name: 'signal_wifi_4_bar' },
  { name: 'signal_wifi_4_bar_lock' },
  { name: 'signal_wifi_off' },
  { name: 'sim_card' },
  { name: 'sim_card_alert' },
  { name: 'skip_next' },
  { name: 'skip_previous' },
  { name: 'slideshow' },
  { name: 'slow_motion_video' },
  { name: 'smartphone' },
  { name: 'smoke_free' },
  { name: 'smoking_rooms' },
  { name: 'sms' },
  { name: 'sms_failed' },
  { name: 'snooze' },
  { name: 'sort' },
  { name: 'sort_by_alpha' },
  { name: 'spa' },
  { name: 'space_bar' },
  { name: 'speaker' },
  { name: 'speaker_group' },
  { name: 'speaker_notes' },
  { name: 'speaker_notes_off' },
  { name: 'speaker_phone' },
  { name: 'spellcheck' },
  { name: 'star' },
  { name: 'star_border' },
  { name: 'star_half' },
  { name: 'stars' },
  { name: 'stay_current_landscape' },
  { name: 'stay_current_portrait' },
  { name: 'stay_primary_landscape' },
  { name: 'stay_primary_portrait' },
  { name: 'stop' },
  { name: 'stop_screen_share' },
  { name: 'storage' },
  { name: 'store' },
  { name: 'store_mall_directory' },
  { name: 'straighten' },
  { name: 'streetview' },
  { name: 'strikethrough_s' },
  { name: 'style' },
  { name: 'subdirectory_arrow_left' },
  { name: 'subdirectory_arrow_right' },
  { name: 'subject' },
  { name: 'subscriptions' },
  { name: 'subtitles' },
  { name: 'subway' },
  { name: 'supervisor_account' },
  { name: 'surround_sound' },
  { name: 'swap_calls' },
  { name: 'swap_horiz' },
  { name: 'swap_vert' },
  { name: 'swap_vertical_circle' },
  { name: 'switch_camera' },
  { name: 'switch_video' },
  { name: 'sync' },
  { name: 'sync_disabled' },
  { name: 'sync_problem' },
  { name: 'system_update' },
  { name: 'system_update_alt' },
  { name: 'tab' },
  { name: 'tab_unselected' },
  { name: 'tablet' },
  { name: 'tablet_android' },
  { name: 'tablet_mac' },
  { name: 'tag_faces' },
  { name: 'tap_and_play' },
  { name: 'terrain' },
  { name: 'text_fields' },
  { name: 'text_format' },
  { name: 'textsms' },
  { name: 'texture' },
  { name: 'theaters' },
  { name: 'thumb_down' },
  { name: 'thumb_up' },
  { name: 'thumbs_up_down' },
  { name: 'time_to_leave' },
  { name: 'timelapse' },
  { name: 'timeline' },
  { name: 'timer' },
  { name: 'timer_10' },
  { name: 'timer_3' },
  { name: 'timer_off' },
  { name: 'title' },
  { name: 'toc' },
  { name: 'today' },
  { name: 'toll' },
  { name: 'tonality' },
  { name: 'touch_app' },
  { name: 'toys' },
  { name: 'track_changes' },
  { name: 'traffic' },
  { name: 'train' },
  { name: 'tram' },
  { name: 'transfer_within_a_station' },
  { name: 'transform' },
  { name: 'translate' },
  { name: 'trending_down' },
  { name: 'trending_flat' },
  { name: 'trending_up' },
  { name: 'tune' },
  { name: 'turned_in' },
  { name: 'turned_in_not' },
  { name: 'tv' },
  { name: 'unarchive' },
  { name: 'undo' },
  { name: 'unfold_less' },
  { name: 'unfold_more' },
  { name: 'update' },
  { name: 'usb' },
  { name: 'verified_user' },
  { name: 'vertical_align_bottom' },
  { name: 'vertical_align_center' },
  { name: 'vertical_align_top' },
  { name: 'vibration' },
  { name: 'video_call' },
  { name: 'video_label' },
  { name: 'video_library' },
  { name: 'videocam' },
  { name: 'videocam_off' },
  { name: 'videogame_asset' },
  { name: 'view_agenda' },
  { name: 'view_array' },
  { name: 'view_carousel' },
  { name: 'view_column' },
  { name: 'view_comfy' },
  { name: 'view_compact' },
  { name: 'view_day' },
  { name: 'view_headline' },
  { name: 'view_list' },
  { name: 'view_module' },
  { name: 'view_quilt' },
  { name: 'view_stream' },
  { name: 'view_week' },
  { name: 'vignette' },
  { name: 'visibility' },
  { name: 'visibility_off' },
  { name: 'voice_chat' },
  { name: 'voicemail' },
  { name: 'volume_down' },
  { name: 'volume_mute' },
  { name: 'volume_off' },
  { name: 'volume_up' },
  { name: 'vpn_key' },
  { name: 'vpn_lock' },
  { name: 'wallpaper' },
  { name: 'warning' },
  { name: 'watch' },
  { name: 'watch_later' },
  { name: 'wb_auto' },
  { name: 'wb_cloudy' },
  { name: 'wb_incandescent' },
  { name: 'wb_iridescent' },
  { name: 'wb_sunny' },
  { name: 'wc' },
  { name: 'web' },
  { name: 'web_asset' },
  { name: 'weekend' },
  { name: 'whatshot' },
  { name: 'widgets' },
  { name: 'wifi' },
  { name: 'wifi_lock' },
  { name: 'wifi_tethering' },
  { name: 'work' },
  { name: 'wrap_text' },
  { name: 'youtube_searched_for' },
  { name: 'zoom_in' },
  { name: 'zoom_out' },
  { name: 'zoom_out_map' }
]
export default fonts
