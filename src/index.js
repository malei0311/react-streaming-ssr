/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { hydrateRoot } from "react-dom/client";
import { AppContent } from "./App";

hydrateRoot(document.getElementById("root"), <AppContent />);
