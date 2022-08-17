const orgTree = [
	{
		id: 1,
		name: 'A',
		children: [
			{
				id: 2,
				name: 'A_1',
				children: [
					{ id: 3, name: 'A_1_1' },
					{ id: 4, name: 'A_1_2' },
				],
			},
		],
	},
	{
		id: 5,
		name: 'B',
		children: [
			{
				id: 6,
				name: 'B_1',
				children: [
					{ id: 7, name: 'B_1_1' },
					{ id: 8, name: 'B_1_2' },
				],
			},
		],
	},
	{
		id: 9,
		name: 'C',
		children: [
			{
				id: 10,
				name: 'C_1',
				children: [
					{ id: 11, name: 'C_1_1' },
					{
						id: 12,
						name: 'C_1_2',
						children: [
							{ id: 13, name: 'C_1_2_1' },
							{ id: 14, name: 'C_1_2_2' },
						],
					},
				],
			},
		],
	},
]
