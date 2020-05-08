<?php

$calendar2020 = [
    1 => [
        'tag' => '#jan#',
        'days' => 31,
        'holidays' => [
            1, 6, 7
        ]
    ],
    2 => [
        'tag' => '#feb#',
        'days' => 29,
        'holidays' => [
            
        ]
    ],
    3 => [
        'tag' => '#march#',
        'days' => 31,
        'holidays' => [
            8
        ]
    ],
    4 => [
        'tag' => '#apr#',
        'days' => 30,
        'holidays' => [
            19
        ]
    ],
    5 => [
        'tag' => '#may#',
        'days' => 31,
        'holidays' => [
            1, 9
        ]
    ],
    6 => [
        'tag' => '#june#',
        'days' => 30,
        'holidays' => [
            7, 28
        ]
    ],
    7 => [
        'tag' => '#july#',
        'days' => 31,
        'holidays' => [
            
        ]
    ],
    8 => [
        'tag' => '#aug#',
        'days' => 31,
        'holidays' => [
            24
        ]
    ],
    9 => [
        'tag' => '#sep#',
        'days' => 30,
        'holidays' => [
            
        ]
    ],
    10 => [
        'tag' => '#oct#',
        'days' => 31,
        'holidays' => [
            14
        ]
    ],
    11 => [
        'tag' => '#nov#',
        'days' => 30,
        'holidays' => [
            
        ]
    ],
    12 => [
        'tag' => '#dec#',
        'days' => 31,
        'holidays' => [
            25
        ]
    ]
];

function checkHoliday($month, $day)
{
    return in_array($day, $month['holidays']);
}