class TreeDFS {
    constructor(treeMap, crossNodes) {
        this._treeMap = treeMap;
        this._crossNodes = crossNodes;
    }
    dfsVisitAndGroupNodes() {
        let unqiueParentNodes = new Set();
        let mergedNodes = new Map();

        for (const wantedNode of this._crossNodes) {
            if (mergedNodes.has(wantedNode.parent)) {
                continue;
            }
            for (const root of this._treeMap) {
                let discovery =
                    wantedNode.level < 2 && !wantedNode.children
                        ? wantedNode.name
                        : this.dfsParentNode(root, wantedNode, mergedNodes);

                if (discovery) {
                    unqiueParentNodes.add(discovery);
                }
            }
        }

        mergedNodes.clear();
        return unqiueParentNodes;
    }
    searchParentNode(root, wantedNode, mergedNodes) {
        if (root.name == wantedNode.parent) {
            if (Array.isArray(root.children)) {
                let nestingDifference = root.children.filter(
                    (child) =>
                        !this._crossNodes
                            .filter((rel) => rel.parent === root.name)
                            .some((rel) => rel.name == child.name)
                );
                if (!nestingDifference.length) {
                    mergedNodes.set(root.name, root.children);
                    return wantedNode.parent;
                }
            }
            return wantedNode.name;
        }
        if (Array.isArray(root.children)) {
            for (const child of root.children) {
                let sequence = this.searchParentNode(child, wantedNode, mergedNodes);
                if (sequence) {
                    return sequence;
                }
            }
        }
        return undefined;
    }
}