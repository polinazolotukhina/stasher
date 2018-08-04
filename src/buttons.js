export default [
    //FILTER:
    {
        label: 'All',
        parameters: ''
    },
    {
        label: 'Open Late',
        parameters: { open_late: true }
    },
    {
        label: 'Featured',
        parameters: { featured: true }
    },
    {
        label: 'Active',
        parameters: { active: true }
    },
    {
        label: '24/7',
        parameters: { twentyfour_seven: true }
    },
    {
        label: 'In London',
        parameters: { city: 'london' }
    },
    {
        label: 'In Paris',
        parameters: { city: 'paris' }
    },

    //SORT:
    {
        label: 'Capacity',
        parameters: 'capacity'
    },
    {
        label: 'Bags Last 30 Days',
        parameters: 'by_bags_last_30_days'
    }
];
