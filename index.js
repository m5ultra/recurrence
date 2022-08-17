// 01. 在树状结构中找到 id 为某个值的项 (深度优先 DFS)

const findInTree = (tree, id) => {
	if (!tree || !tree.length) {
		return null
	}
	for (const node of tree) {
		if (node.id * 1 === id * 1) {
			return node
		}
		const find = findInTree(node.children, id)
		if (find) {
			return find
		}
	}
	return null
}

// console.log(findInTree(orgTree, 6))

// 02. 在树状结构中找到 id 为某个值的项 (广度优先 BFS)

const findInTree02 = (tree, id) => {
	if (!tree || !tree.length) {
		return null
	}
	for (const node of tree) {
		if (node.id * 1 === id * 1) {
			return node
		}
	}

	const childrens = tree.reduce((prev, current) => {
		return prev.concat(current.children || [])
	}, [])
	return findInTree02(childrens, id)
}

console.log(findInTree02(orgTree, 6))

// 03. 把树状结构打平为一级

// 第一种方案
const flat = (tree) => {
	const list = []
	tree.forEach((node) => {
		const { children, ...obj } = node
		list.push(obj)
		if (children && children.length) {
			const childrenList = flat(children)
			list.push(...childrenList)
		}
	})
	return list
}

console.log(flat(orgTree))

// 打平第二种方案
const flatten = (tree) => {
	return (tree || []).reduce((prev, current) => {
		const { children, ...obj } = current
		return prev.concat(obj, flatten(children))
	}, [])
}

console.log(flatten(orgTree))

// 04. 根据一个 id 返回在树中父节点 id 数组

// 入参tree, id, [] // 返回 数组 或者 null

const parseParent = (tree, id, parentList = []) => {
	if (!tree || !tree.length) {
		return null
	}
	for (const node of tree) {
		if (node.id === id) {
			return parentList
		}
		const find = parseParent(node.children, id, [...parentList, node])
		if (find) {
			return find
		}
	}

	return null
}

console.log(parseParent(orgTree, 13))

// 05.从树状结构中解析出所有的人, 平级方式返回
/**
 * 输入 tree
 * return []
 */

const parseAllUsers = (tree) => {
	return (tree || []).reduce((prev, current) => {
		const { type, children, ...obj } = current
		if (type === 'user') {
			return prev.concat(obj)
		}
		const childrenUsers = parseAllUsers(children)
		return prev.concat(childrenUsers)
	}, [])
}

console.log('users', parseAllUsers(orgWithUserTree))

// 06.只保留树状结构中的组织, 保持树状结构返回

const formatOrgs = (tree) => {
	return (tree || [])
		.filter((x) => x.type === 'org')
		.map((node) => {
			const { children } = node
			return {
				...node,
				children: formatOrgs(children),
			}
		})
}

console.log(formatOrgs(orgWithUserTree))