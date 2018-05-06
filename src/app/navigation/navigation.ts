export const navigation = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'translate': 'NAV.APPLICATIONS',
        'type'    : 'group',
        'children': [
            {
                'id'   : 'algorithm',
                'title': 'Algorithm',
                'translate': 'NAV.ALGORITHM.TITLE',
                'type' : 'collapse',
                'icon' : 'blur_linear',
                'children' : [
                    {
                        'id'   : 'algorithms',
                        'title': 'Algorithms',
                        'type' : 'item',
                        'url'  : '/admin/algorithms'
                    },
                    {
                        'id'        : 'algorithm',
                        'title'     : 'Algorithm',
                        'type'      : 'item',
                        'url'       : '/admin/Algorithm/new',
                        'exactMatch': true
                    }
                ]
            },
            {
                'id'   : 'examType',
                'title': 'Exam Types',
                'translate': 'NAV.EXAMTYPE.TITLE',
                'type' : 'item',
                'icon' : 'blur_linear',
                'url'  : '/admin/examtypes',
            },
            {
                'id'   : 'chapter',
                'title': 'Chapter',
                'translate': 'NAV.CHAPTER.TITLE',
                'type' : 'item',
                'icon' : 'blur_linear',
                'url'  : '/admin/chapters',
            },
            {
                'id'   : 'section',
                'title': 'Section',
                'translate': 'NAV.SECTION.TITLE',
                'type' : 'item',
                'icon' : 'blur_linear',
                'url'  : '/admin/sections',
            },
            {
                'id'   : 'question',
                'title': 'Question',
                'translate': 'NAV.QUESTION.TITLE',
                'type' : 'item',
                'icon' : 'blur_linear',
                'url'  : '/admin/questions',
            }
        ]
    }
];
