import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Dashboard Principal - GilBank</h1>

      {/* Seção "O que preciso fazer hoje" */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">O que preciso fazer hoje</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h3 className="font-semibold mb-2">Parcelas vencendo hoje</h3>
            {/* Lista de parcelas com botões */}
            <p>Lista de parcelas com ações diretas (marcar pago, WhatsApp)</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h3 className="font-semibold mb-2">Parcelas em atraso</h3>
            {/* Parcelas organizadas por dias de atraso */}
            <p>Parcelas em atraso organizadas por dias de atraso (crítico, moderado, leve)</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h3 className="font-semibold mb-2">Novos contratos recentes</h3>
            {/* Contratos recentes que requerem verificação */}
            <p>Novos contratos recentes que requerem verificação</p>
          </div>
        </div>
      </section>

      {/* Resumo Financeiro */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Resumo Financeiro</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Capital emprestado total atual</p>
            <p className="text-2xl font-bold">R$ 0,00</p>
            <p className="text-green-500">↑ 0%</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Lucro previsto total e taxa média de retorno</p>
            <p className="text-2xl font-bold">R$ 0,00 (0%)</p>
            <p className="text-green-500">↑ 0%</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Recebimentos previstos para hoje e próximos 7 dias</p>
            <p className="text-2xl font-bold">R$ 0,00</p>
            <p className="text-green-500">↑ 0%</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Indicador de saúde da carteira</p>
            <p className="text-2xl font-bold">100%</p>
          </div>
        </div>
      </section>

      {/* Ações Rápidas */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Ações Rápidas</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded shadow transition">
            Novo cliente + contrato
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded shadow transition">
            Registrar pagamento rápido
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded shadow transition">
            Gerar relatório do dia/semana
          </button>
        </div>
      </section>
    </div>
  );
}
