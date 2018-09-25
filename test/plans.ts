declare function require(path: string) : any;
var plan = {
    acceptedAnswerPercentage: require("raw-loader!../test_plans/stack overflow/what is my accepted answer percentage rate.sqlplan"),
    adaptive_join: require("raw-loader!../test_plans/adaptive_join.sqlplan"),
    adaptive_join_estimated: require("raw-loader!../test_plans/adaptive_join_estimated.sqlplan"),
    batchMode: require("raw-loader!../test_plans/batch mode.sqlplan"),
    batchModeEstimated: require("raw-loader!../test_plans/batch mode estimated.sqlplan"),
    ClusteredIndexScan: require("raw-loader!../test_plans/clustered index scan.sqlplan"),
    ClusteredIndexSeek: require("raw-loader!../test_plans/clustered index seek.sqlplan"),
    commentScoreDistribution: require("raw-loader!../test_plans/stack overflow/my comment score distribution.sqlplan"),
    cursor2: require("raw-loader!../test_plans/Cursors/cursor2.sqlplan"),
    cursorPlan: require("raw-loader!../test_plans/Cursors/cursorPlan.sqlplan"),
    index_spool: require("raw-loader!../test_plans/index_spool.sqlplan"),
    inequality_index: require("raw-loader!../test_plans/stack overflow/inequality_index.sqlplan"),
    issue1: require("raw-loader!../test_plans/issue1.sqlplan"),
    issue39: require("raw-loader!../test_plans/issue_39.sqlplan"),
    issue7: require("raw-loader!../test_plans/issue7.sqlplan"),
    KeyLookup: require("raw-loader!../test_plans/KeyLookup.sqlplan"),
    keysetCursor: require("raw-loader!../test_plans/Cursors/Keyset Cursor.sqlplan"),
    manyLines: require("raw-loader!../test_plans/many_lines2.sqlplan"),
    MyCommentScoreDistribution: require("raw-loader!../test_plans/stack overflow/my comment score distribution.sqlplan"),
    NestedLoops: require("raw-loader!../test_plans/nested loops.sqlplan"),
    NotShowingSeekPredicates: require("raw-loader!../test_plans/Not showing Seek Predicates.sqlplan"),
    QueryPlan293288248: require("raw-loader!../test_plans/QueryPlan-293288248.sqlplan"),
    rid_lookup: require("raw-loader!../test_plans/rid_lookup.sqlplan"),
    snapshotCursor: require("raw-loader!../test_plans/Cursors/SnapshotCursor.sqlplan"),
    StmtCond: require("raw-loader!../test_plans/StmtCond.sqlplan"),
    StmtUseDb: require("raw-loader!../test_plans/StmtUseDb.sqlplan"),
    UpvotesForEachTag: require("raw-loader!../test_plans/stack overflow/How many upvotes do I have for each tag.sqlplan"),
    unmatched_index: require("raw-loader!../test_plans/unmatched_index.sqlplan"),
    columns_with_no_statistics: require("raw-loader!../test_plans/columns_with_no_statistics.sqlplan"),
    spilltotempdb: require("raw-loader!../test_plans/spilltotempdb.sqlplan"),
    HashSpillDetails: require("raw-loader!../test_plans/HashSpillDetails.sqlplan"),
    columnstore_index_insert: require("raw-loader!../test_plans/Columnstore/columnstore_index_insert.sqlplan"),
    columnstore_index_delete: require("raw-loader!../test_plans/Columnstore/columnstore_index_delete.sqlplan"),
    columnstore_index_update: require("raw-loader!../test_plans/Columnstore/columnstore_index_update.sqlplan")
}
export { plan };