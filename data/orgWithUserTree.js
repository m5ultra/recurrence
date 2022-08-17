const orgWithUserTree = [
	{
		id: 1,
		name: 'A',
		type: 'org',
		children: [
			{
				id: 2,
				name: 'A_1',
				type: 'org',
				children: [
					{ id: 3, name: 'A_1_1', type: 'org' },
					{
						id: 4,
						name: 'A_1_2',
						type: 'org',
						children: [
							{ id: 1, name: '张三', type: 'user' },
							{ id: 2, name: '李四', type: 'user' },
						],
					},
				],
			},
		],
	},
	{
		id: 5,
		name: 'B',
		type: 'org',
		children: [
			{
				id: 6,
				name: 'B_1',
				type: 'org',
				children: [
					{
						id: 7,
						name: 'B_1_1',
						type: 'org',
						children: [
							{
								id: 1,
								name: '李蕾',
								type: 'user',
							},
							{
								id: 2,
								name: 'Tomas',
								type: 'user',
							},
						],
					},
					{
						id: 8,
						name: 'B_1_2',
						type: 'org',
						children: [
							{
								id: 1,
								name: 'Dendi',
								type: 'user',
							},
							{
								id: 2,
								name: 'Ellis',
								type: 'user',
							},
						],
					},
				],
			},
		],
	},
	{
		id: 9,
		name: 'C',
		type: 'org',
		children: [
			{
				id: 10,
				name: 'C_1',
				type: 'org',
				children: [
					{
						id: 11,
						name: 'C_1_1',
						type: 'org',
						children: [
							{
								id: 1,
								name: 'Tom',
								type: 'user',
							},
							{
								id: 2,
								name: 'LiLei',
								type: 'user',
							},
							{
								id: 3,
								name: '周杰伦',
								type: 'user',
							},
						],
					},
					{
						id: 12,
						name: 'C_1_2',
						type: 'org',
						children: [
							{ id: 13, name: 'C_1_2_1' },
							{
								id: 14,
								name: 'C_1_2_2',
								children: [
									{
										id: 1,
										name: '王力宏',
										type: 'user',
									},
									{
										id: 2,
										name: '张靓颖',
										type: 'user',
									},
									{
										id: 3,
										name: '刘亦菲',
										type: 'user',
									},
								],
							},
						],
					},
				],
			},
		],
	},
]
