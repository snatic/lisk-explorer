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
import AppTransactions from './transactions.module';
import template from './transactions.html';

const TransactionsConstructor = function ($rootScope, $stateParams, $location, $http) {
	const vm = this;
	vm.getTransaction = () => {
		$http.get('/api/getTransaction', {
			params: {
				transactionId: $stateParams.txId,
			},
		}).then((resp) => {
			if (resp.data.success) {
				vm.tx = resp.data.transaction;
			} else {
				throw new Error('Transaction was not found!');
			}
		}).catch(() => {
			$location.path('/');
		});
	};

	vm.getTransaction();
};

AppTransactions.component('transactions', {
	template,
	controller: TransactionsConstructor,
	controllerAs: 'vm',
});

