declare module 'cytoscape-fcose' {
	type NumberMapper<T> = number | ((el: T) => number)

	export interface FcoseLayoutOptions {
		name: 'fcose'

		// quality of the layout
		quality?: 'draft' | 'default' | 'proof'
		// use random node positions at beginning of layout
		randomize?: boolean
		// whether to animate the layout
		animate?: boolean | 'end' | 'during'
		animationDuration?: number
		animationEasing?: string
		// fit viewport to graph after layout
		fit?: boolean
		padding?: number
		// include labels in node dimensions
		nodeDimensionsIncludeLabels?: boolean
		// treat all nodes as having the same size
		uniformNodeDimensions?: boolean
		// pack disconnected components
		packComponents?: boolean

		// -- layout force parameters --
		nodeRepulsion?: NumberMapper<cytoscape.NodeSingular>
		nodeOverlap?: number
		idealEdgeLength?: NumberMapper<cytoscape.EdgeSingular>
		edgeElasticity?: NumberMapper<cytoscape.EdgeSingular>
		nestingFactor?: number
		numIter?: number
		gravity?: number
		gravityRangeCompound?: number
		gravityCompound?: number
		gravityRange?: number
		initialEnergyOnIncremental?: number

		// -- tiling --
		tile?: boolean
		tilingPaddingVertical?: number
		tilingPaddingHorizontal?: number
		tilingCompareBy?:
			| string
			| ((nodeA: cytoscape.NodeSingular, nodeB: cytoscape.NodeSingular) => number)

		// -- constraints --
		alignmentConstraint?: {
			vertical?: string[][]
			horizontal?: string[][]
		}
		relativePlacementConstraint?: Array<{
			top?: string
			bottom?: string
			left?: string
			right?: string
			gap?: number
		}>
		fixedNodeConstraint?: Array<{
			nodeId: string
			position: cytoscape.Position
		}>

		// -- callbacks --
		ready?: () => void
		stop?: () => void
	}

	const fcose: cytoscape.Ext
	export default fcose
}
