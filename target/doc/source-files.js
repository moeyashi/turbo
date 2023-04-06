var sourcesIndex = JSON.parse('{\
"auto_hash_map":["",[],["lib.rs","map.rs","set.rs"]],\
"node_file_trace":["",[],["lib.rs","nft_json.rs"]],\
"swc_ast_explorer":["",[],["main.rs"]],\
"turbo_malloc":["",[],["counter.rs","lib.rs"]],\
"turbo_tasks":["",[["debug",[],["internal.rs","mod.rs"]],["graph",[],["control_flow.rs","graph_store.rs","graph_traversal.rs","mod.rs","non_deterministic.rs","reverse_topological.rs","visit.rs","with_future.rs"]]],["backend.rs","collectibles.rs","completion.rs","display.rs","event.rs","id.rs","id_factory.rs","invalidation.rs","join_iter_ext.rs","lib.rs","magic_any.rs","manager.rs","native_function.rs","no_move_vec.rs","nothing.rs","once_map.rs","persisted_graph.rs","primitives.rs","raw_vc.rs","read_ref.rs","registry.rs","small_duration.rs","state.rs","task_input.rs","timed_future.rs","trace.rs","trait_ref.rs","util.rs","value.rs","value_type.rs"]],\
"turbo_tasks_build":["",[],["lib.rs"]],\
"turbo_tasks_bytes":["",[],["bytes.rs","lib.rs","stream.rs"]],\
"turbo_tasks_env":["",[],["command_line.rs","custom.rs","dotenv.rs","filter.rs","lib.rs"]],\
"turbo_tasks_fetch":["",[],["lib.rs"]],\
"turbo_tasks_fs":["",[["embed",[],["dir.rs","file.rs","fs.rs","mod.rs"]]],["attach.rs","glob.rs","invalidation.rs","invalidator_map.rs","json.rs","lib.rs","mutex_map.rs","read_glob.rs","retry.rs","rope.rs","source_context.rs","util.rs"]],\
"turbo_tasks_hash":["",[],["base16.rs","deterministic_hash.rs","hex.rs","lib.rs","md4.rs","xxh3_hash64.rs"]],\
"turbo_tasks_macros":["",[["derive",[],["deterministic_hash_macro.rs","mod.rs","trace_raw_vcs_macro.rs","value_debug_format_macro.rs","value_debug_macro.rs"]]],["func.rs","function_macro.rs","lib.rs","util.rs","value_impl_macro.rs","value_macro.rs","value_trait_macro.rs"]],\
"turbo_tasks_macros_shared":["",[],["expand.rs","ident.rs","lib.rs","value_trait_arguments.rs"]],\
"turbo_tasks_memory":["",[["task",[],["meta_state.rs","stats.rs"]],["viz",[],["graph.rs","mod.rs","table.rs"]]],["cell.rs","concurrent_priority_queue.rs","count_hash_set.rs","gc.rs","lib.rs","map_guard.rs","memory_backend.rs","memory_backend_with_pg.rs","output.rs","priority_pair.rs","scope.rs","stats.rs","task.rs"]],\
"turbo_tasks_testing":["",[],["lib.rs","macros.rs","retry.rs"]],\
"turbopack":["",[["graph",[],["mod.rs"]],["module_options",[],["mod.rs","module_options_context.rs","module_rule.rs","rule_condition.rs"]],["rebase",[],["mod.rs"]],["transition",[],["mod.rs"]]],["condition.rs","evaluate_context.rs","lib.rs","resolve.rs","resolve_options_context.rs"]],\
"turbopack_cli_utils":["",[],["issue.rs","lib.rs","source_context.rs"]],\
"turbopack_core":["",[["chunk",[],["availability_info.rs","available_assets.rs","evaluate.rs","mod.rs","optimize.rs"]],["introspect",[],["asset.rs","mod.rs"]],["issue",[],["analyze.rs","code_gen.rs","mod.rs","package_json.rs","resolve.rs","unsupported_module.rs"]],["reference",[],["mod.rs","source_map.rs"]],["resolve",[],["alias_map.rs","exports.rs","mod.rs","node.rs","options.rs","origin.rs","parse.rs","pattern.rs","plugin.rs"]],["source_map",[],["mod.rs","source_map_asset.rs"]]],["asset.rs","changed.rs","code_builder.rs","compile_time_info.rs","context.rs","environment.rs","error.rs","ident.rs","lib.rs","reference_type.rs","server_fs.rs","source_asset.rs","source_pos.rs","source_transform.rs","target.rs","utils.rs","version.rs","virtual_asset.rs"]],\
"turbopack_create_test_app":["",[],["lib.rs","test_app_builder.rs"]],\
"turbopack_css":["",[["chunk",[],["mod.rs","optimize.rs","source_map.rs","writer.rs"]],["references",[],["compose.rs","import.rs","mod.rs","url.rs"]],["transform",[],["mod.rs"]]],["asset.rs","code_gen.rs","embed.rs","lib.rs","module_asset.rs","parse.rs","path_visitor.rs","util.rs"]],\
"turbopack_dev":["",[["ecmascript",[["evaluate",[],["chunk.rs","mod.rs"]],["list",[],["asset.rs","content.rs","mod.rs","reference.rs","update.rs","version.rs"]],["manifest",[],["chunk_asset.rs","chunk_item.rs","loader_item.rs","mod.rs"]],["merged",[],["content.rs","merger.rs","mod.rs","update.rs","version.rs"]]],["chunk.rs","content.rs","content_entry.rs","mod.rs","module_factory.rs","update.rs","version.rs"]]],["chunking_context.rs","lib.rs"]],\
"turbopack_dev_server":["",[["introspect",[],["mod.rs"]],["source",[],["asset_graph.rs","combined.rs","conditional.rs","headers.rs","issue_context.rs","lazy_instantiated.rs","mod.rs","query.rs","request.rs","resolve.rs","router.rs","source_maps.rs","specificity.rs","static_assets.rs","wrapping_source.rs"]],["update",[],["mod.rs","protocol.rs","server.rs","stream.rs"]]],["html.rs","http.rs","invalidation.rs","lib.rs"]],\
"turbopack_ecmascript":["",[["analyzer",[],["builtin.rs","graph.rs","imports.rs","linker.rs","mod.rs","well_known.rs"]],["chunk",[],["content.rs","context.rs","item.rs","mod.rs","optimize.rs","placeable.rs"]],["references",[["esm",[],["base.rs","binding.rs","dynamic.rs","export.rs","meta.rs","mod.rs","module_id.rs","module_item.rs","url.rs"]]],["amd.rs","cjs.rs","constant_condition.rs","mod.rs","node.rs","pattern_mapping.rs","raw.rs","typescript.rs","unreachable.rs","util.rs"]],["resolve",[],["mod.rs","node_native_binding.rs"]],["transform",[],["mod.rs","server_to_client_proxy.rs","util.rs"]],["tree_shake",[],["asset.rs","chunk_item.rs","graph.rs","merge.rs","mod.rs","util.rs"]],["typescript",[],["mod.rs","resolve.rs"]],["webpack",[],["mod.rs","parse.rs","references.rs"]]],["chunk_group_files_asset.rs","code_gen.rs","errors.rs","lib.rs","magic_identifier.rs","parse.rs","path_visitor.rs","special_cases.rs","utils.rs"]],\
"turbopack_env":["",[],["asset.rs","embeddable.rs","issue.rs","lib.rs","try_env.rs"]],\
"turbopack_json":["",[],["lib.rs"]],\
"turbopack_mdx":["",[],["lib.rs"]],\
"turbopack_node":["",[["render",[],["error_page.rs","issue.rs","mod.rs","node_api_source.rs","render_proxy.rs","render_static.rs","rendered_source.rs"]],["source_map",[],["content_source.rs","mod.rs","trace.rs"]],["transforms",[],["mod.rs","postcss.rs","util.rs","webpack.rs"]]],["bootstrap.rs","embed_js.rs","evaluate.rs","execution_context.rs","lib.rs","node_entry.rs","pool.rs","route_matcher.rs"]],\
"turbopack_static":["",[],["lib.rs"]],\
"turbopack_swc_utils":["",[],["emitter.rs","lib.rs"]],\
"turbopack_test_utils":["",[],["lib.rs","snapshot.rs"]],\
"xtask":["",[["summarize_bench",[],["data.rs","mod.rs"]]],["command.rs","main.rs","nft_bench.rs","publish.rs","visualize_bundler_bench.rs"]]\
}');
createSourceSidebar();
