/*
 * LiskHQ/lisk-explorer
 * Copyright © 2018 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
module.exports = [
	{
		endpoint: 'getAccount',
		service: 'accounts',
		params: { address: '12907382053545086321L' },
	}, {
		endpoint: 'getTopAccounts',
		service: 'accounts',
		params: { offset: 0, limit: 50 },
		data: data => data.accounts.length,
	},
];
