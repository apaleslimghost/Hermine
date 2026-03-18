export {}

declare module 'cytoscape' {
	namespace Css {
		interface Edge {
			'curve-style'?: PropertyValueEdge<
				| 'haystack'
				| 'straight'
				| 'bezier'
				| 'unbundled-bezier'
				| 'segments'
				| 'taxi'
				| 'round-segments'
			>
			'segment-weights'?: PropertyValueEdge<number> | MapperFunction<EdgeSingular, number[]>
			'segment-distances'?: PropertyValueEdge<number> | MapperFunction<EdgeSingular, number[]>
		}
	}
}
