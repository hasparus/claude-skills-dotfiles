/**
 * Playwright MCP TypeScript API Declarations
 *
 * Code Mode: Instead of individual tool calls, write TypeScript code that
 * calls these APIs. The code will be executed in a sandboxed environment
 * with access to the browser controlled by Playwright MCP.
 *
 * Usage: Write async functions that call these APIs, then execute them
 * using the browser_run_code tool or chain multiple operations together.
 */

// ============================================================================
// NAVIGATION
// ============================================================================

interface NavigateInput {
  /** The URL to navigate to */
  url: string
}

interface NavigateBackInput {}

// ============================================================================
// INTERACTIONS
// ============================================================================

interface ClickInput {
  /** Human-readable element description used to obtain permission */
  element: string
  /** Exact target element reference from the page snapshot */
  ref: string
  /** Button to click, defaults to left */
  button?: "left" | "right" | "middle"
  /** Whether to perform a double click */
  doubleClick?: boolean
  /** Modifier keys to press */
  modifiers?: Array<"Alt" | "Control" | "ControlOrMeta" | "Meta" | "Shift">
}

interface TypeInput {
  /** Human-readable element description */
  element: string
  /** Exact target element reference from the page snapshot */
  ref: string
  /** Text to type into the element */
  text: string
  /** Whether to type one character at a time */
  slowly?: boolean
  /** Whether to submit entered text (press Enter after) */
  submit?: boolean
}

interface HoverInput {
  /** Human-readable element description */
  element: string
  /** Exact target element reference from the page snapshot */
  ref: string
}

interface DragInput {
  /** Human-readable source element description */
  startElement: string
  /** Exact source element reference from the page snapshot */
  startRef: string
  /** Human-readable target element description */
  endElement: string
  /** Exact target element reference from the page snapshot */
  endRef: string
}

interface PressKeyInput {
  /** Name of the key to press or a character, e.g. `ArrowLeft` or `a` */
  key: string
}

interface SelectOptionInput {
  /** Human-readable element description */
  element: string
  /** Exact target element reference from the page snapshot */
  ref: string
  /** Array of values to select in the dropdown */
  values: string[]
}

// ============================================================================
// FORMS
// ============================================================================

interface FormField {
  /** Human-readable field name */
  name: string
  /** Exact target field reference from the page snapshot */
  ref: string
  /** Type of the field */
  type: "textbox" | "checkbox" | "radio" | "combobox" | "slider"
  /** Value to fill. For checkbox use "true"/"false", for combobox use option text */
  value: string
}

interface FillFormInput {
  /** Fields to fill in */
  fields: FormField[]
}

interface FileUploadInput {
  /** Absolute paths to the files to upload. If omitted, file chooser is cancelled */
  paths?: string[]
}

// ============================================================================
// DIALOGS & EVALUATION
// ============================================================================

interface HandleDialogInput {
  /** Whether to accept the dialog */
  accept: boolean
  /** The text of the prompt in case of a prompt dialog */
  promptText?: string
}

interface EvaluateInput {
  /** () => { code } or (element) => { code } when element is provided */
  function: string
  /** Human-readable element description */
  element?: string
  /** Exact target element reference from the page snapshot */
  ref?: string
}

// ============================================================================
// SCREENSHOTS & SNAPSHOTS
// ============================================================================

interface TakeScreenshotInput {
  /** File name to save the screenshot to */
  filename?: string
  /** Image format for the screenshot */
  type?: "png" | "jpeg"
  /** Takes screenshot of the full scrollable page */
  fullPage?: boolean
  /** Human-readable element description */
  element?: string
  /** Exact target element reference from the page snapshot */
  ref?: string
}

interface SnapshotInput {
  /** Save snapshot to markdown file instead of returning it */
  filename?: string
}

// ============================================================================
// BROWSER CONTROL
// ============================================================================

interface ResizeInput {
  /** Width of the browser window */
  width: number
  /** Height of the browser window */
  height: number
}

interface TabsInput {
  /** Operation to perform */
  action: "list" | "new" | "close" | "select"
  /** Tab index, used for close/select */
  index?: number
}

interface WaitForInput {
  /** The text to wait for to appear */
  text?: string
  /** The text to wait for to disappear */
  textGone?: string
  /** The time to wait in seconds */
  time?: number
}

interface ConsoleMessagesInput {
  /** Level of console messages to return */
  level?: "error" | "warning" | "info" | "debug"
}

interface NetworkRequestsInput {
  /** Whether to include successful static resources */
  includeStatic?: boolean
}

// ============================================================================
// CODE EXECUTION
// ============================================================================

interface RunCodeInput {
  /**
   * A JavaScript function containing Playwright code to execute.
   * Invoked with a single argument `page` for any page interaction.
   *
   * @example
   * async (page) => {
   *   await page.getByRole('button', { name: 'Submit' }).click();
   *   return await page.title();
   * }
   */
  code: string
}

// ============================================================================
// API DECLARATION
// ============================================================================

/**
 * Playwright MCP API
 *
 * Code Mode Pattern: Chain multiple operations in a single code block
 * using browser_run_code for efficiency. Use individual tools for
 * single operations with explicit permission handling.
 */
declare const playwright: {
  // Navigation
  browser_navigate: (input: NavigateInput) => Promise<void>
  browser_navigate_back: (input?: NavigateBackInput) => Promise<void>

  // Interactions (require element refs from snapshot)
  browser_click: (input: ClickInput) => Promise<void>
  browser_type: (input: TypeInput) => Promise<void>
  browser_hover: (input: HoverInput) => Promise<void>
  browser_drag: (input: DragInput) => Promise<void>
  browser_press_key: (input: PressKeyInput) => Promise<void>
  browser_select_option: (input: SelectOptionInput) => Promise<void>

  // Forms
  browser_fill_form: (input: FillFormInput) => Promise<void>
  browser_file_upload: (input: FileUploadInput) => Promise<void>

  // Dialogs
  browser_handle_dialog: (input: HandleDialogInput) => Promise<void>

  // Evaluation (run JS in page context)
  browser_evaluate: (input: EvaluateInput) => Promise<unknown>

  // Screenshots & Snapshots
  browser_take_screenshot: (input?: TakeScreenshotInput) => Promise<string>
  browser_snapshot: (input?: SnapshotInput) => Promise<string>

  // Browser Control
  browser_close: () => Promise<void>
  browser_resize: (input: ResizeInput) => Promise<void>
  browser_tabs: (input: TabsInput) => Promise<unknown>
  browser_install: () => Promise<void>

  // Waiting
  browser_wait_for: (input: WaitForInput) => Promise<void>

  // Debugging
  browser_console_messages: (input?: ConsoleMessagesInput) => Promise<unknown>
  browser_network_requests: (input?: NetworkRequestsInput) => Promise<unknown>

  // Code Execution (most powerful - run arbitrary Playwright code)
  browser_run_code: (input: RunCodeInput) => Promise<unknown>
}

export { playwright }
