/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* exported testCaseName */
'use strict';

/*  In order to make strings easier to translate all test case names should be
 *  added here.
 *  TODO: Add/create new file containing the remainder of strings like error
 *  messages and general information.
 */

// Enumerate test case names.
function TestCaseNames() {
  this.testCases = {
    AUDIOCAPTURE: 'Captura de audio',
    CHECKRESOLUTION240: 'Resolución 320x240',
    CHECKRESOLUTION480: 'Resolución 640x480',
    CHECKRESOLUTION720: 'Resolución 1280x720',
    CHECKSUPPORTEDRESOLUTIONS: 'Resoluciones soportadas',
    DATATHROUGHPUT: 'Rendimiento de datos',
    IPV6ENABLED: 'IPv6 habilitado',
    NETWORKLATENCY: 'Latencia de la red',
    NETWORKLATENCYRELAY: 'Latencia de la red - Retransmisión',
    UDPENABLED: 'UDP habilitado',
    TCPENABLED: 'TCP habilitado',
    VIDEOBANDWIDTH: 'Ancho de banda de video',
    RELAYCONNECTIVITY: 'Conectividad de retransmisión',
    REFLEXIVECONNECTIVITY: 'Conectividad reflexiva',
    HOSTCONNECTIVITY: 'Conectividad de host'
  };
  return this.testCases;
}

var testCaseName = new TestCaseNames();
