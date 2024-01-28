<script lang="ts">
  import { dataAttr } from "@zag-js/dom-query";
  import { stringifyState } from "$lib/stringify-state";
  import { unstate } from "svelte";
  import type { useMachine } from "$lib/use-machine.svelte";

  type UseMachineReturn = ReturnType<typeof useMachine<any, any, any>>;

  const { machine, state } = $props<{
    machine: UseMachineReturn;
    state: UseMachineReturn["state"];
  }>();

  $inspect("machine.state", machine.state); // not stale
  $inspect("state", state); // stale
</script>

<div class="toolbar">
  <nav>
    <button data-active="{dataAttr(true)}}">Visualizer</button>
  </nav>
  <div data-content data-active={dataAttr(true)}>
    <div class="viz">
      <pre>
        <details open>
          <summary>Visualizer</summary>
          <div>{@html stringifyState(unstate(machine.state))}</div>
        </details>
      </pre>
    </div>
  </div>
</div>
